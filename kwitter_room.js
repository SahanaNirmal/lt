
var firebaseConfig = { apiKey:
    "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw", authDomain: 
    "kwitter-6abca.firebaseapp.com", databaseURL:
     "https://kwitter-6abca-default-rtdb.firebaseio.com", projectId:
      "kwitter-6abca", storageBucket: 
      "kwitter-6abca.appspot.com", messagingSenderId
       "231606977400", appId:
        "1:231606977400:web:d2d2878892c4b97584fe8d"
    };
 

 // Initialize Firebase
 firebase.initializeApp(firbaceConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome"= user_name +"!";
 firebase.initializeApp(firbaceConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   console.log("Room name-" +Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();
function redirectToRoomName(name)
 {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
 }


