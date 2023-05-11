import React from "react";
import '../componet/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item-BLOG">
                    <Link to={ '/' }>
                        <p className="nav-link" href="#" style={ { color: 'blue' } }>LOGO</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={ '/' }>
                        <p className="nav-link" href="#">Home</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={ '/About' }>
                        <p className="nav-link" href="#">About</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={ '/addblog' }>
                        <p className="nav-link" href="#">blog</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={ 'contact' }>
                        <p className="nav-link" href="#">Contact</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;