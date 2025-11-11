
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-indigo-900 text-white py-2">
      <div className="logo">
        <span className="cursor-pointer font-bold text-xl mx-8 hover:bg-indigo-500">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold hover:bg-indigo-500 transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold hover:bg-indigo-500 transition-all">Your Tasks</li>
      </ul>
    </nav>
  );
};

export default Navbar;
