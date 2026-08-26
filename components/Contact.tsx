"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/5iRzrzEhiT6AtPMR8";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=13.0478267,80.2106234&z=17&output=embed";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b1220] py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#d89b32]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d89b32]">
            Contact RV
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s talk about
            <br />
            what you need.
          </h2>

          <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/55 sm:text-base">
            Tell us about your requirement and our team will
            help you find the right products and procurement
            solution.
          </p>

        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ===================================================
              QUOTE FORM
          ==================================================== */}

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d89b32]">
                Request a Quote
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                Tell us what you need.
              </h3>

              <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-white/40">
                Share your requirement and our team can help
                you find the right product or procurement
                solution.
              </p>

            </div>

            <form className="mt-8 space-y-5">

              {/* NAME + COMPANY */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/55"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      transition
                      placeholder:text-white/25
                      focus:border-[#d89b32]/60
                      focus:bg-white/[0.08]
                    "
                  />

                </div>

                <div>

                  <label
                    htmlFor="company"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/55"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      transition
                      placeholder:text-white/25
                      focus:border-[#d89b32]/60
                      focus:bg-white/[0.08]
                    "
                  />

                </div>

              </div>

              {/* EMAIL + PHONE */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/55"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      transition
                      placeholder:text-white/25
                      focus:border-[#d89b32]/60
                      focus:bg-white/[0.08]
                    "
                  />

                </div>

                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/55"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      outline-none
                      transition
                      placeholder:text-white/25
                      focus:border-[#d89b32]/60
                      focus:bg-white/[0.08]
                    "
                  />

                </div>

              </div>

              {/* REQUIREMENT */}

              <div>

                <label
                  htmlFor="requirement"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/55"
                >
                  Your Requirement
                </label>

                <textarea
                  id="requirement"
                  name="requirement"
                  rows={6}
                  placeholder="Tell us about the products, quantities or procurement requirements..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.06]
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    leading-6
                    text-white
                    outline-none
                    transition
                    placeholder:text-white/25
                    focus:border-[#d89b32]/60
                    focus:bg-white/[0.08]
                  "
                />

              </div>

              {/* SUBMIT */}

              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#d89b32]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-[#0b1220]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e4aa46]
                  hover:shadow-[0_12px_30px_rgba(216,155,50,0.20)]
                "
              >
                Request a Quote

                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>

            </form>

          </div>

          {/* ===================================================
              RIGHT SIDE
          ==================================================== */}

          <div className="flex flex-col gap-6">

            {/* =================================================
                CONTACT DETAILS
            ================================================== */}

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d89b32]">
                Find us
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                RV Corporate Needs
              </h3>

              <div className="mt-8 space-y-6">

                {/* ADDRESS */}

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:border-[#d89b32]/30 group-hover:bg-[#d89b32]/10">
                    <MapPin
                      size={19}
                      strokeWidth={2}
                      className="text-[#d89b32]"
                    />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      Head Office
                    </p>

                    <p className="mt-1 text-sm font-medium leading-6 text-white/75 transition-colors group-hover:text-white">
                      No. 10/31, West Sivan Kovil Street,
                      <br />
                      Vadapalani, Chennai – 600026
                    </p>

                  </div>

                </a>

                {/* PHONE */}

                <a
                  href="tel:+919840082376"
                  className="group flex gap-4"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:border-[#d89b32]/30 group-hover:bg-[#d89b32]/10">
                    <Phone
                      size={19}
                      strokeWidth={2}
                      className="text-[#d89b32]"
                    />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                      +91 98400 82376
                    </p>

                  </div>

                </a>

                {/* EMAIL */}

                <a
                  href="mailto:sales@rvcorporateneeds.com"
                  className="group flex gap-4"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:border-[#d89b32]/30 group-hover:bg-[#d89b32]/10">
                    <Mail
                      size={19}
                      strokeWidth={2}
                      className="text-[#d89b32]"
                    />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                      sales@rvcorporateneeds.com
                    </p>

                  </div>

                </a>

              </div>

            </div>

            {/* =================================================
                MAP
            ================================================== */}

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]">

              {/* GOOGLE MAP */}

              <div className="h-[360px] w-full">

                <iframe
                  title="RV Corporate Needs location"
                  src={MAP_EMBED_URL}
                  className="block h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

              {/* =================================================
                  INTERACTIVE GOOGLE MAPS BAR
              ================================================== */}

              <button
                type="button"
                aria-label="Open RV Corporate Needs in Google Maps"
                onClick={() => {
                  window.open(
                    GOOGLE_MAPS_URL,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="
                  group
                  flex
                  min-h-[76px]
                  w-full
                  cursor-pointer
                  items-center
                  justify-between
                  border-0
                  bg-[#0b1220]
                  px-6
                  text-left
                  text-white
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-[1px]
                  hover:bg-[#111a2b]
                  sm:px-7
                "
              >

                {/* LEFT */}

                <div className="flex items-center gap-4">

                  {/* LOCATION */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#d89b32]
                      transition-all
                      duration-300
                      ease-out
                      group-hover:scale-110
                      group-hover:shadow-[0_0_0_6px_rgba(216,155,50,0.10)]
                    "
                  >

                    <MapPin
                      size={19}
                      strokeWidth={2.5}
                      className="
                        text-[#0b1220]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                  </div>

                  {/* TEXT */}

                  <div>

                    <p
                      className="
                        text-[15px]
                        font-bold
                        leading-5
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#d89b32]
                      "
                    >
                      Open in Google Maps
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-medium
                        leading-4
                        text-white/45
                        transition-colors
                        duration-300
                        group-hover:text-white/70
                      "
                    >
                      Get directions to RV Corporate Needs
                    </p>

                  </div>

                </div>

                {/* ARROW */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d89b32]/30
                    bg-[#d89b32]/10
                    transition-all
                    duration-300
                    ease-out
                    group-hover:scale-110
                    group-hover:border-[#d89b32]
                    group-hover:bg-[#d89b32]
                  "
                >

                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
                    className="
                      text-[#d89b32]
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#0b1220]
                    "
                  />

                </div>

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}