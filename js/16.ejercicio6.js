'use strict'

/* 
- Si un numero es par o impar
- la ventana prompt
- comprobar si, no es valido, q pida de nuevo el numero
*/

var numero;

do{
    numero = parseInt(prompt("Introdusca el nuemr"));
}while(isNaN(numero) == true || numero <= 0)

if (numero%2 == 0) {
    console.log("El numero es par" + numero);
}else{
    console.log("El numero es inpar" + numero); 
}
