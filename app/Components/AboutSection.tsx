import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div
      className="w-full bg-primary font-serif relative z-50 "
      id="section1"
    >
      <div className="w-full px-4 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-7/12 *:text-center *:lg:text-left">
          <p className="text-lg md:text-lg mb-4 font-sans font-medium text-[#5a5640]">
            Who we are
          </p>

          <h1 className="text-4xl lg:text-[55px] font-medium leading-[1.1] mb-6 text-[#1e1d18]">
            A family-owned <br />
            group since 1977
          </h1>

          <p className="text-lg   leading-[1.75] font-sans font-light text-[#3d3b2e] max-w-lg">
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
          <button className="group relative flex  mx-auto lg:mx-0 items-center overflow-hidden pr-3 rounded-full mt-8  p-1">
            <span className="absolute left-1 h-8 w-8 rounded-full bg-[#FD6A3D] transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]"></span>

            <span className="relative z-10 flex items-center gap-3 py-1 text-black font-semibold">
              <span className="flex h-8 w-8 items-center justify-center  ">
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
              </span>

              <span className="whitespace-nowrap text-sm">
                More about who we are
              </span>
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-5/12">
          <div className="relative w-full h-75 md:h-100 lg:h-125 rounded-2xl overflow-hidden">
            <Image
              src="/images/about.webp"
              alt="About"
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
