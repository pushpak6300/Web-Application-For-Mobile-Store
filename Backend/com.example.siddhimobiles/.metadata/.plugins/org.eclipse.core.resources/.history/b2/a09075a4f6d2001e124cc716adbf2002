package com.example.siddhimobiles.controller;

import java.security.Principal;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Category;
import com.example.siddhimobiles.entity.Shops;
import com.example.siddhimobiles.entity.User;
import com.example.siddhimobiles.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userServiceRef;

	// http://localhost:5095/user
	@GetMapping("/user")
	public List<User> getUsers() {
		System.out.println("Getting users");
		return userServiceRef.getUsers();

	}

	// http://localhost:5095/current-user
	@GetMapping("/current-user")
	public String getLoggedInUser(Principal principal) {
		return principal.getName();
	}

	@PostMapping("/user")
	public void addNewUser(@RequestBody User userRef) {
		System.out.println(userRef);
		userServiceRef.addNewUser(userRef);

	}
	
	@DeleteMapping("/user/{userId}")
	public void deleteUser(@PathVariable("userId") String id) {
		userServiceRef.deleteUser(id);
	}

}
