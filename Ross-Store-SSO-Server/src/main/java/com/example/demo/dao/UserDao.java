package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.DaoUser;

@Repository
public interface UserDao extends CrudRepository<DaoUser, Long> {
	DaoUser findByUsername(String username);
	DaoUser findByEmail(String email);
	
	
}