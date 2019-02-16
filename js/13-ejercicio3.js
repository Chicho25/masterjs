'use strict'

/*
hacer un programa que muestre todos los numeros que hay entre 2 numeros introducidos por el usuario
*/

var numero_1 = parseInt(prompt("Ingrese el primer numero",0));
var numero_2 = parseInt(prompt("Ingrese el segundo numero",0));

for (let index = numero_1; index < numero_2; index++) {
     console.log(index);
    
}