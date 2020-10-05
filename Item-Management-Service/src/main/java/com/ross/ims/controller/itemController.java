package com.ross.ims.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ross.ims.model.CatalogItem;

@RestController
@RequestMapping("/api/product")
public class itemController {
	@RequestMapping("/{userId}")
	public List<CatalogItem> getCatalogItem(@PathVariable("userId") String userId){
		
		return Collections.singletonList(
				new CatalogItem("transforms","Test",4)
				);
				
		
		
	}

}
