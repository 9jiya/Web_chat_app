var firebaseConfig = {
    apiKey: "AIzaSyAYDDuee9PP_0fOSNxJAzzB4hlIjPpXGa8",
    authDomain: "chat-project-e35c8.firebaseapp.com",
    databaseURL: "https://chat-project-e35c8-default-rtdb.firebaseio.com",
    projectId: "chat-project-e35c8",
    storageBucket: "chat-project-e35c8.appspot.com",
    messagingSenderId: "424847949366",
    appId: "1:424847949366:web:31ec0d19951480ddba2297",
    measurementId: "G-STBM6NDPJY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("User_name");
    room_name = localStorage.getItem("room");
    function send(){
      msg = document.getElementById("send_message").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("send_message").value = "";
      document.getElementById("ouput_div").innerHTML = msg;
    }
    function getData() 
  {
        firebase.database().ref("/"+room_name).on('value', function(snapshot) 
        {
              document.getElementById("output").innerHTML = "";
              snapshot.forEach(function(childSnapshot) 
              {
         childKey  = childSnapshot.key;
         childData = childSnapshot.val();
         if(childKey != "purpose"){
             firebase_message_id = childKey;
             message_data = childData;
             console.log("This is Firebase id",firebase_message_id);
             console.log("This is Firebase Data",message_data);
             name = message_data["name"];
             message = message_data["message"];
             like = message_data["like"];

         }
      });
  });
  }
  getData();
  function profile(){
    window.location="index4.html";
  }