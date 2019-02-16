'use strict'

var numero = parseInt(prompt("Ingrese el numero ", 0));

for (let index = 1; index < numero; index++) {
    if (numero%index == 0 ) {
        console.log("el numero es " + index);
    }
}