import React from "react";
import "../App.css";

export function Main(props) {
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i key={i} className={`bi bi-star${i <= rating ? '-fill' : ''} text-warning`}></i>
            );
        }
        return stars;
    };

    return (
        <div id="shop">
            <h3 className="mt-4">Most Visited Destinations</h3>
            <div className="destination-container">
                {
                    props.Data.map(({ id, image, location, destTitle, fees, description, rating }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="card" style={{ width: 22 + "rem", gap: 10 + "px" }}>
                                    <div>{image}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{destTitle}</h5>
                                        <p><i className="bi bi-geo-alt-fill"></i>{location}</p>
                                        <h4><i className="bi bi-currency-rupee"></i>{fees}</h4>
                                        <div>{renderStars(rating)}</div>
                                        <p className="card-text">{description}</p>
                                        <div className="card-body">
                                            <button className="btn btn-primary">Details <i className="bi bi-bookmark-check"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
