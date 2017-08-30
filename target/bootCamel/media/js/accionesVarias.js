
$(document).ready(function(){

/// PARA AYUDA
$("li.TitComplPresupuesto i.icos-cross.icos-white").click(function(){
  	$("#HelpNavegacion, #HelpLogout, #HelpSearch, #HelpCarrito, #HelpList, #HelpBuy, #HelpReports, #HelpFlujoPedidos").hide (500);
	$("#BtnHelpNavegacion, a#BtnHelpLogout, #BtnHelpSearch, #BtnHelpCarrito, #BtnHelpLista, #BtnHelpBuy, #BtnHelpReports, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp")
});
$("#BtnHelpNavegacion").click(function(){
  	$("#HelpNavegacion").toggle (500);
  	$("#HelpLogout, #HelpSearch, #HelpCarrito, #HelpList, #HelpBuy, #HelpReports, #HelpFlujoPedidos").hide (500);
	$("a#BtnHelpNavegacion").addClass("FondoGrisHelp");
	$("a#BtnHelpLogout, #BtnHelpSearch,#BtnHelpCarrito, #BtnHelpLista, #BtnHelpBuy, #BtnHelpReports, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp");
});
$("#BtnHelpLogout").click(function(){
  	$("#HelpLogout").toggle (500);
  	$("#HelpNavegacion, #HelpSearch, #HelpCarrito, #HelpList, #HelpBuy, #HelpReports, #HelpFlujoPedidos").hide (500);
	$("#BtnHelpLogout").addClass("FondoGrisHelp");
	$("#BtnHelpNavegacion, #BtnHelpSearch,#BtnHelpCarrito, #BtnHelpLista, #BtnHelpBuy, #BtnHelpReports, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp");
});
$("#BtnHelpSearch").click(function(){
  	$("#HelpSearch").toggle (500);
  	$("#HelpNavegacion, #HelpLogout, #HelpCarrito, #HelpList, #HelpBuy, #HelpReports, #HelpFlujoPedidos").hide (500);
	$("#BtnHelpSearch").addClass("FondoGrisHelp");
	$("#BtnHelpNavegacion, a#BtnHelpLogout, #BtnHelpCarrito, #BtnHelpLista, #BtnHelpBuy, #BtnHelpReports, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp");
});
$("#BtnHelpCarrito").click(function(){
  	$("#HelpCarrito").show (500);
  	$("#HelpNavegacion, #HelpLogout, #HelpSearch, #HelpList, #HelpBuy, #HelpReports, #HelpFlujoPedidos").hide (500);
	$("#BtnHelpCarrito").addClass("FondoGrisHelp");
	$("#BtnHelpNavegacion, a#BtnHelpLogout, #BtnHelpSearch, #BtnHelpLista, #BtnHelpBuy, #BtnHelpReports, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp");
});
$("#BtnHelpLista").click(function(){
  	$("#HelpList").show (500);
  	$("#HelpNavegacion, #HelpLogout, #HelpSearch, #HelpCarrito, #HelpBuy, #HelpReports, #HelpFlujoPedidos").hide (500);
	$("#BtnHelpLista").addClass("FondoGrisHelp");
	$("#BtnHelpNavegacion, a#BtnHelpLogout, #BtnHelpSearch, #BtnHelpCarrito, #BtnHelpBuy, #BtnHelpReports, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp");
});
$("#BtnHelpBuy").click(function(){
  	$("#HelpBuy").show (500);
  	$("#HelpNavegacion, #HelpLogout, #HelpSearch, #HelpCarrito, #HelpList, #HelpReports, #HelpFlujoPedidos").hide (500);
	$("#BtnHelpBuy").addClass("FondoGrisHelp");
	$("#BtnHelpNavegacion, a#BtnHelpLogout, #BtnHelpSearch, #BtnHelpCarrito, #BtnHelpLista, #BtnHelpReports, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp");
});
$("#BtnHelpReports").click(function(){
  	$("#HelpReports").show (500);
  	$("#HelpNavegacion, #HelpLogout, #HelpSearch, #HelpCarrito, #HelpList, #HelpBuy, #HelpFlujoPedidos").hide (500);
	$("#BtnHelpReports").addClass("FondoGrisHelp");
	$("#BtnHelpNavegacion, a#BtnHelpLogout, #BtnHelpSearch, #BtnHelpCarrito, #BtnHelpLista, #BtnHelpBuy, #BtnHelpFlujoPedidos").removeClass("FondoGrisHelp");
});
$("#BtnHelpFlujoPedidos").click(function(){
  	$("#HelpFlujoPedidos").show (500);
  	$("#HelpNavegacion, #HelpLogout, #HelpSearch, #HelpCarrito, #HelpList, #HelpBuy, #HelpReports").hide (500);
	$("#BtnHelpFlujoPedidos").addClass("FondoGrisHelp");
	$("#BtnHelpNavegacion, a#BtnHelpLogout, #BtnHelpSearch, #BtnHelpCarrito, #BtnHelpLista, #BtnHelpBuy, #BtnHelpReports").removeClass("FondoGrisHelp");
});

 //////PREGUNTAS FRECUENTES
$( "ul.Pregunta li.AumentaPregunta" )
  .attr( "id", function( arr ) {
    return "Pregunta" + arr;
  })
  .each(function() {
    $( "ul.Pregunta li.AumentaPregunta", this ).html();
});
   
$("ul.Pregunta li#Pregunta0 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta0 div.Respuesta").toggle (500);
});
$("ul.Pregunta li#Pregunta1 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta1 div.Respuesta").toggle (500);
});
$("ul.Pregunta li#Pregunta2 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta2 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta3 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta3 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta4 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta4 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta5 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta5 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta6 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta6 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta7 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta7 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta8 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta8 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta9 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta9 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta10 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta10 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta11 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta11 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta12 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta12 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta13 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta13 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta14 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta14 div.Respuesta").toggle (500);
});
$("ul.Pregunta li#Pregunta15 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta15 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta16 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta16 div.Respuesta").toggle (500);
});		
$("ul.Pregunta li#Pregunta17 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta17 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta18 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta18 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta19 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta19 div.Respuesta").toggle (500);
});	
$("ul.Pregunta li#Pregunta20 span.TituloForPag").click(function(){
  	$("ul.Pregunta li#Pregunta20 div.Respuesta").toggle (500);
});	
//MENU DE DEPARTAMENTOS////////////
  
  $("div#menuSubnivel02 span.NavegaMenuMovil").click(function(){
    	$("div#menuSubnivel02").hide();
  });
  $("div#menuSubnivel03 span.NavegaMenuMovil").click(function(){
    	$("div#menuSubnivel03").hide();
  });
  $("div#menuSubnivel04 span.NavegaMenuMovil").click(function(){
    	$("div#menuSubnivel04").hide();
  });

  
