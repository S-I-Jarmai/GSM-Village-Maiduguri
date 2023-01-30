
$("#progress").hide();
//alert("hi")
function readDataToDashboard(){


  $("progress").show();

    ///var membershipID = document.getElementById("membershipID").value;
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
    var membershipID;
    var jobCategory;
    var noStaff;
    var rank;
    var status;

    var serialNumber = 0;
    var databaseRef = firebase.database().ref().child("CRM");
    databaseRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.child("Bvn").val();
      console.log(childData);


      
      serialNumber +=1;
      var content = '';
      //var val = data.val();
      content += '<tr>';
      content += '<td>' + serialNumber + '</td>';
      content += '<td>' + childSnapshot.child("Surname").val() + '</td>';
      content += '<td>' +childSnapshot.child("OtherName").val() + '</td>';
      content += '<td>' +childSnapshot.child("DateOfBirth").val()+ '</td>';
      content += '<td>' +childSnapshot.child("Gender").val()+ '</td>';
      content += '<td>' +childSnapshot.child("Nation").val()+ '</td>';
      content += '<td>' +childSnapshot.child("StateOfOrigin").val()+ '</td>';
      content += '<td>' +childSnapshot.child("LGA").val()+ '</td>';
      content += '<td>' +childSnapshot.child("Address").val()+ '</td>';
      content += '<td>' +childSnapshot.child("PhoneNumber").val()+ '</td>';
      content += '<td>' +childSnapshot.child("Email").val()+ '</td>';
      content += '<td>' +childSnapshot.child("GrantorName").val()+ '</td>';
      content += '<td>' +childSnapshot.child("GrantorTel").val()+ '</td>';
      content += '<td>' +childSnapshot.child("ShopID").val()+ '</td>';
      content += '<td>' +childSnapshot.child("MembershipID").val()+ '</td>';
      content += '<td>' +childSnapshot.child("JobCategory").val()+ '</td>';
      content += '<td>' +childSnapshot.child("NoStaff").val()+ '</td>';
      content += '<td>' +childSnapshot.child("Rank").val()+ '</td>';
      content += '<td>' +childSnapshot.child("Status").val()+ '</td>';


      content += '</tr>';

      $('#ex-table').append(content);

      /*   var img = childData.child("Picture").val();
        
      document.getElementById("profileImage").src = img;
      */


    $("progress").hide();
    });

   

});


}