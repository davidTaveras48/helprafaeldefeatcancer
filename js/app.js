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
  if(!countingViews) countingViews = r.val().views;
})
.then(()=>{
  firebase.database().ref('dataSync').update({
    views: countingViews + 1
  })
})

firebase.database().ref('texting').once('value')
.then(r => {
  if(userLang == 'es'){
    $('.socialText').html(r.val().socialTexto);
    $('.summary').html(r.val().resumen);
    $('.biblicalQuote').html(r.val().citaBiblica);
    $('.biblicalQuoteBook').html(r.val().citaBiblicaLibro);
  } else {
    $('.socialText').html(r.val().socialText);
    $('.summary').html(r.val().summary);
    $('.biblicalQuote').html(r.val().biblicalQuote);
    $('.biblicalQuoteBook').html(r.val().biblicalQuoteBook);
  }
})

$(document).ready(()=>{
  if(userLang == 'es'){
    $('.topic').html('Ayuda a Rafael a Vencer al Cancer')
    $('.textInformative').html('a través de su cuenta en instagram.');
    $('.footerSocialText').html('Rafael en redes sociales');
  } else {
    $('.topic').html('Help Rafael Defefat Cancer')
    $('.textInformative').html('through his Instagram account.');
    $('.footerSocialText').html('Rafael on social network');
  }
})
