
$(document).ready(function(){
	
//CARRUSEL  PARA IMAGENES DE ZOOM

	//descomentar cualquiera de las siguientes dos lineas, para que el
	//carrusel se desplace automaticamente cada 3000 milisegundos (3 segundos)
	//setInterval("$('#divIzquierda').click()",3000);
	//setInterval("$('#divDerecha').click()",3000);
	
	//evento clic de la flecha izquierda
	$('#divIzquierda').click(function(){
		//tomamos el ultimo elemento de la lista y lo colocamos en la ultima posicion
		$('#divCentro ul').prepend($('#divCentro ul li:last'));
	});
	
	//evento clic de la flecha derecha
	$('#divDerecha').click(function(){
		//tomamos el primer elemento de la lista y lo trasladamos a la primera posicion
		$('#divCentro ul').append($('#divCentro ul li:first'));
	});

//CARRUSEL  PARA  CONTENEDOR DE  PRODUCTOS

	//descomentar cualquiera de las siguientes dos lineas, para que el
	//carrusel se desplace automaticamente cada 3000 milisegundos (3 segundos)
	//setInterval("$('#divIzq').click()",3000);
	setInterval("$('#divDer').click()",3000);

	  
	//evento clic de la flecha izquierda
	$('#divIzq').click(function(){
		//tomamos el ultimo elemento de la lista y lo colocamos en la ultima posicion
		$('#divCentroModel .CarruselCentral').prepend($('#divCentroModel .CarruselCentral .ContenedorCarrusel:last'));
		
		// $('#divCentroModel .CarruselCentral').animate({width:'toggle'});
		
	});
	//evento clic de la flecha derecha
	$('#divDer').click(function(){
		//tomamos el primer elemento de la lista y lo trasladamos a la primera posicion
		$('#divCentroModel .CarruselCentral').append($('#divCentroModel .CarruselCentral .ContenedorCarrusel:first'));
	});

});


//