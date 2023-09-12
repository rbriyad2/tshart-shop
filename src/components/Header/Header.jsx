import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
           <Link to='/'>Home</Link> 
           <Link to='/order'>Order</Link> 
           <Link to='/review'>Review</Link> 
           <Link to='/grandpa'>Grandpa</Link>
           <Link to='/about'>About</Link> 
           <Link to='/contact'>Contact</Link> 
        </nav>
    );
};

export default Header;