"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletItem, ProcessStep, ProductSection } from "../types/sectionTypes";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
//  CONTENT
// ─────────────────────────────────────────────────────────────────────────────

const imageOverlayText =
  "LiaVia exposes internal dynamics and behaviours that will shape execution momentum of your plans";

const intro =
  "LiaVia exposes internal power dynamics and behaviours that will shape execution momentum by analysing your organization's communication patterns.";

// ── Diagnostics ──────────────────────────────────────────────────────────────
const diagnostics: ProductSection = {
  tag: "LiaVia Diagnostics",
  headline:
    "One-off diagnostic report that will show gap-to-cover between your strategic roll-out plan and your organisation's true execution capacity.",
  subheadline: "No noise. No disruptions. No extra work.",
  pills: ["Fast", "Quiet", "Relevant"],
  bullets: [
    // ✅ CLIENT: bullets not numbers | 1 line | no full stop | no lines between | bold label only, not italic
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
  whenToUse: undefined, // ✅ CLIENT: "When to use" box removed
  // ✅ Diagnostics timeline — 3 steps (same as before, correct)
  steps: [
    {
      duration: "60m",
      title: "Context Scoping",
      subtitle: "Confidential alignment",
    },
    {
      duration: "6d",
      title: "Sample Analysis",
      subtitle: "On site, GDPR compliant",
    },
    {
      duration: "60m",
      title: "Diagnostics",
      subtitle: "Presentation + report",
    },
  ],
};

// ── LiaVia App ───────────────────────────────────────────────────────────────
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
  // ✅ CLIENT: "What it takes" — exact 4 steps from PPT slide image
  // PPT: LiaVia calibrated → Strategic decision → Communication data ingested & anonymized → Reports for Leaders
  steps: [
    {
      duration: "01",
      title: "LiaVia calibrated",
      subtitle: "for your organisation",
    },
    {
      duration: "02",
      title: "Strategic decision",
      subtitle: "added for forecasting",
    },
    {
      duration: "03",
      title: "Communication data",
      subtitle: "ingested & anonymized",
    },
    { duration: "04", title: "Reports", subtitle: "for Leaders" },
  ],
};

function Pill({ label }: { label: string }) {
  return (
    <p
      className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide border"
      style={{ color: "#1e1d18", borderColor: "rgba(30,29,24,0.25)" }}
    >
      {label}
    </p>
  );
}

