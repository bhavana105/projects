import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'
const Footer = () => {
  return (
    <>
        <div className='footer'id='contact'>

          <div className="inner">
          <div className="leftSide">
            <img src={assets.logo}/>
            <p className='text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className="icons">
              <img className='icon' src={assets.facebook_icon}/>
              <img className='icon' src={assets.twitter_icon}/>
              <img className='icon' src={assets.linkedin_icon}/>
            </div>
          </div>

          <div className="middle">
<a href=''>Home</a>
<a href=''>About us</a>
<a href=''>Delivery</a>
<a href=''>Privacy Policy</a>
         </div>

         <div className="right">
          <h3>GET IN  TOUNCH</h3>
          <div  className='contact'>
          <p >+91 123-456-7894</p>
          <p>contact@tomato.com</p>
          </div>
          
         </div>
        </div>
        </div>
    </>
  )
}

export default Footer