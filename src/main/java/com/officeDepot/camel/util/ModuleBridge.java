package com.officeDepot.camel.util;

import java.io.Serializable;
import java.util.Map;

import com.officeDepot.camel.model.User;


public interface ModuleBridge extends Serializable{
	Map<String, String> searchUserODMS (final User user)throws Exception;
}
