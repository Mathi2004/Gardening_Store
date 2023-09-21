import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
function Slide({ cart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const sliderImages = [
     
     'https://wallpaperaccess.com/full/3630169.jpg',
      'https://wallpaperaccess.com/full/1597931.jpg',
      'https://marketplace.canva.com/EAEtXpkjpec/1/0/1600w/canva-aesthetic-plant-desktop-wallpaper-Qc7FLIyhyco.jpg',
      'https://www.pottingaround.com/wp-content/uploads/2021/03/illustration-plant-pots-2-1.jpg',
     'https://marketplace.canva.com/EAE6SChKUdA/1/0/1600w/canva-green-and-peach-botanic-room-minimalist-desktop-wallpaper-KUhEUW1LLag.jpg',
     
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages]);

  return (
    <header>
     
    <div className="home" id="home" >
      <div className="header-1" style={{position:'relative'}}>
        {sliderImages.map((image, index) => (
         <div className='slider'
         key={index}
         style={{
           backgroundImage: `url(${image})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           width: '100%',
           height: '140%',
           display: index === currentImageIndex ? 'block' : 'none',
         }}
       >
         <div className="image-text">
           <p>Happiness</p>
           <h3>is having more and more</h3>
           <h2>Plants</h2>
         </div>
       </div>
        ))}
      </div>
      </div>
    </header>
  );
}



export default Slide;
