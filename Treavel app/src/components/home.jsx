import React, { useState } from "react";
import '../App.css'; 

export function Home() {
    const[price,setPrice] = useState(5000);

    function handlePrice(e){
        setPrice(e.target.value);
    }
    return (

        <div className="home-container" >
        <div className="video-container">
            <video className="overlay" muted autoPlay loop disablePictureInPicture>
                <source src="./mixkit-flying-over-a-beautiful-sunny-bay-5009-hd-ready.mp4" type="video/mp4"/>
            </video> 
        </div>

        <div className="contant">
<h5>Our Packages</h5>
    <h1>Search Your Holiday</h1>

    <div className="box">
    <div>
    <label>Search your destination:</label>
    </div>
    <div className="input">
<input type="text" placeholder="enter name here...."></input>
<i class="bi bi-geo-alt-fill"></i>
</div>
<div>
<label>Select your Date:</label>
    </div>
    <div className="input">
<input type="date" ></input>
</div>
<div>
<label>Min price:<strong><i class="bi bi-currency-rupee"></i>
{price}</strong></label>
    </div>
    <div className="input">
<input onChange={handlePrice} type="range" max="200000" min="5000" value={price}>
</input>
</div>
<br/>
<button className="btn btn-primary rounded-5">Search</button>
</div>
 
    </div>
    

      
</div>
        
    );
}


