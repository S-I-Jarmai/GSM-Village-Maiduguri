function readDataToDashboard(){


   alert("hi")
   var membershipID = document.getElementById("membershipID").value;
   //membershipID.style.display = 'block';

  // var surname = firebase.database.ref().child("").child(membershipID);
   var otherName;
   var dob;
   var gender;
   var stateOfOrigin;
   var lga;
   var nation;
   var address;
   var phoneNumber;
   var email;
   var grantorName;
   var grantorTelPhone;
   //var shopID = firebase.database().ref().child("Member").child(membershipID);
   //var membershipID;
   var jobCategory;
   var noStaff;
   var rank;
   var status;

   var databaseRef = firebase.database().ref().child("CRM").child(membershipID);

   databaseRef.on("value", function(snapshot) {
    

       var img = snapshot.child("ProfilePicture").val();
       alert(img)
       document.getElementById("profilePicture").src = img;

 
    $("#surName").val( snapshot.child("Surname").val());
    $("#otherName").val(snapshot.child("OtherName").val());
     $("#dob").val(snapshot.child("DateOfBirth").val());
     $("#gender").val(snapshot.child("Gender").val());
     $("#stateOfOrigin").val(snapshot.child("StateOfOrigin").val());
     $("#lga").val(snapshot.child("LGA").val());
     $("#address").val(snapshot.child("Address").val());
     $("#phoneNumber").val(snapshot.child("PhoneNumber").val());
     $("#email").val(snapshot.child("Email").val());
     $("#nation").val(snapshot.child("Nation").val());
     $("#membershipID").val(snapshot.child("MembershipID").val());
     $("#shopID").val(snapshot.child("ShopID").val());
     $("#jobCategory").val(snapshot.child("JobCategory").val());
     $("#noStaff").val(snapshot.child("NoStaff").val());
     $("#rank").val(snapshot.child("Rank").val());
     $("#status").val(snapshot.child("Status").val());
     $("#grantorTelPhone").val(snapshot.child("GrantorTel").val());
     $("#grantorName").val(snapshot.child("GrantorName").val());


     $("#bankName").val(snapshot.child("BankName").val());
     $("#accNo").val(snapshot.child("AccNo").val());
     $("#bvn").val(snapshot.child("Bvn").val());


    

   }, function (error) {
      console.log("Error: " + error.code);
   });

}
   /*var membershipID = document.getElementById("membershipIDSearch").value;

   //membershipID.style.display = 'block';

  // var surname = firebase.database.ref().child("").child(membershipID);
   var otherName;
   var dob;
   var gender;
   var stateOfOrigin;
   var lga;
   var nation;
   var address;
   var phoneNumber;
   var email;
   var grantorName;
   var grantorTelPhone;
   //var shopID = firebase.database().ref().child("Member").child(membershipID);
  // var membershipID;
   var jobCategory;
   var noStaff;
   var rank;
   var status;

   var databaseRef = firebase.database().ref().child("CRM").child(membershipID);

   databaseRef.on("value", function(snapshot) {
    

       var img = snapshot.child("ProfilePicture").val();
       

       document.getElementById("profilePicture").src = img;

 
    $("#surName").val( snapshot.child("Surname").val());
    $("#otherName").val(snapshot.child("OtherName").val());
     $("#dob").val(snapshot.child("DateOfBirth").val());
     $("#gender").val(snapshot.child("Gender").val());
     $("#stateOfOrigin").val(snapshot.child("StateOfOrigin").val());
     $("#lga").val(snapshot.child("LGA").val());
     $("#address").val(snapshot.child("Address").val());
     $("#phoneNumber").val(snapshot.child("PhoneNumber").val());
     $("#email").val(snapshot.child("Email").val());
     $("#nation").val(snapshot.child("Nation").val());
     $("#membershipID").val(snapshot.child("MembershipID").val());
     $("#shopID").val(snapshot.child("ShopID").val());
     $("#jobCategory").val(snapshot.child("JobCategory").val());
     $("#noStaff").val(snapshot.child("NoStaff").val());
     $("#rank").val(snapshot.child("Rank").val());
     $("#status").val(snapshot.child("Status").val());
     $("#grantorTelPhone").val(snapshot.child("GrantorTel").val());
     $("#grantorName").val(snapshot.child("GrantorName").val());


     $("#bankName").val(snapshot.child("BankName").val());
     $("#accNo").val(snapshot.child("AccNo").val());
     $("#bvn").val(snapshot.child("Bvn").val());


    

   }, function (error) {
      console.log("Error: " + error.code);
   });

   
  /* shopID.on("value", function(snapshot) {

       $("shopID").val(snapshot.child("shopID").val();

       console.log(snapshot.val());

     }, function (error) {
        console.log("Error: " + error.code);
     });
     */





