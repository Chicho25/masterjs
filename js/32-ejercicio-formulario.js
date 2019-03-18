'use strict'

window.addEventListener('load', () =>{
  console.log('Peinando carga');
  var formulario = document.querySelector("#formulario");
  var form_send = document.querySelector("#form_submit");
  var form_current = document.querySelector("#form_current");
  var nombre = document.querySelector("#nombre");
  var apellido = document.querySelector("#apellido");
  var edad = document.querySelector("#edad");
  var enviados = document.querySelector(".enviados");
  var actuales = document.querySelector(".actuales");
  var limpiar = "";
  var array_campos = [nombre, apellido, edad];

  formulario.addEventListener('submit', () => {
    console.log('Envento submit');
  });

  form_send.addEventListener('click', () => {
    console.log('Boton enviar');
    enviados.innerHTML ="Los datos enviados son <br> Nombre: "+ nombre.value +" <br> Apellido: "+ apellido.value +" <br> Edad: "+ edad.value +"";

    array_campos.forEach((valor) => {
      valor.value = limpiar;
    });

  });

  form_current.addEventListener('click', () => {
    console.log('Boton enviar');
    actuales.innerHTML ="Los datos enviados son <br> Nombre: "+ nombre.value +" <br> Apellido: "+ apellido.value +" <br> Edad: "+ edad.value +"";

  });

});
