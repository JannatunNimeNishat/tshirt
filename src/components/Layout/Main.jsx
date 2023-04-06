import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
//css
import './Main.css'
const Main = () => {
    return (
        <div className='my-container'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;