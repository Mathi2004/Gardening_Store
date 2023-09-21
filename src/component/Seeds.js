import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';


function Seeds() {
  const outdoorPlantsData = [
    {
      name: 'Sunflower Seeds',
      price: 250,
      image: "https://m.media-amazon.com/images/I/71SGRh+9wML.jpg",
    },
    {
      name: 'Pumkin Seeds',
      price: 400,
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Bowl-of-pumpkin-seeds-b4a5510.jpg?quality=90&resize=440,400",
    },
    {
      name: 'Bell Pepper',
      price: 430,
      image: "https://5.imimg.com/data5/LG/BL/NF/SELLER-11219790/green-house-sweet-peppers-seed-f1.jpg",
    },
    {
      name: 'Cucumber Seeds',
      price: 430,
      image: "https://woooys.in/wp-content/uploads/2023/03/Cucumber-Seeds-.jpg",
    },
    {
      name: 'Corn',
      price: 500,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/7/GX/JJ/IP/131594892/u6wzttq0-500x500.jpeg",
    },
    {
      name: 'Cocoa Bean',
      price: 600,
      image: "https://media.istockphoto.com/id/168720392/photo/cocoa-pod-on-a-white-background.jpg?s=612x612&w=0&k=20&c=ST0mJ-VhU3vtKYVZbTpQbudoF-oTHS-G9N1SG3QZJ_s=",
    },
  ];

  return (
    <section className="seeds" id="seeds">
      <h1 className="heading">Seeds</h1>
      <div className="box-container">
        {outdoorPlantsData.map((plant, index) => (
          <div className="box" key={index}>
            <span className="discount">-{index + 10}%</span>
            <div className="icons">
              {/* Add your like button here */}
              <FontAwesomeIcon icon={['fas', 'thumbs-up']} />

              <Link
                to={`/product/${plant.name}`} // Define your product path here
                className="fas fa-thumbs-up"
                data-product-name={plant.name}
                data-product-price={plant.price}
                data-product-image={plant.image}
              ></Link>
            </div>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <div className="price">
              Rs.{plant.price}
              <span>Rs.{plant.price + 30}</span>
            </div>
            <button
  className="btn add-to-cart"
  data-product-name={plant.name}
  data-product-price={plant.price}
  data-product-image={plant.image}
  style={{backgroundColor:'black',color:'white'}}
>
  Add to cart
</button>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Seeds;
