'use strict'

function holaMundo(text){
  var hola_mundo = "texto dentro de la funcion";
  console.log(text);
  console.log(typeof(numero.toString()));// para convertir un parametro en string
  console.log(hola_mundo);
}

var numero = 12;
var text = "Hola mundo, soy una variable global";
holaMundo(text);
console.log(hola_mundo);// no esta dentro del ambito por eso da error
