package com.example.siddhimobiles.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.User;
import com.example.siddhimobiles.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepositoryRef;
	
	private List<User> store = new ArrayList<>();
	
	public UserService() {
		store.add(new User(UUID.randomUUID().toString(),"prithvi","dummy@dummymail.com"));
		store.add(new User(UUID.randomUUID().toString(),"Linal","dummy@dummymail.com"));
		store.add(new User(UUID.randomUUID().toString(),"Richa","dummy@dummymail.com"));
		store.add(new User(UUID.randomUUID().toString(),"Pushpak","dummy@dummymail.com"));
	}
	
	public List<User> getUsers(){
		return this.store;
	}


}
