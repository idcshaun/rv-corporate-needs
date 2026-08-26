"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your requirement, specifications, quantities and timelines before moving forward.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify the right products and procurement options through our supplier and brand network.",
  },
  {
    number: "03",
    title: "Supply",
    description:
      "We coordinate procurement and ensure the required products are supplied according to your requirements.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We remain available for repeat requirements and ongoing procurement support whenever you need us.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#f7f7f5] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b47a20]">
              How We Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-[#0b1220] sm:text-5xl lg:text-6xl">
              From requirement
              <br />
              to delivery.
            </h2>

          </div>

          <p className="max-w-lg text-sm font-medium leading-7 text-gray-500 sm:text-base">
            A straightforward procurement process designed to make sourcing
            products easier, faster and more dependable for your business.
          </p>

        </div>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-gray-200 bg-white">

          <div className="grid lg:grid-cols-4">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="
                  group
                  relative
                  min-h-[300px]
                  border-b
                  border-gray-200
                  p-8
                  transition-all
                  duration-500
                  hover:bg-[#0b1220]
                  lg:border-b-0
                  lg:border-r
                  lg:last:border-r-0
                "
              >

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="flex items-start justify-between">

                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[0.18em]
                      text-[#b47a20]
                      transition-colors
                      duration-300
                      group-hover:text-[#d89b32]
                    "
                  >
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={19}
                      strokeWidth={1.8}
                      className="
                        hidden
                        text-gray-300
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-white/20
                        lg:block
                      "
                    />
                  )}

                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="mt-20">

                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#0b1220]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xs
                      text-sm
                      font-medium
                      leading-6
                      text-gray-500
                      transition-colors
                      duration-300
                      group-hover:text-white/45
                    "
                  >
                    {step.description}
                  </p>

                </div>

                {/* =================================================
                    BOTTOM LINE
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-8
                    h-[2px]
                    w-0
                    bg-[#d89b32]
                    transition-all
                    duration-500
                    group-hover:w-16
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
                Simple. Reliable. Business-ready.
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                One partner for your procurement needs.
              </h3>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-white/40">
                Tell us what you need and let our team take care of
                the sourcing and procurement process.
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
              Get in touch

              <ArrowRight
                size={17}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}