'use strict'
window.addEventListener("load", () => {
  var div_usuarios = document.querySelector("#usuario");
  var usuario = [];
  fetch('https://reqres.in/api/users?page=2')
    .then(data => data.json())
    .then(users => {
        usuario = users.data;
        console.log(usuario);

        usuario.map((user, i) =>{
          let nombre = document.createElement('h2');
          nombre.innerHTML = i + user.first_name + " " + user.last_name;

          div_usuarios.append(nombre);
        });
    });
});
