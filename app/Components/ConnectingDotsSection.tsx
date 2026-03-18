"use client";

import { useEffect, useRef } from "react";
import { registerTrigger } from "./DotsCanvas";
export default function CopenhagenSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerTrigger(sectionRef.current); // ← hands DOM ref to global canvas
    }
  }, []);
  return (
    <div
      ref={sectionRef}
      className="w-full flex items-stretch min-h-105 overflow-hidden [background:#eae6dc] font-serif relative"
    >
      <div className="lg:px-20 flex w-full">
        <div className="flex-[0_0_55%] w-full px-12 py-16 flex flex-col justify-center z-10">
          <p className="text-lg   mb-5 font-sans font-medium text-[#5a5640]">
            What we do
          </p>

          <h1 className="text-[55px] font-medium leading-[1.1] mb-8 font-serif text-[#1e1d18]">
            Connecting the
            <br />
            dots
          </h1>

          <p className="text-lg leading-[1.75] font-sans font-medium max-w-100 text-[#3d3b2e]">
            At the heart of our group is
            <strong className="font-semibold text-[#0f0f0f] pl-2">
              Copenhagen Merchants
            </strong>
            , our agricultural commodity brokerage business. Ever since 1977,
            we've grown from this with clients and partners into the group we
            are today. As a group, we enable seamless global trade through
            market insights, integrated logistics, processing, and hands-on
            support – connecting the dots every step of the way.
          </p>
        </div>

        {/* Right: Dot Canvas */}
        <div className="flex-1 relative" />
      </div>
      {/* Left: Text */}
    </div>
  );
}
