function checkout() {
	
	var nameContact = $("#nameContact").val();
	var comment1 = $("#comment1").val();
	var comment2 = $("#comment2").val();
	var comment3 = $("#comment3").val();
	var ordenCompra = $("#ordenCompra").val();
	var paymentType = "";
	var tipoTarjeta = "";
	
	var codeZone = "";
	if ( $("#codeZone").length ) {
		codeZone = 	$("#codeZone").val();
	}	
	var codPostal = "";
	if ( $("#codPostal").length ) {
		codPostal = $("#codPostal").val();
	}	
	var account = "";
	if ( $("#account").length ) {
		account = $("#account").val();
	}		
	var tagIDCheckOut = 0;
	if ( $("#tagIDCheckOut").length ) {
		tagIDCheckOut = $("#tagIDCheckOut").val();
	}	
	var flagUrgent = "";
	if ( $("#flagUrgent").length ) {
		flagUrgent = $("#flagUrgent").val();
	}	
	var deliveryType = "";
	if ( $("#deliveryType").length ) {
		deliveryType = $("#deliveryType").val();
	}	
	var flagPriority = "";
	if ( $("#flagPriority").length ) {
		flagPriority = $("#flagPriority").val();
	}	
	var dependentUsers = "";
	if ( $("#dependentUsers").length ) {
		dependentUsers = $("#dependentUsers").val();
	}

	if( $("#frmCheckOut input[name='paymentType']:radio").is(':checked')) { 
		paymentType =  $('input:radio[name=paymentType]:checked').val();	
		tipoTarjeta = $('input:radio[name=tipoTarjeta]:checked').val();
		$('#loading').show();
		$.ajax({
			type : "POST",
			url : "CheckoutEnd",
			data : $("#frmCheckOut").serialize()+
					"&nameContact="+nameContact+
					"&comment1="+comment1+
					"&comment2="+comment2+
					"&comment3="+comment3+
					"&ordenCompra="+ordenCompra,
					//"&codeZone="+codeZone+
					//"&codPostal="+codPostal+
					//"&account="+account+
					//"&tagIDCheckOut="+tagIDCheckOut+
					//"&flagUrgent="+flagUrgent+
					//"&deliveryType="+deliveryType+
					//"&flagPriority="+flagPriority+
					//"&dependentUsers="+dependentUsers,
			success : function (response) {
				$("#Content").html(response);
				$('#loading').hide();
				updateMiniCart();
			},
			error : function(e) {
				$('#loading').hide();
			},
			cache: false
		});
	} else {
		$(function() {
			$("#dialog-message-payment").dialog({
				minWidth : 400,
				modal : true,
				buttons : {
					Ok : function() {
						$(this).dialog("close");
						return;
					}
				}
			});
		});
	}

}


function addOrdenCompra() {
	
	if($('#ordenCompra').val().length < 1){
		alert('Se tiene que capturar la orden de compra primero');
		return;
	}
	
	$("#idItemsError").css('display', 'none !important');
	$("#idAmountError").css('display', 'none !important');
	dialog=$("#dialog-message-add-purcharse-order").dialog({
        minWidth : 500,
        modal : true,
        buttons : {
            Ok : function() {
            	
            	var articulos = $("#idArticulos").val();
            	var montoOrden = $("#idMontoOrder").val().replace(",","");
            	var ordenCompra = $("#ordenCompra").val();
            	$('#loading').show();          	
            	$.ajax({
        			type : "POST",
        			url : "ValidatePurcharseOrder",
        			data : $("#frmCheckOut").serialize()+
        					"&numArticulos="+articulos+
        					"&totalOrden="+montoOrden,
        			success : function (response) {
        				var errors = false;
        				$('#loading').hide();
        				if (response == 'ERROR_ITEMS') {
        					$("#idItemsError").show();
        					errors = true;
        				} else {
        					$("#idItemsError").css('display', 'none !important');
        					errors = false;
        				}
        				if (response == 'ERROR_AMOUNT') {
        					$("#idAmountError").show();
        					errors = true; 
        				} else {
        					$("#idAmountError").css('display', 'none !important');
        					errors = false;
        				}
        				if (!Boolean(errors)) {
        					$("#dialog-message-add-purcharse-order").dialog("close");
			        		$('#loading').show();
			        		$('#frameFileUpload').contents().find('#idFormOrderCompraUpload').submit();
							$('#frameFileUpload').contents().find('#idFormOrderCompraUpload').submit(function (ev) {
						        ev.preventDefault();
						    });
							$('#loading').hide();
						    $('#idBtnAddPurcharseOrder').attr('disabled', 'true');
						    dialog.dialog( "close" );
						    return false;
        				}
        			},
        			error : function(jqXHR, textStatus, errorThrown) {
        				$(this).dialog("close");
		        		return false;
        			},
        			cache: false
        		});
            },
            Cancel : function() {
            	$(this).dialog("close");
                return;
            }
        }
    });
}