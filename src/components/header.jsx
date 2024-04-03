import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white white:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b rounded-b-3xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-b-full">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-orange-500 mb-2 mt-0 text-3xl font-medium leading-tight text-primary">ከተፍ.</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button 
            type="button" 
            className="text-white bg-gradient-to-br from-orange-400 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium shadow-md rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Order Now
          </button>
          <button 
            type="button" 
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            aria-controls="navbar-sticky" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-orange-500 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Menu</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0" aria-current="page">Event</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0" aria-current="page">Chefs</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0" aria-current="page">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
