import React from 'react';

function LikedProducts({ likedProducts }) {
  return (
    <div>
      <h1>Liked Products</h1>
      <ul>
        {likedProducts.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LikedProducts;
