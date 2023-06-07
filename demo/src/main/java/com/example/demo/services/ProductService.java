package com.example.demo.services;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    @PersistenceContext
    private EntityManager entityManager;


    public Product saveProduct(Product product) {
        return repository.save(product);
    }
    public List<Product> getTodayProducts() {
        String qlQuery = "SELECT * FROM product WHERE DATE(time) = CURDATE() ORDER BY time DESC";
        Query query = entityManager.createQuery(qlQuery);
        return query.getResultList();
    }

    public List<Product> getFilterProductsByTime(int days) {
        String qlQuery = "SELECT * FROM product WHERE time >= DATE_SUB(NOW(), INTERVAL " + days + "DAY) ORDER BY time ASC";
        Query query = entityManager.createQuery(qlQuery);
        return query.getResultList();
    }


    public List<Product> saveProducts(List<Product> products){
        return repository.saveAll(products);
    }
    public List<Product> getProducts(){
        return repository.findAll();
    }

    public Product getProductById(int id){
        return repository.findById(id).orElse(null);
    }

    public Product getProductByTitle(String title){
        return repository.findByTitle(title);
    }

    public String deleteProduct(int id){
        repository.deleteById(id);
        return "Producto con id "+ id + " eliminado";
    }

    public Product updateProduct(Product product){
        Product existingProduct = repository.findById(product.getId()).orElse(product);
        existingProduct.setTitle(existingProduct.getTitle());
        existingProduct.setDescription(existingProduct.getDescription());
        existingProduct.setLocation(existingProduct.getLocation());
        return repository.save(existingProduct);
    }


}
