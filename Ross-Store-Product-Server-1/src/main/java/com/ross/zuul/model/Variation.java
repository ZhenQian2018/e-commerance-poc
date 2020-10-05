package com.ross.zuul.model;

import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Variation {
	@Id
	@Column(unique=true,length = 64)
	private String id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Column
	private String color;
	@Column
	private String image;
	@Column
	@OneToMany(mappedBy = "Variation",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private ArrayList<size> size;
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public ArrayList<size> getSize() {
		return size;
	}
	public void setSize(ArrayList<size> size) {
		this.size = size;
	}


}
