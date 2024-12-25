import React from 'react';
import './BirthdayPopup.css';

const BirthdayPopup = ({ onClose }) => {
    return (
        <div className="birthday-popup-overlay">
            <div className="birthday-popup">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h1>🎂 Happy Birthday! My Love 🎉</h1>
                <p>Wishing you a day filled with joy and happiness! I hope you will like this gift from me!</p>
                <button className="popup-button" onClick={onClose}>Thank You!</button>
            </div>
        </div>
    );
};

export default BirthdayPopup;
