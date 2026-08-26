"use client";

import {
  ArrowUpRight,
  Building2,
  Factory,
  Laptop,
  HeartPulse,
  GraduationCap,
  Hotel,
  HardHat,
  Shirt,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Corporate & Offices",
    description:
      "Reliable workplace supplies and procurement support for corporate offices and professional environments.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Manufacturing",
    description:
      "Industrial products and operational essentials supporting production, maintenance and manufacturing facilities.",
    icon: Factory,
  },
  {
    number: "03",
    title: "IT & Technology",
    description:
      "Workplace, IT and facility essentials for technology companies and modern digital workplaces.",
    icon: Laptop,
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "Essential workplace, housekeeping and operational supplies for healthcare environments.",
    icon: HeartPulse,
  },
  {
    number: "05",
    title: "Education",
    description:
      "Procurement solutions for educational institutions, campuses, offices and learning environments.",
    icon: GraduationCap,
  },
  {
    number: "06",
    title: "Hospitality",
    description:
      "Everyday operational and facility requirements supporting hotels, hospitality and service environments.",
    icon: Hotel,
  },
  {
    number: "07",
    title: "Infrastructure & Construction",
    description:
      "Industrial and workplace requirements supporting infrastructure, construction and project operations.",
    icon: HardHat,
  },
  {
    number: "08",
    title: "Garments & Textiles",
    description:
      "Specialized supplies and accessories supporting garment manufacturing and textile operations.",
    icon: Shirt,
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b47a20]">
              Industries We Serve
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-[#0b1220] sm:text-5xl lg:text-6xl">
              Built for the way
              <br />
              businesses work.
            </h2>

          </div>

          <p className="max-w-lg text-sm font-medium leading-7 text-gray-500 sm:text-base">
            From corporate offices to industrial facilities, RV Corporate
            Needs supports organizations across diverse industries with
            dependable procurement solutions.
          </p>

        </div>

        {/* =====================================================
            INDUSTRY GRID
        ====================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.number}
                className="
                  group
                  relative
                  min-h-[310px]
                  overflow-hidden
                  bg-[#f8f8f6]
                  p-7
                  transition-all
                  duration-500
                  ease-out
                  hover:bg-[#0b1220]
                  sm:p-8
                "
              >

                {/* =================================================
                    LARGE NUMBER
                ================================================== */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-8
                    text-[110px]
                    font-bold
                    leading-none
                    text-gray-200
                    transition-all
                    duration-500
                    group-hover:text-white/[0.035]
                    group-hover:-translate-y-1
                  "
                >
                  {industry.number}
                </span>

                {/* =================================================
                    TOP ROW
                ================================================== */}

                <div className="relative flex items-center justify-between">

                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[0.15em]
                      text-gray-300
                      transition-colors
                      duration-300
                      group-hover:text-white/20
                    "
                  >
                    {industry.number}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      transition-all
                      duration-300
                      ease-out
                      group-hover:scale-105
                      group-hover:border-white/10
                      group-hover:bg-white/[0.06]
                    "
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="
                        text-[#b47a20]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative mt-14 pr-5">

                  <h3
                    className="
                      text-xl
                      font-bold
                      tracking-tight
                      text-[#0b1220]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {industry.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      font-medium
                      leading-6
                      text-gray-500
                      transition-colors
                      duration-300
                      group-hover:text-white/45
                    "
                  >
                    {industry.description}
                  </p>

                </div>

                {/* =================================================
                    ARROW
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-7
                    right-7
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-200
                    transition-all
                    duration-300
                    ease-out
                    group-hover:scale-110
                    group-hover:bg-[#d89b32]
                    sm:bottom-8
                    sm:right-8
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.4}
                    className="
                      text-gray-600
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#0b1220]
                    "
                  />
                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#0b1220]">

          <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d89b32]">
                One procurement partner
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Different industries. One dependable source.
              </h3>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-white/40">
                Whatever your industry, we bring multiple procurement
                categories together under one partner.
              </p>

            </div>

            <a
              href="#contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#d89b32]
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#0b1220]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e4aa46]
                hover:shadow-[0_12px_30px_rgba(216,155,50,0.18)]
              "
            >
              Talk to our team

              <ArrowUpRight
                size={17}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}