//tooltip para tablas con a href class="conEspecifica"
$("a.conEspecifica").mouseenter(function(){
    	$("span.Especifica").css({"display":"block"});
  });
 $("a.conEspecifica").mouseleave(function(){
    	$("span.Especifica").css({"display":"none"});
  });

//Promociones
 $("li.Monto input").mouseenter(function(){
    	$("span.Especifica").css({"display":"inline-block"});
  });
 $("li.Monto input").mouseleave(function(){
    	$("span.Especifica").css({"display":"none"});
  });

 if (typeof(Storage) !== "undefined") {
	if(localStorage.getItem("storage-align")!=null && localStorage.getItem("storage-align")=='ContendorVertical'){
		$("div#ContendorProducto").removeClass("ContendorHorizontal");
		$("div#ContendorProducto").addClass("ContendorVertical");
		$("div#ContendorProductoSmall").removeClass("ContendorHorizontal");
		$("div#ContendorProductoSmall").addClass("ContendorVertical");
		$("#Vistas .icos-VistaVert").addClass("icos-VistaVertSelecionado");
		$("#Vistas .icos-VistaHor").removeClass("icos-VistaHorSelecionado");
	} 
 }

$("#Vistas .icos-VistaVert").click(function(){
		$("div#ContendorProducto").removeClass("ContendorHorizontal");
		$("div#ContendorProducto").addClass("ContendorVertical");
		localStorage.setItem("storage-align", "ContendorVertical");
	});	
$("#Vistas .icos-VistaHor").click(function(){
		$("div#ContendorProducto").removeClass("ContendorVertical");
		$("div#ContendorProducto").addClass("ContendorHorizontal");
		localStorage.setItem("storage-align", "ContendorHorizontal");
	});	
   
	
	if($("#Vistas .icos-VistaHor").attr("class") && $("#Vistas .icos-VistaVert").attr("class")){
	    var selecIdxHor = $("#Vistas .icos-VistaHor").attr("class").indexOf("Selecionado");
	    var selecIdxVert = $("#Vistas .icos-VistaVert").attr("class").indexOf("Selecionado");
	    
	    if(selecIdxHor > -1){
	    	$("div#ContendorProductoSmall").removeClass("ContendorVertical");
			$("div#ContendorProductoSmall").addClass("ContendorHorizontal");
			$("#Vistas .icos-VistaHor").addClass("icos-VistaHorSelecionado");
			$("#Vistas .icos-VistaVert").removeClass("icos-VistaVertSelecionado");
			$("div#ContendorProductoSmall").css({"text-align":"left !important"});    	
	    }else if(selecIdxVert > -1){
	    	$("div#ContendorProductoSmall").removeClass("ContendorHorizontal");
			$("div#ContendorProductoSmall").addClass("ContendorVertical");
			$("#Vistas .icos-VistaVert").addClass("icos-VistaVertSelecionado");
			$("#Vistas .icos-VistaHor").removeClass("icos-VistaHorSelecionado");    	
	    }else{
	    	$("div#ContendorProductoSmall").addClass("ContendorVertical");
	    	$("#Vistas .icos-VistaHor").addClass("icos-VistaHorSelecionado");
	    }
	}

