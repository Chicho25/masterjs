'use strict'

//transformar texto

var numero = 44;
var texto = "Bienvenido al curso de javascript";
var texto2 = "El curso esta bueno";

/*var dato = numero.toString();
    dato = texto.toLowerCase();
var dato2 = texto.toUpperCase();
console.log(typeof dato);
console.log(dato);
console.log(dato2);

// calcular longitud

var nombre = "Pedro Arrieta";
var nombre_array = ["Pedro", "Arrieta"];

console.log(nombre.length);
console.log(nombre_array.length);

// concatenar
var texto_total = texto + " " + texto2;
console.log(texto_total);
*/
var busqueda = texto.indexOf("curso");// la primera coincidencia
var busqueda2 = texto.search("de");// busca la palabra
var busqueda3 = texto.match("al");// devuel en array
var busqueda4 = texto.substr(14,5);// saca una palabra segun la longitud que le indiquemos
var busqueda5 = texto.charAt(30);// busca la letra que esta en esa posicion
var busqueda6 = texto.startsWith("curso");// regresa un voleano si encuentra al inicio la referencia
var busqueda7 = texto.endsWith("curso");// regresa un voleano si encuentra al final la referencia
var busqueda8 = texto.includes("curso");// regresa un boleano si encuentra la referencia en toda la cadena
var reemplazar = texto.replace("curso", "master");
var slice = texto.slice(14, 22); // recortar un string
var split = texto.split(" ");// añade el strin a un array con distintos metodos, pasacio, sin nada
var espacios = texto.trim(); // quita los espacios por delante y pos detras
console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(reemplazar);
console.log(slice);
console.log(split);
console.log(espacios);
