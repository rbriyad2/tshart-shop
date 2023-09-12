import React, { useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Tshart from "../Tshart/Tshart";
import Cart from "../Cart/Cart";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const tsharts = useLoaderData();
    const [cart, setCart]= useState([])

    const handleaddtocart =(tshart)=>{
        const exits = cart.find(shart => shart._id ===tshart._id)
        if(exits){
            toast("alredy added");
        }
        else{
            const newCart =[...cart, tshart]
            setCart(newCart)
        }
        
    }

    const handleRemoveFromCart =id=>{
        const remaining = cart.filter(cart => cart._id !==id)
        setCart(remaining)
        
    }
  return (
    <div className="container">
      <div className="shop-container">
        <div className="tsharts-container">
          {tsharts.map((tshart) => (
            <Tshart 
            key={tshart._id}
            tshart={tshart}
            handleaddtocart={handleaddtocart}
            ></Tshart>
          ))}
        </div>
        <div className="cart-contsiner">
          <Cart cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}></Cart>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
