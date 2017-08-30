package com.officeDepot.camel.util;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.officeDepot.camel.model.User;

@Component("moduleBridge")
public class ModuleBridgeImp implements ModuleBridge{

	private static final long serialVersionUID = 7164622695668192460L;
	
	@Autowired
	private LibraryBridge libraryBridge;

	@Override
	public Map<String, String> searchUserODMS(User user) throws Exception {
		Map<String, String> userMap = new HashMap<String, String>();
		libraryBridge.setUrl("AS400.URL.LOGIN");
		
		libraryBridge.addParameter("USR", user.getUserID());
		libraryBridge.addParameter("PWD", user.getPasswordUser());
		libraryBridge.addParameter("FILLER", "1");
		libraryBridge.executeRequest();
		libraryBridge.parseXMLFile();
		
	    userMap.put("success", libraryBridge.getAnswer("LGN"));
	    userMap.put("messagesError", libraryBridge.getAnswer("MSG"));
	   	return userMap;
	}

	public LibraryBridge getLibraryBridge() {
		return libraryBridge;
	}

	public void setLibraryBridge(LibraryBridge libraryBridge) {
		this.libraryBridge = libraryBridge;
	}

}
