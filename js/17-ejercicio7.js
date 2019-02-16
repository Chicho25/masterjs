'use strict'
// tabla de multiplicar de un numero introducido por prompt

var numero = parseInt(prompt("Introdusca el numero ", 0));

for(var i = 1; i <= 10; i++){
    console.log(numero + " x " + i + " = " + (numero*i));
}

// Tdas las tablas de multiplicar

for (var i = 1; i <= 10; i++) {

    for (var ii = 1; ii <= 10; ii++) {
        console.log(i + " x " + ii + " = " + (ii * i));
    }
    console.log("---------------------");

}