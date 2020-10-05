package com.ross.zuul.model;
import java.io.Serializable;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity 
@Table(name="product")
public class Product  {
	@Id
	@Column(unique=true,length = 64)
	private String id;
	@Column
	private String sku;
	@Column
	private String name;
	@Column
	private float price;
	@Column
	private float discount;
	@Column
	private boolean _new;
	@Column
	private float rating;
	@Column
	private int saleCount;
	@Column
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "Product",cascade = CascadeType.ALL)
	private ArrayList<category>category;
	@Column
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "Product",cascade = CascadeType.ALL)
	private ArrayList<tag>tag;
	@Column
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "Product",cascade = CascadeType.ALL)
	private ArrayList<Variation> variation;
	
	public ArrayList<category> getCategory() {
		return category;
	}


	public void setCategory(ArrayList<category> category) {
		this.category = category;
	}


	public ArrayList<tag> getTag() {
		return tag;
	}


	public void setTag(ArrayList<tag> tag) {
		this.tag = tag;
	}


	public String getId() {
		return id;
	}
	
	
	public void setId(String id) {
		this.id = id;
	}
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	public boolean is_new() {
		return _new;
	}
	public void set_new(boolean _new) {
		this._new = _new;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public int getSaleCount() {
		return saleCount;
	}
	public void setSaleCount(int saleCount) {
		this.saleCount = saleCount;
	}

	public ArrayList<Variation> getVariation() {
		return variation;
	}
	public void setVariation(ArrayList<Variation> variation) {
		this.variation = variation;
	}
	
	
	

}
 