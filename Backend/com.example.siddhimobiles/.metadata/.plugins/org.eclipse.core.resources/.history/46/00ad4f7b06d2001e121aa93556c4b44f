package com.example.siddhimobiles.entity;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Order_Id")
	private Long orderId;
	
	@Column(name="Order_Date")
	private Date orderDate;
	
	
	@Column(name="Total_Quantity")
	private int orderTotalQuantity;
	
	@Column(name="Order_Location")
	private String orderLocation;
	
	@Column(name="Order_TotalPrice")
	private double orderTotalPrice;
	

	private boolean orderTransactStatus;
	
	@OneToMany
	@JoinColumn(name="product_id")
	private List<Product> products;
	
	
	
	public Orders() {
	}

}