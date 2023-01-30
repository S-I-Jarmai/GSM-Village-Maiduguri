/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  /* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  /* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

  


//Our Old Codes
const config = {
    apiKey: "AIzaSyCjZ2HEKI1n-4tTGyWQghi-hYEMgLOSwMg",
    authDomain: "html-firebase-tut-c39d9.firebaseapp.com",
   databaseURL: "https://html-firebase-tut-c39d9.firebaseio.com",
    projectId: "html-firebase-tut-c39d9",
    storageBucket: "html-firebase-tut-c39d9.appspot.com",
    messagingSenderId: "864836599808",
    appId: "1:864836599808:web:1fe590958506ba52e718e5"

/*    apiKey: "AIzaSyBDSmEJ8GLdrJOpGnyMoweYT7mrHFehx60",
    authDomain: "hotel-management-system-f7009.firebaseapp.com",
    databaseURL: "https://hotel-management-system-f7009.firebaseio.com",
    projectId: "hotel-management-system-f7009",
    storageBucket: "hotel-management-system-f7009.appspot.com",
    messagingSenderId: "582201770145",
    appId: "1:582201770145:web:2f17e76d60c487ef8270e0" */
}

firebase.initializeApp(config);

const firestore = firebase.firestore();

const createForm = document.querySelector("#createForm");
const progressBar = document.querySelector("#progressBar");
const progressHandler = document.querySelector("#progressHandler");
const postSubmit = document.querySelector("#postSubmit");


if(createForm != null){
    let d; 
    createForm.addEventListener("submit", async(e)=>{
        e.preventDefault();
        
        if(document.getElementById("title").value != "" && document.getElementById("content").value != "" 
        && document.getElementById("cover").files[0] != ""){
            let title = document.getElementById("title").value;
            let content = document.getElementById("content").value;
            let cover = document.getElementById("cover").files[0];
            //console.log(cover);
            console.log("Title is "+title);
            console.log("Content is "+content);

            const storageRef = firebase.storage().ref();
            const storageChild = storageRef.child(cover.name);

            console.log("Uploading file...");
            const postCover = storageChild.put(cover);

            await new Promise((resolve) => {
                postCover.on("state_changed", (snapshot) => {

                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(Math.trunc(progress));

                    if(progressHandler != null){
                        progressHandler.style.display = true; 
                    }

                    if(postSubmit != null){
                        postSubmit.disabled = true;
                    }
                    if(progressBar != null){
                        progressBar.value = progress;
                    }
                }, (error) =>{
                    //error
                    console.log(error);
                }, async() => {
                    const downloadURL = await storageChild.getDownloadURL();
                    d = downloadURL;
                    console.log(d);
                    resolve();
                }); 
            });



            const fileRef = await firebase.storage().refFromURL(d);

let post = {
               title: title,
               content: content,
                cover: d, // https:firebase:my-image
                fileref: fileRef.location.path //image.jpg
            }
            firebase.firestore().collection("posts").add(post);
            /*await firebase.firestore().collection("posts").add(post);

            console.log("post added successfully");

            if(postSubmit != null){
                window.location.replace("index.html");
                postSubmit.disabled = false;
            }else{
                console.log("must fill all the inputs");
            }
*/
        }
       
    })

}