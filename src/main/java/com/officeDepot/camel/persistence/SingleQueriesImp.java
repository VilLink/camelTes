package com.officeDepot.camel.persistence;

import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

@PropertySource("classpath:queries.properties")
@Component("singleQueries")
public class SingleQueriesImp extends JdbcDaoSupport implements SingleQueries {

	@SuppressWarnings("unused")
	private static final long serialVersionUID = 855928126418403476L;

	@Autowired
	Environment queries;

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	public SingleQueriesImp(DataSource dataSource) {
		setDataSource(dataSource);
	}

	@Override
	public SqlRowSet getSqlRowSet(String keyQuery) throws Exception {
		SqlRowSet result = null;

		String query = queries.getProperty(keyQuery);
		try {
			if (query != null) {
				if (isDebbugMode()) {
					System.out.println("***** SINGLE-QUERY KEY: " + keyQuery);
					System.out.println("***** SINGLE-QUERY EXECUTE: " + query);
				}
				result = getJdbcTemplate().queryForRowSet(query);
				// result = jdbcTemplate.queryForRowSet(query);
			} else {
				System.err.println("*****ERROR GET SINGLE QUERY*****");
				System.err.println("VALUE NOT FOUND FOR KEY: " + keyQuery);
			}
		} catch (Exception e) {
			System.err.println("*****ERROR EXECUTE SINGLE QUERY*****");
			System.err.println("QUERY: " + query);
			System.err.println("************************************");
			throw e;
		}
		return result;
	}

	@Override
	public SqlRowSet getSqlRowSet(String keyQuery, Object... params) throws Exception {
		SqlRowSet result = null;
		String query = queries.getProperty(keyQuery);
		try {
			if (query != null) {
				if (isDebbugMode()) {
					System.out.println("***** SINGLE-QUERY KEY: " + keyQuery);
					System.out.println("***** SINGLE-QUERY EXECUTE: " + query);
					System.out.print("***** SINGLE-QUERY PARAMS: ");
					for (Object param : params) {
						System.out.print(param + "  |  ");
					}
					System.out.println("***** END");
				}
				// result = getJdbcTemplate().queryForRowSet(query, params);
				result = jdbcTemplate.queryForRowSet(query, params);
			} else {
				System.err.println("*****ERROR GET SINGLE QUERY*****");
				System.err.println("VALUE NOT FOUND FOR KEY: " + keyQuery);
			}

		} catch (Exception e) {
			System.err.println("*****ERROR EXECUTE SINGLE QUERY*****");
			System.err.println("QUERY: " + query + "  ");
			for (Object param : params) {
				System.out.print(param + "  |  ");
			}
			System.err.println("************************************");
			throw e;
		}
		return result;
	}

	@Override
	public SqlRowSet getSqlRowSet(String keyQuery, Map<String, Object> params) throws Exception {
		SqlRowSet result = null;
		String query = queries.getProperty(keyQuery).trim();
		try {
			if (query != null) {
				if (isDebbugMode()) {
					System.out.println("***** SINGLE-QUERY KEY: " + keyQuery);
					System.out.println("***** SINGLE-QUERY EXECUTE: " + query);
					System.out.print("***** SINGLE-QUERY PARAMS: ");
					if (params != null)
						for (Map.Entry<String, Object> entry : params.entrySet()) {
							System.out.print(entry.getValue() + "  |  ");
						}
					System.out.println("");
				}
				NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(getJdbcTemplate().getDataSource());
				result = template.queryForRowSet(query, params);
			} else {
				System.err.println("*****ERROR GET SINGLE QUERY*****");
				System.err.println("VALUE NOT FOUND FOR KEY: " + keyQuery);
			}
		} catch (Exception e) {
			System.err.println("*****ERROR EXECUTE SINGLE QUERY*****");
			System.err.println("QUERY: " + query + "   ");
			if (params != null)
				for (Map.Entry<String, Object> entry : params.entrySet()) {
					System.out.print(entry.getValue() + "  |  ");
				}
			System.err.println("************************************");
			throw e;
		}
		return result;
	}

