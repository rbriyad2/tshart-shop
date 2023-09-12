import React from 'react';
import './Tshart.css';

const Tshart = ({tshart, handleaddtocart}) => {
    const {picture, _id,price, gender, name}= tshart
    return (
        <div className='tshart-shop'>
            <img src={picture} alt="" />
            <h3>Brand Name: {name}</h3>
            <h4>Price: ${price}</h4>
            <button onClick={()=> handleaddtocart(tshart)} className='buynowBTN'>Buy Now</button>
        </div>
    );
};

export default Tshart;