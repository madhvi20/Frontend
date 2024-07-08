// src/components/HeroSection.js
import React from 'react';
// import './App.css';

const HeroSection = ({ openModal }) => {
  return (
    <div className="hero-section">
      <h1>Welcome to Refer & Earn!</h1>
      <button className="refer-now-button" onClick={openModal}>Refer Now</button>
    </div>
  );
};

export default HeroSection;
