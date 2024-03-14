package com.example.siddhimobiles.controller;

import java.security.Principal;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
	private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        savedUser.setPassword(null); 
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {
        boolean isAuthenticated = userService.authenticate(user.getEmail(), user.getPassword());
        if (isAuthenticated) {
            
            User authenticatedUser = userService.findByEmail(user.getEmail()).orElse(null);
            if (authenticatedUser != null) {
                authenticatedUser.setPassword(null);
                return ResponseEntity.ok(authenticatedUser);
            } else {
             
                return ResponseEntity.status(404).body("User not found after authentication.");
            }
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }
	
}
