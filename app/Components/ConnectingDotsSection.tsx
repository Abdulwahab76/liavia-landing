"use client";

import { JSX, useEffect, useRef } from "react";
import { registerTrigger } from "./DotsCanvas";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CopenhagenSection(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    registerTrigger(sectionRef.current);

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          Array.from(contentRef.current.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="what"
      ref={sectionRef}
      className="w-full flex items-stretch min-h-[90vh] overflow-hidden bg-primary font-serif relative"
    >
      <div className="px-4 lg:px-12 flex w-full">
        {/* Left */}
        <div className="basis-full lg:flex-[0_0_55%] w-full py-16 flex flex-col justify-center z-10 lg:text-left text-center">
          <p className="text-lg mb-4 font-sans font-medium text-[#5a5640]">
            What we do
          </p>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="text-4xl lg:text-[54px] font-medium leading-[1.1] mb-6 text-footer-bg"
          >
            Connecting{" "}
            <span className="text-primary-gold">
              perception
              <br />
              to execution
            </span>
          </h1>

          {/* Content */}
          <div
            ref={contentRef}
            className="space-y-4 text-base lg:text-lg leading-[1.75] font-sans font-light max-w-xl text-[#3d3b2e]"
          >
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
          <div
            ref={ctaRef}
            className="mt-8 flex lg:justify-start justify-center"
          >
            <Link href="#contact">
              <button className="group relative inline-flex items-center overflow-hidden pr-3 rounded-full mt-8 bg-primary-gold hover:bg-dark-gold p-1 shadow-primary transition">
                <span className="relative z-10 flex items-center gap-2 py-1 px-3 font-bold text-white">
                  <span className="flex h-8 w-8 items-center justify-center">
                    →
                  </span>
                  <span className="text-sm whitespace-nowrap">Contact Us</span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 relative lg:flex hidden" />
      </div>
    </div>
  );
}
