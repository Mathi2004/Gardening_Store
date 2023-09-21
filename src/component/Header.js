import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Main.css'
function Header({ cart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
   <section>
      <div className="header-3" style={{ backgroundColor: 'lightgrey',display:'flex',position:'fixed',top:'0',right:'0',left:'0'}}>
        <div id="menu-bar" className="fas fa-bars" ></div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#new arrivals">New Arrivals</a>
          <a href="#category">Indoor Plants</a>
          <a href="#product">Outdoor Plants</a>
          <a href="#seeds">Seeds</a>
          <a href="#cart">cart</a>
          <a href="#update">Update</a>
          <a href="#contact">contact</a>
          {/* No cart link here */}
        </nav>
        
      </div>
      </section>
    <section>
<div className="header-2" style={{ backgroundColor: 'rgb(125, 125, 125)' ,padding:'50px',width:'100%'}}>
  <a href="/" className="logo"><i className="fa-solid fa-seedling" style={{color: '#252627'}}></i>From The Garden</a>
  <form action="" className="search-bar-container" style={{display:'flex', flexDirection:'row'}}>
    <input type="search" id="search-bar" placeholder="search here..." />
    <label htmlFor="search-bar" className="fas fa-search"></label>
  </form>
</div>

    </section>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
