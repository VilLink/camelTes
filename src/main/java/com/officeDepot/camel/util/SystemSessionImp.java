package com.officeDepot.camel.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

@Component("systemSession")
public class SystemSessionImp implements SystemSession {
	@Override
	public void subirObjetoASession(HttpServletRequest request, String clave, Object obj) {
		request.getSession().setAttribute(clave, obj);
	}

	@Override
	public Object obtenerObjetoDSession(HttpServletRequest request, String clave) {
		final Object obj = request.getSession().getAttribute(clave);
		return obj;
	}

	@Override
	public String obtenerIPCliente(HttpServletRequest request) {
		String ipAddress = request.getHeader("X-FORWARDED-FOR");
		if (ipAddress == null) {
			ipAddress = request.getRemoteAddr();
		}
		return ipAddress;
	}
}
