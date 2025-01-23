import "../App.css";
import React from "react";
export function Navbar(){
    return(
<div>
   
<nav className="navbar">
  <a className="navbar-brand" href="#">
    <img  src="./logo/v1.png" class="d-inline-block align-top logo" alt="logo"/>
  </a>
  <ul className="text d-inline-flex m-0  fw-bold  list-unstyled text-decoration-none">
    <li className="m-3 ">
        <a href="#">Home</a></li>
    <li className="m-3"> <a href="#shop">Packages</a></li>
    <li className="m-3"> <a href="#shop">Shop</a></li>
    <li className="m-3"><a href="#con">About</a></li>
    <li className="m-3"> <a href="#con">Contact</a></li>
    <button type="button" className=" btn btn-dark  f-rounded-pill">Book Now</button>

  </ul>
</nav>
</div>
    )

}