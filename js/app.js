var countingViews;
var userLang = navigator.language || navigator.userLanguage; 
userLang = userLang.substring(0, 2);
var url = window.location;

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


firebase.database().ref('dataSync').once('value')
.then(r => {
  if(!countingViews) countingViews = r.val().views;
})
.then(()=>{
  if(url == 'https://helprafaeldefeatcancer.org/' || url == 'http://helprafaeldefeatcancer.org/'){
    firebase.database().ref('dataSync').update({
      views: countingViews + 1
    });
  }
})
.then(()=>{
  firebase.database().ref('dataSync').on('value', r => {
    $('.viewsCounter').html(r.val().views);
  });
});


$(document).ready(()=>{
  if(userLang == 'es'){
    $('.topic').html('Ayuda a Rafael a Vencer al Cancer');
    $('.footerSocialText').html('Rafael en redes sociales');
    $('.socialText').html(socialTexto);
    $('.summary').html(resumen);
    $('.biblicalQuote').html(citaBiblica);
    $('.biblicalQuoteBook').html(citaBiblicaLibro);
    $('.changeEnglish').css('display', 'block');
  } else {
    $('.topic').html('Help Rafael Defeat Cancer');
    $('.footerSocialText').html('Rafael on social network');
    $('.socialText').html(socialText);
    $('.summary').html(summary);
    $('.biblicalQuote').html(biblicalQuote);
    $('.biblicalQuoteBook').html(biblicalQuoteBook);
    $('.changeSpanish').css('display', 'block');
  }
})

changeEnglish = () => {
  $('.topic').html('Help Rafael Defeat Cancer');
  $('.footerSocialText').html('Rafael on social network');
  $('.socialText').html(socialText);
  $('.summary').html(summary);
  $('.biblicalQuote').html(biblicalQuote);
  $('.biblicalQuoteBook').html(biblicalQuoteBook);
  $('.changeSpanish').css('display', 'block');
  $('.changeEnglish').css('display', 'none');
  $('html, body').animate( { scrollTop : 0 }, 800 );
}

changeSpanish = () => {
  $('.topic').html('Ayuda a Rafael a Vencer al Cancer');
  $('.footerSocialText').html('Rafael en redes sociales');
  $('.socialText').html(socialTexto);
  $('.summary').html(resumen);
  $('.biblicalQuote').html(citaBiblica);
  $('.biblicalQuoteBook').html(citaBiblicaLibro);
  $('.changeSpanish').css('display', 'none');
  $('.changeEnglish').css('display', 'block');
  $('html, body').animate( { scrollTop : 0 }, 800 );
}