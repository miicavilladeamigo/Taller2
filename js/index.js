$(document).ready(function(){

  function mostrarResultado(){  // hacemos una función que muestre el dato y oculte el resto.
	$(".oculto").show();
	$(".encuesta").hide();
}
  $( "#boton1" ).click(function() { // cuando se realiza la acción sobre algún botón (acá habría que hacer lo mismo con los otros botones
    mostrarResultado(); //invocamos a la función
  });
  $( "#boton2" ).click(function() { // cuando se realiza la acción sobre algún botón (acá habría que hacer lo mismo con los otros botones
    mostrarResultado(); //invocamos a la función
  });
  $( "#boton3" ).click(function() { // cuando se realiza la acción sobre algún botón (acá habría que hacer lo mismo con los otros botones
    mostrarResultado(); //invocamos a la función
  });
  $( "#boton4" ).click(function() { // cuando se realiza la acción sobre algún botón (acá habría que hacer lo mismo con los otros botones
    mostrarResultado(); //invocamos a la función
  });

});
