'use strict'

/* 
mostrar todos los numeros impares de 2 numeros introducidos por el teclado
*/

var numero_1 = parseInt(prompt("Ingrese el primer numero",0));
var numero_2 = parseInt(prompt("Ingrese el segundo numero", 0));

for (var index = numero_1; index < numero_2; index++) {
        var division = index % 2;
        if (division != 0) {
        console.log("El numero Impar es " + index);
    }
}