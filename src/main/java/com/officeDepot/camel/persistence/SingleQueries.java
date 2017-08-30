package com.officeDepot.camel.persistence;

import java.util.Map;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.support.rowset.SqlRowSet;

public interface SingleQueries {
	
	SqlRowSet getSqlRowSet(String keyQuery) throws Exception;
	
	SqlRowSet getSqlRowSet(String keyQuery, Object ...params) throws Exception;
	
	SqlRowSet getSqlRowSet(String keyQuery, Map<String, Object> params) throws Exception;
	
	int queryDeleteUpdate(final String keyQuery) throws Exception;
	
	int queryDeleteUpdate(final String keyQuery, final Object ...params) throws Exception;
	
	int queryDeleteUpdate(final String keyQuery, final MapSqlParameterSource params) throws Exception;
	
	boolean checkForNull(SqlRowSet rs);
	
	String getValue(String value);
	
}