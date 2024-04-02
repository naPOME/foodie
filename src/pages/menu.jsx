import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { breakfastItems,lunchItems,dinnerItems,traditionalFood } from './menuList';

export const Menu = () => {
    return (
        <Router>
          <div className="container mx-auto p-4 mt-16">
          <h1 className='text-3xl font-extrabold tracking-tight text-slate-700 sm:text-4xl text-center pb-2 mb-10'>Check our Menu</h1>
            <nav className="mb-8">
              <ul className="flex justify-center space-x-8 text-slate-700 pb-1 font-thin mb-1 italic">
                <li>
                  <NavLink
                    to="/breakfast"
                    activeClassName="font-thin border-b-2 border-yellow-500"
                    className="text-orange-500 hover:text-gray-600 transition duration-300 text-2xl font-light"
                  >
                    Breakfast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/lunch"
                    activeClassName="font-bold border-b-2 border-yellow-500"
                    className="text-orange-500 hover:text-gray-600 transition duration-300 text-2xl font-light"
                  >
                    Lunch
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dinner"
                    activeClassName="font-bold border-b-2 border-yellow-500"
                    className="text-orange-500 hover:text-gray-600 transition duration-300 text-2xl font-light"
                  >
                    Dinner
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/traditionalFood"
                    activeClassName="font-bold border-b-2 border-yellow-500"
                    className="text-orange-800 hover:text-gray-600 transition duration-300 text-2xl font-light"
                  >
                    Tradtional Food
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/breakfast" element={<MenuList title="Breakfast" items={breakfastItems} />} />
              <Route path="/lunch" element={<MenuList title="Lunch" items={lunchItems} />} />
              <Route path="/dinner" element={<MenuList title="Dinner" items={dinnerItems} />} />
              <Route path="/traditionalFood" element={<MenuList title="Traditional Food" items={traditionalFood}/>}/>
              <Route path="/" element={<MenuList title="Breakfast" items={breakfastItems} />} />
            </Routes>
          </div>
        </Router>
      );
    };
const MenuList = ({ title, items }) => {
  return (
    <div className=" p-8 ">
        
      <h2 className="text-xl mb-6 text-center font-bold text-slate-700">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-white ">
            <img src={item.image} alt={item.name} className="w-full h-70 object-cover mb-4 " />
            <h3 className="text-lg mb-2 text-center text-slate-700 font-extrabold">{item.name}</h3>
            <p className="text-gray-500 text-center  mb-4">{item.description}</p>
            <p className="text-orange-500 text-center text-2xl font-bold pr-1">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Menu;
