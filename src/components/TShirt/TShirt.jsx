import React from 'react';
//css
import './TShirt.css'
const TShirt = ({tshirt,handleCart}) => {
    // console.log(tshirt);
    const {picture,name,price} = tshirt
    // const handleCart = handleCart;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;