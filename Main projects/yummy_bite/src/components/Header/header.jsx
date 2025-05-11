import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className="header-container position-relative">
      <div className="header-bg" />
      <div className="header-content px-5 py-5 text-light">
        <div className="pos">
          <h1 className="display-5 fw-bold">Order your <br />favourite food here</h1>
          <p className="lead mb-4">
            Food is a big part of life, and knowing how to talk about it is important.
            Whether you’re talking with friends about your favourite ice cream flavour
            or describing a meal you had at a restaurant, having the right words helps
            you tell a descriptive and interesting story.
          </p>
          <div className="d-sm-flex">
            <button type="button" className="btn btn-outline-light btn-lg px-4">View Menu</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
