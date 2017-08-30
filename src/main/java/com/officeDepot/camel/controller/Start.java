/**
 * 
 */
package com.officeDepot.camel.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author hcastillo
 *
 */
@RestController
class Start {

	@RequestMapping("/init/")
	String login() {

		return "papas con queso";

	}
}