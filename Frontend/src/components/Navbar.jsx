import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../assets/LOGO.png"

const Navbar = () => {
  return (
    <div className="bg-black/60 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
            <img src={LOGO} width='60px' alt="ddd" />
          <div className="text-xl font-bold"> <b>IESS</b> <br/><div className='text-x'>College</div> </div>
        </div>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/About" className="hover:text-yellow-400">About Us</Link>
           <Link to="/News" className="hover:text-yellow-400">News</Link>
           <Link to="/Lecturers" className="hover:text-yellow-400">Lecturers</Link>

         
         
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
          <Link to="/register" className="hover:text-yellow-400">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
