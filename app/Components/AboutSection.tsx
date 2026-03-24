"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-primary font-serif relative z-40" id="who">
      <div className="w-full px-4   lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="w-full lg:flex-[0_0_55%]  flex flex-col justify-center text-center lg:text-left">
          {/* Label */}
          <p className="text-lg md:text-lg mb-4 font-sans font-medium text-[#5a5640]">
            Who we are
          </p>

          {/* Heading */}
          <h1 className="text-4xl lg:text-[54px] font-medium leading-[1.1] mb-6 text-footer-bg">
            <span className="text-primary-gold">Turning reality </span> 
            <br />
            into perception
          </h1>

          {/* Content */}
          <div className="space-y-4 text-base lg:text-lg leading-[1.75] font-sans font-light text-[#3d3b2e]">
            <p>
              Our founders joined forces in 2025 to develop a novel solution to
              an age-old problem:
              <span className="italic text-footer-bg font-medium">
                {" "}
                “Perception is reality.”
              </span>
            </p>

            <p>
              With decades of combined experience across cognitive behaviour
              research, strategy execution, and change management, we are on a
              mission to turn
              <span className="italic text-[#1e1d18] font-medium">
                {" "}
                reality into perception.
              </span>
            </p>

            <p className="font-medium text-[#0f0f0f]">Fast. Quiet. Relevant.</p>

            <p>
              This mantra shapes everything we do — how we operate, how we
              build, and how we deliver.
            </p>

            <p>
              In a world full of noise, we don’t add to it. LiaVia searches for
              the signal — the truth that leads the way forward.
            </p>

            <p>
              We hold ourselves accountable to this standard, and expect the
              same from our customers and partners.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-5/12 flex items-stretch flex-1">
          <div className="relative w-full h-75 md:h-100 lg:h-140 rounded-2xl overflow-hidden">
            <Image
              src="/images/about.webp"
              alt="Who we are"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
