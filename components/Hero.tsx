import {
  ArrowRight,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f8fa] pt-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#d89b32]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#0b1220]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#d89b32]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">
                Corporate Procurement Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#0b1220] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Everything your
              <br />
              <span className="text-gray-400">
                workplace needs.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              From everyday office essentials to industrial requirements,
              RV Corporate Needs helps businesses simplify procurement with
              quality products, competitive pricing, and dependable supply.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0b1220] px-7 py-4 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#18243a]"
              >
                Request a Quote

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-300 bg-white px-7 py-4 text-sm font-semibold !text-[#0b1220] transition-all duration-300 hover:-translate-y-1 hover:border-gray-400"
              >
                Explore Solutions

                <MoveUpRight size={17} />
              </a>

            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">

              {[
                "Quality Products",
                "Competitive Pricing",
                "Reliable Supply",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#d89b32]"
                  />

                  {item}
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Main card */}
            <div className="relative aspect-[0.88] overflow-hidden rounded-[2rem] bg-[#0b1220] p-3 shadow-2xl shadow-[#0b1220]/20">

              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#17233a] via-[#0b1220] to-[#070b13] p-7">

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d89b32]/20 blur-3xl" />

                {/* Top */}
                <div className="relative z-10 flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      RV Corporate Needs
                    </p>

                    <p className="mt-2 text-sm font-medium text-white/80">
                      Procurement • Supply • Solutions
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <span className="text-sm font-bold text-[#d89b32]">
                      RV
                    </span>
                  </div>

                </div>

                {/* Center */}
                <div className="relative z-10">

                  <p className="text-sm font-medium text-[#d89b32]">
                    ONE PARTNER
                  </p>

                  <h2 className="mt-3 max-w-sm text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                    For every
                    <br />
                    requirement.
                  </h2>

                  {/* Categories */}
                  <div className="mt-8 grid grid-cols-2 gap-3">

                    {[
                      "Office",
                      "IT",
                      "Facility",
                      "Industrial",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                      >
                        <p className="text-sm font-medium text-white/80">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>

                {/* Bottom */}
                <div className="relative z-10 flex items-end justify-between">

                  <div>
                    <p className="text-3xl font-semibold text-white">
                      360°
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Procurement support
                    </p>
                  </div>

                  <div className="rounded-full border border-[#d89b32]/30 bg-[#d89b32]/10 px-4 py-2">
                    <span className="text-xs font-semibold text-[#d89b32]">
                      BUSINESS READY
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* Floating trust card */}
            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d89b32]/10">
                  <CheckCircle2
                    size={20}
                    className="text-[#d89b32]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#0b1220]">
                    Trusted Supply
                  </p>

                  <p className="text-xs text-gray-400">
                    Built for businesses
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}