'use strict'

/* 
-programa que pida dos numeros y que diga, cual es mayor, menor y si son iguales 
-si los numeros no son numeros o son menores o iguales a cero que los vuelva a pedir 
*/

//var numero_1 = parseInt(prompt("Ingrese el nuemro 1", 0));
//var numero_2 = parseInt(prompt("Ingrese el nuemro 2", 0));

do{
    var numero_1 = prompt("Ingrese el nuemro 1", 0);
    var numero_2 = prompt("Ingrese el nuemro 2", 0);
} while (typeof (numero_1) != "string" || typeof (numero_2) != "string" || numero_1 > 0 || numero_2 > 0)
if (numero_1 > numero_2) {
    console.log("El numero " + numero_1 + " Es mayor, que el nuemro " + numero_2);
} else if (numero_1 < numero_2) {
    console.log("El numero " + numero_1 + " Es Menor, que el nuemro " + numero_2);
} else if (numero_1 == numero_2) {
    console.log("El numero " + numero_1 + " Es igual a " + numero_2);
} 
