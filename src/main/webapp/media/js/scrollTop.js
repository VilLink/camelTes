// JavaScript Document


jQuery(document).ready(function() {
				var offset = 220;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.Subir').fadeIn(duration);
						jQuery('.budgetList').fadeOut(duration);
					} else {
						jQuery('.Subir').fadeOut(duration);
						jQuery('.budgetList').fadeIn(duration);
					}
				});
				
				jQuery('.Subir').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
				
				
				jQuery('.budgetList').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
			});