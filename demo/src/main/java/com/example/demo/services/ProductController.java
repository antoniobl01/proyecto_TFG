package com.example.demo.services;

import com.example.demo.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(value = "/addProduct", consumes = {"*/*"})
    public Product addProduct(@RequestBody Product product){
        if(productService.getProductById(product.getId()) == null){
            return productService.saveProduct(product);
        }
        return null;
    }

    @GetMapping("/productById/{id}")
    public Product findProductById(@PathVariable int id){
        return productService.getProductById(id);
    }

    @GetMapping("/products")
    public List<Product> findAllProducts(){
        return productService.getProducts();
    }

    @GetMapping("/todayProducts")
    public List<Product> getTodayProducts(){
        return productService.getTodayProducts();
    }

    @GetMapping("/filterProductsByTime/{time}")
    public List<Product> getFilterProductsByTime(@PathVariable int time) {
        return productService.getFilterProductsByTime(time);
    }

    @GetMapping("/product/{title}")
    public Product findProductByTitle(@PathVariable String title){
        return productService.getProductByTitle(title);
    }

    @PutMapping("/update")
    public Product updateProduct(@RequestBody Product product){
        if(productService.getProductByTitle(product.getTitle()) != null && productService.getProductById(product.getId()) != null){
            return productService.updateProduct(product);
        }
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id){
        if (productService.getProductById(id) == null){
            return null;
        }
        return productService.deleteProduct(id);
    }

}
