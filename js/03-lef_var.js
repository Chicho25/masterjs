'use strict'

// prueba let y var

// prueba con var
var numero = 40;
console.log(numero);
if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

// prueba con let

var text = "Curso js master";
console.log(text);

if (true) {
  let text = "Curso master js"
  console.log(text);
}

console.log(text);
