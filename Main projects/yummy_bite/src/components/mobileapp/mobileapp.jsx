import React from 'react'
import { assets } from '../../assets/assets'
import './mobileapp.css'
const Mobileapp = () => {
  return (
    <>
    <div className='apps' id='mobile-app'>
<h2>For Better Experience Download <br/> Tomato App</h2>  
<div >
  <img src={assets.play_store}/>

  <img src={assets.app_store}/>
</div>
</div>
 </>
  )
}

export default Mobileapp