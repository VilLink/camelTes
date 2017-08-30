/**
 * 
 */
package com.officeDepot.camel;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

/**
 * @author hcastillo
 *
 */
@Configuration
@PropertySource("classpath:queries.properties")
@ConfigurationProperties(prefix = "queries")
public class QueriesPropertiesConfig {

	@Bean
	public static PropertySourcesPlaceholderConfigurer propertyConfigInDev() {
		return new PropertySourcesPlaceholderConfigurer();
	}

}
