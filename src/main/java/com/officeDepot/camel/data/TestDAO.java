package com.officeDepot.camel.data;

import java.io.Serializable;

import com.officeDepot.camel.model.Test;

public interface TestDAO extends Serializable {
	Test getListTest(Test test) throws Exception;
}
