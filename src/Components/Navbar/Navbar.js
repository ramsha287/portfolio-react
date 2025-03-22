import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when clicking a link
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav>
            {/* Hamburger Icon */}
            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Nav Links */}
            <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
                <li><a href="/" onClick={closeMenu}>Home</a></li>
                <li><a href="/projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="/experience" onClick={closeMenu}>Experience</a></li>
                <li><a href="/education" onClick={closeMenu}>Education</a></li>
                <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