	@Override
	public int queryDeleteUpdate(String keyQuery) throws Exception {
		int result = 0;
		String query = queries.getProperty(keyQuery);
		try {
			if (query != null) {
				if (isDebbugMode()) {
					System.out.println("***** SINGLE-QUERY KEY: " + keyQuery);
					System.out.println("***** SINGLE-QUERY EXECUTE DELETE OR UPDATE: " + query);
				}
				result = getJdbcTemplate().update(query);
			} else {
				System.err.println("*****ERROR GET SINGLE QUERY*****");
				System.err.println("VALUE NOT FOUND FOR KEY: " + keyQuery);
			}
		} catch (Exception e) {
			System.err.println("*****ERROR EXECUTE SINGLE QUERY DELETE OR UPDATE*****");
			System.err.println("QUERY: " + query);
			System.err.println("*****************************************************");
			throw e;
		}
		return result;
	}

	@Override
	public int queryDeleteUpdate(String keyQuery, Object... params) throws Exception {
		int result = 0;
		String query = queries.getProperty(keyQuery);
		try {
			if (query != null) {
				if (isDebbugMode()) {
					System.out.println("***** SINGLE-QUERY KEY: " + keyQuery);
					System.out.println("***** SINGLE-QUERY EXECUTE DELETE OR UPDATE: " + query + "    ");
					for (Object param : params) {
						System.out.print(param + "    ");
					}
				}
				result = getJdbcTemplate().update(query, params);
			} else {
				System.err.println("*****ERROR GET SINGLE QUERY*****");
				System.err.println("VALUE NOT FOUND FOR KEY: " + keyQuery);
			}
		} catch (Exception e) {
			System.err.println("*****ERROR EXECUTE SINGLE QUERY DELETE OR UPDATE*****");
			System.err.println("QUERY: " + query + "    ");
			for (Object param : params) {
				System.out.print(param + "    ");
			}
			System.err.println("*****************************************************");
			throw e;
		}
		return result;
	}

	@Override
	public int queryDeleteUpdate(String keyQuery, MapSqlParameterSource params) throws Exception {
		int result = 0;
		String query = queries.getProperty(keyQuery);
		try {
			if (query != null) {
				if (isDebbugMode()) {
					System.out.println("***** SINGLE-QUERY KEY: " + keyQuery);
					System.out.println("***** SINGLE-QUERY EXECUTE DELETE OR UPDATE: " + query);
					System.out.print("***** SINGLE-QUERY PARAMS: ");
					if (params != null)
						for (Object param : params.getValues().values()) {
							System.out.print(param + "  |  ");
						}
				}
				NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(getJdbcTemplate().getDataSource());
				result = template.update(query, params);
			} else {
				System.err.println("*****ERROR GET SINGLE QUERY*****");
				System.err.println("VALUE NOT FOUND FOR KEY: " + keyQuery);
			}
		} catch (Exception e) {
			System.err.println("*****ERROR EXECUTE SINGLE QUERY DELETE OR UPDATE*****");
			System.err.println("QUERY: " + query);
			System.out.print("***** SINGLE-QUERY PARAMS: ");
			if (params != null)
				for (Object param : params.getValues().values()) {
					System.out.print(param + "  |  ");
				}
			System.err.println("*****************************************************");
			throw e;
		}
		return result;
	}

	@Override
	public boolean checkForNull(SqlRowSet rs) {
		try {
			return rs.next();
		} catch (Exception e) {
			return false;
		}
	}

	private boolean isDebbugMode() {
		// FIXME $hcastillo Comentado por el camvio de queries a Enviroment
		// if (String.valueOf(queries.get("debug")).equalsIgnoreCase("Y"))
		// return true;
		// else
		boolean isDebug = java.lang.management.ManagementFactory.getRuntimeMXBean().
        getInputArguments().toString().indexOf("-agentlib:jdwp") > 0;
        
        return isDebug;
		
	}

	@Override
	public String getValue(String value) {
		if (value != null)
			return value.trim();
		else
			return "";
	}

}
