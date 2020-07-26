// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCIKN1q-gAxxiecYSedO93DKWUBbuvPHZc",
  authDomain: "helprafaeldefeatcancer.firebaseapp.com",
  databaseURL: "https://helprafaeldefeatcancer.firebaseio.com",
  projectId: "helprafaeldefeatcancer",
  storageBucket: "helprafaeldefeatcancer.appspot.com",
  messagingSenderId: "36499608611",
  appId: "1:36499608611:web:43753b4a81a23398d98d96"
};

// Initialize Firebase
firebase.initializeApp(config);

const dbRef = firebase.database().ref('dataSync');
var countingViews;

dbRef.once('value')
.then(r => {
  if(!countingViews) countingViews = r.val().visitas;
})
.then(()=>{
  dbRef.set({
    visitas: countingViews + 1
  })
})

var userLang = navigator.language || navigator.userLanguage; 
alert(userLang.substring(0, 2));

