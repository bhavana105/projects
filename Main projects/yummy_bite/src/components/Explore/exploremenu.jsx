import React from 'react';
import { menu_list } from '../../assets/assets';
import './Exploremenu.css';

function Exploremenu({category,setCategory}) {
  return (
    <>
    <div className='mt-4 ms-4' id='explore-menu'>
    <h2 style={{marginLeft:"15px"}}>Explore our menu</h2>
    <p style={{fontSize:"18px",margin:"20px"}}>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal oof a time.</p>
    </div>

    <div className="card">
  <div className="menu_list">
    {menu_list.map((items, index) => (
      <div 
        key={index} 
        onClick={() => setCategory(prev => prev === items.menu_name ? "All" : items.menu_name)} 
        className="category"
      >
        <img 
          className={category === items.menu_name ? "active" : ""} 
          src={items.menu_image} 
          alt={items.menu_name} 
        />
        <p>{items.menu_name}</p>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Exploremenu