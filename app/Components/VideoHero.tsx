"use client";

import React from "react";

export default function VideoHero() {
  return (
    <section className="w-full mx-auto flex items-center justify-start bg-primary relative z-40">
      <div className="relative w-full mx-4 lg:mx-10 h-[75vh] sm:h-[85vh] lg:h-[82vh] overflow-hidden rounded-4xl lg:rounded-4xl lg:px-20">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="relative z-10 grid h-full grid-rows-[1fr_auto_1fr] text-white px-4 sm:px-6 lg:px-6">
          {/* Center Title */}
          <div className="row-start-2 flex items-center justify-center text-center px-2">
            <h1
              className="font-serif font-light leading-[1.05]
          text-4xl   lg:text-[94px]"
            >
              Growing Together
            </h1>
          </div>

          {/* Bottom Row */}
          <div className="row-start-3 lg:flex-row flex-col flex items-start justify-end gap-3 lg:items-end lg:justify-between pb-6 sm:pb-8">
            {/* Scroll */}
            <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down-icon lucide-arrow-down "
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
              <span>Scroll</span>
            </div>

            {/* Paragraph */}
            <p
              className="max-w-45 sm:max-w-xs md:max-w-90 text-left
          text-xs   lg:text-[16px] font-bold leading-snug"
            >
              Efficient turnkey solutions for global agricultural and bulk
              commodities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
