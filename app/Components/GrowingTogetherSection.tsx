"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function GrowingTogetherSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;

    if (!section || !wrapper || !label || !heading) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapper,
        { width: "50%", borderRadius: "32px" },
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

      // LABEL
      gsap.fromTo(
        label,
        { y: 0 },
        {
          y: -200, // push up strongly
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 30%",
            end: "top top",
            scrub: 1,
          },
        }
      );

      // HEADING
      gsap.fromTo(
        heading,
        { y: 0 },
        {
          y: -200, // more than label for depth
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "top top",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center items-center py-8 bg-primary "
    >
      {/* Expanding image wrapper */}
      <div
        ref={wrapperRef}
        className="relative z-40 overflow-hidden h-120 w-full mx-4 lg:mx-10 rounded-4xl! will-change-[width,border-radius]"
      >
        {/* Background image */}
        <Image
          src="/images/smart.webp"
          alt="Grain silos aerial view"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/15 to-black/45" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p
            ref={labelRef}
            className="text-lg tracking-wider text-white/85 mb-5 font-medium"
          >
            Growing together
          </p>

          <h2
            ref={headingRef}
            className="text-4xl lg:text-[55px] leading-tight text-white font-normal max-w-175"
          >
            We work to create value for our clients, partners and team members
          </h2>
        </div>
      </div>
    </section>
  );
}
