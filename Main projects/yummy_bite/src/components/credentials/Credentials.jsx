import React, { useState } from 'react';
import './credentials.css';
import { assets } from '../../assets/assets';

const Credentials = ({ setShowSign }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='signin-overlay'>
      <div className='signin-container'>

        
      <img
          src={assets.cross_icon}
          alt='close'
          className='close-icon'
          onClick={()=>{setShowSign(false)}}
        />

        <h2>{currState === "Sign Up" ? "Create Account" : "Login"}</h2>

        {currState === "Sign Up" ? (
          <form>
            <input type="text" placeholder="Name" className="form-control" required />
            <input type="email" placeholder="Email" className="form-control" required />
            <input type="password" placeholder="Password" 
            autoComplete="off"
            className="form-control" required />
            <input type="password" placeholder="Repeat Password"
            autoComplete="off"
            className="form-control" 
            required />

            <div className="form-check">
              <input type="checkbox" id="termsCheck" required />
              <label htmlFor="termsCheck">
                I agree to the terms  of use & Privacy Policy
              </label>
            </div>

            <button type="submit" className="btn-primary">Create Account</button>
            <p>Already have an account? <span className='link' onClick={() => setCurrState("Login")}>Login</span></p>
          </form>
        ) : (
          <form>
            <input type="email" placeholder="Email or Username" className="form-control" required />
            <input type="password" placeholder="Password"
            autoComplete="off"
            className="form-control" required />

            <div className="form-check">
              <input type="checkbox" id="rememberCheck" />
              <label htmlFor="rememberCheck">Remember Me</label>
            </div>

            <button type="submit" className="btn-primary">Login</button>
            <p>Create a new account? <span className='link' onClick={() => setCurrState("Sign Up")}>Sign Up</span></p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Credentials;
