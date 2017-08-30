var skus = new Array();
var quantitys = new Array();
var comparator = new Array();
var warrantys= new Array();

var skusUpdate= new Array();
var quantitysUpdate= new Array();
var commentsUpdate = new Array();
var skusDelete= new Array();
var warrantysUpdate = new Array();



function changeUpdate(){
	$('#checkout').text('Actualizar');
}

function updateMiniCart() {
	$('#loading').show();
	$('#minicart').html("<p>cargando ...</p>");
	$.ajax({
		url : "CartData",
		type : "POST",
		data : {cache: (new Date()).getTime()},
		success : function(response) {
			$('#minicart').html(response);
			$('#loading').hide();
		},
		error : function() {
			$('#minicart').html("<p>error al cargar...</p>");
			$('#loading').hide();
		}
	});
}

function validarEmail(email) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!expr.test(email))
		return false;
	else
		return true;
}

function checkoutRequest() {
	$('#loading').show();
	$('#buyOfficeDepot').hide();
	$("#checkout").live('click', function() {
		$.ajax({
			type : 'GET',
			url : 'Checkout',
			data : {cache: (new Date()).getTime()},
			success : function(response) {
				$("#Content").html(response);
				$('#loading').hide();
			},
			error : function() {
				$('#loading').hide();
			}
		});
	});
}

function comparatorItem(sku, checkbox) {

	if (checkbox.checked) {
		comparator.push(sku);
	} else {
		if (comparator.length == 1) {
			comparator.pop();
		} else {
			var skuIdx = comparator.indexOf(sku);
			comparator.splice(skuIdx, 1);
		}
	}

}

function fillComparatorItems(sku) {
	comparator.push(sku);
}

function comparatorDeleteItem(sku, checkbox) {
	if (checkbox.checked) {
		if (comparator.length == 1) {
			comparator.pop();
		} else {
			var skuIdx = comparator.indexOf(sku);
			comparator.splice(skuIdx, 1);
		}
	} else {
		comparator.push(sku);
	}
}

