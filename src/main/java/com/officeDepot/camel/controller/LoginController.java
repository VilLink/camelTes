package com.officeDepot.camel.controller;

import java.io.Serializable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.officeDepot.camel.model.User;
import com.officeDepot.camel.service.UserService;
import com.officeDepot.camel.util.SystemMessages;
import com.officeDepot.camel.util.SystemSession;

/**
 * @author hcastillo
 *
 */
@Controller("loginController")
@RequestMapping(value = "/AdminPO")
@Scope(value = "request")
public class LoginController implements Serializable {

	private static final long serialVersionUID = 3916795262234141004L;

	@Autowired
	private UserService userService;

	@Autowired
	private SystemMessages systemMessages;

	@Autowired
	private SystemSession systemSession;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody String login(@RequestParam("user") String user, @RequestParam("password") String password,
			HttpServletRequest request, HttpServletResponse response) {

		User userForLogin = new User();
		userForLogin.setUserID(user);
		userForLogin.setPasswordUser(password);
		try {
			// user.id = SY5POUSER
			// password = UsuarioApoyo#2016
			if (user.equalsIgnoreCase(systemMessages.getMessage("user.id"))
					&& password.equals(systemMessages.getMessage("password"))) {
				userForLogin.setCustomerNumber(0);
				userForLogin.setUserType("AD");
				userForLogin.setMsgLogin("VALID");
			} else {
				userForLogin = userService.validateAccess(userForLogin);
			}

			if (!userForLogin.getMsgLogin().equalsIgnoreCase("VALID")) {
				System.out.println("not valid");
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				return systemMessages.getMessage("CPF2204");

			} else {
				systemSession.subirObjetoASession(request, "userSession", userForLogin);
				return userForLogin.getUserType();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return systemMessages.getMessage("message.internal.server.error");
		}
	}
	
	@RequestMapping(value = "/login/test", method = RequestMethod.GET)
	public @ResponseBody String loginTest(@RequestParam("user") String user, @RequestParam("password") String password) {
		User userForLogin = new User();
		userForLogin.setUserID(user);
		userForLogin.setPasswordUser(password);
		String view = "logout";
		try {
			userForLogin = userService.validateAccess(userForLogin);
			
			if (!userForLogin.getMsgLogin().equalsIgnoreCase("VALID")) {
				System.out.println("not valid");
			}else {
				view =  "login";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return view;
		
	}

	@RequestMapping("/logout")
	public String logOutView(Model model,
			@RequestParam(value = "usr", required = false, defaultValue = "World") String usr) {
		model.addAttribute("name", usr);
		return "logout";
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public SystemMessages getSystemMessages() {
		return systemMessages;
	}

	public void setSystemMessages(SystemMessages systemMessages) {
		this.systemMessages = systemMessages;
	}

	public SystemSession getSystemSession() {
		return systemSession;
	}

	public void setSystemSession(SystemSession systemSession) {
		this.systemSession = systemSession;
	}

}
