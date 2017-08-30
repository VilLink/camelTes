/**
 * 
 */
package com.officeDepot.camel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.officeDepot.camel.data.TestDAO;
import com.officeDepot.camel.model.Test;

/**
 * @author hcastillo
 *
 */
@Service("testService")
public class TestServiceImp  implements TestService {

	private static final long serialVersionUID = -1382978621988519114L;
	
	@Autowired
	private TestDAO testDao;

	@Override
	public Test getTest(Test test) throws Exception {
		Test t = testDao.getListTest(test);
		return t;
	}


}
