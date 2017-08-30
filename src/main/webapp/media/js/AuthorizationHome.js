function mostrarOrdenes() {
	buscarOrdenesPendientes();	
}

function setAllCheck() {  
	for (i=0;i<document.idTablaOrden.elements.length;i++) { 
		if(document.idTablaOrden.elements[i].type == "checkbox")
			if(document.idTablaOrden.authAll.checked == 1)
				document.idTablaOrden.elements[i].checked=1 ;
			else if(document.idTablaOrden.authAll.checked == 0)
					document.idTablaOrden.elements[i].checked=0;
	} 
	setAllAuthorization();
}

function buscarOrdenesPendientes() {
	
	$('#loading').show();
	$.ajax({
        type : "GET",
        url : "SearchOrdersAuthorization?cache="+ (new Date()).getTime(),
        success : function(response) {
        	  $('#loading').hide();
              $("#Content").html(response); //divOrdenesPendientes
              
        },
        error : function(e) {
        	$('#loading').hide();
        },
		cache: false
  });
}

function setAuthorization(numOrder) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "SetOrderForAuthorization",
		data : "order=" + numOrder + "&auth="+document.getElementById(numOrder).checked+"&cache="+ (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
		},
		error : function(e) {
			$('#loading').hide();
		},
		cache: false
	});
}

function setAllAuthorization() {
	
	
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "SetAllOrdersForAuthorization",
		data : "auth="+document.getElementById('authAll').checked+"&cache="+ (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
		},
		error : function(e) {
		},
		cache: false
	});
}

function cancelarOrden(numContract) {
	$('#loading').show();
    $("#idBtnCancel").prop('disabled', true);
    $.ajax({
    	type: "POST",
    	url: "CancelOrderAuthorization",
        data: "contract="+numContract+"&cache="+ (new Date()).getTime(),
        success: function(response) {
        	$("#idBtnCancel").prop('disabled', false);
        	$("#Content").html(response);
        	$('#loading').hide();
        },
        error : function(e) {
        	$('#loading').hide();
		},
		cache: false
    });
}

function processAuthOrders() {
	$("#idBtnAuth").prop('disabled', true);
	var motivo = $('#motivoAuth').val();
	var nomUsu = $('#nomUsuAuth').val();
	
	$('#loading').show();
	$.ajax({
		type : "GET",
		url : "ProcessAuthorizeOrders",
		data : "motivo=" + motivo + "&nomUsu=" + nomUsu+"&token="+ (new Date()).getTime(),
		success : function (response) {
			$("#idBtnAuth").prop('disabled', false);
			$("#Content").html(response);
			$('#loading').hide();
		},
		error : function (e) {
			alert('Error' + e);
		},
		cache: false
	});
}

function changeFilter(numberContract) {
	var city = $("#idCityFilter").val();
	var user = $("#idUserFilter").val();
	$('#loading').show();
	$.ajax({
        type : "POST",
        url : "FilterOrdersAuthorization",
        data: "city="+city+"&user="+user+"&numberContract=" + numberContract+"&cache="+ (new Date()).getTime(),
        success : function(response) {
              $("#Content").html(response);
              $('#loading').hide();
        },
        error : function(e) {
        	$('#loading').hide();
        },
		cache: false
  });
	
}

function showOrderDetail(numOrder, numberContract) {
	var city = $("#idCityFilter").val();
	var user = $("#idUserFilter").val();
	$('#loading').show();
	$.ajax({
		type : "GET",
		url : "ViewOrderAuthorizationDetailList",
		data : "orderId=" + numOrder + "&numberContract=" + numberContract + "&userSelected=" + user + "&citySelected=" +city+"&cache="+ (new Date()).getTime(),
		success : function (response) {
			$("#Content").html(response); //divDetalleOrden
			$('#loading').hide();
		},
		error : function(e) {
			$('#loading').hide();
		},
		cache: false
	});
}