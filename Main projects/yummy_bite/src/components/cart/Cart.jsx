import React, { useContext } from 'react'
import { StoreContext } from '../storeContext'

import './cart.css';

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalAmount} = useContext(StoreContext);
  

  return (
    <>
        <div className='cart'>
          <div className='cart-items'>
        <div className='cart-titles'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>

{
    food_list.filter(item => cartItems[item._id] > 0).length > 0 ? (
  food_list.map((item)=>{
    const quantity = cartItems[item._id];
    if (quantity > 0) {
      return(
           <div key={item._id}  className='cart-items cart-titles'>
                <img src={item.image} alt={item.name}  className='item-img' />
                <p className='iteam-text'>{item.name}</p>
                <p className='iteam-text'>${item.price}</p>
                <p className='iteam-text'>{quantity}</p>
                <p className='iteam-text'>${item.price * quantity}</p>
                <p onClick={() => removeFromCart(item._id)} className='delete-btn'>X</p>
                <hr/>
                </div>

      );
     
    }
    else{
      return null;
    }
  })
):(
  <p className='empty-cart'>You did not add iteams </p>
)}

<div className="cart-bottom">
  <div className="total-section">
    <div className="total">
      <h2>Cart Total</h2>
    </div>
    <div className="total-details">
      <p>Subtotal</p>
      <p>${getTotalAmount()}</p>
      </div>
    <div className="total-details">
      <p>Delivery Fee</p>
      <p>2</p>
    </div>
    <div className="total-details">
      <p>Total</p>
      <b>${getTotalAmount() + 2}</b>
    </div>
    <button className="cart-button">PROCEED TO CHECKOUT</button>
  </div>

  <div className="cart-promocode">
    <p>If you have a promo code, enter it here:</p>
    <div className="cart-promocode-input">
      <input type="text" placeholder="Promo code" />
      <button>Submit</button>
    </div>
  </div>
</div>



</div>
</div>
    </>
  )
}

export default Cart