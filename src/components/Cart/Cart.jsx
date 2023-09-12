import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let massage;
    if(cart.length ===0){
        massage ='Please add Some Product'
    }
    return (
        <div className='cart'>

            <h2 className={cart.length !=2 ? 'yellow' : 'red'}>Your Cart Products: {cart.length}</h2>
            {cart.length >=3  ? <p>Wow its Good</p>: <p>Please More Product add</p>}
            {massage}
            {
                cart.map(tshart => <p key={tshart._id}>{tshart.name}
                <button onClick={()=>handleRemoveFromCart(tshart._id)} className='xBTN'>X</button></p>)
           
            }
            {cart.length ===2 && <p> good only 2 you want ??</p>}
            {cart.length ===3 || <p>good its not 3</p>}
            <p className={`bold ${cart.length >4 ? 'border': 'yellow'}`}>Something wrong</p>
        </div>
    );
};

export default Cart;