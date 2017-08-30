package com.officeDepot.camel.data;

import java.io.Serializable;

import com.officeDepot.camel.model.User;

/**
 * @author hcastillo
 *
 */
public interface UserDAO extends Serializable{
	String validateAccess(final User user) throws Exception;
	String getUserName(final String userID) throws Exception;
	User searchUserForLogin(User user) throws Exception;
}
