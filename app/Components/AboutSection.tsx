import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-primary font-serif relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm md:text-lg mb-4 font-sans font-medium text-[#5a5640]">
            Who we are
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-[55px] font-medium leading-[1.1] mb-6 text-[#1e1d18]">
            A family-owned <br />
            group since 1977
          </h1>

          <p className="text-base md:text-sm leading-[1.75] font-sans font-light text-[#3d3b2e] max-w-sm">
            We are a team of passionate team players who strive to operate like
            a close-knit family, both internally and in our relationships with
            clients and partners. At its core, this means we always go the extra
            mile to connect the dots. It also reflects our commitment to uphold
            traditions, loyalty, and integrity, balanced with a healthy dose of
            humor and genuine care and consideration for those we work with.
            These business values are aligned with the family values of the
            founding Christensen family, who maintains full ownership of the CM
            Group.
          </p>

          {/* BUTTON */}
          <button className="group relative inline-flex items-center overflow-hidden pr-3 rounded-full mt-8 border border-gray-300 p-1">
            {/* Expanding bg */}
            <span className="absolute left-1  h-8 w-8 rounded-full bg-[#FD6A3D] transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 py-1 text-black font-semibold">
              <span className="flex h-8 w-8 items-center justify-center">
                →
              </span>

              <span className="whitespace-nowrap text-sm">
                More about who we are
              </span>
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-75 md:h-100 lg:h-150 rounded-2xl overflow-hidden">
            <Image
              src="/images/about.webp"
              alt="About"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
