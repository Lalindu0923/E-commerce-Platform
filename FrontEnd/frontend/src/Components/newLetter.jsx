import React from "react";
import '../CSS/newLetter.css';

const NewLetter = () => {
    return (
        <div className="newletter">
            <h1>Get Exclusive offers on new Login!</h1>
            <p>Subscribe and Stay alert with the offers</p>
            <div className="emailInput">
                <input type="email" placeholder="Your Email" />
                <button>Log In</button>
            </div>
        </div>
    );
};

export default NewLetter;
