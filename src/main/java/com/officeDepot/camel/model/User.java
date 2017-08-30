package com.officeDepot.camel.model;

import java.io.Serializable;
import java.math.BigDecimal;

public class User implements Serializable {

	private static final long serialVersionUID = -6740246238196439498L;

	private long customerNumber; // POUCTE
	private String userID; // POUUSU
	private String passwordUser; // POUCSE
	private String nameUser; // POUDES
	private String superUser; // POUISU
	private String superUserID; // POUSUP
	private String taxes; // POUPIV
	private String seeDeliveryAddress; // POUSAD
	private BigDecimal maxAmount; // POUMAX
	private String customerEmail; // POUMAI
	private long customerPhone; // POUPHO
	private String operatorMail; // POUOPE
	private String onlyContract; // POUCAT
	private String userType; // POUTYP
	private String msgLogin;

	public long getCustomerNumber() {
		return customerNumber;
	}

	public void setCustomerNumber(long customerNumber) {
		this.customerNumber = customerNumber;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getPasswordUser() {
		return passwordUser;
	}

	public void setPasswordUser(String passwordUser) {
		this.passwordUser = passwordUser;
	}

	public String getNameUser() {
		return nameUser;
	}

	public void setNameUser(String nameUser) {
		this.nameUser = nameUser;
	}

	public String getSuperUser() {
		return superUser;
	}

	public void setSuperUser(String superUser) {
		this.superUser = superUser;
	}

	public String getSuperUserID() {
		return superUserID;
	}

	public void setSuperUserID(String superUserID) {
		this.superUserID = superUserID;
	}

	public String getTaxes() {
		return taxes;
	}

	public void setTaxes(String taxes) {
		this.taxes = taxes;
	}

	public String getSeeDeliveryAddress() {
		return seeDeliveryAddress;
	}

	public void setSeeDeliveryAddress(String seeDeliveryAddress) {
		this.seeDeliveryAddress = seeDeliveryAddress;
	}

	public BigDecimal getMaxAmount() {
		return maxAmount;
	}

	public void setMaxAmount(BigDecimal maxAmount) {
		this.maxAmount = maxAmount;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public long getCustomerPhone() {
		return customerPhone;
	}

	public void setCustomerPhone(long customerPhone) {
		this.customerPhone = customerPhone;
	}

	public String getOperatorMail() {
		return operatorMail;
	}

	public void setOperatorMail(String operatorMail) {
		this.operatorMail = operatorMail;
	}

	public String getOnlyContract() {
		return onlyContract;
	}

	public void setOnlyContract(String onlyContract) {
		this.onlyContract = onlyContract;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getMsgLogin() {
		return msgLogin;
	}

	public void setMsgLogin(String msgLogin) {
		this.msgLogin = msgLogin;
	}

}
