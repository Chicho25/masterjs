'use strict'
var edad1 = 30;
var edad2 = 120;
if (edad1 > edad2) {
    console.log("Edad 1 es mayor que edad 2");
}else{
    console.log("la edad 1 es inferior");
}

var edad3 = 34;
var nombre = "David Suarez";

/* Operadores relacionales
    Mayor >
    Menor <
    Mayor o igual >=
    menor o igual <=
    igual ==
    Distinto !=
*/

if (edad3 >= 18){
    // Es mayor de edad
    console.log("Davis Suares tiene"+ edad3 +"Es mayor de edad");

    if (edad3 <= 33) {
        console.log("Milenials eres");
    }else if(edad3 >= 50){
        console.log("Viejito");
    }else{
        console.log("Milenials no eres");
    }

}else{
    console.log("Davis Suares tiene" + edad3 + "Es menor de edad");
}

/* Operadores logicos
    Y -> &&, AND 
    O -> or, ||
    Negacion -> !
*/

var year = 2018;
// Negacion 
if (year != 2016) {
    console.log("El a;o no es 2016");
}
// AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la actualidad");
}
// OR
if (year == 2008 || (year >= 2018 && year == 2028)) { // el bloke que esta entre parentesis devuelve true
    console.log("El a;o termina en 8");
}




