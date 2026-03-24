"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletItem, ProcessStep, ProductSection } from "../types/sectionTypes";

gsap.registerPlugin(ScrollTrigger);

const intro =
  "LiaVia exposes internal power dynamics and behaviours that will shape execution momentum by analysing your organization's communication patterns.";

const diagnostics: ProductSection = {
  tag: "LiaVia Diagnostics",
  headline:
    "One-off diagnostic report that will show gap-to-cover between your strategic roll-out plan and your organisation's true execution capacity.",
  subheadline: "No noise. No disruptions. No extra work.",
  pills: ["Fast", "Quiet", "Relevant"],
  bullets: [
    {
      label: "What will slow you down",
      detail: "Bottlenecks and frictions already forming.",
    },
    {
      label: "Why these keep happening",
      detail:
        "Uncover your power silos and unspoken values influencing follow-through.",
    },
    {
      label: "How to fix it NOW",
      detail: "Concrete action to clear your roadblocks and remove drag.",
    },
  ],
  whenToUse:
    "Before or at the start of roll out or implementation of a major change / strategy / transformation.",
  steps: [
    {
      duration: "60 min",
      title: "Context Scoping",
      subtitle: "Confidential alignment",
    },
    {
      duration: "6 days",
      title: "Sample Analysis",
      subtitle: "On site, GDPR compliant",
    },
    {
      duration: "60 min",
      title: "Diagnostics",
      subtitle: "Presentation + report",
    },
  ],
};

const app: ProductSection = {
  tag: "LiaVia App",
  headline:
    "Ring-fenced AI layer that sits on top of your internal comms systems turning your communication into action.",
  subheadline: "No noise. No extra work. Seamless integration.",
  pills: ["Fast", "Quiet", "Relevant"],
  bullets: [],
  continuousLevels: [
    {
      label: "Overview for Executives",
      detail:
        "MRI of your organisation's power silos and daily focus insights.",
    },
    {
      label: "Execution Forecast for PMs",
      detail:
        "Data-driven predictor of upcoming bottlenecks, frictions and unspoken feedback that are about to derail execution success.",
    },
    {
      label: "Success Game for Employees",
      detail:
        "Confidential, fully customised career plan matching their ambitions and abilities to your organisation's needs. Requires individual opt-in.",
    },
  ],
  footerNote:
    "Continuous insights across 3 core levels, delivered on a strict `need to know` basis.",
};

// ─── SUB-COMPONENTS ───────────────────────────

function Pill({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide border"
      style={{
        color: "#1e1d18",
        borderColor: "rgba(30,29,24,0.25)",
        background: "transparent",
      }}
    >
      {label}
    </span>
  );
}

function BulletRow({ item, index }: { item: BulletItem; index: number }) {
  return (
    <li
      className="flex gap-4 items-start py-4 border-b"
      style={{ borderColor: "rgba(30,29,24,0.12)" }}
    >
      <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5 bg-primary-gold text-white">
        {index + 1}
      </span>
      <div>
        <p
          className="text-sm font-semibold mb-0.5 italic"
          style={{
            color: "#1e1d18",
          }}
        >
          {item.label}
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{
            color: "#5a5640",
          }}
        >
          {item.detail}
        </p>
      </div>
    </li>
  );
}

function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="mt-8">
      <p className="text-lg md:text-lg mb-4 font-sans font-medium text-[#5a5640]">
        What it takes
      </p>
      <div className="flex flex-col sm:flex-row gap-0">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex sm:flex-col flex-row gap-3 sm:gap-0 sm:flex-1 relative"
          >
            {/* Connector line (desktop) */}
            {i < steps.length - 1 && (
              <div
                className="hidden sm:block absolute top-5 left-1/2 w-full h-px"
                style={{ background: "rgba(30,29,24,0.2)", zIndex: 0 }}
              />
            )}
            {/* Circle */}
            <div className="relative z-10 flex sm:justify-center mb-0 sm:mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium shrink-0 bg-primary-gold text-white">
                <p>
                  {step.duration.includes("day")
                    ? step.duration.replace(" days", "d")
                    : step.duration.replace(" min", "m")}
                </p>
              </div>
            </div>
            {/* Text */}
            <div className="sm:text-center pb-6 sm:pb-0 sm:px-2">
              <p
                className="text-[13px] font-semibold leading-tight"
                style={{
                  color: "#1e1d18",
                }}
              >
                {step.title}
              </p>
              <p
                className="text-[12px] mt-0.5 leading-tight"
                style={{
                  color: "#5a5640",
                }}
              >
                {step.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  product,
  animRef,
}: {
  product: ProductSection;
  animRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={animRef}
      className="rounded-2xl p-8 md:p-10 flex flex-col gap-6"
      style={{
        background: "rgba(255,255,255,0.45)",
        border: "1px solid rgba(30,29,24,0.1)",
      }}
    >
      {/* Tag */}
      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: "#1e1d18" }}
        />
        <span className="text-sm font-semibold tracking-wide">
          {product.tag}
        </span>
      </div>

      {/* Headline */}
      <h3
        className="text-[22px] md:text-[26px] font-normal leading-[1.3]"
        style={{ color: "#1e1d18" }}
      >
        {product.headline}
      </h3>

      {/* Subheadline */}
      <p className="text-[15px] font-semibold">{product.subheadline}</p>

      {/* Pills */}
      <div className="flex gap-2 flex-wrap">
        {product.pills.map((p) => (
          <Pill key={p} label={p} />
        ))}
      </div>

      {/* Diagnostics: uncover bullets */}
      {product.bullets.length > 0 && (
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{
              color: "#5a5640",
            }}
          >
            In under a week, uncover:
          </p>
          <ul className="flex flex-col">
            {product.bullets.map((b, i) => (
              <BulletRow key={i} item={b} index={i} />
            ))}
          </ul>
        </div>
      )}

      {/* When to use */}
      {product.whenToUse && (
        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "rgba(30,29,24,0.05)" }}
        >
          <p className="text-lg md:text-lg mb-4 font-sans font-medium text-[#5a5640]">
            When to use
          </p>
          <p className="text-sm leading-relaxed">{product.whenToUse}</p>
        </div>
      )}

      {/* Process timeline */}
      {product.steps && <ProcessTimeline steps={product.steps} />}

      {/* App: continuous levels */}
      {product.continuousLevels && (
        <div>
          {product.footerNote && (
            <p className="text-sm font-semibold mb-4">{product.footerNote}</p>
          )}
          <ul className="flex flex-col">
            {product.continuousLevels.map((b, i) => (
              <BulletRow key={i} item={b} index={i} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── MAIN SECTION ─────────────────────────────

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fades in on scroll
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards stagger in
      [card1Ref.current, card2Ref.current].forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-primary px-6 md:px-12 py-20 md:py-28 relative z-40"
    >
      {/* Section header */}
      <div ref={headingRef} className="mb-14 max-w-2xl">
        <p className="text-lg md:text-lg mb-4 font-sans font-medium text-[#5a5640] lg:text-left text-center">
          How it works
        </p>
        <h2 className="text-[42px] md:text-[56px] font-normal leading-[1.1] mb-6  lg:text-left text-center">
          Two ways to{" "}
          <span className="text-primary-gold">unlock your execution</span>{" "}
          potential
        </h2>
        <p className="text-[15px] leading-[1.75]  lg:text-left text-center">
          {intro}
        </p>
      </div>

      {/* Product cards — side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductCard product={diagnostics} animRef={card1Ref} />
        <ProductCard product={app} animRef={card2Ref} />
      </div>
    </section>
  );
}
