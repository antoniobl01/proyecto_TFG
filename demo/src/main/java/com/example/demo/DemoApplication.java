package com.example.demo;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import com.example.demo.services.ProductController;
import com.example.demo.services.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner init(ProductRepository productRepository, ProductService productService, ProductController productController) {
		return args -> {
//			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//				Product product = new Product("dddd", "ffff", "Calee", "PEPE", Timestamp.valueOf("2023-05-02 08:00:00"));
//				productRepository.save(product);
//			});
//			Product product = new Product("dddd", "ffff", "Calee", "PEPE", Timestamp.valueOf("2023-05-02 08:00:00"));
//			Product product2 = new Product("2222", "ffff", "Calee", "PEPE");
//			productService.saveProduct(product2);

//			Date date = new Date(20230502);
//			Product product3 = new Product("3333", "ffff", "Calee", "PEPE", date);
//			productController.addProduct(product3);

			productRepository.findAll().forEach(System.out::println);
		};
	}

}
