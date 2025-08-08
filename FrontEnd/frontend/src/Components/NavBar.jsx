import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import "./Nav.css";
import logo from '../Assets/logo.jpeg';
import cart from '../Assets/cart.jpeg';



const NavBar =() => {
    const location = useLocation();

    return(
        <div className='Nav'>
            <nav className='NavBar' >
                <div className='logoh'>
                <img src={logo} alt="Logo" className="logo" />
                <p>ShopLogo</p>
                </div>
                <div className="left-cont">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                        Home
                </Link>
                <Link
                    to="/electronic"
                    className={`nav-link ${location.pathname === "/electronic" ? "active" : ""}`}>
                        Electronics
                </Link>
                <Link
                    to="/vehicles"
                    className={`nav-link ${location.pathname === "/vehicles" ? "active" : ""}`}>
                        Vehicles
                </Link>
                <Link
                    to="/fashion"
                    className={`nav-link ${location.pathname === "/fashion" ? "active" : ""}`}>
                        Fashions
                </Link>
                <Link
                    to="/books"
                    className={`nav-link ${location.pathname === "/books" ? "active" : ""}`}>
                        Books
                </Link>
                </div>
                <div className="right-cont">
                    <Link
                    to="/signup">
                        Sign Up
                    </Link>
                    <Link
                        to="/login">
                            Log In
                    </Link>
                </div>
                <Link to="/cart">
                    <img src={cart} alt="Logo" className="logo" />
                </Link>
            </nav>
        </div>
    )
};

export default NavBar;