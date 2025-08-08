import React from 'react';
import './Footer.css'
import cart from '../Assets/cart.jpeg';
import insta from '../Assets/insta.jpeg';
import mail from '../Assets/mail.jpeg';
import help from '../Assets/help.jpeg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={cart} alt="Footer Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-link'>
        <li>Location</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icon">
        <div className="icon-containor">
          <img src={insta} alt="" />
        </div>
                <div className="icon-containor">
          <img src={mail} alt="" />
        </div>
                <div className="icon-containor">
          <img src={help} alt="" />
        </div>
      </div>
        <hr/>
      <div className="copy">
        <p>© {new Date().getFullYear()} E-Shop. All rights reserved.</p>  
      </div>

    </div>
  );
};


export default Footer;