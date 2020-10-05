package com.ross.zuul.model;

import javax.persistence.Column;
import javax.persistence.Id;

public class tag {
	@Id
	private String id;
	
	@Column
	private String tag;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}

}
