import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Fooditeams.css';
import { StoreContext } from '../storeContext';

const Fooditeam = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0;

  return (
    <div className='food-item'>
      <div className='food-img-container'>
        <img className='food-img' src={image} alt='' />
        <div className='action-container'>
          {!itemCount ? (
            <img
              className='add'
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt='Add'
            />
          ) : (
            <div className='food-counter'>
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                className='counter-btn'
                alt='Remove'
              />
              <p className='count'>{itemCount}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                className='counter-btn'
                alt='Add'
              />
            </div>
          )}
        </div>
      </div>

      <div className='food-info'>
        <div className='food-name-rating'>
          <p className='food-name'>{name}</p>
          <img src={assets.rating_starts} alt='' className='rating-img' />
        </div>
        <p className='food-dec'>{description}</p>
        <p className='food-price'>${price}</p>
      </div>
    </div>
  );
};

export default Fooditeam;
