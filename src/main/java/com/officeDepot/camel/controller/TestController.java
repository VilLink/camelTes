/**
 * 
 */
package com.officeDepot.camel.controller;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.officeDepot.camel.model.Test;
import com.officeDepot.camel.service.TestService;

/**
 * @author hcastillo
 *
 */
@Controller("testController")
@RequestMapping(value = "/test")
@Scope(value = "request")
public class TestController implements Serializable {

	private static final long serialVersionUID = -7856608740220712806L;

	@Autowired
	private TestService testService;

	@RequestMapping(value = "/sql", method = RequestMethod.GET)
	public @ResponseBody String loginTest(@RequestParam("a5") String a5, @RequestParam("a6") String a6) {
		Test t = new Test();
		t.setA5(a5);
		t.setA6(a6);

		String view = "logout";
		try {
			Test test = testService.getTest(t);
			if (test != null) {
				view = "login";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return view;

	}

}
