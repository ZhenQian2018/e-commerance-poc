package com.ross.zuul.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ross.zuul.model.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, String> {

}
