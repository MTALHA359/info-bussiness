'use client';

import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?_gl=1*1cyved0*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA1MjgyNjUkbzEzJGcxJHQxNzUwNTI4Mjg5JGozNiRsMCRoMA..')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between px-10 py-6">
        {/* Left: Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          SK<span className="text-black-400"> SK-TECHNOLOGY801</span>
        </div>

        {/* Center: Nav Links */}
        <nav className="flex gap-8 text-lg">
          <a href="/" className="hover:text-pink-400 transition">Home</a>
          <a href="/aboutus" className="hover:text-pink-400 transition">About us</a>
          <a href="/investment" className="hover:text-pink-400 transition">Investment</a>
          <a href="/facilities" className="hover:text-pink-400 transition">facilities</a>
          <a href="/contact" className="hover:text-pink-400 transition">Contact</a>
        </nav>

        {/* Right: Login */}
        <div className="flex items-center gap-4">
          <a href="/login" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition">
            Login
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[calc(100vh-96px)] px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
          Elevate Your Style <br /> With Glam & Glow
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          Discover our latest fashion and beauty trends — tailored to empower your look every day.
        </p>
      </div>
    </header>
  );
}
