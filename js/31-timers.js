'use strict'

window.addEventListener('load', ()=>{
  // timers
  // funcion antual para el tiempo repetitivo
  //var tiempo = setInterval(()=>{
  //  console.log('Intervalo Ejecutado');
  //}, 3000);

 // con condicionales

function intervalo(){

 var h1 = document.querySelector('h1');
 var p = document.querySelector('p');

 var tiempo = setInterval(()=>{ // se ejecuta infinitamente
    if (h1.style.fontSize == "30px") {
      h1.style.fontSize = "50px"
    }else{
      h1.style.fontSize = "30px"
    }
    console.log('Intervalo Ejecutado');
  }, 3000);

  var tiempo2 = setTimeout(()=>{ // solo se ejecura una vez
     if (p.style.fontSize == "30px") {
       p.style.fontSize = "50px"
     }else{
       p.style.fontSize = "30px"
     }
     console.log('Parrafo Ejecutado');
   }, 3000);

   var arra_time = [tiempo, tiempo2];

   return arra_time;
}

  var tiempo = intervalo();

   // Detener el intervalo
   var stop = document.querySelector("#stop");
   stop.addEventListener('click', ()=>{
      console.log("Se detuvo todo");
      clearInterval(tiempo[0]);
   });

   // Iniciar el intervalo
   var star = document.querySelector("#star");
   star.addEventListener('click', ()=>{
     console.log("Se inicio todo");
     intervalo();
   });

});
