import React from 'react';
import './Main.css';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;