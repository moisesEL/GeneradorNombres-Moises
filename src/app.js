import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
let pronoun = ['el','nuestro','aquel','este'];
let adj = ['genial','grande','pequeño','fantastico'];
let noun = ['jueves','miercoles','viernes','lunes'];
let extensions = ['.com','.org','.pro', '.es']

  pronoun.forEach(pronoun => {
    adj.forEach (adj => {
      noun.forEach (noun => {
        extensions.forEach (extension => {

          if(extension === '.es') {
            let domainhack = noun.slice(0, noun.length - 2);;
            console.log( pronoun + adj + domainhack + extension);
            } else console.log( pronoun + adj + noun + extension);
      });
      });
    });
  });


};
