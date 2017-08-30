$(document).ready(function() {
	
	
	//DEFINE DATATABLES
	$('#idTableAsignedAddress').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5		
	});
	
    
    $('#idTableAsignedAddress tbody').on( 'click', 'tr', function () {
        	$('#idTableAsignedAddress tr').removeClass('active');
            $(this).addClass('active');
            var id = $(this).find("td:first").html();  
            $('#loading').show();
            $.ajax({
        		type : "GET",
        		url : "SetAddressSelected",
        		data : "addressSeq=" + id,
        		success : function (response) {
        			$('#loading').hide();
        		},
        		cache: false
        	});
    } );
	
	$('#idTableAvailableAddress').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
	$('#idTableAsignedDeptos').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
    $('#idTableAsignedDeptos tbody').on( 'click', 'tr', function () {
        	$('#idTableAsignedDeptos').removeClass('active');
            $(this).addClass('active');
            var id = $(this).find("td:first").html();  
            $.ajax({
        		type : "GET",
        		url : "SetDepartmentSelected",
        		data : "deptoSeq=" + id,
        		success : function (response) {
        		},
        		cache: false
        	});
    });
    
	$('#idTableAvailableDeptos').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
	$('#idTableAsignedOrders').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
    $('#idTableAsignedOrders tbody').on( 'click', 'tr', function () {
        	$('#idTableAsignedOrders tr').removeClass('active');
            $(this).addClass('active');
            var id = $(this).find("td:first").html();  
            $('#loading').show();
            $.ajax({
        		type : "GET",
        		url : "SetOrderSelected",
        		data : "orderSeq=" + id,
        		success : function (response) {
        			$('#loading').hide();
        		},
        		cache: false
        	});
    });
	
	$('#idTableAvailableOrders').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
	$('#idTableUsersNotifications').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
	$('#idTableAvailableSkus').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
	$('#idTableAssignedSkus').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
	$('#idTableExcludedSkus').DataTable({
		"aLengthMenu" : [[5, 25, 50, 100], [5, 25, 50, 100]],
		"iDisplayLength": 5
	});
	
    //SET INITIAL STATE ORDINARY ORDERS.
	if ($('#idCheckOrderOrdinary').is(':checked')) {
		$('#idQuantityOrdinary').removeProp('disabled');
	    $('#idCheckAuthDirOrd').removeProp('disabled');
		$('#idCheckOrdinaryBudgetExc').removeProp('disabled');
	    $('#idCheckAvoidRouteOrdinary').removeProp('disabled');
	} else {
		$('#idQuantityOrdinary').prop('disabled', true);
	    $('#idCheckAuthDirOrd').prop('disabled', true);
		$('#idCheckOrdinaryBudgetExc').prop('disabled', true);
	    $('#idCheckAvoidRouteOrdinary').prop('disabled', true);
	}
    
    //SET INITIAL STATE EXTRA ORDINARY ORDERS.
	if ($('#idCheckOrderExtraOrdinary').is(':checked')) {
		$('#idQuantityExtraordinary').removeProp('disabled');
	    $('#idCheckAuthDirExtraord').removeProp('disabled');
	    $('#idCheckExtraordinaryBudgetExc').removeProp('disabled');
	    $('#idCheckAvoidRouteExtraordinary').removeProp('disabled');
	} else {
		$('#idQuantityExtraordinary').prop('disabled', true);
	    $('#idCheckAuthDirExtraord').prop('disabled', true);
	    $('#idCheckExtraordinaryBudgetExc').prop('disabled', true);
	    $('#idCheckAvoidRouteExtraordinary').prop('disabled', true);
	}
    
    
    //SET INITIAL STATE PRIORITY ORDERS.
	if ($('#idCheckOrderPriority').is(':checked')) {
		$('#idQuantityPriority').removeProp('disabled');
	    $('#idCheckOrderTiene').removeProp('disabled');
	    $('#idCheckOrderAfectBudget').removeProp('disabled');
	    $('#idCheckAvoidRoutePrioritary').removeProp('disabled');
	} else {
		$('#idQuantityPriority').prop('disabled', true);
	    $('#idCheckOrderTiene').prop('disabled', true);
	    $('#idCheckOrderAfectBudget').prop('disabled', true);
	    $('#idCheckAvoidRoutePrioritary').prop('disabled', true);
	}
    
    //SET INITIAL STATE URGENT ORDERS.
	if ($('#idCheckOrderUrgent').is(':checked')) {
		$('#idQuantityUrgent').removeProp('disabled');
	    $('#idCheckAvoidRouteUrgent').removeProp('disabled');	
	    $('#idCheckAllUrgent').removeProp('disabled');
	} else {
		$('#idQuantityUrgent').prop('disabled', true);
	    $('#idCheckAvoidRouteUrgent').prop('disabled', true);
	    $('#idCheckAllUrgent').prop('disabled', true);
	}
    
    //CHANGE ENABLE ON ORDINIARY ORDERS
    $('#idCheckOrderOrdinary').change(function () {
    	if ($(this).is(':checked')) {
    		$('#idQuantityOrdinary').removeProp('disabled');
	    	$('#idCheckAuthDirOrd').removeProp('disabled');
	    	$('#idCheckOrdinaryBudgetExc').removeProp('disabled');
	    	$('#idCheckAvoidRouteOrdinary').removeProp('disabled');
    	} else {
    		$('#idQuantityOrdinary').val('');
    		$('#idCheckAuthDirOrd').prop('checked', false);
    		$('#idCheckAuthDirOrd').prop('checked', false);
    		$('#idCheckOrdinaryBudgetExc').prop('checked', false);
    		$('#idCheckAvoidRouteOrdinary').prop('checked', false);
	    	$('#idQuantityOrdinary').prop('disabled', true);
	    	$('#idCheckAuthDirOrd').prop('disabled', true);
	    	$('#idCheckOrdinaryBudgetExc').prop('disabled', true);
	    	$('#idCheckAvoidRouteOrdinary').prop('disabled', true);
    	}
    });
    //CHANGE DISABLE ON EXTRA ORDINARY ORDERS
    $('#idCheckOrderExtraOrdinary').change(function (){
    	if ($(this).is(':checked')) {
    		$('#idQuantityExtraordinary').removeProp('disabled');
	    	$('#idCheckAuthDirExtraord').removeProp('disabled');
	    	$('#idCheckExtraordinaryBudgetExc').removeProp('disabled');
	    	$('#idCheckAvoidRouteExtraordinary').removeProp('disabled');
    	} else {
    		$('#idQuantityExtraordinary').val('');
    		$('#idCheckAuthDirExtraord').prop('checked', false);
    		$('#idCheckExtraordinaryBudgetExc').prop('checked', false);
    		$('#idCheckAvoidRouteExtraordinary').prop('checked', false);
	    	$('#idQuantityExtraordinary').prop('disabled', true);
	    	$('#idCheckAuthDirExtraord').prop('disabled', true);
	    	$('#idCheckExtraordinaryBudgetExc').prop('disabled', true);
	    	$('#idCheckAvoidRouteExtraordinary').prop('disabled', true);
    	}
    });
    //CHANGE DISABLE ON PRIORITY ORDERS
    $('#idCheckOrderPriority').change(function (){
    	if ($(this).is(':checked')) {
    		$('#idQuantityPriority').removeProp('disabled');
	    	$('#idCheckOrderTiene').removeProp('disabled');
	    	$('#idCheckOrderAfectBudget').removeProp('disabled');
	    	$('#idCheckAvoidRoutePrioritary').removeProp('disabled');
    	} else  {
    		$('#idQuantityPriority').val('');
    		$('#idCheckOrderTiene').prop('checked', false);
    		$('#idCheckOrderAfectBudget').prop('checked', false);
    		$('#idCheckAvoidRoutePrioritary').prop('checked', false);
	    	$('#idQuantityPriority').prop('disabled', true);
	    	$('#idCheckOrderTiene').prop('disabled', true);
	    	$('#idCheckOrderAfectBudget').prop('disabled', true);
	    	$('#idCheckAvoidRoutePrioritary').prop('disabled', true);
    	}
    });
  //CHANGE DISABLE ON URGENT ORDERS
    $('#idCheckOrderUrgent').change(function (){
    	if ($(this).is(':checked')) {
    		$('#idQuantityUrgent').removeProp('disabled');
	    	$('#idCheckAvoidRouteUrgent').removeProp('disabled');
	    	$('#idCheckAllUrgent').removeProp('disabled');
    	} else  {
    		$('#idQuantityUrgent').val('');
    		$('#idCheckAvoidRouteUrgent').prop('checked', false);
    		$('#idCheckAllUrgent').prop('checked', false);
	    	$('#idQuantityUrgent').prop('disabled', true);
	    	$('#idCheckAvoidRouteUrgent').prop('disabled', true);
	    	$('#idCheckAllUrgent').prop('disabled', true);
    	}
    });
    //SET ALL CHECK FOR URGENT ORDERS
    $('#idCheckAllUrgent').change(function() {
        $('#idCheckUrgentDM').prop('checked', $(this).is(':checked'));
        $('#idCheckUrgent24Hrs').prop('checked', $(this).is(':checked'));
        $('#idCheckUrgent48Hrs').prop('checked', $(this).is(':checked'));
    });
    //SET ALL CHECK USER BUY DAY
    $('#idCheckUserBuyEveryDay').change (function () {
    	$('#idCheckBuyMon').prop('checked', $(this).is(':checked'));
    	$('#idCheckBuyTue').prop('checked', $(this).is(':checked'));
    	$('#idCheckBuyWed').prop('checked', $(this).is(':checked'));
    	$('#idCheckBuyThu').prop('checked', $(this).is(':checked'));
    	$('#idCheckBuyFri').prop('checked', $(this).is(':checked'));
    });
    
    
  //POPUP NOTIFICACIONES
    $('#idBtnOpenNotifications').click(function() {
		type = $(this).attr('data-type');
		$('#idPopupNotificaciones').fadeIn(function() {
		window.setTimeout(function(){
			$('.window-container.'+type).addClass('window-container-visible');
		}, 100);
		});
	});
	$('.IconCerrar').click(function() {
		$('#idPopupNotificaciones').fadeOut().end().find('.window-container').removeClass('window-container-visible');
	});
	$('.SensibleCerrar').click(function() {
		$('#idPopupNotificaciones').fadeOut().end().find('.window-container').removeClass('window-container-visible');
	});
	$('#idBtnAddUserNotification').click(function() {
		$('#idPopupNotificaciones').fadeOut().end().find('.window-container').removeClass('window-container-visible');
		assignUserToNotifications();
	});
	
	
	//CONTROL TABLES DIVS
	$("#idListaAssignedAddress li.CombinaValPagos").click(function(){
        $("#idListaAvailableAddress li.OcultaCombinaValPagos").toggle();
    });
	
	$("#idListaAvailableAddress li.CombinaValPagos").click(function(){
        $("#idListaAssignedAddress li.OcultaCombinaValPagos").toggle();
    });
	
	$("#idListaAssignedDepartments li.CombinaValPagos").click(function(){
        $("#idListaAvailableDepartments li.OcultaCombinaValPagos").toggle();
    });
	
	$("#idListaAvailableDepartments li.CombinaValPagos").click(function(){
        $("#idListaAssignedDepartments li.OcultaCombinaValPagos").toggle();
    });
	
	$("#idListaAssignedOrders li.CombinaValPagos").click(function(){
        $("#idListaAvailableOrders li.OcultaCombinaValPagos").toggle();
    });
	
	$("#idListaAvailableOrders li.CombinaValPagos").click(function(){
        $("#idListaAssignedOrders li.OcultaCombinaValPagos").toggle();
    });

	$("#idAssignedSKUs li.CombinaValPagos").click(function(){
        $("#idExcludedSKUs li.OcultaCombinaValPagos").toggle();
    });
	
	$("#idExcludedSKUs li.CombinaValPagos").click(function(){
        $("#idAssignedSKUs li.OcultaCombinaValPagos").toggle();
    });
	
	//VALIDATION
	$('#idFormAddUserProfile').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'user.mailUsuario': {
                validators: {
                    emailAddress: {message: 'El valor no es un correo v\u00E1lido'}
                }
            }
        }
    });
	
	
	
});

function returnUserProfile() {
	$('#loading').show();
	$("#Content").load("pages/profiles/ProfileMenu.jsp", function(){
		$('#loading').hide();
	});
} 