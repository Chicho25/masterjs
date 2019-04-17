'use strict'

window.addEventListener('load', ()=>{

  // memoria del navegador
  // probar si es comatible el navegador

  if (typeof(Storage) !== 'undefined') {
      console.log('Disponible');
  }else{
      console.log('Imcompatible');
  }

  // guardar datos

  localStorage.setItem("Titualo", "esto es una ponchera");

  // recuperar elemento y meterlo en la pagina web

  var elemento = localStorage.getItem("Titualo");
  console.log(elemento);
  document.querySelector("#peliculas").innerHTML = elemento;

// agregando un json al cocal storage

  var usuario = {
    nombre: "tayron",
    apellido: "arrieta",
    edad: 31
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  // reuperar el json en el local storage

  var jsonUser = JSON.parse(localStorage.getItem("usuario"));
  console.log(jsonUser);
  // limpiar el localStorage
  localStorage.clear();


});
