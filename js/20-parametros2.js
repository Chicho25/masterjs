'use strict'

//parametros rest y spread

 function listado_fruta(fruta1, fruta2, ...resto_frutas){
   console.log("fruta1: ", fruta1);
   console.log("fruta2: ", fruta2);
   console.log(resto_frutas);
 }

listado_fruta("fraza", "melon", "mango", "papaya", "banana", "nispero");

var frutas = ["naranja", "manzana"];
listado_fruta(...frutas);
