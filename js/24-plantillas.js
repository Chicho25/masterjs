'use strict'

// plantillas de texto
var nombre = prompt("Tu nombre");
var apellido = prompt("Tu apellido");

var texto = " Mi nombre es: "+ nombre + " <br/> Mi apellido es: " + apellido;

var texto2 = `
<h1>Mi nombre es: ${nombre}</h1>
<h1>Mi apellido es: ${apellido}</h1>
`;

document.write(texto);
document.write(texto2);
