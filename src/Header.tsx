import "./Header.css";
import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Feature', href: '#feature' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Company', href: '#company' }
  ];

  return (
    <header className="relative flex justify-between items-center h-16 px-4 md:px-6 bg-white shadow-sm font-inter">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-10 md:h-12"
          src="src/assets/Logo full-hitam.png"
          alt="Company Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        {NavLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            className="text-gray-700 hover:text-black transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          {isMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          )}
        </button>
      </div>

      {/* Buy Button / Action */}
      <div className="hidden md:block">
        <Button 
          variant="outlined" 
          className="border-black text-black hover:bg-gray-100"
        >
          Buy
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col">
            {NavLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="px-4 py-3 border-b hover:bg-gray-100 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="outlined" 
              className="m-4 border-black text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;