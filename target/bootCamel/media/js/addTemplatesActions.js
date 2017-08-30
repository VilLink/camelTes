$(document).ready(function() {
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});

});

function templateProfileAddressMove(addressSeq, action){
	$.ajax({
		type : "POST",
		url : "MoveTemplateAddress",
		data : $("#idFormAddTemplate").serialize()+"&addressSeq=" + addressSeq + "&action=" + action,
		success : function (response) {
			$("#idContentTemplate").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});
}

function templateProfileDeptosMove(deptSeq, action) {
	$.ajax({
		type : "POST",
		url : "MoveTemplateDepartment",
		data : $("#idFormAddTemplate").serialize()+"&deptSeq=" + deptSeq + "&action=" + action,
		success : function (response) {
			$("#idContentTemplate").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});
}

function templateProfileOrdersMove(orderSeq, action) {
	$.ajax({
		type : "POST",
		url : "MoveTemplateOrder",
		data : $("#idFormAddTemplate").serialize()+"&orderSeq=" + orderSeq + "&action=" + action,
		success : function (response) {
			$("#idContentTemplate").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});	
}

function createTemplate() {
	if (validateRequiredFields()) {
		$("#idFormAddTemplate").submit();
			$.ajax({
				type : "POST",
				url : "CreateTemplate",
				data: $("#idFormAddTemplate").serialize(),
				success : function (response) {
					$("#idContentTemplate").html(response);
					$('html, body').animate({ scrollTop: 0 }, 'slow');
				},
				cache: false
			});
		//}
	} else 
		alert ('Hay campos requeridos que estan vacios, favor de verificar');
}

function editTemplate() {
	$.ajax({
		type : "POST",
		url : "ProcessEditTemplate",
		data: $("#idFormAddTemplate").serialize(),
		success : function (response) {
			$("#idContentTemplate").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});
}

function assignUserToNotifications() {
	var user = $("#idInputUserNotification").val();
	var correo = $("#idInputEmailNotification").val();
	keepAllData();
	$.ajax({
		type : "POST",
		url : "AddUserNotificationTemplate",
		data : "user=" + user + "&correo=" + correo+getUserDataParams()+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$("#idContentTemplate").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});
}

function notificationRemove(user, mail) {
	keepAllData();
	$.ajax({
		type : "POST",
		url : "RemoveUsersNotificationTemplate",
		data : "user=" + user + "&correo=" + mail+getUserDataParams()+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$("#idContentTemplate").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});
}

function getUserDataParams () {
	var idPlantilla = $("#idInputPlantilla").val();
	var diasExpPasswd = $("#idDiasExpPasswd").val();
	var limiteCredito = $("#idLimiteCredito").val();
	var nombrePlantilla = $("#idNombrePlantilla").val();	
	
	var params  = "&idPlantilla="+idPlantilla+"&diasExpPasswd="+diasExpPasswd+
				"&limiteCredito="+limiteCredito+"&nombrePlantilla="+nombrePlantilla+ '&cache=' + (new Date()).getTime();
					
	return params;
}

function validateRequiredFields() {
	var idPlantilla = $("#idInputPlantilla").val();
	var nombrePlantilla = $("#idNombrePlantilla").val();
	var limiteCredito = $("#idLimiteCredito").val();
	
	if (!idPlantilla || !nombrePlantilla || !limiteCredito)
		return false;
	else
		return true;
}

function keepAllData() {
	$.ajax({
		type : "GET",
		url : "KeepDataTemplate",
		data : $("#idFormAddTemplate").serialize()+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
		},
		cache: false
	});
}

$("#idFormAddTemplate").submit(function( event ) {
	  event.preventDefault();
});

function loadTemplate(idTemplate) {
	$.ajax({
		type : "POST",
		url : "LoadEditTemplate",
		data : "idTemplate=" + idTemplate+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$("#Content").html(response);
		},
		cache: false
	});
}