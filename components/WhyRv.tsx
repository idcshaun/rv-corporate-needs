"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  Handshake,
  IndianRupee,
  Layers3,
  Truck,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Cost Control",
    description:
      "Competitive pricing and strategic sourcing help businesses manage procurement costs without compromising on quality.",
    icon: IndianRupee,
  },
  {
    number: "02",
    title: "Genuine Quality",
    description:
      "Products are sourced through trusted and authorized manufacturers and brands, giving businesses confidence in every order.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Personalized Support",
    description:
      "Dedicated support helps customers find the right products and manage requirements from enquiry through delivery.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "On-Time Supply",
    description:
      "Efficient logistics and delivery support help keep essential workplace and production supplies moving when they are needed.",
    icon: Truck,
  },
];

export default function WhyRV() {
  return (
    <section
      id="why-rv"
      className="relative overflow-hidden bg-[#0b1220] py-24 sm:py-32"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d89b32]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            HEADER
        ========================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d89b32]">
              Why RV Corporate Needs
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              One partner.
              <br />
              Multiple solutions.
            </h2>

          </div>

          <div>

            <p className="max-w-lg text-sm leading-7 text-white/45 sm:text-base">
              From everyday corporate essentials to specialized
              industrial requirements, RV brings multiple procurement
              needs together through one supply partner.
            </p>

          </div>

        </div>


        {/* =========================
            ADVANTAGES
        ========================== */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group bg-[#0b1220] p-7 transition-all duration-300 hover:bg-[#121c2e] sm:p-8"
              >

                {/* Top row */}

                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold tracking-[0.15em] text-white/20">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#d89b32]/30 group-hover:bg-[#d89b32]/10">

                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#d89b32]"
                    />

                  </div>

                </div>


                {/* Content */}

                <div className="mt-14">

                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {item.description}
                  </p>

                </div>


                {/* Bottom line */}

                <div className="mt-8 h-px w-10 bg-[#d89b32]/50 transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>


        {/* =========================
            PROCUREMENT STATEMENT
        ========================== */}

        <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Main statement */}

          <div className="relative p-8 sm:p-10 lg:p-12">

            <div className="absolute right-0 top-0 h-px w-32 bg-gradient-to-r from-transparent to-[#d89b32]/50" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d89b32]">
              Built Around Your Business
            </p>

            <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              We don&apos;t just supply products.
              <br />
              We simplify procurement.
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
              RV Corporate Needs aims to bring a wide range of corporate
              essentials and specialized production requirements under
              one roof, helping organizations make procurement simpler,
              more efficient and more cost-effective.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d89b32] px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition-all hover:-translate-y-0.5 hover:bg-[#e4aa46]"
            >
              Work With Us

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>


          {/* Stats / visual panel */}

          <div className="grid grid-cols-2 border-t border-white/10 bg-white/[0.025] lg:border-l lg:border-t-0">

            <div className="flex flex-col justify-between border-b border-r border-white/10 p-7 sm:p-8 lg:border-b-0">

              <Layers3
                size={22}
                strokeWidth={1.5}
                className="text-[#d89b32]"
              />

              <div className="mt-12">

                <p className="text-3xl font-semibold tracking-tight text-white">
                  8+
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/30">
                  Core solution areas
                </p>

              </div>

            </div>


            <div className="flex flex-col justify-between border-b border-white/10 p-7 sm:p-8">

              <Clock3
                size={22}
                strokeWidth={1.5}
                className="text-[#d89b32]"
              />

              <div className="mt-12">

                <p className="text-3xl font-semibold tracking-tight text-white">
                  2015
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/30">
                  Serving since
                </p>

              </div>

            </div>


            <div className="col-span-2 flex items-center justify-between gap-6 p-7 sm:p-8">

              <div>

                <p className="text-xs uppercase tracking-[0.15em] text-white/25">
                  Serving businesses
                </p>

                <p className="mt-2 text-sm font-medium text-white/70">
                  Chennai · Bengaluru · Pan India
                </p>

              </div>

              <Truck
                size={22}
                strokeWidth={1.5}
                className="shrink-0 text-[#d89b32]"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}