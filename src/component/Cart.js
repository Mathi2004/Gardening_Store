import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Cart({ cartItems }) {

    const[det, setDet] = useState([]);
    const[n, setN] = useState('');
    const [id, setId] = useState("")
    const [nam, setNam] = useState("")
    const [quan, setQuan] = useState("")
    const [price, setPrice] = useState("")
   
  const handleSubmit = (e) => {
      e.preventDefault();

      axios.put(`http://localhost:8080/updateBycartId/${id}`, {
          cartId:id,
          name:nam,
          price:price*quan,
          quantity:quan,
  })
  }

    function deletecart(){
      axios.delete(`http://localhost:8080/deleteBycartName/${n}`)
      .then((response)=>{
        console.log(response.data)
        window.location.reload();
      })
    }

    function getcart(){
      axios.get('http://localhost:8080/showcartdetails')
      .then((response)=>{
        console.log(response.data);
        setDet(response.data);
      })
    }

    useEffect(()=>getcart,[]);
  return (
    
    <div className="cart" >
      <h1 className="heading">
      <h2 style={{fontFamily:'cursive',fontSize:'4vh'}}>Cart</h2>
      </h1>
      <ul>
        {det.map((item, index) => (
          <li key={index}>
            {item.name} - Rs.{item.price} -{item.quantity}
          </li>
        ))}
      </ul>
      <div className='update' id='update'>
      <input type='text' placeholder='Enter item to delete' value={n} onChange={(e)=>{setN(e.target.value)}}/>
      <button onClick={deletecart} style={{fontFamily:'cursive',fontSize:'2vh',backgroundColor:'grey',width:'100px'}}>Delete</button>
      <form onSubmit={handleSubmit}>
      <h1 className="heading" style={{textAlign:'center'}}>
        <p style={{fontFamily:'cursive',fontSize:'4vh'}}>Update</p>
        </h1>
                <p style={{fontFamily:'cursive',fontSize:'2vh'}}>Id</p>
                <input
                type="number"
                onChange={(e) => {setId(e.target.value)}}
                />
                <p  style={{fontFamily:'cursive',fontSize:'2vh'}}>Name</p>
                <input
                  type="text"
                  onChange={(e) => {setNam(e.target.value)}}
                />
                <p  style={{fontFamily:'cursive',fontSize:'2vh'}}>Price</p>
                <input
                  type="number"
                  onChange={(e) => {setPrice(e.target.value)}}
                />
                <p  style={{fontFamily:'cursive',fontSize:'2vh'}}> Quantity</p>
                <input
                  type="num"
                  onChange={(e) => {setQuan(e.target.value)}}
                />
                <button type="submit"  style={{fontFamily:'cursive',fontSize:'2vh',backgroundColor:'grey',width:'100px'}}>Update</button>
        </form>
        </div>
    </div>
  
  );
}

export default Cart;
