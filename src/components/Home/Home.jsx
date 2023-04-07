import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
//css
import './Home.css'
//toaster
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts = useLoaderData()
    const [cart,setCart] = useState([]);

    const handleCart = (tshirt)=>{
        const check = cart.find(shirt => shirt._id === tshirt._id);
        if(!check){
            const newCart = [...cart,tshirt];
            setCart(newCart);
        }else{
            toast('You have already added this t-shirt');
        }
    }
    const handleRemoveFromCart = (id) =>{
        const newCart = cart.filter(tshirt => tshirt._id !== id);
        setCart(newCart);
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleCart={handleCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;