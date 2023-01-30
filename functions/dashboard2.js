$('#progress').hide();

function searchData(){

    //alert("hi")
    var membershipID = document.getElementById("membershipID").value;
    var progress = document.getElementById("progress").value;

   
        //document.querySelector('#progress').style.display = 'visible'
        $('#progress').show();


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
    var membershipID;
    var jobCategory;
    var noStaff;
    var rank;
    var status;

    var databaseRef = firebase.database().ref().child("CRM").child(membershipID);

    databaseRef.on("value", function(snapshot) {
     
  
        if(snapshot.child("MembershipID").val() == null){

            $('#progress').hide();
            alert("Record not found")

        }else{

        
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
      $("#membershipID2").val(snapshot.child("MembershipID").val());
      $("#shopID").val(snapshot.child("ShopID").val());
      $("#jobCategory").val(snapshot.child("JobCategory").val());
      $("#noStaff").val(snapshot.child("NoStaff").val());
      $("#rank").val(snapshot.child("Rank").val());
      $("#status").val(snapshot.child("Status").val());
      $("#grantorTel").val(snapshot.child("GrantorTel").val());
      $("#grantorName").val(snapshot.child("GrantorName").val());


      $("#bankName").val(snapshot.child("BankName").val());
      $("#accNo").val(snapshot.child("AccNo").val());
      $("#bvn").val(snapshot.child("Bvn").val());


     

      $('#progress').hide();

        }
    }, function (error) {

        $('#progress').hide();

        console.log("Error: " + error.code);
    });

    
   /* shopID.on("value", function(snapshot) {

        $("shopID").val(snapshot.child("shopID").val();

        console.log(snapshot.val());

      }, function (error) {
         console.log("Error: " + error.code);
      });
      */
}



function update(){

    alert(1233456)
    let surName = document.getElementById("surName").value;
    let otherName = document.getElementById("otherName").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let stateOfOrigin = document.getElementById("stateOfOrigin").value;
    let lga = document.getElementById("lga").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let nation = document.getElementById("nation").value;
    let shopID = document.getElementById("shopID").value;
    let bankName = document.getElementById("bankName").value;
    let accNo = document.getElementById("accNo").value;
    let bvn = document.getElementById("bvn").value;
    let membershipID = document.getElementById("membershipID").value;
    let jobCategory = document.getElementById("jobCategory").value;
    let noStaff = document.getElementById("noStaff").value;
    let cover = document.getElementById("cover").files[0];  // Profile Picture  
    let rank = document.getElementById("rank").value;
    let status = document.getElementById("status").value;
    let grantorTel = document.getElementById("grantorTel").value;
    let grantorName = document.getElementById("grantorName").value;
    
    /*
    console.log(cover);
    console.log("Surname is "+surName);
    console.log(dob);
    console.log(gender);
    console.log(stateOfOrigin);
    console.log(lga);
    console.log(address);
    console.log(phoneNumber);
    console.log(email);
    console.log(nation);
    console.log(shopID);
    console.log(bankName);
    console.log(accNo);
    console.log(bvn);
    console.log(membershipID);
    console.log(jobCategory);
    console.log(noStaff);   */
    //Firebase 
   let d;
    //const fileRef = await firebase.storage().refFromURL(d);
   // const fileRef = firebase.storage().refFromURL(d);
    firebase.database().ref('CRM/').child(membershipID).set({
     //   Picture: fileRef.location.path,
         Surname: surName,
         OtherName: otherName,
         DateOfBirth: dob,
         Gender: gender,
         StateOfOrigin: stateOfOrigin,
         LGA:lga,
         Address: address,
         PhoneNumber: phoneNumber,
         Email: email,
         Nation: nation,
         ShopID: shopID,
         BankName: bankName,
         AccNo: accNo,
         Bvn: bvn,
         MembershipID: membershipID,
         JobCategory: jobCategory,
         NoStaff: noStaff,
         Rank: rank,
         Status: status,
         GrantorTel: grantorTel,
         GrantorName: grantorName,
         ProfilePicture: downloadURL   
    });
}




