import React from "react";
import american from "./images/american.png";
import "./App.css";

const Product = () => {
  return (
    <div className="item">
      <img src={american} alt="american" />
      <h3>Launch fast your great products</h3>
      <p>
        Start saving your time with Framer Wifreframe Web UI Kit.Hundreds of
        premade layouts and templates.
      </p>
      <button>BUTTON</button>
    </div>
  );
};

export default Product;
