import React from 'react'
import FooterShop from './FooterShop';
import FooterLogo from './FooterLogo';
import FooterConnect from './FooterConnect';
import FooterAbout from "./FooterAbout";

export default function Footer() {
  return (
   
    <div className="footer-container">
      <div className="footer-section">
        <FooterLogo />
      </div>
      <div className="footer-section">
        <h4>About Us</h4>
        <FooterAbout />
      </div> 
      <div className="footer-section">
        <h4>Explore</h4>
        <FooterShop />
      </div>      
      <div className="footer-section">
        <h4>Connect With Us</h4>
        <FooterConnect />
      </div>
    </div>
  
  )
}
