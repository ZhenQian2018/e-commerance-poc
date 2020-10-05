 package com.eureka.Ross_Eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class RossEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(RossEurekaApplication.class, args);
	}

}
