package com.example.siddhimobiles.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {
	List<OrderDetails> findByOrderId(Long orderId);
}
