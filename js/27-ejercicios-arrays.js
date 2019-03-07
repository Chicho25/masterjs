'use strict'
/*
1- pida 6 numeros por pantalla y los meta en un array
2- mostrar el array entero, en el cuerpo de la pagina y la consola
3- sacar el array ordenado y mostrarlo
4- invertir su orden y mostar
5- mostrar cuantos elementos tiene el array
6- busqueda de un valor introducida por el usuarios y que no diga su posicion*/

var i = 0;
var array_numeros = [];

do {
  var numeros = prompt("Ingrese un nuemro");
  array_numeros.push(numeros);
  i++;
} while (i < 6);

document.write("Elementos del array son: " + array_numeros); // escribirlo en el body
console.log(array_numeros); // escribirlo en la consola
document.write("<br>Ordenados Menor a mayor: " + array_numeros.sort()); // oredenarlos
document.write("<br>Reversa: " + array_numeros.reverse()); // ordenarlos en reversa
document.write("<br>Cantidad de elementos: " + array_numeros.length); // cantidad de elemeto en el array
var prompt_busqueda = prompt("Ingrese una busqueda");
var busqueda = array_numeros.find((buscar) => {
    return buscar == prompt_busqueda;
});
document.write("<br>El resultado de la busqueda es: "+busqueda);
