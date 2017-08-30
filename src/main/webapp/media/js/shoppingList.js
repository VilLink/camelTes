var skus = new Array();
var quantitys = new Array();
var warrantys= new Array();



function toCart(id_lista) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "shoppingListToCart",
		data : "id_lista=" + id_lista,
		success : function(response) {
			$("#dialog-message-cart").html(response);
			$('#loading').hide();
			$(function() {
				$("#dialog-message-cart").dialog(
						{
							minWidth : 400,
							modal : true,
							buttons : {
								Ok : function() {
									$(this).dialog("close");
									$("#Content").load('cart?cache=' + (new Date()).getTime(),function() {
										updateMiniCart();
									});
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

function pushItemShoppingList(sku, quantity, comment, maxQuantity, existencia, business) {
	if (maxQuantity != 0 && maxQuantity < parseInt(quantity.val())) {
		$(function() {
			$("#dialog-message-maxQuantity-" + sku).dialog({
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
		return;
	}

	if (business.val() == 'ODM') {
		if (parseInt(quantity.val()) > 0
				&& parseInt(quantity.val()) <= existencia) {
			if (parseInt(sku) && parseInt(quantity.val())) {
				skus.push(sku);
				quantitys.push(parseInt(quantity.val()));
				warrantys.push(0);
			}
		} else {
			$(function() {
				$("#dialog-message-quantity").dialog({
					minWidth : 400,
					modal : true,
					buttons : {
						Ok : function() {
							$(this).dialog("close");
							$('#quantity_' + sku).val("");
							return;
						}
					}
				});
			});
		}

	} else {
		if (parseInt(sku) && parseInt(quantity.val())) {
			skus.push(sku);
			quantitys.push(parseInt(quantity.val()));
			warrantys.push(0);
		}
	}
}

function saveAllItemsShoppingList() {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "AddItemsToCart",
		data : "skus=" + skus + "&quantity=" + quantitys+'&warrantys='+warrantys+'&cache='+ (new Date()).getTime(),
		success : function(response) {
			skus = new Array();
			quantitys = new Array();
			comparator = new Array();
			$("#dialog-message-cart").html(response);
			$('#loading').hide();
			$(function() {
				$("#dialog-message-cart").dialog(
						{
							minWidth : 400,
							modal : true,
							buttons : {
								Ok : function() {
									$(this).dialog("close");
									$("#Content").load('cart?cache=' + (new Date()).getTime(),function() {
										updateMiniCart();
									});
							}
						}
				});
			});
		},
		error : function(e) {
		}
	});
}


$(function() {
	$("#fecha_referencia").datepicker({
		minDate : 1,
		maxDate : "+2Y"
	});
});

function updateList(id_lista, descripcion, tipo_lista) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "updateShoppingList",
		data : "id_lista=" + id_lista.val() + "&descripcion="
				+ descripcion.val() + "&tipo_lista=" + tipo_lista.val()+'&cache='+ (new Date()).getTime(),
		success : function(response) {
			$('#loading').hide();

		},
		error : function(e) {
			$('#loading').hide();
			input.readOnly = false;
		}
	});
}

function updateItemShoppingList(id_lista, sku, user, input) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "updateItemShoppingList",
		data : "user=" + user + "&id=" + id_lista + "&sku=" + sku
				+ "&quantity=" + input.value,
		success : function(response) {
			$('#loading').hide();
		},
		error : function(e) {
			$('#loading').hide();
			input.readOnly = false;
		}
	});
}

function deleteItemShoppingList(id_lista, sku, user, input) {

	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "deleteItemShoppingList",
		data : "user=" + user + "&id=" + id_lista + "&sku=" + sku
				+ "&quantity=" + input.value,
		success : function(response) {
			$('#loading').hide();
			var url = 'editShoppingList?id_lista=' + id_lista
			+ '&cache=' + (new Date()).getTime();
			$('#Content').load(url);

		},
		error : function(e) {
			$('#loading').hide();
			input.readOnly = false;
		}
	});
}


function insertItemShoppingList(id_lista, sku, quantity) {
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "insertItemShoppingList",
		data : "id=" + id_lista + "&sku=" + sku + "&quantity=" + quantity
				+ "&isUnderContract=S",
		success : function(response) {
			$('#loading').hide();
			if (response) {
				$(function() {
					$("#dialog-message-success-list").dialog({
						minWidth : 400,
						modal : true,
						buttons : {
							Ok : function() {
								$(this).dialog("close");
								quantity.val('');
								return;
							}
						}
					});
				});
			}
		},
		error : function(e) {
			$('#loading').hide();
		}
	});
}

