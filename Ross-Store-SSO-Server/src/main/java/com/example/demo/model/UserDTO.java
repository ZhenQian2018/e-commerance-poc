package com.example.demo.model;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.dao.UserDao;

public class UserDTO {
	private String username;
	private String password;
	private String email;
	

	@Autowired
	private UserDao userDao;
	
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}