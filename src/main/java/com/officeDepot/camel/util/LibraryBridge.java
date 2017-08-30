package com.officeDepot.camel.util;

import java.io.Serializable;

public interface LibraryBridge extends Serializable{
	void addParameter(String name,String value) throws Exception;
	void executeRequest() throws Exception;
	void parseXMLFile() throws Exception;
	String getAnswer(String atributo) throws Exception;
	void setUrl(String keyUrl);
}
