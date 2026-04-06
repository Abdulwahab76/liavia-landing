"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-primary h-22 relative z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-around h-full px-4 md:px-0">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center justify-between w-full ">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={140}
              height={32}
              alt="Logo"
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-14 text-base font-medium text-black">
            <Link
              href="#what"
              className="hover:opacity-70   font-normal text-base"
            >
              What we do
            </Link>
            <Link
              href="#how"
              className="hover:opacity-70  font-normal text-base"
            >
              How it works
            </Link>
            <Link
              href="#security"
              className="hover:opacity-70 font-normal text-base"
            >
              Security & Safety
            </Link>
            <Link
              href="#who"
              className="hover:opacity-70 font-normal text-base"
            >
              Who we are
            </Link>
          </nav>

          <Link href="mailto:hello@liavia.ai" target="_blank">
            <button className=" group relative hidden lg:inline-flex items-center overflow-hidden pr-3 rounded-full  bg-primary-gold hover:bg-dark-gold p-1 shadow-primary transition">
              <span className="relative z-10 flex items-center gap-2 py-1 px-3 font-bold text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right-icon lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <span className="text-sm whitespace-nowrap font-normal">
                  Get a Quote
                </span>
              </span>
            </button>
          </Link>
        </div>

        {/* Right: Desktop Career */}
        {/* <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-full   tracking-wide text-[16px] font-normal  transition"
          >
            Career
          </Link>
        </div> */}

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
            <Link
              href="#what"
              className="hover:opacity-70   font-normal text-base"
            >
              What we do
            </Link>
            <Link
              href="#how"
              className="hover:opacity-70  font-normal text-base"
            >
              How it works
            </Link>
            <Link
              href="#security"
              className="hover:opacity-70 font-normal text-base"
            >
              Security & Safety
            </Link>
            <Link
              href="#who"
              className="hover:opacity-70 font-normal text-base"
            >
              Who we are
            </Link>
          </nav>
          <Link href="mailto:hello@liavia.ai" target="_blank">
            <button className=" group relative lg:hidden inline-flex items-center overflow-hidden mt-4 pr-3 rounded-full  bg-primary-gold hover:bg-dark-gold p-1 shadow-primary transition">
              <span className="relative z-10 flex items-center gap-2 py-1 px-3 font-bold text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right-icon lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <span className="text-sm whitespace-nowrap font-normal">
                  Get a Quote
                </span>
              </span>
            </button>
          </Link>
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
