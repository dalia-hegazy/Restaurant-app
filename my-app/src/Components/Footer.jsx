import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-section">
        <h2>Foodella</h2>
          <p className="footer-description">
            Your trusted partner for quality products and services.
          </p>
        </div>

      
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 123 Street zatoun, Cairo, Egypt</p>
          <p>📞 +20 1121139366</p>
          <p>📧 foodella@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  )
}
