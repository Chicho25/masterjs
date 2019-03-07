'use strict'
// propiedades del navegador
console.log(window.innerHeight);// alto ventana del navegador
console.log(window.innerWidth);// ancho ventana del navegador
console.log(screen.width);// ancho pantalla
console.log(screen.height);// alto pantalla
console.log(window.location);// saca todas las propiedades del navegador
console.log(window.location.href);// elemplo con la propiedad href

function redireccionar(url){
  window.location.href = url;
}

function abrirVentana(url){
  window.open(url,"","width=400,height=300");
}
