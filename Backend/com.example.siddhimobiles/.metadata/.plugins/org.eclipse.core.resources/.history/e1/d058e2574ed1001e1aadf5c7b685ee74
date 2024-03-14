package com.example.siddhimobiles.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Orders;
import com.example.siddhimobiles.service.OrderServices;



@RestController
public class OrdersController {
	@Autowired
	private OrderServices ordersServiceRef;

	@GetMapping("/orders")
	public Collection<Orders> getAllOrders() {
		Collection<Orders> allOrders = ordersServiceRef.getAllOrders();
		return allOrders;
	}

	@GetMapping("/orders/{ordersId}")
	public Orders getOneOrders(@PathVariable("ordersId") String id) {
		Orders foundOrders = ordersServiceRef.getOneOrder(id);
		return foundOrders;
	}

	@PostMapping("/orders")
	public void addNewOrders(@RequestBody Orders ordersRef) {
		System.out.println(ordersRef);
		ordersServiceRef.addNewOrder(ordersRef);

	}

	@DeleteMapping("/orders/{ordersId}")
	public void deleteOneOrders(@PathVariable("ordersId") String id) {
		ordersServiceRef.deleteOneOrder(id);
	}
}
