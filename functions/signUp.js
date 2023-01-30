

function signUp(){

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        

    
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
          //Registration is successful
          var user = firebase.auth().currentUser;
          var userID = user.uid;
          alert("Fine")
      
         
          firebase.database().ref('Administrator/' + userID).set({
              Email: email,
              Firstname:firstname,
              Lastname:lastname,
          })
      
          window.open("register.html")

      }).catch(function(error){
          //Registration unsuccessful 
          alert(error);

          $('#errorMsg').show();
          $('#errorMsg').text(error.message);
      
    }

      );}