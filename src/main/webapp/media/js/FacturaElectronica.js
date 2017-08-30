//Jun 2014 
//Desarrollado por Office Depot 

/////////// FACTURACIÓN ELECTRÓNICA / Generar Factura Electrónica /AGREGAR CAMPOS ITU///////////////////////////////////////////////////
$(document).ready(function() {

    var MaxInputs       = 15; //Número Maximo de Campos
    var contenedor       = $("#contenedorGenFacElec"); //ID del contenedorGenFacElec
    var AddButton       = $("#agregarCampo"); //ID del Botón Agregar

    //var x = número de campos existentes en el contenedorGenFacElec
    var x = $("#contenedorGenFacElec div").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos

    $(AddButton).click(function (e) {
        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append('<div class="addBloque"><input type="text" name="mitexto[]" id="campo_'+ FieldCount +'" placeholder="ITU '+ FieldCount +'"/><a href="#" class="eliminar"><i class="icos-trashcan"></i></a></div>');
            x++; //text box increment
        }
        return false;
    });

    $("body").on("click",".eliminar", function(e){ //click en eliminar campo
        if( x > 1 ) {
            $(this).parent('div').remove(); //eliminar el campo
            x--;
        }
        return false;
    });
});
///////////////////////////////////////////

$(document).ready(function(){
	
/////////////// DIVs VISIBLE Y OCULTO EXCLUSIVO DE FACTURA ELECTRONICA TITULOS PRINCIPALES AZULES
	$(".FormasDePago #ForGenFacElec .TituloForPag").click(function(){
  		$("#ForGenFacElec .FormasDePagoOculto").toggle(500);
		$("#ForConsFacElec .FormasDePagoOculto").hide();
		$("#ForGuiaFacElec .FormasDePagoOculto").hide();
	});	
	
	$(".FormasDePago #ForConsFacElec .TituloForPag").click(function(){
  		$("#ForConsFacElec .FormasDePagoOculto").toggle(500);
		$("#ForGenFacElec .FormasDePagoOculto").hide();
		$("#ForGuiaFacElec .FormasDePagoOculto").hide();
	});	
	
	$(".FormasDePago #ForGuiaFacElec .TituloForPag").click(function(){
  		$("#ForGuiaFacElec .FormasDePagoOculto").toggle(500);
		$("#ForGenFacElec .FormasDePagoOculto").hide();
		$("#ForConsFacElec .FormasDePagoOculto").hide();
	});	
//////////GENERAR FACTURA ELECTRONICA MOSTRAR OCULTAR  OPCIONES////////////////
	$(document).ready(function(){
  		$("#GenFacElecCliente").addClass("TitSeleccionado");
	});	
	
	$("#GenFacElecCliente").click(function(){
  		$("#ContGenFacElecCliente").show(500);
	  	$("li #GenFacElecCliente").addClass("TitDisplayInLineBlock");
		$("li #GenFacElecCliente").addClass("TitSeleccionado");
		
		$("#GenFacElecRFC").removeClass("TitDisplayInLineBlock");
		$("#GenFacElecRFC").hide(500);
		$("#ContGenFacElecRFC").hide(500);
		
		$("#GenFacElecInfo").removeClass("TitDisplayInLineBlock");	
		$("#GenFacElecInfo").hide(500);
		$("#ContGenFacElecInfo").hide(500);
		
		$("#GenFacElecResultado").removeClass("TitDisplayInLineBlock");	
		$("#GenFacElecResultado").hide(500);
		$("#ContGenFacElecResultado").hide(500);
	});	
	
	
	$("li #GenFacElecRFC").click(function(){
  		$("#ContGenFacElecRFC").show(500);
		$("li #GenFacElecRFC").addClass("TitDisplayInLineBlock");
		$("li #GenFacElecRFC").addClass("TitSeleccionado");
		
		$("li #GenFacElecCliente").removeClass("TitSeleccionado");	
		$("#ContGenFacElecCliente").hide();
		
		$("li #GenFacElecInfo").removeClass("TitDisplayInLineBlock");
		$("li #GenFacElecInfo").removeClass("TitSeleccionado");
		$("li #GenFacElecInfo").hide(500);	
		$("#ContGenFacElecInfo").hide(500);
		
		$("li #GenFacElecResultado").removeClass("TitDisplayInLineBlock");
		$("li #GenFacElecResultado").removeClass("TitSeleccionado");	
		$("li #GenFacElecResultado").hide(500);
		$("#ContGenFacElecResultado").hide(500);
	});
	
	
	$("#GenFacElecInfo").click(function(){
  		$("#ContGenFacElecInfo").show();
		$("li #GenFacElecInfo").addClass("TitDisplayInLineBlock");
		$("li #GenFacElecInfo").addClass("TitSeleccionado");
		
		$("li #GenFacElecCliente").removeClass("TitSeleccionado");	
		$("#ContGenFacElecCliente").hide(500);
		
		$("li #GenFacElecRFC").removeClass("TitSeleccionado");	
		$("#ContGenFacElecRFC").hide(500);
		
		$("li #GenFacElecResultado").removeClass("TitDisplayInLineBlock");
		$("li #GenFacElecResultado").removeClass("TitSeleccionado");	
		$("li #GenFacElecResultado").hide(500);
		$("#ContGenFacElecResultado").hide(500);
		$("div #ContGenFacElecInfo").show();
		$("div #btnGenFacElecInfo").show();
	});
	
	//Desglose Impuesto IEPS input radio 
	
	$("#IEPSelec").click(function(){
  		$("li .ImpuestoIEPS").show(500);
	});	
	
	$("#IEPNoSelec").click(function(){
  		$("li .ImpuestoIEPS").hide(500);
	});	
	
	$("#IEPSelecEdit").click(function(){
  		$("li .ImpuestoIEPS").show(500);
	});	
	
	$("#IEPNoSelecEdit").click(function(){
  		$("li .ImpuestoIEPS").hide(500);
	});	
	
	//////Seccion Generar Factura Electrónica informacion de facturación para editar

	$("input#btnOtraDireccion").click(function(){
  		$(".InfoLoginRFC").hide(500);
		$(".InfoLoginRFCEdit").show(500);
	});
	
	$("input#btnRegrInfoLoginRFC").click(function(){
  		$(".InfoLoginRFCEdit").hide(500);
		$(".InfoLoginRFC").show(500);
	});
	
	//////pestañas Generar Factura Electrónica
	
	$("input#btnGenFacElecCliente").click(function(){
		$("#ContGenFacElecCliente").hide();
		$("#ContGenFacElecRFC").show(500);
		$("li #GenFacElecRFC").addClass("TitDisplayInLineBlock");
		$("li #GenFacElecRFC").addClass("TitSeleccionado");
		$("li #GenFacElecCliente").removeClass("TitSeleccionado");
		$("li #GenFacElecRFC").show();
	});	

	$("input#btnGenFacElecRFC").click(function(){
		$("div #ContGenFacElecRFC").hide(500);
		$("div #ContGenFacElecInfo").show(500);
		$("div #GenFacElecInfo").show();
		$("li #GenFacElecInfo").addClass("TitDisplayInLineBlock");
		$("li #GenFacElecInfo").addClass("TitSeleccionado");
		$("li #GenFacElecRFC").removeClass("TitSeleccionado");
		$("li #GenFacElecRFC").show(500);
		$("div #btnGenFacElecInfo").show();
	});	
	
	$("input#btnGenFacElecInfo").click(function(){
		$("div #btnGenFacElecInfo").hide(500);
		$("div #ContGenFacElecResultado").show(500);
		$("div #GenFacElecResultado").show();
		$("li #GenFacElecResultado").addClass("TitDisplayInLineBlock");
		$("li #GenFacElecResultado").addClass("TitSeleccionado");
		$("li #GenFacElecResultado").removeClass("TitSeleccionado");
		$("li #GenFacElecInfo").removeClass("TitSeleccionado");
		$("div #ContGenFacElecInfo").hide(500);
		$("li #GenFacElecInfo").show(500);
	});	

//////////FACTURACIÓN ELECTRÓNICA MOSTRAR - OCULTAR  GUIAS///////////////////////////////////////////////////
	$("#ForGuiaFacElec .FormasDePagoOculto span.btnGuiaFacElect01").click(function(){
  		$("div#ContGuiaFacElecGeneral01").toggle(500);
		$("div#ContGuiaFacElecGeneral02").hide(500);
		$("div#ContGuiaFacElecGeneral03").hide(500);
		$("div#ContGuiaFacElecGeneral04").hide(500);
		$("div#ContGuiaFacElecGeneral05").hide(500);
	});	
	
	$("#ContGuiaFacElecGeneral01 .CerrarEjemCod").click(function(){
  	$("div#ContGuiaFacElecGeneral01").hide(500);
	});	

	///
	$("#ForGuiaFacElec .FormasDePagoOculto span.btnGuiaFacElect02").click(function(){
  		$("div#ContGuiaFacElecGeneral02").toggle(500);
		$("div#ContGuiaFacElecGeneral01").hide(500);
		$("div#ContGuiaFacElecGeneral03").hide(500);
		$("div#ContGuiaFacElecGeneral04").hide(500);
		$("div#ContGuiaFacElecGeneral05").hide(500);
	});	
	
	$("#ContGuiaFacElecGeneral02 .CerrarEjemCod").click(function(){
  		$("div#ContGuiaFacElecGeneral02").hide(500);
	});	

	///
	$("#ForGuiaFacElec .FormasDePagoOculto span.btnGuiaFacElect03").click(function(){
  		$("div#ContGuiaFacElecGeneral03").toggle(500);
		$("div#ContGuiaFacElecGeneral01").hide(500);
		$("div#ContGuiaFacElecGeneral02").hide(500);
		$("div#ContGuiaFacElecGeneral04").hide(500);
		$("div#ContGuiaFacElecGeneral05").hide(500);
	});	
	
	$("#ContGuiaFacElecGeneral03 .CerrarEjemCod").click(function(){
  		$("div#ContGuiaFacElecGeneral03").hide();
	});	
	///
	$("#ForGuiaFacElec .FormasDePagoOculto span.btnGuiaFacElect04").click(function(){
  		$("div#ContGuiaFacElecGeneral04").toggle(500);
		$("div#ContGuiaFacElecGeneral01").hide(500);
		$("div#ContGuiaFacElecGeneral02").hide(500);
		$("div#ContGuiaFacElecGeneral03").hide(500);
		$("div#ContGuiaFacElecGeneral05").hide(500);
	});	
	
	$("#ContGuiaFacElecGeneral04 .CerrarEjemCod").click(function(){
  		$("div#ContGuiaFacElecGeneral04").hide();
	});	
	
	$("#ForGuiaFacElec .FormasDePagoOculto span.btnGuiaFacElect05").click(function(){
  		$("div#ContGuiaFacElecGeneral05").toggle(500);
		$("div#ContGuiaFacElecGeneral01").hide(500);
		$("div#ContGuiaFacElecGeneral02").hide(500);
		$("div#ContGuiaFacElecGeneral03").hide(500);
		$("div#ContGuiaFacElecGeneral04").hide(500);
	});	
	
	$("#ContGuiaFacElecGeneral05 .CerrarEjemCod").click(function(){
  		$("div#ContGuiaFacElecGeneral05").hide(500);
	});	
	
	$("input#btnBusquedaFac").click(function(){
  		$("#ForGenFacElec .FormasDePagoOculto").hide(500);
		$("#ForConsFacElec .FormasDePagoOculto").show();
	});	

	////////////////PARA CERRAR VENTANA DEL NAVEGADOR
	$("h2.TituloContenedorInfo i.icos-cross.icos-white").click(function(){
  		window.close();
	});	
	/////CONSULTAR FACTURA ELECTRONICA
		$(document).ready(function(){
			$("#IngresoFacElec").addClass("TitSeleccionado");
		});	 
	
	$("input#btnConsFacElec").click(function(){
  		$("#ConsultaFac").hide(500);
		$("#IngresoFacElec").removeClass("TitSeleccionado");
		$("#DescargaConsFacElec").show();
		$("#DescargaConsFacElec").addClass("TitDisplayInLineBlock");
		//$("#DescargaConsFacElec").addClass("TitSeleccionado");
		$("#DataTableBusqueda").show(500);
	});
	$("input#btnConsFacElecITU").click(function(){
  		$("#ConsultaFac").hide(500);
		$("#IngresoFacElec").removeClass("TitSeleccionado");
		$("#ConsFacelecResultado").show();
		$("#ConsFacelecResultado").addClass("TitDisplayInLineBlock");
		
		$("#ResultadoConsFacelec").show(500);
	});
	
	$("#IngresoFacElec").click(function(){
		$("#DataTableBusqueda").hide(500);
		$("#ResultadoConsFacelec").hide(500);
  		$("#ConsultaFac").show(500);
		$("#DescargaConsFacElec").removeClass("TitDisplayInLineBlock");
		$("#DescargaConsFacElec").hide();
		$("#ConsFacelecResultado").removeClass("TitDisplayInLineBlock");
		$("#ConsFacelecResultado").hide();
		$("#IngresoFacElec").addClass("TitSeleccionado");
	});
	
	$("input#btonRegresarIngresoFacElec").click(function(){
  		$("#ResultadoConsFacelec").hide(500);
		$("#ConsultaFac").show(500);
		$("#ConsFacelecResultado").removeClass("TitDisplayInLineBlock");
		$("#ConsFacelecResultado").hide();
		$("#IngresoFacEle").show();
		$("#IngresoFacEle").addClass("TitDisplayInLineBlock");
		$("#IngresoFacElec").addClass("TitSeleccionado");
		
	});
	
});