function windowInsertShoppingList(sku, quantity, existencia, business) {
	
	if(((quantity.val().length == 0 || parseInt(quantity.val()) < 1) && business.val() != 'ODM') 
			|| ((quantity.val().length == 0 || parseInt(quantity.val()) < 1) || existencia < parseInt(quantity.val()) && business.val() == 'ODM')){
		$(function() {
			$("#dialog-message-quantity").dialog({
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
		return;
	}
	
	$('#shoppingListCombosku').children().remove();
	$('#loading').show();
	$.ajax({
		type : "GET",
		url : "GetShoppingList?cache="+ (new Date()).getTime(),
		success : function(response) {
			$('#loading').hide();
			$("#shoppingListCombosku").append("<option value='0'>-- Seleccione --</option>");
			$.each(response, function(k, v) {
				$("#shoppingListCombosku").append("<option value=\"" + v.shlid + "\">" + v.shlid + " - " + v.shlcom+  "</option>");
				});
			var id_lista;
			
			$('#shoppingListCombosku').change(function(){
				id_lista = $('#shoppingListCombosku option:selected').val();
			});
			
			$(function() {
				$("#dialog-message-list").dialog({
					minWidth : 400,
					modal : true,
					buttons : {
						Ok : function() {
							id_lista = $('#shoppingListCombosku option:selected').val();
							if (id_lista.length > 0 && id_lista != 0 && quantity.val() > 0 ) {
								insertItemShoppingList(id_lista, sku,quantity.val());
								quantity.val('');
								$(this).dialog("close");
							}
						}
					}
				});
			});
		}
	});
}


function windowInsertAllitemsShoppingList() {
	$('#loading').show();
	$('#shoppingListCombosku').empty();
	$.ajax({
		type : "GET",
		url : "GetShoppingList?cache="+ (new Date()).getTime(),
		success : function(response) {
			$('#loading').hide();
			$("#shoppingListCombosku").append("<option value='0'>-- Seleccione --</option>");
			$.each(response, function(k, v) {
				$("#shoppingListCombosku").append("<option value=\"" + v.shlid + "\">"+v.shlid+" - " + v.shlcom+  "</option>");
				});
			var id_lista;
			
			$('#shoppingListCombosku').change(function(){
				id_lista = $('#shoppingListCombosku option:selected').val();
			});
			
			$(function() {
				$("#dialog-message-list").dialog({
					minWidth : 400,
					modal : true,
					buttons : {
						Ok : function() {
							id_lista = $('#shoppingListCombosku option:selected').val();
							if (id_lista.length > 0 && id_lista != 0) {
								$(this).dialog("close");
								saveAllItemsShopingList(id_lista);
							}
						}
					}
				});
			});
		}
	});
}



function saveAllItemsShopingList(id_lista) {

	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "AddItemsToList",
		data : "skus=" + skus + "&quantity=" + quantitys + "&id_lista="
				+ id_lista,
		success : function(response) {
			$('#loading').hide();
			$(function() {
				$("#dialog-message-save-all-shoppinglist").dialog({
					minWidth : 400,
					modal : true,
					buttons : {
						Ok : function() {
							$(this).dialog("close");
							editShoppingList(id_lista);
							return;
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
	var url = 'editShoppingList?id_lista=' + id_lista + '&cache='+ (new Date()).getTime();
	$('#Content').load(url, function(){
		$('#loading').hide();
	});
}



$(document).ready(function() {
	$("#id_lista").prop('disabled', true);
	if (!$("#automatic").is(':checked')) {
		$("#perioricidad").prop('disabled', true);
		$("#fecha_referencia").prop('disabled', true);
		$("#dia_especifico").prop('disabled', true);
	}
});