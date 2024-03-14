package com.example.siddhimobiles.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Shops;
import com.example.siddhimobiles.repository.ShopsRepository;

@Service
public class ShopsServices {
	@Autowired
	private ShopsRepository shopsRepositoryRef;
	
	public Collection<Shops> getAllShops(){
		Collection<Shops> allShops = shopsRepositoryRef.findAll();
		return allShops;
	}
	
	public Shops getOneShops(Long id) {
		Shops foundShops = null;
		Optional<Shops> opt = shopsRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundShops = opt.get();
		return foundShops;
	}
	
	public void addNewShops(Shops shopsRef) {
		shopsRepositoryRef.save(shopsRef);
	}
	
	public void deleteOneShops(Long id) {
		shopsRepositoryRef.deleteById(id);
	}
}
