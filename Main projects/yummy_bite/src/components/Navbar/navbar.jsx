import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../storeContext';

function Navbar({ setShowSign}) {
  const [nav, setNav] = useState("Home");
  const { setFilterItem } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">

        <Link to='/' className="navbar-brand me-auto">
          <img src={assets.yummy} alt="Logo" height="50" />
        </Link>

        <div className="d-lg-flex mx-auto position-relative search-wrapper mt-6">
          <input type="text" className="form-control" placeholder="Search..."
        onChange={(e) => setFilterItem(e.target.value)}
        />
          <img src={assets.search_icon} className="search-icon" style={{ width: "25px", height: "25px" }} alt="Search" />
        </div>

        <ul className="navbar-nav d-flex flex-row align-items-center gap-4 ms-auto nav-menu">
          <li className={`nav-item ${nav === "Home" ? "active" : ""}`} onClick={() => setNav("Home")}>
            <Link to="/" className="nav-link text-dark">Home</Link>
          </li>

          <li className={`nav-item ${nav === "Menu" ? "active" : ""}`} onClick={() => setNav("Menu")}>
            <a href='#explore-menu' className="nav-link text-dark">Menu</a>
          </li>
          
          <li className={`nav-item ${nav === "Mobile app" ? "active" : ""}`} onClick={() => setNav("Mobile app")}>
            <a href='#mobile-app' className="nav-link text-dark">Mobile App</a>
          </li>
          
          <li className={`nav-item ${nav === "Contact us" ? "active" : ""}`} onClick={() => setNav("Contact us")}>
            <a href="#contact"className="nav-link text-dark">Contact Us</a>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <img src={assets.basket_icon} alt="Cart" style={{ width: "30px" }} />
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-dark" type="button" onClick={() => setShowSign(true)}>
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>



  );
}

export default Navbar;
