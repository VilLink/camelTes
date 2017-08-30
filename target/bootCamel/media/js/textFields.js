function onlyTextValidate(e) { 
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla==8) return true; // backspace
	if (tecla==32) return true; // espacio
	if (e.ctrlKey && tecla==86) { return true;} //Ctrl v
	if (e.ctrlKey && tecla==67) { return true;} //Ctrl c
	if (e.ctrlKey && tecla==88) { return true;} //Ctrl x
 
	patron = /[A-Z]/; //patron
	text = String.fromCharCode(tecla);
	return patron.test(text); // prueba de patron
}
