'use strict'

var nombres = ["pedro", "arrieta", "david", "perez"];
var lenguajes = Array("php", "python", "react", "javascript");
var multi = [nombres, lenguajes];
var contenido ="";

nombres.sort();// ordenarlo por orden alfavetico
console.log(nombres);
nombres.reverse();// de atras a delante
console.log(nombres);
do {
  contenido = prompt("ingrese el lenguaje de programacion");
  lenguajes.push(contenido);
} while (contenido != 'x');
lenguajes.pop(); // eliminar el ultimo valor ingresado por el prompt
console.log(nombres[0] + " " + nombres[1]);
console.log(multi[0][1]); // hacer llamado al array muntidimencional
console.log(lenguajes); // ingresar valores en el array

var indice = lenguajes.indexOf('css');

if(indice >= 0){
  lenguajes.splice(indice, 1)
}
console.log(lenguajes);// eliminar una posicion especifica en el array

var lenguajes_mas = lenguajes.join();// convertirlo en un string separado por comas
console.log(lenguajes_mas);
var cadena = "texto1,texto2,texto3";
var convertir_cadena = cadena.split(",");
console.log(convertir_cadena);
