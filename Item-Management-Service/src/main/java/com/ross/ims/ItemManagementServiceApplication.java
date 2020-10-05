package com.ross.ims;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@SpringBootApplication
@EnableEurekaClient
public class ItemManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItemManagementServiceApplication.class, args);
	}

}
