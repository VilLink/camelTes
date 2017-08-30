$(document).ready(function() {
	$('#loading').bind('ajaxSend', function(){
		$(this).show();
	}).bind('ajaxComplete', function(){
		$(this).hide();
	});
	
	//DEFINE DATATABLES
	$('#idTableUsersToEdit').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5		
	});
});

function returnUserProfile() {
	$("#Content").load("pages/profiles/ProfileMenu.jsp");
	$('html, body').animate({ scrollTop: 0 }, 'slow');
}

function editUser(idUsuario) {
	$.ajax({
		type : "POST",
		url : "LoadEditUser",
		data : "idUsuario=" + idUsuario,
		success : function (response) {
			$("#Content").html(response);
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		},
		cache: false
	});
}