function approvalRouteDetail(idRoute, action) {
	var idAppRoute = $("#idAppRoute"+idRoute).val(); 
	var idCliente = $("#idCliente"+idRoute).val();
	var idCreateDate = $("#idCreateDate"+idRoute).val();
	var idUserCreator = $("#idUserCreator"+idRoute).val();
	var idCreateTime = $("#idCreateTime"+idRoute).val();
	var idRouteType = $("#idRouteType"+idRoute).val();
	var idAuthType = $("#idAuthType"+idRoute).val();
	var idCreateDateFormat = $("#idCreateDateF"+idRoute).val();
	
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	$.ajax({
		type : "POST",
		url : "ViewApprovalRouteDetail",
		data : "idCliente=" + idCliente + "&idRutaAprobacion="+idAppRoute + "&fechaCreacion=" + idCreateDate + 
				"&horaCreacion=" + idCreateTime + "&usuarioCrea=" + idUserCreator + "&tipoCondicionante=" + idRouteType + 
				"&tipoAutorizacion=" + idAuthType + "&fechaCreacionFormat=" + idCreateDateFormat + 
				"&action=" + action,
		success : function (response) {
			$("#idContentAppRoute").html(response);
		},
		error : function(e) {
		},
		cache: false
	});
}

function approvalRouteCreate(action) {
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	$.ajax({
		type : "POST",
		url : "ViewCreateApprovalRoute",
		data : "action=" + action,
		success : function (response) {
			$("#idContentAppRoute").html(response);
		},
		error : function(e) {
		},
		cache: false
	});
}

function createApprovalRoute() {
	//VALIDATE DATA REQUIERD
	if (validateFieldsRequired()) { 	
		$('#loading').bind('ajaxSend', function(){
			$(this).show();
		}).bind('ajaxComplete', function(){
			$(this).hide();
		});
		
		$.ajax({
			type : "POST",
			url : "CreateApprovalRoute",
			data : $("#idFormAppRouteDetail").serialize(),
			success : function (response) {
				$("#idContentAppRoute").html(response);
			},
			error : function(e) {
			},
			cache: false
		});
	} else {
		//alert ("Los campos 'Id de ruta de aprobación', 'Tipo de condicionante' y 'Tipo de autorizacion' no pueden estar en blanco");
		$(function() {
			$("#dialog-message-empty").dialog({
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

function validateFieldsRequired() {
	var idRuta = $('#idRutaApp').val();
	var condicionO = $('#idConditionO').is(':checked');
	var condicionY = $('#idConditionY').is(':checked');
	var typeE = $('#idTypeE').is(':checked');
	var typeM = $('#idTypeM').is(':checked');
	
	if (idRuta && (condicionO || condicionY) && (typeE || typeM))  
		return true;
	else
		return false;
}


function changeStsUser(cliente, usuario) {
	var idCheck = 'delete'+cliente+usuario;
	
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	$.ajax({
		type : "POST",
		url : "QuitUserToRoute",
		data : "cliente=" + cliente + "&usuario=" + usuario,
		success : function (response) {
			$("#idContentAppRoute").html(response);
		},
		error : function(e) {
		},
		cache: false
	});
}

function updateApprovalRoute() {
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	$.ajax({
		type : "POST",
		url : "UpdateApprovalRoute",
		data : $('#idFormAppRouteDetail').serialize(),
		success : function (response) {
			$("#idContentAppRoute").html(response);
		},
		error : function(e) {
		},
		cache: false
	});
}

function deleteApprovalRoute() {
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	$.ajax({
		type : "POST",
		url : "DeleteApprovalRoute",
		data : $("#idFormAppRouteDetail").serialize(),
		success : function (response) {
			approvalRouteList();
		},
		error : function(e) {
		},
		cache: false
	}); 
}

function returnUserProfile() {
	$("#Content").load("pages/profiles/ProfileMenu.jsp");
} 

/**
 * Esta funcion se invoca desde el JS que esta en la pagina approvalRouteDetail
 * Se usa para agregar un usuario a la ruta de aprobacion
 */
function addUserToApprovalRoute(client, user) {
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	$.ajax({
		type : "POST",
		url : "AddUserToRoute",
		data : $("#idFormAppRouteDetail").serialize()+"&idCliente=" + client + "&idUsuario=" + user,
		success : function (response) {
			$("#idContentAppRoute").html(response);
		},
		error : function(e) {
		},
		cache: false
	});
}

function approvalRouteList() {
	$.ajax({
		type : "GET",
		url : "SearchApprovalRoute",
		data : $("#idFormAppRouteDetail").serialize(),
		success : function (response) {
			$("#idContentAppRoute").html(response);
		},
		error : function(e) {
		},
		cache: false
	});
}

function maxCaract() {
	var idUsuario = $("#idRutaApp").val();
	
	if(idUsuario.length >= 10) {
		//alert("El id de usuario no debe exceder de 10 caracteres");
		$(function() {
			$("#dialog-message-max").dialog({
				minWidth : 400,
				modal : true,
				buttons : {
					Ok : function() {
						$(this).dialog("close");
						$("#idRutaApp").val("");
						return;
					}
				}
			});
		});		
	}
	
}