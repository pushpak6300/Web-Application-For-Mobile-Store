package com.example.siddhimobiles.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Shops;
import com.example.siddhimobiles.service.ShopsServices;



@RestController
public class ShopsController {
	@Autowired
	private ShopsServices shopsServiceRef;

	@GetMapping("/shops")
	public Collection<Shops> getAllShops() {
		Collection<Shops> allShops = shopsServiceRef.getAllShops();
		return allShops;
	}

	@GetMapping("/shops/{shopsId}")
	public Shops getOneShops(@PathVariable("shopsId") Long id) {
		Shops foundShops = shopsServiceRef.getOneShops(id);
		return foundShops;
	}

	@PostMapping("/shops")
	public void addNewShops(@RequestBody Shops shopsRef) {
		System.out.println(shopsRef);
		shopsServiceRef.addNewShops(shopsRef);

	}

	@DeleteMapping("/shops/{shopsId}")
	public void deleteOneShops(@PathVariable("shopsId") Long id) {
		shopsServiceRef.deleteOneShops(id);
	}
}
