"use client";

import React from "react";

export default function VideoHero() {
  return (
    <section className="w-full  mx-auto flex items-center justify-start bg-primary relative z-40 ">
      <div className="relative w-full mx-4 lg:mx-10  lg:h-120   overflow-hidden rounded-4xl">
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

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="relative z-10 grid h-full grid-rows-[1fr_auto_1fr] text-white px-6">
          {/* Center Title */}
          <div className="row-start-2 flex items-center justify-center text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[105px] font-light">
              Growing Together
            </h1>
          </div>

          {/* Bottom Row */}
          
          <div className="row-start-3 flex items-end justify-between pb-8 px-20">
            {/* Scroll Left */}
            <div className="flex items-center gap-2 text-xl  ">
              <span className="animate-bounce">↓</span>
              <span>Scroll</span>
            </div>

            {/* Paragraph Right */}
            <p className="max-w-65 md:max-w-105 text-right text-sm md:text-lg lg:text-xl   font-medium">
              Efficient turnkey solutions for global agricultural and bulk
              commodities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
