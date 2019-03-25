'use strict'

window.addEventListener('load', ()=>{

// eventos del raton
// addEventListener, insertamos eventos al archivo js
var boton = document.querySelector("button");
// evento click
boton.addEventListener('click', (this)=>{
  cambiar_color(this);
});

function cambiar_color(this){

  if (this.style.background == "green") {
    this.style.background = "red";
  }else{
  this.style.background = "green";
  }
}

// mouse hover
boton.addEventListener('mouseover', ()=>{
  boton.style.background = "#ccc";
});

// mouse outover
boton.addEventListener('mouseout', ()=>{
  boton.style.background = "white";
});
// focus
var campo = document.querySelector("#campo");
campo.addEventListener('focus', ()=>{
  console.log("Focus");
  // esta funcion sirve es cuando le hacen focus al campo
});

// blur

campo.addEventListener('blur', ()=>{
  console.log("Blur");
  // esta funcion sirve es cuando le hacen focus al campo pero aafuera
});

// keydown

campo.addEventListener('keydown', (event)=>{
  console.log("Has pulsado la tecla", String.fromCharCode(event.keyCode));
  // esta funcion sirve es cuando presionan una tecla,
  // con la funcion String.fromCharCode(event.keyCode) se sabe cual lerta
  // se le pasa al evento como parametro en el callback
});

// keypress

campo.addEventListener('keypress', (event)=>{
  console.log("Has presionado la tecla", String.fromCharCode(event.keyCode));
  // la tecla q esta presionando, la misma funcion anterior
});

// keyup

campo.addEventListener('keyup', (event)=>{
  console.log("Has soltado la tecla", String.fromCharCode(event.keyCode));
  // la tecla q esta soltando, la misma funcion anterior
});

});
