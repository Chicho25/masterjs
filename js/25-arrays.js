'use strict'
// arrays

var nombre = "tayron";
var nombres = ["Chicho", "Blaster", "Tayron"];

// recorrer arrays

nombres.forEach((elemento, indice)=>{
    console.log(indice +" "+ elemento);
});

for (var i = 0; i < nombres.length; i++) {
   console.log(nombres[i]);
}

for(let nick in nombres){
  console.log(nombres[nick]);
}


// busqueda en un array

var busqueda = nombres.find((index)=>{
  return index == "Chicho";
});
console.log(busqueda);
busqueda = nombres.find(index => index == "Tayron");// busca y regresa el elemento
console.log(busqueda);
busqueda = nombres.findIndex(index => index == "Tayron");// busca y regresa el numero en que se encuentra en el array
console.log(busqueda);
