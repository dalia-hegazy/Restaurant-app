import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(); // Example cart item count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="restaurant-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Foodella</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="home" className="nav-link">Home</a>
          <a href="menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">About</a>
          <a href="Regestartion" className="nav-link">Reservations</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          <div className="nav-icons">
            <a href="login" className="icon-link">
              <i className="fas fa-user"></i>
              <span>Login</span>
            </a>
            <a href="register" className="icon-link">
              <i className="fas fa-user-plus"></i>
              <span>Register</span>
            </a>
            <a href="cart" className="icon-link cart-icon">
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
              {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
            </a>
          </div>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}