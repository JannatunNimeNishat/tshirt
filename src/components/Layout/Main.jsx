import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
//css
import './Main.css'
//toast
import { Toaster } from 'react-hot-toast';
const Main = () => {
    return (
        <div className='my-container'>
            <Header></Header>
            <Outlet></Outlet>
            {/* toaster */}
            <Toaster />
        </div>
    );
};

export default Main;