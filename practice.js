
var firebaseConfig = {
    apiKey: "AIzaSyAtNJIby6WW0BGvtGfPG9vzfRIAOWTndZg",
    authDomain: "chat-app-ca313.firebaseapp.com",
    databaseURL: "https://chat-app-ca313.firebaseio.com",
    projectId: "chat-app-ca313",
    storageBucket: "chat-app-ca313.appspot.com",
    messagingSenderId: "365485076198",
    appId: "1:365485076198:web:984a5fc5347e03be4ed527",
    measurementId: "G-SCC4DMLW8Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function addUser()
{
    user_name=document.getElementById("user_name").nodeValue;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}  