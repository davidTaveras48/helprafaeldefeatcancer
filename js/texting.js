var socialText = `En estos ultimos tiempos de este sistema de cosas todos de alguna manera estamos atravesando por una situación dificil de manejar, lamentablemente hace pocos dias me diagnosticaron cancer en los pulmones. Pero esto no significa que estamos derrotados asi que mantengamos la buena actitud y ni por costumbre digamos que estas son \"pruebas de Dios', porque Jehova Dios no prueba a nadie con cosas malas. Santiago 1:13. En mi biografía les dejaré un link para donaciones, juntos somos mas fuertes. Un abrazo grande para todos!.`;
var socialTexto = `En estos ultimos tiempos de este sistema de cosas todos de alguna manera estamos atravesando por una situación dificil de manejar, lamentablemente hace pocos dias me diagnosticaron cancer en los pulmones. Pero esto no significa que estamos derrotados asi que mantengamos la buena actitud y ni por costumbre digamos que estas son 'pruebas de Dios', porque Jehova Dios no prueba a nadie con cosas malas. Santiago 1:13. En mi biografía les dejaré un link para donaciones, juntos somos mas fuertes. Un abrazo grande para todos!.`;

var biblicalQuoteBook = 'James 1:13';
var biblicalQuote = 'When tempted, no one should say, “God is tempting me.” For God cannot be tempted by evil, nor does he tempt anyone.';

var citaBiblicaLibro = 'Santiago 1:13';
var citaBiblica = 'Que nadie diga cuando es tentado: Soy tentado por Dios; porque Dios no puede ser tentado por el mal y El mismo no tienta a nadie.';

var resumen = `
Hola a todos, mi nombre es Rafael Protorreal Montesino, vivo en Grand Cayman y mi buen amigo David Taveras creo esta página para mi por los siguientes motivos. Unos meses atrás, vole a Grand Cayman desde la Republica dominicana (mi país natal) con un permiso de trabajo para asi poder crear una mejor vida para mi esposa \"Maria Esther\" y mi hijo de 3 años de edad \"Jaden\".
<br><br>
Como otros tantos casos ya conocidos, el brote de la pandemia nos toco pero de una manera diferente. En los últimos meses, \"Maria Esther\" (mi esposa) se sentía mal a tal nivel que tuvo que ser ingresada al hospital en donde se dieron cuenta que tenia un tumor en el páncreas. Gracias a Dios el tumor fue removido y mi esposa pudo ser devuelta a su hogar en donde se encuentra en recuperación justo en este momento.
<br><br>
Aun asi, justamente después de creer que habíamos salido de todo, me ingresaron al hospital porque sentía una pequeña molestia al respirar, todos pensábamos que era una simple gripe pero resulta que fui diagnosticado con cáncer afectandome  ambos pulmones.
<br><br>
Mi tratamiento esta en proceso pero para eso necesito un monto de 8,000.00 mil dolares Caymanenses (US$ 10,000.00). Un dinero que desafortunadamente necesito, ya que mi seguro del trabajo solo cubre tratamientos básicos, los cuales no incluyeron los costos del tratamientos de mi esposa, resonancias magneticas (US$ 1,500.00) que se me realizaron previamente al diagnóstico final o los US$ 3,500.00 de mi biopsia donde finalmente fue detectado el cáncer.
<br><br>
Se que la pandemia ha creado tiempos inciertos e inseguro para todos, pero imagínense que sobre eso debo batallar con todo este innecesario y cruel pesar sobre mis hombros cuando todo lo que deseaba era darle una mejor vida a mi familia.
<br><br>
<b>Con tu ayuda, yo, mi esposa Maria Esther y mi hijo Jaden podemos batallar juntos</b>.
`;
var summary = `
Hi everybody, my name is Rafael Portorreal Montesino, I live in grand cayman and my friend David Taveras created this page for me for the following reasons. A few months ago, I flew to grand cayman from dominican republic (my birth country) with a work permit so I could create a better life to my wife "maria Esther" and my 3 years old son "Jaden".
<br><br>
As has been the case for so many, the ensuing pandemic hit, upturning my plans, and with it producing struggles for me and my family. Unlike many others my struggle has been compounded by a heartbreaking turn of events.
<br><br>
In the last few months, Maria Esther fell sick, being admitted to hospital, where it was found that she had a pancreatic tumor. Thankfully, the tumor was recently removed, and Maria Esther was able to return home, where she is now recovering.
<br><br>
However, prior to this, i was admitted to hospital and being treated for suspected Pneumonia. It was during this time that in a cruel twist of fate, it was discovered that Pneumonia was in fact Lung Cancer, affecting both of my lungs.
<br><br>
My treatment is due to begin soon, starting with chemotherapy, but it comes at a steep cost of $8,000 (KYD). This is money that i desperately needs, as my own work insurance only covered me for basic treatment, which didn’t include Maria’s medical costs, or the $3,500 cost of my biopsy.
<br><br>
The pandemic has created uncertain times for us all, but imagine now having to deal with all this unnecessarily cruel weight on your shoulders at a time when you was hoping to start a new life.
<br><br>
With your help, me, my wife Maria Esther and my son Jaden will come through this and start building that life...
<br><br>
<b>Thank you for your help!</b>
`;

$(document).ready(()=>{
  if(userLang == 'es'){
    $('.topic').html('Ayuda a Rafael a Vencer al Cancer')
    $('.textInformative').html('a través de su cuenta en instagram.');
    $('.footerSocialText').html('Rafael en redes sociales');
    $('.socialText').html(socialTexto);
    $('.summary').html(resumen);
    $('.biblicalQuote').html(citaBiblica);
    $('.biblicalQuoteBook').html(citaBiblicaLibro);
  } else {
    $('.topic').html('Help Rafael Defeat Cancer')
    $('.textInformative').html('through his Instagram account.');
    $('.footerSocialText').html('Rafael on social network');
    $('.socialText').html(socialText);
    $('.summary').html(summary);
    $('.biblicalQuote').html(biblicalQuote);
    $('.biblicalQuoteBook').html(biblicalQuoteBook);
  }
})