/* i imported by mySelf SI
function readDataToDashboard(){
      
    var membershipID = document.getElementById("membershipIDSearch").value;
    //membershipID.style.display = 'block';

   // var surname = firebase.database.ref().child("").child(membershipID);
    var otherName;
    var dob;
    var gender;
    var stateOfOrigin;
    var lga;
    var nation;
    var address;
    var phoneNumber;
    var email;
    var grantorName;
    var grantorTelPhone;
    //var membershipID;
    var jobCategory;
    var noStaff;
    var rank;
    var status;
  alert(membershipID);


  var databaseRef = firebase.database().ref().child("CRM").child(membershipID);

    databaseRef.on("value", function(snapshot) {
      // alert(snapshot.child("Surname").val());
      
       document.getElementById("surname").outerHTML  = snapshot.child("Surname").val();
      document.getElementById("otherName").outerHTML  = snapshot.child("OtherName").val();
      document.getElementById("dob").outerHTML  = snapshot.child("DateOfBirth").val();
      document.getElementById("gender").outerHTML  = snapshot.child("Gender").val();
      document.getElementById("stateOfOrigin").outerHTML  = snapshot.child("StateOfOrigin").val();
      document.getElementById("lga").outerHTML  = snapshot.child("LGA").val();
      document.getElementById("address").outerHTML  = snapshot.child("Address").val();
      document.getElementById("phoneNumber").outerHTML  = snapshot.child("PhoneNumber").val();
      document.getElementById("email").outerHTML  = snapshot.child("Email").val();
      document.getElementById("nation").outerHTML  = snapshot.child("Nation").val();
      document.getElementById("membershipID").outerHTML  = snapshot.child("MembershipID").val();
      document.getElementById("shopID").outerHTML  = snapshot.child("ShopID").val();
      document.getElementById("jobCategory").outerHTML  = snapshot.child("JobCategory").val();
      document.getElementById("noStaff").outerHTML  = snapshot.child("NoStaff").val();
      document.getElementById("rank").outerHTML  = snapshot.child("Rank").val();
      document.getElementById("status").outerHTML  = snapshot.child("Status").val();
      document.getElementById("grantorTelPhone").outerHTML  = snapshot.child("GrantorTel").val();
      document.getElementById("grantorName").outerHTML  = snapshot.child("GrantorName").val();
      document.getElementById("hideForm").style.visibility = null;

     // var img = snapshot.child("Picture").val();
        
    //  document.getElementById("profileImage").src = img;


    }, function (error) {
       console.log("Error: " + error.code);
    });


  
    /*var databaseRef = firebase.database().ref().child("CRM").child(membershipID);

    databaseRef.on("value", function(snapshot) {
      
      //document.getElementById("surname").outerHTML  = snapshot.val();
      alert(snapshot.child("BVN").val());
      document.getElementById("otherName").outerHTML  = snapshot.child("OtherName").val();
      document.getElementById("dob").outerHTML  = snapshot.child("DateOfBirth").val();
      document.getElementById("gender").outerHTML  = snapshot.child("Gender").val();
      document.getElementById("stateOfOrigin").outerHTML  = snapshot.child("StateOfOrigin").val();
      document.getElementById("lga").outerHTML  = snapshot.child("LGA").val();
      document.getElementById("address").outerHTML  = snapshot.child("Address").val();
      document.getElementById("phoneNumber").outerHTML  = snapshot.child("PhoneNumber").val();
      document.getElementById("email").outerHTML  = snapshot.child("Email").val();
      document.getElementById("nation").outerHTML  = snapshot.child("Nation").val();
      document.getElementById("membershipID").outerHTML  = snapshot.child("MembershipID").val();
      document.getElementById("shopID").outerHTML  = snapshot.child("MembershipID").val();
      document.getElementById("jobCategory").outerHTML  = snapshot.child("JobCategory").val();
      document.getElementById("noStaff").outerHTML  = snapshot.child("NoStaff").val();
      document.getElementById("rank").outerHTML  = snapshot.child("Rank").val();
      document.getElementById("status").outerHTML  = snapshot.child("Status").val();
      document.getElementById("grantorTelPhone").outerHTML  = snapshot.child("GrantorTel").val();
      document.getElementById("grantorName").outerHTML  = snapshot.child("GrantorName").val();
*
     // var img = snapshot.child("Picture").val();
        
    //  document.getElementById("profileImage").src = img;

    }, function (error) {
       console.log("Error: " + error.code);
    });

    
    /*shopID.on("value", function(snapshot) {

     //   document.getElementById("shopID").outerHTML  = snapshot.child("shopID").val();

       // console.log(snapshot.val());

      }, function (error) {
         console.log("Error: " + error.code);
      });*/

      /* i imported by myself SI
}

*/
   