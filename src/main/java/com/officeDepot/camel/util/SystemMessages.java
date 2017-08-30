package com.officeDepot.camel.util;

import java.io.Serializable;

public interface SystemMessages extends Serializable {
	public String getMessage(String key, Object... params);
	public String getMessage(String key);
}
