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

var countingViews;
var userLang = navigator.language || navigator.userLanguage; 
userLang = userLang.substring(0, 2);

firebase.database().ref().child('dataSync').once('value')
.then(r => {
  if(!countingViews) countingViews = r.val().visitas;
})
.then(()=>{
  firebase.database().ref().child('dataSync').set({
    visitas: countingViews + 1
  })
})

firebase.database().ref().child('texting').once('value')
.then(r => {
  console.log(r.val());
  
  if(userLang == 'es'){
    $('#socialText').html(r.val().socialTexto)
  } else {
    $('#socialText').html(r.val().socialText)
  }

})