<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Formularios</title>
    <script type="text/javascript" src="js/32-ejercicio-formulario.js"></script>
  </head>
  <body>
    <!--
    1. formulario campos: nombre, apellidos y edad
    2. boton de enviar el formulario: evento submit
    3. mostrar los datos por pantalla
    4. tener un boton que al darle click nos muestra los datos actuales del formulario
    -->
    <h1>Ejercicios DON, EVENTOS, FUNCIOSNES... curso js</h1>
    <form id="formulario" action="#" method="post" onsubmit="return false;">
      <p>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value="">
      </p>
      <p>
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" name="apellido" value="">
      </p>
      <p>
        <label for="edad">Edad</label>
        <input type="number" id="edad" name="edad" value="">
      </p>
      <button id="form_submit" name="">Enviar</button>
      <button id="form_current" name="">Actuales</button>
    </form>
    <h3>Enviados</h3>
    <div class="enviados">

    </div>
    <h3>actuales</h3>
    <div class="actuales">

    </div>
  </body>
</html>
