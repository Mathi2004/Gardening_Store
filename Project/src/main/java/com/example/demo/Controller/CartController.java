package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Model.CartModel;
import com.example.demo.Service.CartService;

@CrossOrigin()
@RestController
public class CartController {
    @Autowired
    CartService cs;
    @PostMapping("addcart")
    public CartModel add(@RequestBody CartModel cm)
    {
    	return cs.saveinfo(cm);
    }
    @PostMapping("addncart")
    public List<CartModel> adddetails(@RequestBody List<CartModel> cm)
    {
    	return cs.savedetails(cm);
    }
    @GetMapping("showcartdetails")
    public List<CartModel> display()
    {
    	return cs.showinfo();
    }
  
    //sorting
    @GetMapping("sort/{str}")
    public List<CartModel> getsortinfo(@PathVariable String str)
    {
   	 return cs.sortinfo(str);
    }
    //paging
    @GetMapping("paging/{pgno}/{pgsize}")
    public List<CartModel> showpageinfo(@PathVariable int pgno,@PathVariable int pgsize)
    {
    return cs.getbyPage(pgno, pgsize);
    }
    //sort and paging
    @GetMapping("sortpaging/{pgno}/{pgsize}/{str}")
    public List<CartModel> sortpageinfo(@PathVariable int pgno,@PathVariable int pgsize,@PathVariable String str)
    {
   	 return cs.sortpaging(pgno, pgsize, str);
    }
    //get productId
    @GetMapping("getproductId/{productId}")
    public List<CartModel> getproductIdinfo(@PathVariable  int productId)
    {
 	   return cs.getproductId(productId);
    }
    //delete productId
    @DeleteMapping("deleteproductId/{productId}")
    public String removeproductIdinfo(@PathVariable int productId)
    {
    	return cs.deleteproductIdinfo(productId)+"deleted";
    }
    //update cart_id
    @PutMapping("updateproductId/{newproductId}/{productId}")
    public String modifyproductIdinfo(@PathVariable int newproductId,@PathVariable int productId)
    {
    	return cs.updateproductIdinfo(newproductId, productId)+"updated";
    }
    
    @PutMapping("updateCart")
    public CartModel modify(@RequestBody CartModel cm)
    {
    	return cs.update(cm);
    }
    @PutMapping("updateBycartId/{cartItemId}")
    public String modifyById(@PathVariable int cartItemId,@RequestBody CartModel cm)
    {
    	return cs.updateById(cartItemId, cm);
    }
    @DeleteMapping("deletecart")
    public void remove(@RequestBody CartModel cm)
    {
    	cs.deleteinfo(cm);
    }
    @DeleteMapping("deleteBycartId/{cartItemId}")
    public void removeById(@PathVariable int  cartItemId)
    {
    	cs.deleteById(cartItemId);
    }
    @DeleteMapping("deleteBycartName/{cartItemName}")
    public void removeByName(@PathVariable String cartItemName)
    {
    	cs.deleteproductNameinfo(cartItemName);
    }
    
    
}
