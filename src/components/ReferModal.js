// src/components/ReferModal.js
import React from 'react';
// import './App.css';

const ReferModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <h2>Refer a Course</h2>
        <form>
          <label htmlFor="referrerName">Your Name:</label>
          <input type="text" id="referrerName" name="referrerName" required />
          
          <label htmlFor="referrerEmail">Your Email:</label>
          <input type="email" id="referrerEmail" name="referrerEmail" required />

          <label htmlFor="refereeName">Friend's Name:</label>
          <input type="text" id="refereeName" name="refereeName" required />
          
          <label htmlFor="refereeEmail">Friend's Email:</label>
          <input type="email" id="refereeEmail" name="refereeEmail" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReferModal;
