'use srtict'

// funciones anonimas
// es una funcion que no tiene nombre

//var pelicula = function(nombre){
//  return "La pelicula es "+nombre;
//}

function sumame(numero1, numero2, resultado_2, resultado_4){
      let suma = numero1 + numero2;
      resultado_2(suma);
      resultado_4(suma);
      return suma;
}

console.log(sumame(10, 11, function(dato){
  console.log("el resultado por 2 es "+(dato*2));
},
function(dato){
  console.log("el resultado por 4 es "+(dato*4));
}));
