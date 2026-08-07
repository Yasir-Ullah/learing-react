import React from "react";
import "./Card.css";

function Card({ img, title, description }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img} alt={title} />

        <div className="card-content">
          <h2>{title}</h2>

          <p>{description}</p>

          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
