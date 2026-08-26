"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const brands = [
  {
    name: "Casagrande",
    logo: "/brands/casagrande.jpg",
  },
  {
    name: "ELCOT",
    logo: "/brands/elcot.jpg",
  },
  {
    name: "GVK",
    logo: "/brands/gvk.png",
  },
  {
    name: "HDFC",
    logo: "/brands/hdfc.png",
  },
  {
    name: "L&T",
    logo: "/brands/lt.png",
  },
  {
    name: "MUFG",
    logo: "/brands/mufg.jpg",
  },
  {
    name: "Sundaram",
    logo: "/brands/sundaram.png",
  },
  {
    name: "Tata",
    logo: "/brands/tata.jpg",
  },
  {
    name: "The Hindu",
    logo: "/brands/thehindu.svg",
  },
  {
    name: "Titan",
    logo: "/brands/titan.png",
  },
  {
    name: "TVS",
    logo: "/brands/tvs.jpg",
  },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="bg-[#f7f7f5] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b47a20]">
              Trusted By Organizations
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-[#0b1220] sm:text-5xl lg:text-6xl">
              Helping businesses
              <br />
              keep moving.
            </h2>
          </div>

          <p className="max-w-lg text-sm font-medium leading-7 text-gray-500 sm:text-base">
            We support organizations with dependable products and
            procurement solutions across workplaces, industries and
            business environments.
          </p>

        </div>

        {/* =====================================================
            BRAND GRID
        ====================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-gray-200 bg-white">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {brands.map((brand) => (
              <div
                key={brand.name}
                className="
                  group
                  relative
                  flex
                  min-h-[190px]
                  flex-col
                  items-center
                  justify-center
                  border-b
                  border-r
                  border-gray-200
                  bg-white
                  px-8
                  py-10
                  transition-all
                  duration-300
                  ease-out
                  hover:bg-[#fbfbfa]
                  hover:shadow-[inset_0_0_0_1px_rgba(216,155,50,0.15)]
                "
              >

                {/* =================================================
                    LOGO
                ================================================== */}

                <div
                  className="
                    flex
                    h-[90px]
                    w-[230px]
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:scale-[1.04]
                  "
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={220}
                    height={90}
                    sizes="220px"
                    className="
                      max-h-[90px]
                      max-w-[220px]
                      object-contain
                    "
                  />
                </div>

                {/* =================================================
                    BRAND NAME
                ================================================== */}

                <p
                  className="
                    mt-5
                    text-sm
                    font-bold
                    tracking-tight
                    text-[#0b1220]
                    transition-colors
                    duration-300
                    group-hover:text-[#b47a20]
                  "
                >
                  {brand.name}
                </p>

                {/* =================================================
                    HOVER INDICATOR
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-1/2
                    h-1
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#d89b32]
                    transition-all
                    duration-300
                    group-hover:w-10
                  "
                />

              </div>
            ))}

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#0b1220]">

          <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d89b32]">
                Built on reliability
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Trusted relationships. Reliable procurement.
              </h3>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-white/40">
                From everyday workplace requirements to specialized
                industrial needs, we help businesses source what they
                need from one dependable partner.
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
              Work with RV

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