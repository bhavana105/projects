import React from 'react'
import { food_list } from '../assets/assets'

const Section2 = () => {
  return (
<>         
<h2 class='ms-5 ' >Top dishes near you</h2>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-md-4 m-5"  >
{
food_list.map((items,index)=>(
  <div key={index} className="col mb-5">
        <div className="card h-100 p-2 " style={{ borderRadius: "15px", boxShadow:"0px 2px 0px 0px" }}>

  {/* <div key={index} className="card h-100 p-2" style={{ border: "1px solid black", borderRadius: "15px" }}> */}
<img src={items.image}  alt={items.name}  className="card-img-top mb-2"
            style={{ 
              height: "200px", 
              objectFit: "cover", 
              borderRadius: "10px" 
            }}  />

 <div className="card-body">
            <h5 className="card-title">{items.name}</h5>
            <p className="card-text">{items.description}</p>
            <p className="card-text fw-bold">${items.price}</p>
          </div>
</div>
</div>

 )) 
}
 </div>
</>  
)
}

export default Section2;