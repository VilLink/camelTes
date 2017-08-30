$(document).ready(function() {
	var maxInputs = 8; // maximum input boxes allowed
	var contenedor = $("#contenedor"); // Input boxes sku
	var addButton = $("#agregarCampo"); // Add button ID
	var x = $("#contenedor div").length + 1;
	var FieldCount = x - 1; // to keep track of text box added

	$("body").on("focusout", ".sku", function(e) { // user
		if (checkValueInputSKU(FieldCount)) {
			FieldCount++; // text box added
			addItem(FieldCount, contenedor);
			x++; // text box increment
		}
		return false;
	});

	$("body").on("click", ".eliminar", function(e) { // user
		if (x > 1) {
			$(this).parent('div').remove(); // remove text box
			x--; // decrement textbox
		}
		return false;
	});
	//addAutoComplete(1, contenedor);
});

function checkValues(idTextbox1, idTextbox2) {
	var textbox1 = $(idTextbox1).val();
	var textbox2 = $(idTextbox2).val();
	if (textbox1 == null || textbox1 == "" || textbox2 == null
			|| textbox2 == "")
		return false;
	return true;
}

function checkValueInputSKU(FieldCount) {
	var input = $('#sku_' + FieldCount);
	if (input.val() == null || input.val() == "")
		return false;
	return true;
}

function addItem(FieldCount, contenedor) {
	// sendItemQuickOrder("123123", 2);
	var tabIndex = 4;
	if (FieldCount > 2)
		tabIndex = FieldCount * 2;
	$(contenedor)
			.append(
					'<div class="added"><input class="sku" tabindex="'
							+ (tabIndex - 1)
							+ '" type="text" name="skuDisponible[]" id="sku_'
							+ FieldCount
							+ '" placeholder="SKU '
							+ FieldCount
							+ '"/><input tabindex="'
							+ tabIndex
							+ '" type="number" min="0" step="1" placeholder="0" name="cantidad[]"'
							+ 'id="sku_'
							+ FieldCount
							+ '_cantidad"'
							+ '/> <a href="#" class="eliminar"><i class="icos-trashcan"></i></a></div>');
	//addAutoComplete(FieldCount);
}

function checkSKU(SKU) {
	var sku = SKU;
	var positionInitial = sku.indexOf('[');
	var positionFinal = sku.indexOf(']');
	if (positionInitial > -1 && positionFinal > -1)
		sku = sku.substring(positionInitial + 2, positionFinal - 1);
	return sku;
}

function addAutoComplete(FieldCount) {
	var inputText = "#sku_" + FieldCount;
	$(inputText).autocomplete({
		serviceUrl : 'QuickSearch',
		paramName : "SKUnumero",
		delimiter : ",",
		onSelect : function(value) {
			$(inputText).val(value.data);
		},
		transformResult : function(response) {
			return {
				suggestions : $.map($.parseJSON(response), function(item) {
					return {
						value : '[ ' + item.inumbr + ' ] ' + item.idescr,
						data : item.inumbr
					};
				})
			};
		}
	});
	$(inputText).focusout(function() {
		$(inputText).val(checkSKU($(inputText).val()));
		if ($(inputText).val() != null && $(inputText).val() != "")
			validateItemQuickOrder($(inputText));
	});
	
	var inputQuantity= "#sku_" + FieldCount+"_cantidad";
	$(inputQuantity).focusout(function(){
		if(!$.isNumeric($(inputQuantity).val())){
			$(inputQuantity).val(1);
		}
	});
}

function sendItemQuickOrder(skuDisponible, cantidad) {
	$.ajax({
		type : "POST",
		url : "AddQuickOrder",
		data : "skuDisponible=" + skuDisponible + "&cantidad=" + cantidad,
		success : function(response) {
			// we have the response
		},
		error : function(e) {
			alert(e);
		}
	});
}

function validateItemQuickOrder(input) {
	$.ajax({
		type : "POST",
		url : "ValidateItem",
		data : "SKUnumero=" + input.val(),
		success : function(response) {
			// we have the response
			if (input.hasClass("sku_error")) {
				input.removeClass("sku_error");
				input.addClass("sku");
			}
			if (!response) {
				input.addClass("sku_error");
			}
		},
		error : function(e) {
			alert(e);
		}
	});
}

function itemToList(skuDisponible, cantidad) {
	getSKUsInput();
}

function windowInsertShoppingListQuickOrder() {
	$('#shoppingListComboQuickOrder').empty();
	$.ajax({
		type : "GET",
		url : "GetShoppingList?cache="+(new Date()).getTime(),
		success : function(response) {
			$("#shoppingListComboQuickOrder").append("<option value='0'>-- Seleccione --</option>");
			$.each(response, function(k, v) {
				$("#shoppingListComboQuickOrder").append(
					"<option value=\"" + v.shlid + "\">" + v.shlcom
					+ "</option>");
			});
			var id_lista="";
			$('#shoppingListComboQuickOrder').live("change", function(){
				id_lista = $('#shoppingListComboQuickOrder option:selected').val();
			});
			$(function() {
				$("#dialog-message-quickorder").dialog(
						{
							minWidth : 400,
							modal : true,
							buttons : {
								Ok : function() {
									id_lista = $('#shoppingListComboQuickOrder option:selected').val();
									if (id_lista.length > 0) {
										getSKUsInput(id_lista);
										$(this).dialog("close");
										}
									}
						}
				});
			});
		}
	});
}

function getSKUsInput(id_lista) {
	$('#loading').show();
	var inputs = $(":input");
	var skus = new Array();
	var quantity = new Array();

	for ( var i in inputs) {
		if (inputs[i].type == "text") {
			if (parseInt(inputs[i].value)) {
				skus.push(inputs[i].value);
				quantity.push(parseInt($('#' + inputs[i].id + '_cantidad')
						.val()));
			}
		}
	}

	$.ajax({
		type : "POST",
		url : "AddItemsToList",
		data : "skus=" + skus + "&quantity=" + quantity + "&id_lista="
				+ id_lista,
		success : function(response) {
			$('#loading').hide();
			editShoppingList(id_lista);
		},
		error : function(e) {
		}
	});
}

function quickOrderToCart() {

	$('#loading').show();
	var inputs = $(":input");
	// var inputs = document.getElementsByTagName('input');
	var skus = new Array();
	var quantity = new Array();
	var warrantys= new Array();

	for ( var i in inputs) {
		if (inputs[i].type == "text") {
			if (inputs[i].value) {
				skus.push(inputs[i].value);
				quantity.push(parseInt($('#' + inputs[i].id + '_cantidad').val()));
				warrantys.push(0);
			}
		}
	}
	$.ajax({
		type : "POST",
		url : "AddItemsToCart",
		data : "skus=" + skus + "&quantity=" + quantity+'&warrantys='+warrantys+'&cache='+ (new Date()).getTime(),
		success : function(response) {
			$('#loading').hide();
			$("#dialog-message-cart-quickorder").html(response);
			$(function() {
				$("#dialog-message-cart-quickorder").dialog(
						{
							minWidth : 400,
							modal : true,
							buttons : {
								Ok : function() {
									$(this).dialog("close");
									$("#Content").load(
											'cart?cache=' + (new Date()).getTime());
							}
						}
				});
			});
		},
		error : function(e) {
			$('#loading').hide();
		}
	});
}

function editShoppingList(id_lista) {
	$('#loading').show();
	var url = 'editShoppingList?id_lista=' + id_lista + '&cache='
			+ (new Date()).getTime();
	$('#Content').load(url,function (){
		$('#loading').hide();
	});
}
