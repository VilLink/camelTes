package com.officeDepot.camel.util;

import java.text.MessageFormat;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("systemMessages")
public class SystemMessagesImp implements SystemMessages{

	private static final long serialVersionUID = 2538011222430573412L;

	@Autowired
	private Properties applicationMessages;

	@Override
	public String getMessage(String key, Object... params) {
		final String label = MessageFormat.format(applicationMessages.getProperty(key), params);
		if (label != null && !label.isEmpty())
			return label;
		else
			return "";
	}

	@Override
	public String getMessage(String key) {
		final String label = applicationMessages.getProperty(key);
		if (label != null && !label.isEmpty())
			return label;
		else
			return "";
	}

	public Properties getApplicationMessages() {
		return applicationMessages;
	}

	public void setApplicationMessages(Properties applicationMessages) {
		this.applicationMessages = applicationMessages;
	}
	
	

}
