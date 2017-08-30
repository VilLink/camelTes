$(document).ready(function() {
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	//DEFINE DATATABLES
	$('#idTableUsers').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5,
		"aoColumnDefs": [{"bSearchable": false, "aTargets": [5, 6]}]		
	});
	
});

function updateStatusUsers() {
	$.ajax({
		type : "POST",
		url : "ChangeStatusUsers",
		data : $("#idFormChangesStsUsers").serialize(),
		success : function (response) {
			$("#idDivStatusUserContent").html(response);
		},
		cache: false
	});
}

function returnUserProfile() {
	$("#Content").load("pages/profiles/ProfileMenu.jsp");
} 