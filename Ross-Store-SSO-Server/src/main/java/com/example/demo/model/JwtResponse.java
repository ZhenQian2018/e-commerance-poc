package com.example.demo.model;

import java.io.Serializable;

public class JwtResponse implements Serializable {
	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private final String status;
	private final String message;
	public String getMessage() {
		return message;
	}

	public String getStatus() {
		return status;
	}

	public JwtResponse(String jwttoken,String status,String message) {
		this.jwttoken = jwttoken;
		this.status = status;
		this.message = message;
	}

	public String getToken() {
		return this.jwttoken;
	}
}