// Header.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = (e) => {
    // Only close the menu when clicking the 'X' icon
    if (e.target.classList.contains('close-menu')) {
      setIsNavOpen(false);
    }
  };

  return (
    <header className="bg-black text-white p-6 fixed w-full top-0 z-50">
    <div className="container mx-auto pr-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/cetalks-logo.png" alt="CETalks Logo" className="w-12 h-12" />
          <span className="ml-3 text-2xl font-semibold cetalks-font">CETALKS</span>
        </Link>

        {/* Hamburger Menu for smaller screens */}
        <button
          className="md:hidden focus:outline-none"
          onClick={handleNavToggle}
        >
          {isNavOpen ? (
            <svg
              className="w-8 h-8 close-menu"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Full-width Dropdown Menu for smaller screens */}
        {isNavOpen && (
          <div className="md:hidden w-full absolute top-20 left-0 bg-black text-white text-center">
            <Link
              to="/"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Home
            </Link>
            <Link
              to="/media"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/media' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Media
            </Link>
            <Link
              to="/events"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/events' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Events
            </Link>
            <Link
              to="/our-team"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/our-team' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Our Team
            </Link>
            <Link
              to="/spotlight"
              className={`block py-3 hover:text-yellow-1000 font-medium ${location.pathname === '/spotlight' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Spotlight
            </Link>
            <Link
              to="/contact"
              className={`block py-3 hover:text-yellow-100 font-medium ${location.pathname === '/contact' ? 'text-yellow-200' : ''}`}
              onClick={closeNav}
            >
              Contact
            </Link>
          </div>
        )}

        {/* Navigation Menu for larger screens */}
        <nav className="hidden md:flex md:space-x-6 ">
          <Link
            to="/"
            className={`hover:text-yellow-100 font-semibold ${location.pathname === '/' ? 'text-yellow-200' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/media"
            className={`hover:text-yellow-100 font-semibold ${location.pathname === '/media' ? 'text-yellow-200' : ''}`}
          >
            Media
          </Link>
          <Link
            to="/events"
            className={`hover:text-yellow-100 font-semibold ${location.pathname === '/events' ? 'text-yellow-200' : ''}`}
          >
            Events
          </Link>
          <Link
            to="/our-team"
            className={`hover:text-yellow-100 font-semibold ${location.pathname === '/our-team' ? 'text-yellow-200' : ''}`}
          >
            Our Team
          </Link>
          <Link
            to="/spotlight"
            className={`hover:text-yellow-100 font-semibold ${location.pathname === '/spotlight' ? 'text-yellow-200' : ''}`}
          >
            Spotlight
          </Link>
          <Link
            to="/contact"
            className={`hover:text-yellow-100 font-semibold ${location.pathname === '/contact' ? 'text-yellow-200' : ''}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