function BulletRow({ item }: { item: BulletItem }) {
  return (
    <li className="flex gap-3 items-start py-1">
      <span
        className="shrink-0 w-1.5 h-1.5 rounded-full"
        style={{ background: "#AD781C", marginTop: "9px" }}
      />
      <p className="text-[15px] leading-relaxed" style={{ color: "#1e1d18" }}>
        <span className="font-semibold">{item.label}</span>
        {" — "}
        <span style={{ color: "#5a5640" }}>{item.detail}</span>
      </p>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  DIAGNOSTICS TIMELINE  — 3 steps, horizontal connector line
// ─────────────────────────────────────────────────────────────────────────────

function DiagnosticsTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="mt-5">
      <p
        className="text-[15px] font-semibold mb-5"
        style={{ color: "#1e1d18" }}
      >
        What it takes
      </p>
      <div className="flex flex-col sm:flex-row">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex sm:flex-col flex-row gap-3 sm:gap-0 sm:flex-1 relative"
          >
            {/* Horizontal connector line (desktop) */}
            {i < steps.length - 1 && (
              <div
                className="hidden sm:block absolute top-5 left-1/2 w-full h-px z-0"
                style={{ background: "rgba(173,120,28,0.25)" }}
              />
            )}
            {/* Circle */}
            <div className="relative z-10 flex sm:justify-center sm:mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0 text-white"
                style={{
                  background: "#AD781C",
                  fontFamily: "var(--font-primary)",
                }}
              >
                {step.duration}
              </div>
            </div>
            {/* Text */}
            <div className="sm:text-center pb-5 sm:pb-0 sm:px-2">
              <p
                className="text-[13px] font-semibold leading-tight"
                style={{ color: "#1e1d18" }}
              >
                {step.title}
              </p>
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

function AppTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="mt-5">
      <p
        className="text-[15px] font-semibold mb-5"
        style={{ color: "#1e1d18" }}
      >
        From access to action, automatically
      </p>

      <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
        {steps.map((step, i) => (
          <div key={i}>
            {/* Step box */}
            <div className="flex flex-col items-center sm:flex-1 gap-2">
              <div
                className="rounded-xl p-4 flex flex-col items-center justify-center text-center sm:flex-1 min-h-40 min-w-40 lg:min-w-30 lg:min-h-30"
                style={{
                  background: "rgba(173,120,28,0.08)",
                  border: "1px solid rgba(173,120,28,0.2)",
                }}
              >
                <span
                  className="text-[10px] font-bold mb-2 w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{
                    background: "#AD781C",
                    fontFamily: "var(--font-primary)",
                  }}
                >
                  {step.duration}
                </span>
                <p className="text-[13px] font-semibold leading-tight mb-0.5">
                  {step.title}
                </p>
                <p
                  className="text-[11px] leading-tight"
                  style={{ color: "#5a5640" }}
                >
                  {step.subtitle}
                </p>
              </div>
            </div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div className="flex items-center justify-center shrink-0 sm:px-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="sm:rotate-0 rotate-90"
                >
                  <path
                    d="M5 5l5 5-5 5"
                    stroke="#AD781C"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 5l5 5-5 5"
                    stroke="#AD781C"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────
//  PRODUCT CARD
// ─────────────────────────────────────────────────────────────────────────────

function ProductCard({
  product,
  animRef,
}: {
  product: ProductSection;
  animRef: React.RefObject<HTMLDivElement | null>;
}) {
  const isApp = product.tag === "LiaVia App";

  return (
    <div
      ref={animRef}
      className="rounded-2xl p-8 md:p-10 flex flex-col gap-5"
      style={{
        background: "rgba(255,255,255,0.45)",
        border: "1px solid rgba(30,29,24,0.1)",
      }}
    >
      {/* ✅ CLIENT: logo mark + bigger tag name */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo-1.png" width={60} height={60} alt="logo-1" />
        <h5 className="text-2xl font-bold">{product.tag}</h5>
      </div>

      {/* Headline — serif, normal weight */}
      <h3 className="text-[22px] md:text-[24px] font-normal leading-[1.35]">
        {product.headline}
      </h3>

      {/* ✅ CLIENT: 1st sentence bold, same font, no italics */}
      <p
        className="text-[15px] font-semibold leading-relaxed"
        style={{ color: "#1e1d18" }}
      >
        {product.subheadline}
      </p>

      {/* Pills */}
      <div className="flex gap-2 flex-wrap">
        {product.pills.map((p) => (
          <Pill key={p} label={p} />
        ))}
      </div>

      {/* ✅ CLIENT: gold bullets | no numbers | no dividers | no full stops | bold label not italic */}
      {product.bullets.length > 0 && (
        <div>
          <p
            className="text-[15px] font-semibold mb-2"
            style={{ color: "#1e1d18" }}
          >
            In under a week, uncover:
          </p>
          <ul className="flex flex-col">
            {product.bullets.map((b, i) => (
              <BulletRow key={i} item={b} />
            ))}
          </ul>
        </div>
      )}

      {/* ✅ CLIENT: "When to use" box removed — not rendered */}

      {/* ✅ Diagnostics: 3-step horizontal timeline */}
      {!isApp && product.steps && <DiagnosticsTimeline steps={product.steps} />}

      {/* ✅ App: continuous levels bullets */}
      {isApp && product.continuousLevels && (
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

      {/* ✅ CLIENT: App "What it takes" — PPT 4-step flow with chevron arrows */}
      {isApp && product.steps && <AppTimeline steps={product.steps} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN SECTION
// ─────────────────────────────────────────────────────────────────────────────

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
      {/* Body */}
      <div className="px-6 md:px-12 py-20 md:py-28">
        <div ref={headingRef} className="mb-14 max-w-2xl">
          <p
            className="text-[15px] mb-4 font-medium"
            style={{ color: "#5a5640" }}
          >
            How it works
          </p>
          <h2 className="text-[42px] md:text-[56px] font-normal leading-[1.1] mb-6">
            Two ways to{" "}
            <span style={{ color: "#AD781C" }}>unlock your execution</span>{" "}
            potential
          </h2>
          {/* ✅ CLIENT: same font size as "What we do" body */}
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "#3d3b2e" }}
          >
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCard product={diagnostics} animRef={card1Ref} />
          <ProductCard product={app} animRef={card2Ref} />
        </div>
      </div>
    </section>
  );
}
