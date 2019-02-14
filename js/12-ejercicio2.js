'use strict'

/* 
Utilizar un bucle, mostrar la suma y ma media de los numeros introducidos
hatsa introducir un numero negativo y ahi mostrar el resultado
*/
var numero_1;
var contador = 0;
var total = 0;
do{
numero_1 = prompt("Introduce un numero",0);
if(isNaN(numero_1)){
    numero_1 = 0;
}else if(numero_1 >= 0){
    contador++;
    total = total + Number(numero_1);
}

console.log(total);
console.log(contador);

}while(Number(numero_1) > 0)
console.log("La suma de los numeros intrucidos es: " + total);
console.log("La media es: " + (total/contador));
console.log("La cantidad de numeros introducidos son: " + contador);