function compareItems(button) {
	if (comparator.length < 2 || comparator.length > 3) {
		$(function() {
			$("#dialog-compare-quantity").dialog({
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

	var skus = "";

	while (comparator.length > 0) {
		skus = skus.concat(comparator.shift() + ",");
	}
	skus = skus.substring(0, skus.lastIndexOf(","));
	$("#Content").load('comparator?skus=' + skus + '&cache='+ (new Date()).getTime());
}

function compareDeleteItems(button) {
	var skus = "";
	while (comparator.length > 0) {
		skus = skus.concat(comparator.shift() + ",");
	}
	skus = skus.substring(0, skus.lastIndexOf(","));
	$("#Content").load('comparator?skus=' + skus + '&cache='+ (new Date()).getTime());
}

$(function() {
	$("#linkID").live('click', function() {
		$(this).prop('href', "index?logout=false");
	});
});



function pushItemUpdate(input, sku, existencia, max, comment, deleteItem, quantityWarranty) {
	console.log(quantityWarranty.val());
	if (!deleteItem.is(':checked') && existencia < parseInt(input.val())) {
		$(function() {
			$("#dialog-message-stock").dialog({
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

	if (!deleteItem.is(':checked') && max > 0 && max < parseInt(input.val())) {
		$(function() {
			$("#dialog-message-max").dialog({
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
		if(comment.length==0){
			comment="_";
		}
		$("input.tbsQty").attr("disabled", true);
		$("input.tbsComentario").attr("disabled", true);
		skusDelete.push(deleteItem.is(':checked'));
		skusUpdate.push(sku);
		quantitysUpdate.push(parseInt(input.val()));
		commentsUpdate.push(comment);
		warrantysUpdate.push(quantityWarranty.val());
		console.log(warrantysUpdate);
		$("input.tbsQty").attr("disabled", false);
		$("input.tbsComentario").attr("disabled", false);
		$("#updateCart").attr("disabled", false);
}


function pushItem(sku, quantity, comment, maxQuantity, existencia, business, skuwarranty) {
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
				warrantys.push(skuwarranty.val());
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
			warrantys.push(skuwarranty.val());
		}
	}
}

function saveAllItems(sku, quantity, comment, maxQuantity, existencia, business, skywarranty) {
	$('#loading').show();
	pushItem(sku, quantity, comment, maxQuantity, existencia, business, skywarranty);
	$.ajax({
		type : "POST",
		url : "AddItemsToCart",
		data : "skus=" + skus + "&quantity=" + quantitys+'&warrantys='+warrantys+'&cache='+ (new Date()).getTime(),
		success : function(response) {
			skus = new Array();
			quantitys = new Array();
			comparator = new Array();
			$("#Content").load('cart?cache='+ (new Date()).getTime(), function() {
				$('#loading').hide();
				updateMiniCart();

			});
		},
		error : function(e) {
		}
	});
}

function updateAllCart(){
	$("#updateCart").attr("disabled", true);
	$('#loading').show();
	console.log(warrantysUpdate);
	$.ajax({
		type : "POST",
		url : "updateItemsCart",
		data : "skus=" + skusUpdate + "&quantity=" + quantitysUpdate+ "&comments=" + commentsUpdate+ "&delete=" + skusDelete +'&quantityWarrantys='+ warrantysUpdate + '&cache='+ (new Date()).getTime(),
		success : function(response) {
			skusUpdate= new Array();
			quantitysUpdate= new Array();
			commentsUpdate = new Array();
			warrantysUpdate = new Array();
			skusDelete= new Array();
			$("#Content").load('cart?cache='+ (new Date()).getTime(), function(){
				updateMiniCart();
				$('#loading').hide();
			});
			
		},
		error : function(e) {
			$('#loading').hide();
		}
	});
}

function emptyCart() {
	$('#loading').show();
	$.ajax({
		type : 'POST',
		url : 'emptyCart?cache='+ (new Date()).getTime(),
		success : function(response) {
			$('#loading').hide();
			updateMiniCart();
			$(function() {
				$("#dialog-message-empty-cart").dialog(
						{
							minWidth : 400,
							modal : true,
							buttons : {
								Ok : function() {
									$(this).dialog("close");
									$('#loading').show();
									$("#Content").load('cart?cache='+ (new Date()).getTime(), function(){
										$('#loading').hide();
									});
									return;
								}
							}
						});
			});
			
		},
		error : function() {
			$('#loading').hide();

		}
	});
}

function sendEmail(input) {
	if (!validarEmail($("#email").val())) {
		$(function() {
			$("#dialog-message-email").dialog({
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
	$('#loading').show();
	$.ajax({
		type : "POST",
		url : "SendMailCart",
		data : "emailText=" + $("#email").val(),
		success : function(response) {
			$("#email").val("");
			$('#loading').hide();
			$(function() {
				$("#dialog-message-email-sent").dialog({
					minWidth : 400,
					modal : true,
					buttons : {
						Ok : function() {
							$(this).dialog("close");
							$('#loading').show();
							$("#Content").load('cart?cache='+ (new Date()).getTime(), function(){
								$('#loading').hide();
								updateMiniCart();
							});
							return;
						}
					}
				});
			});
		},
		error : function(e) {
			$(function() {
				$("#dialog-message-email-error").dialog({
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
	});

}

function updateCart(input, sku, existencia, max, comment) {
	
	if (existencia < parseInt(input.value)) {
		$(function() {
			$("#dialog-message-stock").dialog({
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

	if (max > 0 && max < parseInt(input.value)) {
		$(function() {
			$("#dialog-message-max").dialog({
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
	if (parseInt(input.value) > 0) {
		$('#loading').show();
		$("input.tbsQty").attr("disabled", true);
		$("input.tbsComentario").attr("disabled", true);
		$.ajax({
			type : "POST",
			url : "updateCart",
			data : "quantity=" + parseInt(input.value) + "&sku=" + sku + "&comment="+comment,
			success : function(response) {
				$('#loading').hide();
				$('#checkout').text('Comprar');
				$("#Content").load('cart?cache='+ (new Date()).getTime(), function(){
					$('#loading').hide();
					updateMiniCart();
				});
			},
			error : function(e) {
				$(function() {
					$("#dialog-message-error").dialog({
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
				input.readOnly = false;
			}
		});
	}
}



function insertItem(sku, quantity, comment, maxQuantity, existencia, business, warranty) {
	var skuWarranty=warranty.val();
	if(!parseInt(quantity.val()))
		quantity.val(1);
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
	if ((parseInt(quantity.val()) > 0 && business.val() != 'ODM') || (parseInt(quantity.val()) > 0 && parseInt(quantity.val()) <= existencia && business.val() == 'ODM')) {
		$('#loading').show();
		$.ajax({
			type : "POST",
			url : "insertItemCart",
			data : "maxQuantity=" + maxQuantity + "&comment=" + comment
					+ "&quantity=" + quantity.val() + "&sku=" + sku+"&skuWarranty="+skuWarranty,
			success : function(response) {
				$('#loading').hide();
				updateMiniCart();
				if (response) {
					$(function() {
						$("#dialog-message-success").dialog({
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
			}
		});
	} else {
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
	}
}

function deleteItem(input, sku) {
	input.readOnly = true;
	$(function() {
		$("#dialog-message-delete").dialog(
				{
					minWidth : 400,
					modal : true,
					buttons : {
						Ok : function() {
							$('#loading').show();
							$(this).dialog("close");
							$.ajax({
								type : "POST",
								url : "deleteItemCart",
								data : "sku=" + sku,
								success : function(response) {
									// we have the response
									input.readOnly = false;
									updateMiniCart();
									$("#Content").load(
											'cart?cache='
													+ (new Date()).getTime(), function(){
														$('#loading').hide();
													});
								},
								error : function(e) {
									$('#loading').hide();
									$(function() {
										$("#dialog-message-error").dialog({
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
									input.readOnly = false;
								}
							});
							return;
						},
						Cancel : function() {
							$(this).dialog("close");
							return;
						}

					}
				});
	});
}