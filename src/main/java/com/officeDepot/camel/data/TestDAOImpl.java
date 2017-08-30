package com.officeDepot.camel.data;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.officeDepot.camel.model.Test;
import com.officeDepot.camel.persistence.SingleQueries;

@Repository("testDAO")
public class TestDAOImpl implements TestDAO {

	private static final long serialVersionUID = 3209368073422347087L;

	@Autowired
	private SingleQueries singleQueries;

	@Override
	public Test getListTest(Test test) throws Exception {
		
		Map<String, Object> params = new HashMap<>();
		params.put("LLVDS1", test.getA5());
		params.put("LLVDS2", test.getA6());
		
		SqlRowSet rs = singleQueries.getSqlRowSet("query.search.user.login", params);
		
		if (singleQueries.checkForNull(rs))
			return this.resultSetToTest(rs);
		else
			return null;
	}

	private Test resultSetToTest(SqlRowSet rs) {
		Test t = new Test();
		t.setA1(rs.getString(1));
		t.setA2(rs.getString(2));
		t.setA3(rs.getString(3));
		t.setA4(rs.getString(4));
		t.setA5(rs.getString(5));
		t.setA6(rs.getString(6));
		t.setA7(rs.getString(7));
		return t;
	}

}
