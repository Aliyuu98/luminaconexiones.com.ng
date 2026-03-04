"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"
import React, { useEffect } from "react"

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Smooth scroll handler
  useEffect(() => {
    const handleClick = (e: any) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false); // Close menu on click
        }
      }
    };
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => link.addEventListener('click', handleClick));
    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <nav
      className="w-full relative flex items-center justify-between px-4 md:px-8 py-4 bg-none z-50"
      style={{ minHeight: '70px', background: 'linear-gradient(90deg, #8AAFDC 3.1%, #DEDEA2 31.01%, #8AAFDC 58.06%)' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image src="/logo.png" fill alt="company logo" style={{ objectFit: 'contain' }} />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center text-base font-normal text-black">
        <a href="" className="opacity-70 hover:opacity-100">Home</a>
        <a href="#categories-section" className="opacity-70 hover:opacity-100">Categories</a>
        <a href="#about-section" className="opacity-70 hover:opacity-100">About Us</a>
        <a href="#service-section" className="opacity-70 hover:opacity-100">Service</a>
        <a href="#review-section" className="opacity-70 hover:opacity-100">Review</a>
        <a href="#contact-section" className="opacity-70 hover:opacity-100">Contact</a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button
          title="Get Started"
          background="#14183B"
          color="#F7F7F1"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.14,
              behavior: 'smooth',
            });
          }}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-blue flex flex-col items-center py-6 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2">
          <a href="" className="py-2 text-black font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#categories-section" className="py-2 text-black font-medium" onClick={() => setIsMenuOpen(false)}>Categories</a>
          <a href="#about-section" className="py-2 text-black font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#service-section" className="py-2 text-black font-medium" onClick={() => setIsMenuOpen(false)}>Service</a>
          <a href="#review-section" className="py-2 text-black font-medium" onClick={() => setIsMenuOpen(false)}>Review</a>
          <a href="#contact-section" className="py-2 text-black font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <div className="mt-4">
            <Button
              title="Get Started"
              background="#14183B"
              color="#F7F7F1"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({
                  top: window.innerHeight * 0.14,
                  behavior: 'smooth',
                });
              }}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
