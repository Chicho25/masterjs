'use strict'

// json

window.addEventListener('load', () => {

var pelicula = {
      titulo: 'Deadpool',
      year: 2016,
      pais: 'EEUU'
};

console.log(pelicula); // mostrando el json
console.log(pelicula.titulo); // mostrando una propiedad del json
pelicula.titulo = "DeadPool 2"; // cambiar la propiedad de un objeto
console.log(pelicula.titulo);

// json en array
var otra_pelicula = [{titulo: 'Cerdos y diamantes', year: '2000', pais: 'Inglaterra'}, pelicula];
console.log(otra_pelicula);

// recorrer los array

var caja_peliculas = document.querySelector("#peliculas");
for (var variable in otra_pelicula) {
    var p = document.createElement('p');
    p.append(otra_pelicula[variable].titulo + ' - ' + otra_pelicula[variable].year);
    caja_peliculas.append(p);
  //if (object.hasOwnProperty(variable)) {
  //  console.log('paso');
  //}
}

});
