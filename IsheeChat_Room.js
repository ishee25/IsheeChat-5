// ADD FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCghOO7INYeT8CIYwQLItpjcswlebXyevE",
    authDomain: "isheechat-web-app.firebaseapp.com",
    databaseURL: "https://isheechat-web-app-default-rtdb.firebaseio.com",
    projectId: "isheechat-web-app",
    storageBucket: "isheechat-web-app.appspot.com",
    messagingSenderId: "711410488553",
    appId: "1:711410488553:web:69aee7d3d1adc5cf7d0c78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      
      localStorage.setItem("room_name", room_name);
      window.location = "IsheeChat_Page.html";
  }

  function getData() {
     firebase.database().ref("/").on('value',
     function(snapshot) {document.getElementById("output").innerHTML =
     "";snapshot.forEach(function(childSnapshot) {childKey =
     childSnapshot.key; Room_names = childKey;
         //Start code
         console.log("Room Name - " + Room_names); 
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;
        //End code
  });});}
  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "IsheeChat_Page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
