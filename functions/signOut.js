


firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     // User is signed in.
     var displayName = user.displayName;
     var email = user.email;
     var emailVerified = user.emailVerified;
     var photoURL = user.photoURL;
     var isAnonymous = user.isAnonymous;
     var uid = user.uid;
     var providerData = user.providerData;
     // ...


     var activeUserRef= firebase.database().ref().child("Administrator").child(uid);


activeUserRef.on("value", function(snapshot) {
 

   $("#firstname").val( snapshot.child("Firstname").val());
   $("#lastname").val(snapshot.child("Lastname").val());
   
   $("#email").val(snapshot.child("Email").val());
   

    /*var img = snapshot.child("ProfilePicture").val();
    
    document.getElementById("profilePicture").src = img;
*/
   
}, function (error) {
   console.log("Error: " + error.code);
});

     
   } else {
    
   }
 });


function signOut(){

    firebase.auth().signOut().then(function() {
        //console.log("Logged out!")
        alert("Logged out!")

        window.open("index.html");

     }, function(error) {
        console.log(error.code);
        console.log(error.message);
     });

}


function cancel(){
   try {
     
      window.open("index.html");
   } catch (error) {
      alert(error)
   }
   
}