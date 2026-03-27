"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const heading = headingRef.current;
    const subText = subTextRef.current;

    if (!section || !wrapper || !heading || !subText) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapper,
        { width: "55%", borderRadius: "28px" },
        {
          width: "100%",
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        heading,
        { y: 0 },
        {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "top top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        subText,
        { y: 0 },
        {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
            end: "top top",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary">
      <div className="max-w-7xl w-full mx-auto  flex justify-center items-center py-10   relative z-40">
        <div
          ref={wrapperRef}
          className="relative overflow-hidden h-125 w-full mx-4 lg:mx-0 rounded-4xl! will-change-[width,border-radius]"
        >
          <Image
            src="/images/abstract-representation.jpg"
            alt="Abstract network visualization"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />

          {/* Premium overlay (not dull) */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0b1d2a]/40 via-[#0b1d2a]/55 to-black/70" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2
              ref={headingRef}
              className="text-[42px] lg:text-[56px] font-normal leading-[1.1] text-white   max-w-225"
            >
              LiaVia exposes internal dynamics and behaviours that shape the
              execution momentum of your plans
            </h2>

            <p
              ref={subTextRef}
              className="mt-2 text-base lg:text-lg text-white/85 max-w-187.5"
            >
              LiaVia exposes internal power dynamics and behaviours that will
              shape execution momentum by analysing your organization's
              communication patterns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
