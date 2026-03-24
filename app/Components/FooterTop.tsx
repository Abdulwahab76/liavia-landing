"use client";

export default function FooterTopCTA() {
  return (
    <section className="w-full bg-primary border-t relative z-40 border-[#cfc8b8]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[60%] lg:text-left text-center">
          <h2 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-serif text-[#2d2c22] ">
            Let’s grow together
          </h2>

          {/* CTA BUTTON */}
          <button className="group relative inline-flex items-center overflow-hidden pr-3 rounded-full mt-8  w-40 bg-primary-gold hover:bg-dark-gold   p-1">
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

              <span className="whitespace-nowrap text-sm">Get in touch</span>
            </span>
          </button>
        </div>

        {/* RIGHT SIDE (VIDEO) */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden  ">
            {/* Responsive video wrapper */}
            <div className="relative w-full pt-[56.25%]">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/octo-other.webm"
                style={{ transform: "scaleX(-1) " }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
