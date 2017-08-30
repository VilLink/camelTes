/////////// FACTURACIÓN ELECTRÓNICA / Generar Factura Electrónica /AGREGAR CAMPOS ITU///////////////////////////////////////////////////
$(document).ready(function() {

    var MaxInputs       = 15; //Número Maximo de Campos
    var contenedor       = $("#contenedorAgregar"); //ID del contenedorGenFacElec
    var AddButton       = $("#agregarCampo"); //ID del Botón Agregar

    //var x = número de campos existentes en el contenedorGenFacElec
    var x = $("#contenedorAgregar div").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos

    $(AddButton).click(function (e) {
        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append('<div class="addBloque"><input type="text" name="mitexto[]" id="campo_'+ FieldCount +'" placeholder="SKU '+ FieldCount +'"/><a href="#" class="eliminar"><input tabindex="2" type="number" min="0" step="1" placeholder="0" name="cantidad[]" id="sku_1_cantidad"><i class="icos-trashcan"></i></a></div>');
            x++; //text box increment
        }
        return false;
    });

    $("body").on("click",".eliminar", function(e){ //click en eliminar campo
        if( x > 1 ) {
            $(this).parent('div').remove(); //eliminar el campo
            x--;
        }
        return false;
    });
});
///////////////////////////////////////////