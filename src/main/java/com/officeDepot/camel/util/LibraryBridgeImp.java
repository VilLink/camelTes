package com.officeDepot.camel.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("libraryBridge")
public class LibraryBridgeImp implements LibraryBridge {

	private static final long serialVersionUID = 1638916541868469190L;

	@Autowired
	private Properties queries;

	private String textURL;
	private String url;
	private String resXML;
	private Map<String, String> answerTable;

	@Override
	public void addParameter(String name, String value) throws Exception {
		try {
			if (textURL == null || textURL.length() == 0)
				textURL = this.url + name.trim() + "=" + String.valueOf(value).trim();
			else
				textURL = textURL.trim() + "&" + name.trim() + "=" + String.valueOf(value).trim();
		} catch (Exception e) {
			System.err.println(e.getMessage() + "\n" + e.getCause());
		}
	}

	@Override
	public void executeRequest() throws Exception {
		URL urlCGI;
		HttpURLConnection conn;
		BufferedReader reader;
		String line;
		List<String> aspLines = new ArrayList<String>();

		try {
			urlCGI = new URL(textURL);
			conn = (HttpURLConnection) urlCGI.openConnection();
			conn.setRequestMethod("GET");
			conn.connect();
			reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			resXML = "";
			while ((line = reader.readLine()) != null) {
				resXML = resXML.trim() + line.trim();
				aspLines.add(line);
			}
			reader.close();
			conn.disconnect();
		} catch (Exception e) {
			System.err.println(e.getMessage() + "\n" + e.getCause());
		}
	}

	@Override
	public void parseXMLFile() throws Exception {
		// TODO Auto-generated method $hcastillo Checar si se necesita e implementarla
	}

	@Override
	public String getAnswer(String atributo) throws Exception {
		String value;
		value = (String) answerTable.get(atributo);
		if (value == null)
			value = "";
		return value;
	}

	@Override
	public void setUrl(String keyUrl) {
		url = queries.getProperty(keyUrl);
	}

}
