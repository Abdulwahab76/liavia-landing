"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface StatCard {
  label: string;
  value: string;
  description: string;
  image: string;
}

const stats: StatCard[] = [
  {
    label: "Revenue",
    value: "1.26 B",
    description:
      "The income statement for 2024 shows a revenue of DKK 1,26 billion / approx. EUR 168 M.",
    image: "/images/revenue.webp",
  },
  {
    label: "Profit",
    value: "230 M",
    description:
      "The income statement for 2024 shows a profit of DKK 230 million.",
    image: "/images/profit.webp",
  },
  {
    label: "Equity",
    value: "~1 B",
    description:
      "The balance sheet of 2024 shows an equity of approx. 1 DKK billion.",
    image: "/images/equity.jpg",
  },
  {
    label: "International",
    value: "+3",
    description:
      "The Copenhagen Group has over 300 employees working in 18 countries.",
    image: "/images/international.jpg",
  },
  {
    label: "Employees",
    value: "300+",
    description:
      "A dedicated team of over 300 professionals across our global operations.",
    image: "/images/employees.jpg",
  },
];

export default function GroupNumbers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 380;

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateArrows, 350);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateArrows, 350);
  };

  return (
    <section className="w-full bg-primary px-4 md:px-12  relative z-40 py-16">
      <div className="w-full">
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-4xl md:text-[55px] font-normal leading-[1.1] text-[#1e1d18]">
            Group Numbers
          </h2>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40"
              style={{ background: canScrollLeft ? "#d95f3b" : "#e8b4a3" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3L5 8L10 13"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40"
              style={{ background: canScrollRight ? "#d95f3b" : "#e8b4a3" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative h-86! shrink-0 rounded-xl overflow-hidden flex flex-col justify-between"
              style={{
                width: "clamp(280px, 28vw, 360px)",
                height: "clamp(340px, 42vw, 440px)",
                background: "#1a1a1a",
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  className="object-cover object-center"
                  //   sizes="(max-width: 768px) 80vw, 28vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.72) 100%)",
                  }}
                />
              </div>

              {/* Top: label */}
              <div className="flex flex-col gap-y-5">
                <div className="relative z-10 px-5 pt-5">
                  <span className="text-white text-xs font-bold tracking-wide">
                    {stat.label}
                  </span>
                </div>

                {/* Middle: big number */}
                <div className="relative z-10 px-5 ">
                  <h5 className="text-white leading-none text-6xl lg:text-[80px] ">
                    {stat.value}
                  </h5>
                </div>
              </div>

              {/* Bottom: description */}
              <div className="relative z-10 px-5 pb-5">
                <p
                  className="text-white/80 text-[13px] leading-[1.6]"
                  style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