$("#Vistas .icos-VistaVert").click(function(){
		$("div#ContendorProductoSmall").removeClass("ContendorHorizontal");
		$("div#ContendorProductoSmall").addClass("ContendorVertical");
		$("#Vistas .icos-VistaVert").addClass("icos-VistaVertSelecionado");
		$("#Vistas .icos-VistaHor").removeClass("icos-VistaHorSelecionado");
	});	
$("#Vistas .icos-VistaHor").click(function(){
		$("div#ContendorProductoSmall").removeClass("ContendorVertical");
		$("div#ContendorProductoSmall").addClass("ContendorHorizontal");
		$("#Vistas .icos-VistaHor").addClass("icos-VistaHorSelecionado");
		$("#Vistas .icos-VistaVert").removeClass("icos-VistaVertSelecionado");
		$("div#ContendorProductoSmall").css({"text-align":"left !important"});
	});	
//Afecta a todos los INPUT SELECCIONADOS
	$("input").focus(function(){
		$(this).css("-webkit-box-shadow","0px 0px 5px rgba(17,138,222,1)");
	  });
	  $("input").blur(function(){
		$(this).css("-webkit-box-shadow","none");
	  });

//Afecta a TODOS los INPUTS contenidos en InfoCuenta	
  $("div#InfoCuenta input").focus(function(){
    $(this).css("background-color","#FBFBFB");
  });
  $("div#InfoCuenta input").blur(function(){
    $(this).css("background-color","#ffffff");
  });
  
//para quitar fondo pre-establecido al imput del HEADER
  $("input.InputBuscar").focus(function(){
    $(this).css("-webkit-box-shadow","none");
  });
  $("input.InputBuscar").blur(function(){
    $(this).css("-webkit-box-shadow","none");
  });  

//Quitar y poner fondo al imput de los  botones gris "añadir a carrito" del CHECKOUT afectados por Inputs contendios en infoCuenta
  $("input.btn-info").focus(function(){
    $(this).css("background-color","#666");
  });
  $("input.btn-info").blur(function(){
    $(this).css("background-color","#666");
  });
  
  $("input.button").focus(function(){
    $(this).css("background-color","#0066FF");
  });
  $("input.button").blur(function(){
    $(this).css("background-color","#0588D3");
  });

// DIVs VISIBLE Y OCULTO EXCLUSIVO DE CHECK OUT

	$(".InfoRestriccionesPago span.Restricciones").click(function(){
  	$("div.RestriccionesPagoOculto").show(500);
	});	
	$(".InfoRestriccionesPago span.CerrarEjemCod").click(function(){
  	$("div.RestriccionesPagoOculto").hide(500);
	});	
	
	$(".FormasDePago #ForDifForDePag .TituloForPag").click(function(){
  	$("#ForDifForDePag .FormasDePagoOculto").toggle(500);
	});	
	
	$(".FormasDePago #ForPagoEfectivo .TituloForPag").click(function(){
  	$("#ForPagoEfectivo .FormasDePagoOculto").toggle(500);
	});	
	
	$(".FormasDePago #ForDepositoBancario .TituloForPag").click(function(){
  	$("#ForDepositoBancario .FormasDePagoOculto").toggle(500);
	});	
	
	$(".FormasDePago #ForCredDebito .TituloForPag").click(function(){
  	$("#ForCredDebito .FormasDePagoOculto").toggle(500);
	});	
	
	$(".FormasDePago #ForPayPal01 .TituloForPag").click(function(){
  	$("#ForPayPal01 .FormasDePagoOculto").toggle(500);
	});	
	
	$(".FormasDePago #ForCheque .TituloForPag").click(function(){
  	$("#ForCheque .FormasDePagoOculto").toggle(500);
	});	
	
	$(".FormasDePago #ForCupon .TituloForPag").click(function(){
  	$("#ForCupon .FormasDePagoOculto").toggle(500);
	});	
	
	$(".FormasDePago #ForTargReg .TituloForPag").click(function(){
  	$("#ForTargReg .FormasDePagoOculto").toggle(500);
	});	
	
	$(".DebitoOnLine").addClass("FondoGrisActived");
	
	$(".CreditoOnLine").click(function(){
		$("#ContDebitoOnLine").hide();
		$("#ContCreditoOnLine").show(500);
		$(".DebitoOnLine").addClass("FondoGrisActived");
		$(".CreditoOnLine").removeClass("FondoGrisActived");/////////////////////
	});	
	$(".DebitoOnLine").click(function(){
		$("#ContCreditoOnLine").hide();
  		$("#ContDebitoOnLine").show(500);
		$(".CreditoOnLine").addClass("FondoGrisActived");
		$(".DebitoOnLine").removeClass("FondoGrisActived");
	});	
	
	$("#PoliticaCredito").click(function(){
  	$("#OcultaPoliticaCredito").toggle(500);
	});	
	$(".CombinaValPagos").click(function(){
  	$(".OcultaCombinaValPagos").toggle(500);
	});		
	$("#PoliticaDeposito").click(function(){
  	$("#OcultaPoliticaDeposito").toggle(500);
	});	

	$("#PoliticaCheque").click(function(){
  	$("#OcultaPoliticaCheque").toggle(500);
	});	
	
	$("#SeleccionAmexCheck").click(function(){
  	$("#CamposAmex").show(500);
	});	
	
	$("#SeleccionVisaMasterCheck").click(function(){
  	$("#CamposAmex").hide(500);
	});	
	
	$("#CamposCreditoDebito div span.MuestraEjemCodigo").click(function(){
  	$("div.EjemCodigoVerificador").show(500);
	});	
	
	$("#ForCredDebito span.CerrarEjemCod").click(function(){
  	$("div.EjemCodigoVerificador").hide(500);
	});	
	
	$("#limpiaListaPagos").click(function(){
  	$("#ForDifForDePag .FormasDePagoOculto ul li ul.OpcionVaciar").empty();
	});	
	
	


