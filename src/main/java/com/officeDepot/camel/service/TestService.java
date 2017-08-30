/**
 * 
 */
package com.officeDepot.camel.service;

import java.io.Serializable;

import com.officeDepot.camel.model.Test;

/**
 * @author hcastillo
 *
 */
public interface TestService extends Serializable{
	Test getTest(Test test)throws Exception;
}
