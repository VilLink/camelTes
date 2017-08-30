package com.officeDepot.camel.service;

import java.io.Serializable;

import com.officeDepot.camel.model.User;

public interface UserService extends Serializable{
	User validateAccess(final User user)throws Exception;
}
