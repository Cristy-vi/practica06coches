<script type="text/javascript">

  var mensajeparausuario;
  var nombreusuario = prompt("Introduzca su nombre: ");

  //Declaro que si está vacio lo muestre en "mensajeparausuario"

  if (nombreusuario == null || nombreusuario == "") {
    mensajeparausuario = "Has cancelado o introducido el nombre vacío";
  } else {


    //Esto se queda en una variable llamada "mensajeparausuario"
    mensajeparausuario = "Su nombre es " + nombreusuario;
      }

      //Llamo a "mensajeparausuario"
  document.write(mensajeparausuario);

  //fin del script para el nombre
  
  </script>


