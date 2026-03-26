"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BulletItem, ProcessStep, ProductSection } from "../types/sectionTypes";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ─── CONTENT ──────────────────────────────────────────────────────────────────

// CLIENT: image overlay text updated
const imageOverlayText =
  "LiaVia exposes internal dynamics and behaviours that will shape execution momentum of your plans";

// CLIENT: font size of this intro must match body text in "What we do" — text-[15px]
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
  // Steps taken directly from pitch deck slide 4 image
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
    {
      duration: "04",
      title: "Reports",
      subtitle: "for Leaders",
    },
  ],
};

// ─── LOGO MARK ────────────────────────────────────────────────────────────────
// CLIENT: LiaVia logo mark should appear just before product tag name
// Swap this SVG for the real logo asset when available

function LogoMark() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M10 1L18.5 9L10 17L1.5 9L10 1Z"
        stroke="#AD781C"
        strokeWidth="1.5"
      />
      <path
        d="M10 4L15.5 9L10 14L4.5 9L10 4Z"
        fill="#AD781C"
        fillOpacity="0.3"
      />
    </svg>
  );
}

// ─── PILL ─────────────────────────────────────────────────────────────────────

function Pill({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide border"
      style={{ color: "#1e1d18", borderColor: "rgba(30,29,24,0.25)" }}
    >
      {label}
    </span>
  );
}

// ─── BULLET ROW ───────────────────────────────────────────────────────────────
// CLIENT: no numbers, no lines between items, no full stop at end,
//         bold label but NOT italic, all same font

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
            {/* Connector arrow — gold chevron between steps (desktop) */}
            {i < steps.length - 1 && (
              <div
                className="hidden sm:flex absolute top-5 items-center justify-end z-0"
                style={{ left: "50%", width: "100%", paddingRight: "4px" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M5 4l8 5-8 5"
                    stroke="#AD781C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            {/* Step circle */}
            <div className="relative z-10 flex sm:justify-center mb-0 sm:mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 text-white"
                style={{ background: "#AD781C" }}
              >
                {step.duration}
              </div>
            </div>

            {/* Step labels */}
            <div className="sm:text-center pb-6 sm:pb-0 sm:px-2">
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
      <h3
        className="text-[22px] md:text-[24px] font-normal leading-[1.35]"
        style={{ fontFamily: "Georgia, serif", color: "#1e1d18" }}
      >
        {product.headline}
      </h3>

      {/* CLIENT: 1st sentence bold, same font, no italics */}
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

      {/* CLIENT: no numbers, no lines, no italics, no full stops */}
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

      {/* CLIENT: "When to use" box removed — no render */}

      {/* Timeline — Diagnostics: "What it takes" | App: "From access to action, automatically" */}
      {product.steps && (
        <ProcessTimeline
          steps={product.steps}
          title={
            product.tag === "LiaVia App"
              ? "From access to action, automatically"
              : "What it takes"
          }
        />
      )}

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
          <p
            className="text-[15px] mb-4 font-medium lg:text-left text-center"
            style={{ color: "#5a5640" }}
          >
            How it works
          </p>

          <h2
            className="text-[42px] md:text-[56px] font-normal leading-[1.1] mb-6 lg:text-left text-center"
            style={{ fontFamily: "Georgia, serif", color: "#1e1d18" }}
          >
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
