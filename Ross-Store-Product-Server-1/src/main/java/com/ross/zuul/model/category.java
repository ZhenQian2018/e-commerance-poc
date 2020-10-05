package com.ross.zuul.model;

import javax.persistence.Column;
import javax.persistence.Id;

public class category {
	@Id
	private String id;
	@Column
	private String category;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	

}
