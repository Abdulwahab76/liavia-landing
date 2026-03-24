"use client";

import { useEffect, useRef } from "react";
import { registerTrigger } from "./DotsCanvas";
import Link from "next/link";

export default function CopenhagenSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerTrigger(sectionRef.current);
    }
  }, []);

  return (
    <div
      id="what"
      ref={sectionRef}
      className="w-full flex items-stretch min-h-[90vh] overflow-hidden bg-primary font-serif relative"
    >
      <div className="px-4 lg:px-12 flex w-full">
        {/* Left: Text */}
        <div className="basis-full lg:flex-[0_0_55%] w-full py-16 flex flex-col justify-center z-10 lg:text-left text-center">
          {/* Label */}
          <p className="text-lg md:text-lg mb-4 font-sans font-medium text-[#5a5640]">
            What we do
          </p>

          {/* Heading */}
          <h1 className="text-4xl lg:text-[54px] font-medium leading-[1.1] mb-6 text-footer-bg">
            Connecting {" "}
            <span className="text-primary-gold">
              perception
              <br />
              to execution
            </span>
          </h1>

          {/* Body */}
          <div className="space-y-4 text-base lg:text-lg leading-[1.75] lg:text-left text-center font-sans font-light max-w-xl text-[#3d3b2e]">
            <p>
              LiaVia exposes internal power dynamics and behaviours that shape
              execution momentum by analysing your organization’s communication
              patterns.
            </p>

            <p className="italic text-footer-bg font-medium">
              “Perception is reality.”
            </p>

            <p className="italic text-footer-bg font-medium">
              “Then let’s make sure our perception is objective and
              data-driven.”
            </p>

            <p>
              At the heart of our solution is an AI-powered, proprietary
              framework that draws on cognitive and organisational behaviour
              research — grounding perception in operational reality.
            </p>

            <p className="font-medium text-[#0f0f0f]">
              Because strong ideas need strong execution.
            </p>

            <p>
              You’ve set the course. Made the plan. Now use LiaVia to land it
              with precision.
            </p>

            <p className="text-sm text-[#5a5640]">
              Makes sense? We hope so. In any case, let’s talk.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex lg:justify-start justify-center">
            <Link href="#contact">
              <button className="group relative inline-flex items-center overflow-hidden pr-3 rounded-full mt-8  w-full bg-primary-gold hover:bg-dark-gold   p-1">
                {/* Expanding bg */}
                <span className="absolute left-1  h-10 w-10 rounded-full"></span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-0 py-1 px-3 font-bold   text-white">
                  <span className="flex h-8 w-8 items-center justify-center">
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
                      className="lucide lucide-arrow-right-icon text-white lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>

                  <span className="whitespace-nowrap text-sm">
                   Contact Us
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Dot Canvas */}
        <div className="flex-1 relative lg:flex hidden" />
      </div>
    </div>
  );
}
