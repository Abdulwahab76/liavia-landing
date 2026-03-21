"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-primary h-18 relative z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between h-full px-4 md:px-6">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-32">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Logo"
            priority
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-14 text-[15px] font-medium text-black">
            <a href="#" className="hover:opacity-70 font-bold text-[12px]">
              What we do
            </a>
            <a href="#" className="hover:opacity-70 font-bold text-[12px]">
              Who we are
            </a>
            <a href="#" className="hover:opacity-70 font-bold text-[12px]">
              Contact
            </a>
          </nav>
        </div>

        {/* Right: Desktop Career */}
        <div className="hidden md:block">
          <a href="#" className="text-[12px] font-bold hover:opacity-70">
            Career
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="self-end mb-8 text-2xl"
          >
            ✕
          </button>

          {/* Menu */}
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a href="#" onClick={() => setOpen(false)}>
              What we do
            </a>
            <a href="#" onClick={() => setOpen(false)}>
              Who we are
            </a>
            <a href="#" onClick={() => setOpen(false)}>
              Contact
            </a>
            <a href="#" onClick={() => setOpen(false)}>
              Career
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
        />
      )}
    </header>
  );
};

export default Header;
