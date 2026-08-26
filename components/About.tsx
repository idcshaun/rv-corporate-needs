"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Globe2,
  Handshake,
  Target,
  Truck,
} from "lucide-react";

const founders = [
  {
    initial: "R",
    name: "Rajasekar",
    role: "Founder",
  },
  {
    initial: "V",
    name: "Vinothkumar",
    role: "Founder",
  },
];

const highlights = [
  {
    icon: Building2,
    title: "Corporate Essentials",
    text: "Stationery, pantry, housekeeping and everyday workplace requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Brands",
    text: "Quality products sourced through authorized manufacturers and brands.",
  },
  {
    icon: Truck,
    title: "Efficient Supply",
    text: "Prompt delivery logistics and dedicated after-sales support.",
  },
  {
    icon: Globe2,
    title: "Pan India",
    text: "Serving businesses across India with a broad procurement network.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================
            INTRO
        ========================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b47a20]">
              About RV Corporate Needs
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#0b1220] sm:text-5xl lg:text-6xl">
              Proven market leaders.
              <br />
              Built around better procurement.
            </h2>

          </div>

          <p className="max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            A single procurement partner for corporate essentials,
            workplace supplies and specialized industrial solutions,
            helping businesses simplify the way they source what they need.
          </p>

        </div>


        {/* =========================================
            COMPANY STORY
        ========================================== */}

        <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-[#0b1220] lg:grid-cols-[0.8fr_1.2fr]">

          {/* Visual */}

          <div className="relative min-h-[420px] overflow-hidden">

            {/* Decorative grid */}

            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-[#d89b32]/20" />

            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#d89b32]/10 blur-3xl" />

            <div className="relative flex h-full min-h-[420px] flex-col justify-between p-8 sm:p-10 lg:p-12">

              <div className="flex items-center justify-between">

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/25">
                  RV / 01
                </span>

                <span className="h-2 w-2 rounded-full bg-[#d89b32]" />

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d89b32]">
                  Who We Are
                </p>

                <p className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  More than a supplier.
                  <br />
                  A procurement partner.
                </p>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-px w-12 bg-[#d89b32]" />

                <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                  Established excellence
                </span>

              </div>

            </div>

          </div>


          {/* Story */}

          <div className="bg-[#f7f7f5] p-8 sm:p-10 lg:p-12">

            <p className="text-lg leading-8 text-gray-600 sm:text-xl">
              RV Corporate Needs provides a comprehensive range of
              quality supplies, from stationery, housekeeping,
              IT and pantry requirements to high-performance
              industrial production solutions.
            </p>

            <p className="mt-6 text-sm leading-7 text-gray-500">
              The company has grown into a Pan-India service provider,
              bringing multiple procurement categories together so
              businesses can source more conveniently, reliably and
              cost-effectively.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7f7f5]">
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        className="text-[#b47a20]"
                      />
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-[#0b1220]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>


        {/* =========================================
            FOUNDERS
        ========================================== */}

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

          <div className="rounded-[2rem] bg-[#f7f7f5] p-8 sm:p-10">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b47a20]">
              Leadership
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b1220]">
              The people
              <br />
              behind RV.
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Guided by visionary leadership and a focus on evolving
              with the demands of the market.
            </p>

          </div>


          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-200 sm:grid-cols-2">

            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group bg-white p-8 transition-all duration-300 hover:bg-[#0b1220] sm:p-10"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7f7f5] text-xl font-semibold text-[#0b1220] transition-colors group-hover:bg-[#d89b32]">
                    {founder.initial}
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d89b32]"
                  />

                </div>

                <div className="mt-16">

                  <p className="text-xs uppercase tracking-[0.15em] text-[#b47a20]">
                    {founder.role}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0b1220] transition-colors group-hover:text-white">
                    {founder.name}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* =========================================
            VISION + COMMITMENT
        ========================================== */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Vision */}

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 sm:p-10 lg:p-12">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7f7f5]">
              <Target
                size={20}
                className="text-[#b47a20]"
              />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#b47a20]">
              Our Vision
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
              Simplifying procurement.
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              To become a leading provider of corporate essentials by
              bringing a wide range of products under one roof while
              delivering convenience, reliability and cost-effectiveness.
            </p>

          </div>


          {/* Commitment */}

          <div className="rounded-[2rem] bg-[#0b1220] p-8 sm:p-10 lg:p-12">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
              <Handshake
                size={20}
                className="text-[#d89b32]"
              />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#d89b32]">
              Our Commitment
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Quality that keeps evolving.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/40">
              RV works with leading brands and continues evolving its
              offering with market demands, while focusing on product
              variety and responsive after-sales service.
            </p>

          </div>

        </div>


        {/* =========================================
            BOTTOM TRUST STRIP
        ========================================== */}

        <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-gray-200 sm:grid-cols-3">

          {[
            "Quality Products",
            "Reliable Procurement",
            "Dedicated Support",
          ].map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-3 bg-[#f7f7f5] px-6 py-5 ${
                index !== 2
                  ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <Check
                  size={14}
                  className="text-[#b47a20]"
                />
              </div>

              <span className="text-sm font-medium text-gray-600">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}