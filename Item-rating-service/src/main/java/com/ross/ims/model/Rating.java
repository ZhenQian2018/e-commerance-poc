package com.ross.ims.model;

public class Rating {
	public Rating(String itemId, int rating) {
		super();
		this.itemId = itemId;
		this.rating = rating;
	}
	private String itemId;
	
	private int rating;
	
	public String getItemId() {
		return itemId;
	}
	
	
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	

}
