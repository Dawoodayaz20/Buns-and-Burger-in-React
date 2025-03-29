import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-700 text-yellow-200 absolute w-full top-0 left-0 flex justify-between items-center z-50 py-4 px-8">
      <img 
        id="logopic" 
        className="h-16 w-16 rounded-full" 
        alt="Buns and Burger Logo" 
        src={logo} 
      />
      <h1 className="text-2xl font-bold">Buns and Burgers</h1>
      <div className="relative transition duration-1000">
        <a href="Cart.html">
          <i className="fa-solid fa-cart-shopping text-yellow-200 text-xl hover:scale-110 transition-transform"></i>
        </a>
      </div>
      <nav id="navbar" className="flex gap-4">
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/">Home</Link>
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/menu">Menu</Link>
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/deals">Hot Deals</Link>
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
