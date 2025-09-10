import React, { useState } from 'react';
import '../Cart/Cart.css';

export default function Cart() {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 12.99,
      quantity: 2,
    
      description: "Classic pizza with tomato sauce, fresh mozzarella, and basil"
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: 8.99,
      quantity: 1,
      
      description: "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing"
    },
    {
      id: 3,
      name: "Tiramisu",
      price: 6.99,
      quantity: 3,
    
      description: "Italian coffee-flavored dessert with mascarpone and cocoa"
    }
  ]);

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const deliveryFee = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + tax + deliveryFee;

  // Checkout handler
  const handleCheckout = () => {
    alert('Proceeding to checkout! This would redirect to a payment page in a real application.');
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Items In Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <button className="continue-shopping-btn">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <span className="item-emoji">{item.image}</span>
                    </div>
                    
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="remove-btn"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <h2>Order Summary</h2>
                
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-line">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="summary-line">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-line total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <button onClick={handleCheckout} className="checkout-btn">
                  Proceed to Checkout
                </button>
                
                <div className="continue-shopping">
                  or <a href="/menu">Continue Shopping</a>
                </div>
              </div>
            </div>
            
            <div className="promo-section">
              <h3>Have a promo code?</h3>
              <div className="promo-input">
                <input type="text" placeholder="Enter promo code" />
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}