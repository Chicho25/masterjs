'use strict'

// funciones

function calculadora(){
  return "Hola soy la calculadora";
}

function otra_funcion(){
  console.log("Otro tipo de llamado");
}

function parametos(numero1,  numero2, mostrar = false){
  if(mostrar == false){
    porConsola(numero1,numero2);
  }else{
    porPantalla(numero1,numero2);
  }
}

function porConsola(numero1, numero2){
  console.log("Suma: " + (numero1 + numero2));
  console.log("Resta: " + (numero1 - numero2));
  console.log("Multiplicacion: " + (numero1 * numero2));
  console.log("Divicion: " + (numero1 / numero2));
  console.log("*************************");
}
function porPantalla(){
  document.write("Suma: " + (numero1 + numero2) + "<br>");
  document.write("Resta: " + (numero1 - numero2) + "<br>");
  document.write("Multiplicacion: " + (numero1 * numero2) + "<br>");
  document.write("Divicion: " + (numero1 / numero2) + "<br>");
  document.write("*********************");
}

console.log(calculadora());
otra_funcion();
parametos(10, 10, true);
/*
for(var i=1;i<10;i++){
  console.log(i);
  parametos(i, 10);
}*/
