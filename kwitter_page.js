//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDRlBq1jRSi0XrNKJe4MNqYFpRu4_Kp3cY",
      authDomain: "kwitter-d0867.firebaseapp.com",
      databaseURL: "https://kwitter-d0867-default-rtdb.firebaseio.com",
      projectId: "kwitter-d0867",
      storageBucket: "kwitter-d0867.appspot.com",
      messagingSenderId: "106291817134",
      appId: "1:106291817134:web:2838e549b090faa3e21b3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name : user_name,
                message : msg,
                like : 0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
