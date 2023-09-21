package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


import com.example.demo.Model.CartModel;
import com.example.demo.Repository.CartRepo;

@Service
public class CartService {
    @Autowired
    CartRepo cr;
    public CartModel saveinfo(CartModel cm)
    {
    	return cr.save(cm);
    }
    public List<CartModel> savedetails(List<CartModel> cm)
    {
    	return cr.saveAll(cm);
    }
    public List<CartModel> showinfo()
    {
    	return cr.findAll();
    }
    //sorting
    public List<CartModel> sortinfo(String s)
    {
    	return cr.findAll(Sort.by(Sort.Direction.ASC,s));
    }
    //paging
    public List<CartModel> getbyPage(int pgno,int pgsize)
    {
     Page<CartModel> p=cr.findAll(PageRequest.of(pgno,pgsize));
    return p.getContent();
    }
    //sorting and paging 
    public List<CartModel> sortpaging(int pgno,int pgsize,String str)
    {
    Page<CartModel> p=cr.findAll(PageRequest.of(pgno, pgsize,Sort.by(str)));
    	return p.getContent();
    }
    //get productId
    public List<CartModel> getproductId(int cart_id)
    {
    	return cr.productIdinfo(cart_id);
    }
    //delete productId
    public int deleteproductIdinfo(int cart_id)
    {
    	return cr.deleteproductId(cart_id);
    }
  //delete productName
    public int deleteproductNameinfo(String name)
    {
    	return cr.deleteproductName(name);
    }
    //update productId
    public int updateproductIdinfo(int newcart_id,int cart_id)
    {
    	return cr.updateproductId(newcart_id, cart_id);
    }
    
    public Optional<CartModel> showById(int cartItemId)
    {
    	return cr.findById(cartItemId);
    }
    public CartModel update(CartModel cm)
    {
    	return cr.saveAndFlush(cm);
    }
    public String updateById(int cartItemId,CartModel cm)
    {
    	cr.saveAndFlush(cm);
    	if(cr.existsById(cartItemId))
    	{
    		return "update";
    	}
    	else
    	{
    		return "enter valid id";
    	}
    }
    public void deleteinfo(CartModel cm)
    {
    	 cr.delete(cm);
    }
    public void deleteById(int cartItemId)
    {
    	cr.deleteById(cartItemId);
    }
    
}
