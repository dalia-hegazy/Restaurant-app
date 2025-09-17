import React from 'react';
import './Welcome.css';
import welcome from '../../assets/imgs/welcome.jpg';

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="container">
        <div className="fcard">
          <img src={welcome} alt="Welcome" className="welcome-img" />
        </div>
      </div>

      <h2 className="welcome-title">Enjoy Your Food</h2>
      <div className="btn-container">
        <button className='welcome-btn'>Get Started</button>
      </div>
    </div>
  );
}