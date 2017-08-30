package com.officeDepot.camel.util;

import javax.servlet.http.HttpServletRequest;

public interface SystemSession {
	public void subirObjetoASession(HttpServletRequest request, String clave, Object obj);
	public Object obtenerObjetoDSession(HttpServletRequest request, String clave);
	public String obtenerIPCliente(HttpServletRequest request);
}