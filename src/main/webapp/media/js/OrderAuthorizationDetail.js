$(document).ready(function() {
    //DEFINE DATATABLES
    $('#newSKUSku').change(function() {
        $('#newSKUSku').val(checkSKU($('#newSKUSku').val()));
        if ($('#newSKUSku').val() != null && $('#newSKUSku').val() != "")
            validateItem($('#newSKUSku'));
    });
});


function isQuantity(value) {
	console.log(value);
	console.log(parseInt(value));
	console.log(!isNaN(parseInt(value)));
	return !isNaN(parseInt(value));
}

function checkSKU(SKU) {
    var sku = SKU;
    var positionInitial = sku.indexOf('[');
    var positionFinal = sku.indexOf(']');
    if (positionInitial > -1 && positionFinal > -1)
        sku = sku.substring(positionInitial + 2, positionFinal - 1);
    return sku;
}


function validateItem(input) {
    $('#loading').show();
    $.ajax({
        type: "POST",
        url: "ValidateItem",
        data: "SKUnumero=" + input.val()+"&cache="+ (new Date()).getTime(),
        success: function(response) {
            // we have the response
            if (input.hasClass("sku_error")) {
                input.removeClass("sku_error");
                input.addClass("sku");
            }
            if (!response) {
                input.addClass("sku_error");
                input.val("");
            }
            $('#loading').hide();
        },
        error: function(e) {
            $('#loading').hide();
            alert(e);
        }
    });
}

function isNumber(event) {
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
    if ((key == null) || (key == 0) || (key == 8) ||
        (key == 9) || (key == 13) || (key == 27))
        return true;

    //numbers
    else if ((("0123456789").indexOf(keychar) > -1)) {
        return true;
    } else
        return false;
}

function updateOrder() {
    var city = $("#idCityFilter").val();
    var user = $("#idUserFilter").val();
    var numberContract = $("#idNumberContract").val();
    $("#idBtnActualizar").hide();
    $('#loading').show();
    $.ajax({
        type: "POST",
        url: "UpdateOrderAuthorization",
        data: $("#orderDetail").serialize() + "&city=" + city + "&userSelected=" + user + "&numberContract=" + numberContract+"&cache="+ (new Date()).getTime(),
        success: function(response) {
            $("#idBtnActualizar").prop('disabled', false);
            $("#Content").html(response);
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
            $('#idBtnActualizar').show();
            $('#idBtnAutorizar').show();
            $('#loading').hide();
        },
        error: function(e) {
            $('#idBtnActualizar').show();
            $('#idBtnAutorizar').show();
            $('#loading').hide();
        },
        cache: false
    });
}

function addSku() {
    $("#idBtnAniadir").prop('disabled', true);
    var sku = $("#newSKUSku").val();
    var quantity = $("#newSKUQuantity").val();
    var city = $("#idCityFilter").val();
    var user = $("#idUserFilter").val();
    var numberContract = $("#idNumberContract").val();

    if (sku == "" && quantity == "" && sku == 0) {
        alert('No se puede guardar este sku');
        return;
    }
    $('#loading').show();
    $.ajax({
        type: "POST",
        url: "AddSKUToOrder",
        data: $("#orderDetail").serialize() + "&sku=" + sku + "&quantityNew=" + quantity + "&numberContract=" + numberContract + "&userSelected=" + user + "&citySelected=" + city+"&cache="+ (new Date()).getTime(),
        success: function(response) {
            $("#idBtnAniadir").prop('disabled', false);
            $("#Content").html(response);
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
            $('#loading').hide();

        },
        error: function(e) {
            $('#loading').hide();
        },
        cache: false
    });
}

function verOrdenesPendientes() {
    var city = $("#idCityFilter").val();
    var user = $("#idUserFilter").val();
    var numberContract = $("#idNumberContract").val();
    $('#loading').show();
    $.ajax({
        type: "POST",
        url: "FilterOrdersAuthorization",
        data: "city=" + city + "&user=" + user + "&numberContract=" + numberContract+"&cache="+ (new Date()).getTime(),
        success: function(response) {
            $("#Content").html(response);
            $('#loading').hide();
        },
        error: function(e) {
            $('#loading').hide();
        },
        cache: false
    });
}

function cancelarOrdenFromDetail(numContract, numOrder) {

    $("#idBtnAutorizar").css("visibility", "hidden");
    $("#idBtnCancelar").css("visibility", "hidden");
    $("#idBtnCancelarLabel").css("visibility", "visible");
    $('#loading').show();
    $.ajax({
        type: "POST",
        url: "SetAllOrdersForAuthorization",
        data: "auth=false&cache="+ (new Date()).getTime(),
        success: function(response) {

        },
        error: function(e) {
            $('#loading').hide();
            alert('Error' + e);
        },
        cache: false
    });

    $.ajax({
        type: "POST",
        url: "SetOrderForAuthorization",
        data: "order=" + numOrder + "&auth=true&cache="+ (new Date()).getTime(),
        success: function(response) {},
        error: function(e) {},
        cache: false
    });

    $.ajax({
        type: "POST",
        url: "CancelOrderAuthorization",
        data: "contract=" + numContract+"&cache="+ (new Date()).getTime(),
        success: function(response) {
            $("#Content").html(response);
            $("#idBtnAutorizar").css("visibility", "visible");
            $("#idBtnCancelar").css("visibility", "visible");
            $("#idBtnCancelarLabel").css("visibility", "hidden");
            $('#loading').hide();
        },
        error: function(e) {},
        cache: false
    });
}

function processAuthOrder() {
	var motivo = $('#idUpdateRason').val();
	$('#loading').show();
	$.ajax({
        type: "POST",
        url: "ProcessAuthorizeOrder",
        data: $("#orderDetail").serialize() + "&motivo=" + motivo + "&token="+ (new Date()).getTime(),
        success: function(response) {
            $("#idBtnlabel").css("visibility", "hidden");
            $("#idBtnAutorizar").css("visibility", "visible");
            $("#idBtnCancelar").css("visibility", "visible");
            $('#loading').hide();
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
        },
        error: function(e) {
            $('#loading').hide();
            alert('Error' + e);
        },
        cache: false
    });	
}

function processAuthOrdersFromDetail(numOrder) {
    $('#loading').show();
    $.ajax({
        type: "POST",
        url: "SetAllOrdersForAuthorization",
        data: "auth=" + false,
        success: function(response) {
            $.ajax({
                type: "POST",
                url: "SetOrderForAuthorization",
                data: "order=" + numOrder + "&auth=true&cache="+ (new Date()).getTime(),
                success: function(response) {
                    var motivo = $('#idUpdateRason').val();
                    var nomUsu = "";
                    $("#idBtnAutorizar").css("visibility", "hidden");
                    $("#idBtnCancelar").css("visibility", "hidden");
                    $("#idBtnlabel").css("visibility", "visible");

                    $.ajax({
                        type: "GET",
                        url: "ProcessAuthorizeOrders",
                        data: "motivo=" + motivo + "&nomUsu=" + nomUsu+"&token="+ (new Date()).getTime(),
                        success: function(response) {
                            $("#idBtnlabel").css("visibility", "hidden");
                            $("#idBtnAutorizar").css("visibility", "visible");
                            $("#idBtnCancelar").css("visibility", "visible");
                            $('#loading').hide();
                            verOrdenesPendientes();
                        },
                        error: function(e) {
                            $('#loading').hide();
                            alert('Error' + e);
                        },
                        cache: false
                    });
                },
                error: function(e) {},
                cache: false
            });
        },
        error: function(e) {
            alert('Error' + e);
        },
        cache: false
    });
}