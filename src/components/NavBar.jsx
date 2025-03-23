import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname || '/'); // Set active link based on current path, default to home
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'blue', // Default color
    };

    const handleMouseEnter = (path) => (e) => {
        if (activeLink !== path) {
            e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.7)'; // Add glow effect
            e.target.style.transition = 'box-shadow 0.3s ease'; // Enable transition
            setHoveredLink(path); // Set the hovered link
        }
    };

    const handleMouseLeave = (path) => (e) => {
        e.target.style.boxShadow = 'none'; // Remove glow effect
        setHoveredLink(null); // Clear the hovered link
    };

    const handleClick = (path) => {
        setActiveLink(path); // Set the active link
    };

    return (
        <>
            <nav className="bg-blue-500 p-4 sticky top-0 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">BLOG</div>

                    <div className="hidden md:flex space-x-4">
                        <ul className="list-none flex space-x-4">
                            {['/', '/about', '/services', '/contact'].map((path, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={path}
                                            style={{
                                                ...linkStyle,
                                                color: activeLink === path ? 'red' : 'white', // Apply active color
                                                boxShadow: hoveredLink === path && activeLink !== path ? '0 0 10px rgba(255, 255, 255, 0.7)' : 'none', // Apply glow if hovered and not active
                                                transition: 'box-shadow 0.3s ease' // Enable transition
                                            }}
                                            className="transition duration-300 ease-in-out"
                                            onClick={() => handleClick(path)}
                                            onMouseEnter={handleMouseEnter(path)}
                                            onMouseLeave={handleMouseLeave(path)}
                                        >
                                            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
                    {['/', '/about', '/services', '/contact'].map((path, index) => (
                        <NavLink
                            key={index}
                            to={path}
                            style={{
                                ...linkStyle,
                                color: activeLink === path ? 'red' : 'white', // Apply active color
                                boxShadow: hoveredLink === path && activeLink !== path ? '0 0 10px rgba(255, 255, 255,0.9 )' : 'none', // Apply glow if hovered and not active
                                transition: 'box-shadow 0.3s ease' // Enable transition
                            }}
                            className="block transition duration-300 ease-in-out py-2"
                            onClick={() => handleClick(path)}
                            onMouseEnter={handleMouseEnter(path)}
                            onMouseLeave={handleMouseLeave(path)}
                        >
                            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    );
}