<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript">
      function tracking(){
        var all_track = document.querySelector("#track").value;
        var resultado = all_track.split(" ");
        var lista = "<ol>";
        resultado.forEach((element)=>{
            lista += "<li>" + element + "</li>";
        });
        lista += "</ol>";
        document.querySelector("#result").innerHTML=lista;
        return resultado;
      }
    </script>
  </head>
  <body>
    <form class="" action="" method="post">
        <textarea id="track" name="name" rows="8" cols="80"></textarea>
        <input type="button" name="" value="track" onclick="tracking()">
    </form>
    <span id="result">
    </span>
  </body>
</html>
