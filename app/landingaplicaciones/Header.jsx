// components/Header.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Nuestras Aplicaciónes', href: '#hero' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed w-full z-50 top-0 left-0 transition-transform duration-300 bg-white shadow-md ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="https://i.postimg.cc/nVDKF9WY/xplendev-logo-black.png" 
            alt="Xplendev Logo" 
            width={185} 
            height={185} 
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-700 font-medium hover:text-[#FF6B6B] transition-all">
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.link/5lvksx"
            className="px-4 py-2 border border-[#FF6B6B] text-[#FF6B6B] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-all"
          >
            Contratar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <HiX size={28} className="cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          ) : (
            <HiMenuAlt3 size={28} className="cursor-pointer" onClick={() => setIsMenuOpen(true)} />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col items-start p-6 z-50"
          >
            <HiX size={28} className="self-end mb-4 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-700 font-medium hover:text-[#FF6B6B] transition-all mb-4 text-lg">
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.link/5lvksx"
              className="px-4 py-2 border border-[#FF6B6B] text-[#FF6B6B] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-all w-full text-center"
            >
              Contratar
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;