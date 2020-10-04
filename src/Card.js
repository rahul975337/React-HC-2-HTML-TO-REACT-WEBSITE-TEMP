/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Card = ({
  title = "No Title",
  buttonText = "No Text",
  imageUrl = "No Image",
  description = "No Description",
}) => (
  <div className="col-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-success">
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);
export default Card;
