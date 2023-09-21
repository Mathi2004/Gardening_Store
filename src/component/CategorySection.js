import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CategorySection() {
  const plantsData = [
    {
      name: 'Snake Plant',
      price: 200,
      image: "https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=612x612&w=0&k=20&c=UX79enZ3Rn2jX5labxi_u2Y0s4X3lfOPfr_UG91yego=",
     
    },
    {
      name: 'Pothos Marble Queen Plant',
      price: 250,
      image:"https://www.thespruce.com/thmb/iBuFkdw4jum43xKwa0OYS6PfuO8=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pothos-growing-guide-7092450-hero-A-cd0d4bba36284002a7dd3be7ef419cf9.jpg",
    },
    {
      name: 'Dragon Tree',
      price: 250,
      image:"https://www.thespruce.com/thmb/C2reCth-GHN2CMo6T9x8QJ_5S24=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-dracaena-marginata-indoors-1902749-2-983c52a2805144d899408949969a5728.jpg" ,
    },
    {
      name: 'ZZ Plant House Plant Zamioculcas',
      price: 300,
      image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/12094751/ZZ-plant-Benefits-care-and-maintenance-tips.jpg",
    },
    {
      name: 'Bamboo Plant',
      price: 300,
      image: "https://media.istockphoto.com/id/1370834109/photo/decorative-lucky-bamboo.jpg?s=612x612&w=0&k=20&c=Ted7_6L-O4C1rSMJ1ft10FLwWXujwnt68gf-GULo7s4=",
    },
    {
      name: 'Money Plant',
      price: 350,
      image: "https://www.thespruce.com/thmb/da5jgucVZEmxIwyW2I8ZUmsEc3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TheSpruce1-0cdbe5809c914e25b1d24b0122f39c11.jpg",
    },
  ];

  

  return (
    <section className="category" id="category">
      <h1 className="heading">Indoor Plants</h1>
      <div className="box-container">
        {plantsData.map((plant, index) => (
          <div className="box" key={index}>
            <img src={plant.image} alt="" />
            <div className="content">
              <h3>{plant.name}</h3>
              <Link
                to={`/product/${plant.name}`} // Define your product path here
                className="btn add-to-cart"
                data-product-name={plant.name}
                data-product-price={plant.price}
                style={{backgroundColor:'black',color:'white'}}
              >
                Add To Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
