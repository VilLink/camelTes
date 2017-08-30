package com.officeDepot.camel.data;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.officeDepot.camel.model.User;
import com.officeDepot.camel.persistence.SingleQueries;
import com.officeDepot.camel.util.ModuleBridge;
import com.officeDepot.camel.util.SystemMessages;

/**
 * @author hcastillo
 *
 */
@Repository("userDAO")
public class UserDAOImp implements UserDAO {

	private static final long serialVersionUID = -867148046998564399L;

	@Autowired
	ModuleBridge moduleBridge;

	@Autowired
	private SystemMessages systemMessages;

	@Autowired
	private SingleQueries singleQueries;

	@Override
	public String validateAccess(User user) throws Exception {
		return null;
	}

	@Override
	public String getUserName(String userID) throws Exception {
		return null;
	}

	@Override
	public User searchUserForLogin(User user) throws Exception {
		Object[] params = { user.getUserID(), user.getPasswordUser() };
		SqlRowSet rs = singleQueries.getSqlRowSet("query.search.user.login", params);
		if (singleQueries.checkForNull(rs))
			return this.resultSetToUser(rs);
		else
			return null;
	}

	private User resultSetToUser(SqlRowSet rs) {
		User temp = new User();
		temp.setCustomerNumber(rs.getLong(1));
		temp.setUserID(rs.getString(2));
		temp.setPasswordUser(rs.getString(3));
		temp.setNameUser(rs.getString(4));
		temp.setSuperUser(rs.getString(5));
		temp.setSuperUserID(rs.getString(6));
		temp.setTaxes(rs.getString(7));
		temp.setSeeDeliveryAddress(rs.getString(8));
		temp.setMaxAmount(new BigDecimal(rs.getDouble(9)));
		temp.setCustomerEmail(rs.getString(10));
		temp.setCustomerPhone(rs.getLong(11));
		temp.setOperatorMail(rs.getString(12));
		temp.setOnlyContract(rs.getString(13));
		temp.setUserType(rs.getString(14));
		return temp;
	}

	public ModuleBridge getModuleBridge() {
		return moduleBridge;
	}

	public void setModuleBridge(ModuleBridge moduleBridge) {
		this.moduleBridge = moduleBridge;
	}

	public SystemMessages getSystemMessages() {
		return systemMessages;
	}

	public void setSystemMessages(SystemMessages systemMessages) {
		this.systemMessages = systemMessages;
	}

	public SingleQueries getSingleQueries() {
		return singleQueries;
	}

	public void setSingleQueries(SingleQueries singleQueries) {
		this.singleQueries = singleQueries;
	}

}
