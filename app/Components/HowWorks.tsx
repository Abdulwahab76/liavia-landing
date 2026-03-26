"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletItem, ProcessStep, ProductSection } from "../types/sectionTypes";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ─── CONTENT ──────────────────────────────────────────────────────────────────

const imageOverlayText =
  "LiaVia exposes internal dynamics and behaviours that will shape execution momentum of your plans";

const intro =
  "LiaVia exposes internal power dynamics and behaviours that will shape execution momentum by analysing your organization's communication patterns.";

const diagnostics: ProductSection = {
  tag: "LiaVia Diagnostics",
  headline:
    "One-off diagnostic report that will show gap-to-cover between your strategic roll-out plan and your organisation's true execution capacity.",
  // CLIENT: bold 1st sentence, no italics, same font throughout
  subheadline: "No noise. No disruptions. No extra work.",
  pills: ["Fast", "Quiet", "Relevant"],
  bullets: [
    // CLIENT: bullet not numbered, 1 line, no full stop, no lines between, bold label only
    {
      label: "What will slow you down",
      detail: "Bottlenecks and frictions already forming",
    },
    {
      label: "Why these keep happening",
      detail:
        "Uncover your power silos and unspoken values influencing follow-through",
    },
    {
      label: "How to fix it NOW",
      detail: "Concrete action to clear your roadblocks and remove drag",
    },
  ],
  whenToUse: undefined, // CLIENT: remove "When to use" box
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
      detail: "MRI of your organisation's power silos and daily focus insights",
    },
    {
      label: "Execution Forecast for PMs",
      detail:
        "Data-driven predictor of upcoming bottlenecks, frictions and unspoken feedback that are about to derail execution success",
    },
    {
      label: "Success Game for Employees",
      detail:
        "Confidential, fully customised career plan matching their ambitions and abilities to your organisation's needs. Requires individual opt-in",
    },
  ],
  footerNote:
    "Continuous insights across 3 core levels, delivered on a strict need-to-know basis.",
  // CLIENT: LiaVia App was missing "What it takes" — added from original word doc
  steps: [
    {
      duration: "Day 1",
      title: "Access granted",
      subtitle: "Connect to your comms system",
    },
    {
      duration: "Day 2",
      title: "Calibration",
      subtitle: "AI trained to your context",
    },
    {
      duration: "Day 3",
      title: "Live insights",
      subtitle: "From access to action, automatically",
    },
  ],
};

// ─── PILL ─────────────────────────────────────────────────────────────────────

function Pill({ label }: { label: string }) {
  return (
    <h5
      className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide border"
      style={{ color: "#1e1d18", borderColor: "rgba(30,29,24,0.25)" }}
    >
      {label}
    </h5>
  );
}

function BulletRow({ item }: { item: BulletItem }) {
  return (
    <li className="flex gap-3 items-start py-1">
      <span
        className="shrink-0 w-1.5 h-1.5 rounded-full mt-2"
        style={{ background: "#AD781C" }}
      />
      <p className="text-[15px] leading-relaxed">
        <span className="font-semibold" style={{ color: "#1e1d18" }}>
          {item.label}
        </span>
        {" — "}
        <span style={{ color: "#5a5640" }}>{item.detail}</span>
      </p>
    </li>
  );
}

// ─── PROCESS TIMELINE ─────────────────────────────────────────────────────────

function ProcessTimeline({
  steps,
  title = "What it takes",
}: {
  steps: ProcessStep[];
  title?: string;
}) {
  return (
    <div className="mt-4">
      <p
        className="text-[15px] font-semibold mb-5"
        style={{ color: "#1e1d18" }}
      >
        {title}
      </p>
      <div className="flex flex-col sm:flex-row">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex sm:flex-col flex-row gap-3 sm:gap-0 sm:flex-1 relative"
          >
            {/* Connector line (desktop only) */}
            {i < steps.length - 1 && (
              <div
                className="hidden sm:block absolute top-5 left-1/2 w-full h-px z-0"
                style={{ background: "rgba(30,29,24,0.15)" }}
              />
            )}
            {/* Step circle */}
            <div className="relative z-10 flex sm:justify-center mb-0 sm:mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 bg-primary-gold text-white text-center px-1 leading-tight">
                {step.duration.includes("day")
                  ? step.duration.replace(" days", "d")
                  : step.duration.includes("Day")
                  ? step.duration
                  : step.duration.replace(" min", "m")}
              </div>
            </div>
            {/* Step text */}
            <div className="sm:text-center pb-6 sm:pb-0 sm:px-2">
              <p className="text-[13px]   leading-tight">{step.title}</p>
              <p
                className="text-[12px] mt-0.5 leading-tight"
                style={{ color: "#5a5640" }}
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

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────

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
      className="rounded-2xl p-8 md:p-8 flex flex-col gap-5"
      style={{
        background: "rgba(255,255,255,0.45)",
        border: "1px solid rgba(30,29,24,0.1)",
      }}
    >
      {/* CLIENT: tag bigger + logo mark before name */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo-1.png" width={60} height={60} alt="logo-1" />
        <h5 className="text-2xl font-semibold">{product.tag}</h5>
      </div>

      {/* Headline */}
      <h3 className="text-[22px] md:text-[24px] font-normal leading-[1.35]">
        {product.headline}
      </h3>

      {/* CLIENT: 1st sentence bold, same font, no italics */}
      <p className="text-[15px]   leading-relaxed">{product.subheadline}</p>

      {/* Pills */}
      <div className="flex gap-2 flex-wrap">
        {product.pills.map((p) => (
          <Pill key={p} label={p} />
        ))}
      </div>

      {/* CLIENT: no numbers, no lines, no italics, no full stops */}
      {product.bullets.length > 0 && (
        <div>
          <p className="text-[15px] font-semibold mb-2">
            In under a week, uncover:
          </p>
          <ul className="flex flex-col">
            {product.bullets.map((b, i) => (
              <BulletRow key={i} item={b} />
            ))}
          </ul>
        </div>
      )}

      {/* CLIENT: "When to use" box removed — no render */}

      {/* Timeline (both Diagnostics and App now have this) */}
      {product.steps && <ProcessTimeline steps={product.steps} />}

      {/* App levels */}
      {product.continuousLevels && (
        <div>
          {product.footerNote && (
            <p
              className="text-[15px] font-semibold mb-2"
              style={{ color: "#1e1d18" }}
            >
              {product.footerNote}
            </p>
          )}
          <ul className="flex flex-col">
            {product.continuousLevels.map((b, i) => (
              <BulletRow key={i} item={b} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );
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
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-primary relative z-40">
      {/* ── Section body ── */}
      <div className="px-6 md:px-12 py-20 md:py-28">
        {/* Header */}
        <div ref={headingRef} className="mb-14 max-w-2xl">
          <p className="text-lg mb-4 font-sans font-medium text-[#5a5640]">
            How it works
          </p>

          <h2 className="text-[42px] md:text-[56px] font-normal leading-[1.1] mb-6 lg:text-left text-center">
            Two ways to{" "}
            <span className="text-primary-gold">unlock your execution</span>{" "}
            potential
          </h2>

          {/* CLIENT: same font size as body in "What we do" — text-[15px] */}
          <p
            className="text-[15px] leading-[1.75] lg:text-left text-center"
            style={{ color: "#3d3b2e" }}
          >
            {intro}
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCard product={diagnostics} animRef={card1Ref} />
          <ProductCard product={app} animRef={card2Ref} />
        </div>
      </div>
    </section>
  );
}
