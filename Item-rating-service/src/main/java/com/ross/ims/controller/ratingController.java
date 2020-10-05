package com.ross.ims.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ross.ims.model.Rating;

@RestController
@RequestMapping("/rattings")
public class ratingController {
	
	@RequestMapping("/{itemId}")
	public Rating getRating(@PathVariable("itemId") String itemId ) {
		return new Rating(itemId,4);
		
		
	}

}
