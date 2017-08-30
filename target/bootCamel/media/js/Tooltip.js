// JavaScript Document

$(document).ready(function(){
	jQuery("a").mouseenter(function (e) {             
            var posMouse = e.pageX - this.offsetLeft; 
            var textoTooltip = jQuery(this).attr("TextTooltip");
            if (textoTooltip && textoTooltip.length > 0){
                jQuery(this).append('<div class="tooltip01">' + textoTooltip + '</div>');
                jQuery("a > div.tooltip01").css("left", "" + posMouse - 103 + "px");
                jQuery("a > div.tooltip01").fadeIn(300);
            }
        });

        jQuery("a").mouseleave(function () {             
            jQuery("a > div.tooltip01").fadeOut(300).delay(300).queue(function () {
                jQuery(this).remove();
                jQuery(this).dequeue();
            });
        });	
	
});