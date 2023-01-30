


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

          window.open("register.html");
          
        } else {
         
        }
      });
      


function signIn(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
 
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
   
    alert("Fine")
    window.open("register.html")

}).catch(function(error){
    //Registration unsuccessful 
    alert(error);

    $('#errorMsg').show();
    $('#errorMsg').text(error.message);

}

);}



/*
//    var email = document.getElementById("email").value;
  //  var password = document.getElementById("password").value;
        
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        
        // Handle Errors here.
      


        if(error){

          var errorCode = error.code;
          alert(errorCode);
  
          var errorMessage = error.message;
          alert(errorCode) 

        }else{

          alert("hi")
        }

               // ...
 
    }
      );



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

          //alert("Success")
        } else {
          // User is signed out.
          // ...
        }
      });
      


*/
