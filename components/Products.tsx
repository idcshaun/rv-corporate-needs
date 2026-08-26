"use client";

import {
  ArrowUpRight,
  Box,
  Cpu,
  Droplets,
  Factory,
  HardHat,
  Layers3,
  PenLine,
  Shirt,
  Sparkles,
  Utensils,
} from "lucide-react";

const products = [
  {
    number: "01",
    title: "Stationery",
    description:
      "Complete stationery and office essentials for everyday corporate requirements.",
    icon: PenLine,
  },
  {
    number: "02",
    title: "Housekeeping",
    description:
      "Cleaning, facility and workplace maintenance supplies for professional environments.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "IT Products",
    description:
      "Essential IT products, accessories and consumables for modern workplaces.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Pantry",
    description:
      "Pantry supplies and everyday workplace essentials for corporate teams.",
    icon: Utensils,
  },
  {
    number: "05",
    title: "ESD & Cleanroom",
    description:
      "Specialized products designed for controlled and static-sensitive environments.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Bearings",
    description:
      "Industrial bearing solutions for machinery, maintenance and production requirements.",
    icon: Box,
  },
  {
    number: "07",
    title: "Gloves",
    description:
      "Protective and industrial gloves for workplace safety and operational requirements.",
    icon: HardHat,
  },
  {
    number: "08",
    title: "Lubricants",
    description:
      "Industrial lubrication solutions supporting machinery performance and maintenance.",
    icon: Droplets,
  },
  {
    number: "09",
    title: "Garments Accessories",
    description:
      "Accessories and supporting materials for garment and textile-related requirements.",
    icon: Shirt,
  },
  {
    number: "10",
    title: "Fabrication",
    description:
      "Fabrication solutions supporting specialized industrial and production requirements.",
    icon: Factory,
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#f7f7f5] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b47a20]">
              Products & Solutions
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-[#0b1220] sm:text-5xl lg:text-6xl">
              Everything you need.
              <br />
              From one partner.
            </h2>
          </div>

          <p className="max-w-lg text-sm font-medium leading-7 text-gray-500 sm:text-base">
            From everyday corporate supplies to specialized industrial
            requirements, RV Corporate Needs brings a broad range of
            procurement categories together.
          </p>

        </div>


        {/* =========================================
            PRODUCT GRID
        ========================================== */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">

          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.number}
                className="
                  group
                  relative
                  flex
                  min-h-[330px]
                  flex-col
                  overflow-hidden
                  bg-white
                  p-7
                  transition-all
                  duration-500
                  hover:bg-[#0b1220]
                  sm:p-8
                "
              >

                {/* =================================
                    BACKGROUND WATERMARK
                ================================== */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-5
                    z-0
                    select-none
                    text-[105px]
                    font-black
                    leading-none
                    tracking-[-0.08em]
                    text-gray-100
                    transition-all
                    duration-500
                    group-hover:text-white/[0.025]
                  "
                >
                  {product.number}
                </span>


                {/* =================================
                    CARD CONTENT
                ================================== */}

                <div className="relative z-10 flex h-full flex-col">

                  {/* TOP ROW */}

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold tracking-[0.15em] text-gray-300 transition-colors duration-300 group-hover:text-white/20">
                      {product.number}
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        transition-all
                        duration-300
                        group-hover:border-white/10
                        group-hover:bg-white/5
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#b47a20] transition-colors duration-300"
                      />
                    </div>

                  </div>


                  {/* MAIN CONTENT */}

                  <div className="mt-12 flex-1 pb-16">

                    <h3
                      className="
                        text-xl
                        font-bold
                        leading-tight
                        tracking-tight
                        text-[#0b1220]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {product.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[260px]
                        text-sm
                        font-medium
                        leading-6
                        text-gray-500
                        transition-colors
                        duration-300
                        group-hover:text-white/45
                      "
                    >
                      {product.description}
                    </p>

                  </div>


                  {/* =================================
                      BOTTOM ACTION
                  ================================== */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-gray-300
                        transition-colors
                        duration-300
                        group-hover:text-white/25
                      "
                    >
                      View category
                    </span>

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-100
                        transition-all
                        duration-300
                        group-hover:bg-[#d89b32]
                      "
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2}
                        className="
                          text-gray-600
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>


        {/* =========================================
            CTA
        ========================================== */}

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#0b1220]">

          <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d89b32]">
                Looking for something specific?
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Tell us what you need.
              </h3>

              <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-white/40">
                Share your requirement and our team can help you find
                the right product or procurement solution.
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
              "
            >
              Request a Quote

              <ArrowUpRight
                size={17}
                strokeWidth={2}
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