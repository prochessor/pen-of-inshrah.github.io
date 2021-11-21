var firebaseConfig = {
  apiKey: "AIzaSyBg5L8rg-Kh8Ied0UkYSZTscKbWAUH-PbY",
  authDomain: "comments-60fe4.firebaseapp.com",
  projectId: "comments-60fe4",
  storageBucket: "comments-60fe4.appspot.com",
  messagingSenderId: "511911342819",
  appId: "1:511911342819:web:15940d74faaee4e457cbd6",
  measurementId: "G-KZF3XTH1Z3"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

function sendmessage()
{
    var name=document.getElementById("Name").value;
    var email=document.getElementById("Email").value;

    var message=document.getElementById("message").value;

    var newMessagekey=database.ref().child('comments').push().key;
    database.ref('comments/'+newMessagekey+'/Name').set(name);
    database.ref('comments/'+newMessagekey+'/Email').set(email);

    database.ref('comments/'+newMessagekey+'/message').set(message);

}
function submitForm(e)
{
    e.preventDefault();

}
document.getElementById('comment-form').addEventListener('submit',submitForm);

