package com.ross.zuul.model;

import javax.persistence.Column;
import javax.persistence.Id;

public class size {
	@Id
	@Column(unique=true,length = 64)
	private String id;
	@Column
	private String name;
	@Column
	private int stock;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getStocl() {
		return stock;
	}
	public void setStocl(int stock) {
		this.stock = stock;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	

}
