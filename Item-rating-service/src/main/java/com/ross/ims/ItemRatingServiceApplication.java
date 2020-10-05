package com.ross.ims;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ItemRatingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItemRatingServiceApplication.class, args);
	}

}
