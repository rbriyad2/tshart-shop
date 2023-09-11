import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Tshart from "../Tshart/Tshart";
import Cart from "../Cart/Cart";

const Home = () => {
  const tsharts = useLoaderData();
  console.log(tsharts);
  return (
    <div className="container">
      <div className="shop-container">
        <div className="tsharts-container">
          {tsharts.map((tshart) => (
            <Tshart key={tshart._id} tshart={tshart}></Tshart>
          ))}
        </div>
        <div className="cart-contsiner">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
