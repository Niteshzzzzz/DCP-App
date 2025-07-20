import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // toggle for login
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or App Name */}
        <div className="text-xl font-bold text-blue-600">MyApp</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to={'/signin'} className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                Sign In
              </Link>
              <Link to={'/signup'} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative">
              <FaUserCircle
                size={28}
                className="text-blue-600 cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
                  <Link className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">
                    Profile
                  </Link>
                  <Link
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left text-red-600"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu - Placeholder for Hamburger (optional) */}
      </div>

      {/* Mobile Menu Buttons */}
      <div className="md:hidden mt-3 flex justify-end items-center space-x-2">
        {!isLoggedIn ? (
          <>
            <button className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
              Sign In
            </button>
            <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </>
        ) : (
          <div className="relative">
            <FaUserCircle
              size={26}
              className="text-blue-600 cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
                <button className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
