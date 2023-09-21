import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer>
        <div className="contact" id="contact"></div>
         <div className="header-4" style={{ backgroundColor: 'rgb(71, 72, 71)' }}>
        <div className="share">
          <span>follow us : </span>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/_._sanmathi_._/?hl=en">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/sanmathi-l-7a8b0a22a/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="call">
          <span>call us : </span>
          <a href="/">+123-456-7890</a>
        </div>
      </div>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: sanmathi@gmail.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="address">
          <h3>Address</h3>
          <p>1234 Main Street</p>
          <p>Coimbatore, 631011</p>
          <p>India</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} From the Garden</p>
      </div>
    </footer>
  );
}

export default Footer;
