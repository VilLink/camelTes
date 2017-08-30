function userProfileAddressMove(addressSeq, action){
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "MoveUserProfileAddress",
		data : $("#idFormAddUserProfile").serialize()+"&addressSeq=" + addressSeq + "&action=" + action+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});
}

function userProfileDeptosMove(deptSeq, action) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "MoveUserProfileDepartment",
		data : $("#idFormAddUserProfile").serialize()+"&deptSeq=" + deptSeq + "&action=" + action+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});
}

function userProfileOrdersMove(orderSeq, action) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "MoveUserProfileOrder",
		data : $("#idFormAddUserProfile").serialize()+"&orderSeq=" + orderSeq + "&action=" + action+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});	
}

function createUserProfile() {
	if (validateRequiredFields()) {
		$("#idFormAddUserProfile").submit();
		var validForm = $('#idFormAddUserProfile').data('bootstrapValidator').getInvalidFields();
		if (validForm.length > 0) {
			alert ('Hay campos no validos, favor de verificar');
		} else {
			$('#loading').show();
			$.ajax({
				type : "POST",
				url : "CreateUserProfile",
				data: $("#idFormAddUserProfile").serialize(),
				success : function (response) {
					$('#loading').hide();
					$("#idContentUserProfile").html(response);
					$('html, body').animate({ scrollTop: 0 }, 'slow');
				},
				cache: false
			});
		}
	} else 
		alert ('Hay campos requeridos que estan vacios, favor de verificar');
}

function editUserProfile() {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "ProcessEditUserProfile",
		data: $("#idFormAddUserProfile").serialize(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});
}

function assignUserToNotifications() {
	var user = $("#idInputUserNotification").val();
	var correo = $("#idInputEmailNotification").val();
	keepAllData();
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "AddUserNotification",
		data : "user=" + user + "&correo=" + correo+getUserDataParams()+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});
}

function notificationRemove(user, mail) {
	keepAllData();
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "RemoveUsersNotification",
		data : "user=" + user + "&correo=" + mail+getUserDataParams(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});
}

function getUserDataParams () {
	var idUsuario = $("#idInputIDUsuario").val();
	var diasExpPasswd = $("#idDiasExpPasswd").val();
	var cambioPasswd = $("#idComboCambioPasswd").val();
	var nombreUsuario = $("#idNombreUsuario").val();
	var puestoUsuario = $("#idPuestoUsuario").val();
	var deptoUsuario = $("#idComboAreaUsuario").val();
	var telefonoUsuario = $("#idTelUsuario").val();
	var mailUsuario = $("#idMailUsuario").val();
	var limiteCredito = $("#idLimiteCredito").val();
	var esSuperUsuario = $("#idEsSuperUsuario").val();
	var rutaApp = $("#idRutaApprovacion").val();
	
	var params  = "&idUsario="+idUsuario+"&diasExpPasswd="+diasExpPasswd+"&cambioPasswd="+cambioPasswd+
					"&nombreUsuario="+nombreUsuario+"&puesto="+puestoUsuario+"&depto="+deptoUsuario+
					"&telefono="+telefonoUsuario+"&mailUsuario="+mailUsuario+"&limiteCredito="+limiteCredito+
					"&esSuperUsuario="+esSuperUsuario+"&rutaApp="+rutaApp+ '&cache=' + (new Date()).getTime();
	return params;
}

function searchSKUToAdd() {
	var table = $("#idTableAvailableSkus").dataTable();
	var TableData = [];
	table.$('tr').each(function(row, tr){
	    if ($(tr).find('input:eq(2)').val() != '') {
	    	var sku ={
	    	    inumbr : $(tr).find('input:eq(0)').val()
	    	    , idescr :$(tr).find('input:eq(1)').val()
	    	    , icantm : $(tr).find('input:eq(2)').val()
	    	};
	    	TableData.push(sku);
	    }
	}); 
	var listaSkus = ""+JSON.stringify({listaSkus : TableData});
	keepAllData();
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "AssignExcludeSKUs",
		data : "listaSkus=" + String(listaSkus),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});
}

function aniadirSKU(skuNumber, action, quantity) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "AddingSKU",
		data : $("#idFormAddUserProfile").serialize() + "&sku=" + skuNumber + "&action=" + action + "&quantity=" + quantity+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});
}

function excluirSKU(skuNumber, action) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "ExcludingSKU",
		data : $("#idFormAddUserProfile").serialize()+"&sku=" + skuNumber + "&action=" + action+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
			$("#idContentUserProfile").html(response);
		},
		cache: false
	});
}

function validateRequiredFields() {
	var idUsuario = $("#idInputIDUsuario").val();
	var nombreUsuario = $("#idNombreUsuario").val();
	var puestoUsuario = $("#idPuestoUsuario").val();
	var telefonoUsuario = $("#idTelUsuario").val();
	var mailUsuario = $("#idMailUsuario").val();
	var limiteCredito = $("#idLimiteCredito").val();
	
	if (!idUsuario || !nombreUsuario || !puestoUsuario || !telefonoUsuario || !mailUsuario || !limiteCredito)
		return false;
	else
		return true;
}

function keepAllData() {
	$('#loading').show();
	$.ajax({
		type : "GET",
		url : "KeepData",
		data : $("#idFormAddUserProfile").serialize()+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
		},
		cache: false
	});
}

$("#idFormAddUserProfile").submit(function( event ) {
	  event.preventDefault();
});

function loadTemplate() {
	var idUsuario = $("#idInputIDUsuario").val();
	var idTemplate = $("#idTemplate").val();
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "LoadTemplateUser",
		data : 	"idUsuario=" + idUsuario +
				"&idTemplate=" + idTemplate+ '&cache=' + (new Date()).getTime(),
		success : function (response) {
			$('#loading').hide();
			$("#Content").html(response);
		},
		cache: false
	});
}

function maxCaract() {
	var idUsuario = $("#idInputIDUsuario").val();
	
	if(idUsuario.length >= 10) {
		alert("El id de usuario no debe exceder de 10 caracteres");
		var myTruncatedString = idUsuario.substring(0,9);
		$("#idInputIDUsuario").val(myTruncatedString);
	}
	
}


$("#idInputIDUsuario").keyup(function(e){
    var regx = /^[A-Za-z0-9]+$/;
    var value=$('#idInputIDUsuario').val();
    if (value.length>0 && !regx.test(value)) {
    	$("#idInputIDUsuario").val("");
    }
});