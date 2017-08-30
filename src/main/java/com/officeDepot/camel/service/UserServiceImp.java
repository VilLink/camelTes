package com.officeDepot.camel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.officeDepot.camel.data.UserDAO;
import com.officeDepot.camel.model.User;

@Service("userService")
public class UserServiceImp implements UserService {

	private static final long serialVersionUID = -4857568871897040291L;

	@Autowired
	private UserDAO userDAO;

	@Override
	public User validateAccess(User user) throws Exception {
		User userLogin = userDAO.searchUserForLogin(user);
		if (userLogin != null) {
			userLogin.setMsgLogin("VALID");
			return userLogin;
		} else {
			user.setMsgLogin("CPF2204");
			return user;
		}
	}

	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

}