///////////////PROYECCION PRESUPUESTAL/////////

	$("ul.PeriodoPresLista li.TitComplPresupuesto i.icos-cross.icos-white").click(function(){
  	$("div.PeriodoPresupuesto").hide(500);
	});	
	
	$("table.Presupuesto a.SelecPresupuesto").click(function(){
		$("div.PeriodoPresupuesto").hide(0);
  		$("div.PeriodoPresupuesto").show(500);
	});	
	
	$("table.Presupuesto a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr td").removeClass("FondoColor");
	});	
	////Optimizar  los siguientes para poner la variable  #ID 
	
	$("table.Presupuesto tr#Usuario_01 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_01 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_02 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_02 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_03 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_03 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_04 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_04 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_05 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_05 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_06 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_06 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_07 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_07 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_08 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_08 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_09 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_09 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_10 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_10 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_11 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_11 td").addClass("FondoColor");
	});	
	$("table.Presupuesto tr#Usuario_12 a.SelecPresupuesto").click(function(){
		$("table.Presupuesto tr#Usuario_12 td").addClass("FondoColor");
	});	
//////TERMINA PROYECCIÓN PRESUPUESTAL
});

/////EMPIEZA ACCORDION

	$(function() {
		var icons = {
			header: "ui-icon-circle-arrow-e",
			headerSelected: "ui-icon-circle-arrow-s"
		};
		$( ".ZonaAccordion .accordion" ).accordion({
			icons: icons
		});
		$( "#toggle" ).button().toggle(function() {
			$( ".ZonaAccordion .accordion" ).accordion( "option", "icons", false );
		}, function() {
			$( ".ZonaAccordion .accordion" ).accordion( "option", "icons", icons );
		});
	});
   
	function mostrarAcordion() {
		$(".ZonaAccordion .accordion .Visible").addClass("Acordionvisible");
	   $(".Acordionvisible").slideDown();
	}
	function reiniciarAcordion() {
		 $("div").removeClass("Acordionvisible");
	}
///TERMINA ACCORDION	
	
	
	function alfaNumerico(event)
	{
	var key;
	var keychar;

	if (window.event)
	   key = window.event.keyCode;
	else if (event)
	   		key = event.which;
		  else
			return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();

	// control keys
	if ((key==null) || (key==0) || (key==8) || 
	    (key==9) || (key==13) || (key==27) )
	   return true;

	// alphas and numbers
	else if ((("abcdefghijklmnopqrstuvwxyz0123456789").indexOf(keychar) > -1)){
	   		return true;
		}else
	   		return false;
	}

	function isAlfaNumerico(cadena) {
	//ABCDEFGHIJKLMNPQRSTUVWXYZ
		var letra = false;
		var numero = false;
		for (i=0; i<cadena.length; i++) {
			if ((("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ").indexOf(cadena.charAt(i),0) > -1))
				letra = true;
			else if ((("0123456789").indexOf(cadena.charAt(i),0) > -1))
				numero = true;
		}
		if (letra && numero)
			return true;
		else 
			return false
	}
