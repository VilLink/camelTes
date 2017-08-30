function checker(id) {
	$(id).error(function() {
		$(id).attr("src", "media/Images/missing-product-300x300.jpg");
	});
	return;
}

function checker2(id) {
	$(id).error(function() {
		$(id).attr("src", "media/Images/missing-product-300x300.jpg");
	});
	return;
}

function checker3(id) {
	$( "img.sku" ).each(function( index ) {
		index.error(function() {
			index.attr("src", "media/Images/missing-product.png");
		});
	});
	return;
}

function related(skuNum){
	$('#loading').show();
	$.ajax({
		url : "showRelated",
		type : "POST",
		data : {sku: skuNum, cache: (new Date()).getTime()},
		success : function(response) {
			$('#listRelated').html(response);
			$('#loading').hide();
		},
		error : function() {
			$('#loading').hide();
		}
	});
}

function searchByDepartment(a,b,c,d){
	$('#loading').show();
	$.ajax({
		type: "POST",
		url: "ShowSkusDept", 
		data: {depto: a, subdpt: b, clazz: c, subcls: d}, 
		success: function (response) {
			$('#loading').hide();
			$("#Content").html(response);
		}
	});
}