$(function () {
$("#Departamentos").menu();
});

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
	console.log(cadena);
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
function valPassword() {
	alert("validando password");
	var pass = document.getElementById("nuevoPass").value;
	var confPass = document.getElementById("confirmaPass").value;
	var errorLongitud = document.getElementById("errorLongChar");
	var divErrores = document.getElementById("MensajesLogin");
	var errorCoincidencia = document.getElementById("errorPassNoCoincide");
	var validar = "${resetPasswd}";
	divErrores.style.display = "none";
	errorCoincidencia.style.display = "none";
	errorLongitud.style.display = "none";
	if (validar == "block") {
		if (confPass == pass) {
			if (pass.length >= 8 && isAlfaNumerico(pass))
				return true;
			else {
				errorLongitud.style.display = "block";
		  	  	divErrores.style.display = "block";
				return false;
			}
		} else {
			errorCoincidencia.style.display = "block";
		  	divErrores.style.display = "block";
			return false;
		}
	}
}

$(function() {
    if (localStorage.chkbxOffDepotPasswd && localStorage.chkbxOffDepotPasswd != '') {
        $('#checkPasswd').attr('checked', 'checked');
        $('#password').val(localStorage.offDepotPasswd);
    } else {
        $('#checkPasswd').removeAttr('checked');
        $('#password').val('');
    }
    $('#checkPasswd').click(function() {

        if ($('#checkPasswd').is(':checked')) {
            // save password
            localStorage.offDepotPasswd = $('#password').val();
            localStorage.chkbxOffDepotPasswd = $('#checkPasswd').val();
        } else {
            localStorage.offDepotPasswd = '';
            localStorage.chkbxOffDepotPasswd = '';
        }
    });
    if (localStorage.chkbxOffDepotUser && localStorage.chkbxOffDepotUser != '') {
        $('#checkUser').attr('checked', 'checked');
        $('#userOffice').val(localStorage.offDepotUser);
        $('#customerOffice').val(localStorage.offDepotCustomer);
    } else {
        $('#checkUser').removeAttr('checked');
        //$('#userOffice').val('');
    }
    $('#checkUser').click(function() {

        if ($('#checkUser').is(':checked')) {
            // save user
            localStorage.offDepotUser = $('#userOffice').val();
            localStorage.offDepotCustomer = $('#customerOffice').val();
            localStorage.chkbxOffDepotUser = $('#checkUser').val();
        } else {
            localStorage.offDepotUser = '';
            localStorage.offDepotCustomer = '';
            localStorage.chkbxOffDepotUser = '';
        }
    });
});

function load(){
	$('#loading').show();
}
