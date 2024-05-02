import React from "react";
import banner from "./images/banner.jpg";
import Product from "./Product";
import Content from "./Content";
import './App.css';


const Landingpage = () => {
  return (
    <>
      <img src={banner} alt="banner" />
      <div className="component1">
        <h1>Launch fast your great products</h1>
        <div className="products">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="component2">
        <h1>Launch fast your great products</h1>
        <div className="products2">
          <Content title = "10 TRENDS HOME DECORATION FOR BEST HOUSE"/>
          <Content title = "HOW TO CLEANING OWN HOME FOR BEST CLEANING"/>
          <Content title = "TIPS CHOICE BEST AGENCY FOR HOUSE DECORATION"/>
          <Content title="HOW TO DRAW HOME DESIGN FOR CONSISTENCY"/>
          <Content title="TIPS MODELING DECORATION HOME MODERN"/>
          <Content title="HOW TO IMPROVE HOME DESIGN FOR FUTURE"/>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
