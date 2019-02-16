'use strict'

/* 
calculadora:
- Pida 2 numeros por pantalla
- Si metemos uno mal, que lo pida de nuevo
- En el cuerpo de la pagina, en una aleta y por la consola el resultado de 
sumar, restar, multiplicar y dividir esas 2 cifras
*/

var numero_1;
var numero_2;

do {
    numero_1 = parseInt(prompt("Ingrese el primer numero ", 0));
    numero_2 = parseInt(prompt("Ingrese el segundo numero ", 0));
} while (isNaN(numero_1) == true || isNaN(numero_2) == true || numero_1 <= 0 || numero_2 <= 0);

alert("La suma es "+ (numero_1 + numero_2));
alert("La multiplicacion es " + (numero_1 * numero_2));
alert("La resta es " + (numero_1 - numero_2));
alert("La divicion es " + (numero_1 / numero_2));