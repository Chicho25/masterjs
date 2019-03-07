'use strict'

function cambiarColor(color){
  caja.style.background = color;
}

// condeguir elementos con un id concreto

/* var caja = document.querySelector("#miCaja");
caja.innerHTML = "Modificacion";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "green";
caja.className = "Algo";
console.log(caja);*/

// conseguir elemento por su etiqueta

var todos_div = document.getElementsByTagName('div');
todos_div[1].innerHTML = "este es el nuevo contenido";
console.log(todos_div);

var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");
seccion.append(hr);

//todos_div.forEach((contenido, indice)=>{ // no se puede recorrer etiquetas con foreach
    //contenido.innerHTML = "Este es el contenido";
var contenido;
for(contenido in todos_div){
  if(typeof todos_div[contenido].textContent == 'string'){
    var paorrafo = document.createElement("p"); // se crea la etiqueta p
    var texto = document.createTextNode(todos_div[contenido].textContent);// se sustrae el texto de los div que estan dentro de un array
    paorrafo.append(texto); // se abren ls parrafos y se mete el texto
    document.querySelector("#miSeccion").append(paorrafo); // se abre la etiqueta y se meten los parrafos con los contenidos ya trabajados
  }
}
//});

// conseguir elementos por su clase
var div_rojo = document.getElementsByClassName("rojo");
var div_amarillo = document.getElementsByClassName("amarillo");
console.log(div_amarillo[1]);
for (var div in div_rojo) {
  if (div_rojo[div].className == "rojo") {
    div_rojo[div].style.background = "red";
  }
}

console.log(div_rojo);
