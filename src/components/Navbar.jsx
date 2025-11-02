import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Safi Seaside Tours
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" onClick={()=>scrollTo(0,0)} className="hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={()=>scrollTo(0,0)} className="hover:text-blue-600">About</Link>
          <Link to="/tours" onClick={()=>scrollTo(0,0)} className="hover:text-blue-600">Tours</Link>
          <Link to="/contact" onClick={()=>scrollTo(0,0)} className="hover:text-blue-600">Contact</Link>
        </div>

        <button
          className="md:hidden text-2xl text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
  <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
    <Link
      to="/"
      className="hover:text-blue-600"
      onClick={() => {
        setIsOpen(false);        
        window.scrollTo(0, 0);    
      }}
    >
      Home
    </Link>

    <Link
      to="/about"
      className="hover:text-blue-600"
      onClick={() => {
        setIsOpen(false);
        window.scrollTo(0, 0);   
      }}
    >
      About
    </Link>

    <Link
      to="/tours"
      className="hover:text-blue-600"
      onClick={() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
      }}
    >
      Tours
    </Link>

    <Link
      to="/gallery"
      className="hover:text-blue-600"
      onClick={() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
      }}
    >
      Gallery
    </Link>

    <Link
      to="/contact"
      className="hover:text-blue-600"
      onClick={() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
      }}
    >
      Contact
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
