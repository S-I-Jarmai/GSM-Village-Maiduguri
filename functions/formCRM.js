
$("#progress").hide();


const config = {
    apiKey: "AIzaSyCpSDm790pYUDsy1sQRncCW8cXRoREBGns",
    authDomain: "gsm-village-maiduguri-test.firebaseapp.com",
    databaseURL: "https://gsm-village-maiduguri-test.firebaseio.com",
    projectId: "gsm-village-maiduguri-test",
    storageBucket: "gsm-village-maiduguri-test.appspot.com",
    messagingSenderId: "252709731955",
    appId: "1:252709731955:web:625d86fa3a77fbbd25b406"
}

firebase.initializeApp(config);

const firestore = firebase.firestore();
//Iniial Code

function consoleDate(){
    
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
  
    
     //Firebase 
//Storage
     
/*Thanks 4 your per

// Created a Storage Reference with root dir
var storageRef = firebase.storage().ref();
// Get the file from DOM
var file = document.getElementById("cover").files[0];
console.log(file);

//dynamically set reference to the file name
var thisRef = storageRef.child(file.name);

//put request upload file to firebase storage
thisRef.put(file).then(function(snapshot) {

         //Database
         firebase.database().ref('CRM/').child(membershipID).set({
     
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
            ProfilePicture: 
                   
       });
   
   alert("File Uploaded")
   console.log('Uploaded a blob or file!');
});
   
*/

    
    
}

 



	var selectedFile; 
	function getfile() 
	{ 
		var pic = document.getElementById("photo"); 

		// selected file is that file which user chosen by html form 
		selectedFile = pic.files[0]; 

		// make save button disabled for few seconds that has id='submit_link' 
		document.getElementById('submit_link').setAttribute('disabled', 'true'); 
		myfunction(); // call below written function 
	} 
	function myfunction() 
	{ 

        
        $("#progress").show();

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
        let cover = document.getElementById("photo").files[0];  // Profile Picture  
        let rank = document.getElementById("rank").value;
        let status = document.getElementById("status").value;
        let grantorTel = document.getElementById("grantorTel").value;
        let grantorName = document.getElementById("grantorName").value;
    
		// select unique name for everytime when image uploaded 
		// Date.now() is function that give current timestamp 
		var name="123"+Date.now(); 

		// make ref to your firebase storage and select images folder 
		var storageRef = firebase.storage().ref('/images/'+ name); 

		// put file to firebase 
		var uploadTask = storageRef.put(selectedFile); 

		// all working for progress bar that in html 
		// to indicate image uploading... report 
		uploadTask.on('state_changed', function(snapshot){ 
			var progress = 
			(snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
			var uploader = document.getElementById('uploader'); 
			uploader.value=progress; 
			switch (snapshot.state) { 
				case firebase.storage.TaskState.PAUSED: 
				console.log('Upload is paused'); 
				break; 
				case firebase.storage.TaskState.RUNNING: 
				console.log('Upload is running'); 
				break; 
			} 
        }, function(error) {console.log(error); 
            $("#progress").hide();

		}, function() { 

			// get the uploaded image url back 
			uploadTask.snapshot.ref.getDownloadURL().then( 
				function(downloadURL) { 
            //Database
            //alert("I can worked here......."+downloadURL);
            //var firebase;
           // consoleDate();
            firebase.database().ref('CRM/').child(membershipID).set({
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
              // You get your url from here 
				console.log('File available at', downloadURL); 

			// print the image url 
            console.log(downloadURL); 

            $("#progress").hide();

        
            document.getElementById('submit_link').removeAttribute('disabled'); 
            alert("membershipID is "+membershipID);
            }); 
         

            
        }); 
            
	}; 


/*
            //Database
            alert("I can worked here......."+downloadURL);
            firebase.database().ref('CRM').child(membershipID).set({
         
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
           */