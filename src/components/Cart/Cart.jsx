import React, { useState } from 'react';
//css
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length ===0){
        message = <p>Please add some product</p>
    }else{
        message = <div>
            <h3>Thanks</h3>
            <p>For shopping here</p>
        </div>
    }
  
 
   
    return (
        <div>
            <h2 className={cart.length === 1 ? 'red':'blue'}>Order summary: {cart.length}</h2>
            {cart.length ? <div className='purple'> <h3>Thanks</h3> <p>for shopping here</p> </div> : <p>Please add some product</p>}
            {/* {message} */}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button> </p>)
            }
            {
               cart.length === 2   && <p>2 product added</p>
            }
            {
                cart.length === 1 || <p>1 product added</p>
            }
        </div>
    );
};

export default Cart;