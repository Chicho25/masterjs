'user strict'

window.addEventListener('load', () => {

  var formulario = document.querySelector("#formPelis");
  var formularioDel = document.querySelector("#formBorrarPelis");
  var addpeli = "";
  var delpeli = "";
  var mostrar_peliculas = document.querySelector("#peliculas");

  formulario.addEventListener('submit', ()=>{

    addpeli =  document.querySelector("#addmovie").value;
               localStorage.setItem(addpeli, addpeli);
  });

  formularioDel.addEventListener('submit', ()=>{

    delpeli =  document.querySelector("#deletemovie").value;
               localStorage.removeItem(delpeli, delpeli);
  });

  //mostrar_peliculas.innerHTML = localStorage.getItem(addpeli);
  // cuando es un solo elemento se coloca como esta en la linea superior

  var ul = document.querySelector("#lista");
  for( var i in localStorage){
    console.log(localStorage[i]);
    if (typeof localStorage[i] == 'string') {
      var li =  document.createElement("li");
      li.append(localStorage[i]);
      ul.append(li);
    }
  }

});
