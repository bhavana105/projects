import React from "react";
export function Footer(){
     return(
        <div  className=" footer " id="con">
    <div className="footer">
     <p  className="copy p-3">Keep In Touch</p>
                <div className=" group d-flex  justify-content-evenly  align-items-center">
                <h4>Travel With Us</h4>
                <div className="input">
<input type="text" placeholder="enter email address"></input>
<i className="bi bi-send-fill"></i></div>
</div>
                         <div className="d-flex m-5 justify-content-evenly">
                                 <div>
                                <p>services</p>
                                <p>insurance</p>
                                <p>Agency</p>
                                </div>
                                <div>
                                <p>payments</p>
                                <p>Tourisum</p>
                                <p>Rental cars</p>
                                </div>
                                <div>
                                <p>Hostels</p>
                                <p>TripAdvisor</p>
                                <p>Booking</p>
                                </div>
                         
                </div> 
                <div className="icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
                </div>
                <div className="copy">copyrightsreserved-travell@ 2024</div>
                </div>
        </div>
     )
}