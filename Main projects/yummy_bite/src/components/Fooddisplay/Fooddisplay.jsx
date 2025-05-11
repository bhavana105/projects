import React, { useContext } from 'react'
import Fooditeam from'../Fooditem/Fooditeam'
import {StoreContext} from '../storeContext';
import './Fooddisplay.css';

const Fooddisplay = ({category}) => {
  const { food_list ,filterItem } = useContext(StoreContext);



  // const filteredList = category === "All"
  //   ? food_list
  //   : food_list.filter(item => item.category === category);

  const filteredByCategory = category === "All"
  ? food_list
  : food_list.filter(item => item.category === category);

const finalFilteredList = filteredByCategory.filter(item => {
  return filterItem.trim() === ""
    ? true
    : item.name.toLowerCase().includes(filterItem.toLowerCase());
});

  return (
    <div className='food-display' id='food-displa'>
      <h2 style={{marginLeft:"40px"}}>Top dishes near you</h2>
      <div className='food-display-list'>
{
  finalFilteredList
  .map((item,index)=>(

    <Fooditeam  key={index} 
    id={item._id}
   name={item.name} 
   price={item.price}
   description={item.description}
   image={item.image}
    />
  ) )
}
      </div>
    </div>
  )
}

export default Fooddisplay