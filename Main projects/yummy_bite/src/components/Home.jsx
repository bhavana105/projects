import React, { useState } from 'react'
import Header from './Header/header';
import  Exploremenu from './Explore/exploremenu';
import FoodDisplay from './Fooddisplay/Fooddisplay'
const Home = () => {
  const[category,setCategory]=useState("All");

  
  return (
<>
<Header/>
<Exploremenu category={category} setCategory={setCategory}/>
<FoodDisplay category={category}/>

</>  )
}

export default Home