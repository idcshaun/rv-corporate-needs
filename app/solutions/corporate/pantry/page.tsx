"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  MessageSquareQuote,
  Building2,
  Mail,
  MessageCircle,
  Coffee,
} from "lucide-react";

const WHATSAPP_NUMBER = "918883643691";
const EMAIL = "sales@rvcorporateneeds.com";

const products = [
  {
    code: "RV-1001",
    name: "Tea/Coffee Powders",
    image: "/corporate/pantry/RV-1001-Tea-Coffee-Powders.png",
    description:
      "Tea and coffee powders for corporate pantries, employee refreshment areas, meetings and everyday workplace requirements.",
  },
  {
    code: "RV-1002",
    name: "Horlicks & Boost",
    image: "/corporate/pantry/RV-1002-Horlicks-Boost.png",
    description:
      "Popular health drink options for office pantries, employee refreshment areas and institutional workplace supplies.",
  },
  {
    code: "RV-1003",
    name: "Water Bottle",
    image: "/corporate/pantry/RV-1003-Water-Bottle.png",
    description:
      "Packaged drinking water for offices, meetings, corporate events, employee facilities and bulk workplace requirements.",
  },
  {
    code: "RV-1004",
    name: "Paper Cups",
    image: "/corporate/pantry/RV-1004-Paper-Cups.png",
    description:
      "Convenient paper cups for office pantries, beverages, meetings, events and everyday corporate refreshment needs.",
  },
  {
    code: "RV-1005",
    name: "Plates",
    image: "/corporate/pantry/RV-1005-Plates.png",
    description:
      "Plates for corporate pantry areas, employee dining spaces, meetings, events and workplace food service requirements.",
  },
  {
    code: "RV-1006",
    name: "Tableware",
    image: "/corporate/pantry/RV-1006-Tableware.png",
    description:
      "Tableware solutions for corporate pantries, dining areas, meetings, events and everyday workplace requirements.",
  },
];

const benefits = [
  "Office pantry supplies",
  "Bulk procurement",
  "Employee refreshment areas",
  "Corporate meetings & events",
];

const faqs = [
  {
    question: "What pantry products does RV Corporate Needs provide?",
    answer:
      "Our Pantry Collection includes Tea/Coffee Powders, Horlicks & Boost, Water Bottle, Paper Cups, Plates and Tableware.",
  },
  {
    question: "Can pantry products be procured in bulk?",
    answer:
      "Yes. Businesses can submit bulk pantry requirements along with quantities, preferred products, delivery requirements and other procurement details.",
  },
  {
    question: "Can I enquire about multiple pantry products together?",
    answer:
      "Yes. You can include multiple pantry categories in a single enquiry. Share the products and approximate quantities you require and the RV team can assist with the procurement requirement.",
  },
  {
    question: "Does RV Corporate Needs supply pantry products for offices?",
    answer:
      "Yes. The Pantry Collection is intended for corporate workplace requirements including employee refreshment areas, office pantries, meetings and institutional supplies.",
  },
  {
    question: "Can I request pricing for a specific pantry product?",
    answer:
      "Yes. Use the WhatsApp or Email Enquiry option for the specific product and include your required quantity. The RV team can then respond with the relevant procurement details.",
  },
];

function getWhatsAppLink(productName?: string) {
  const message = productName
    ? `Hello RV Corporate Needs, I would like to enquire about ${productName} from your Corporate Pantry range. Please share the available options, pricing and bulk procurement details.`
    : `Hello RV Corporate Needs, I would like to enquire about your Corporate Pantry range. Please share the available products, pricing and bulk procurement details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

function getEmailLink(productName?: string) {
  const subject = productName
    ? `Enquiry - ${productName}`
    : "Enquiry - Corporate Pantry";

  const body = productName
    ? `Hello RV Corporate Needs,

I would like to enquire about ${productName} from your Corporate Pantry range.

Please share the available options, pricing and bulk procurement details.

Thank you.`
    : `Hello RV Corporate Needs,

I would like to enquire about your Corporate Pantry range.

Please share the available products, pricing and bulk procurement details.

Thank you.`;

  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function PantryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1220] text-white">

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -left-48
          -top-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#d89b32]/[0.075]
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -bottom-48
          -right-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-white/[0.035]
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d89b32]/[0.015]
          blur-[140px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative z-30">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            py-6
            lg:px-8
          "
        >
          <Link href="/" className="group">
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.045]
                px-3.5
                py-2.5
                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                group-hover:border-white/20
                group-hover:bg-white/[0.08]
              "
            >
              <div
                className="
                  text-xl
                  font-black
                  leading-none
                  tracking-[-0.07em]
                "
              >
                RV
              </div>

              <div
                className="
                  mt-1
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                "
              >
                Corporate Needs
              </div>
            </div>
          </Link>

          <Link
            href="/solutions/corporate"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2.5
              text-xs
              font-bold
              text-white/70
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            <ArrowLeft
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
              "
            />

            Corporate Solutions
          </Link>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-20
          pt-10
          lg:px-8
          lg:pb-28
          lg:pt-16
        "
      >
        <div className="max-w-4xl">

          {/* Breadcrumb */}

          <div
            className="
              mb-8
              flex
              flex-wrap
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-white/30
            "
          >
            <Link
              href="/solutions/corporate"
              className="transition-colors hover:text-white/70"
            >
              Corporate
            </Link>

            <span>/</span>

            <span className="text-[#d89b32]">
              Pantry
            </span>
          </div>

          {/* Icon */}

          <div
            className="
              relative
              flex
              h-14
              w-14
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-[#d89b32]/20
              bg-[#d89b32]/10
              shadow-[0_0_40px_rgba(216,155,50,0.08)]
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#d89b32]/15
                to-transparent
              "
            />

            <Coffee
              size={25}
              strokeWidth={1.7}
              className="relative text-[#d89b32]"
            />
          </div>

          <p
            className="
              mt-7
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#d89b32]
            "
          >
            Corporate Solutions
          </p>

          <h1
            className="
              mt-4
              max-w-4xl
              text-5xl
              font-bold
              leading-[0.98]
              tracking-[-0.06em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Keep your
            <br />
            <span className="text-white/80">
              workplace refreshed.
            </span>
          </h1>

          <p
            className="
              mt-7
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-white/40
              sm:text-base
            "
          >
            From everyday tea and coffee supplies to
            drinking water, cups, plates and tableware,
            RV Corporate Needs helps businesses manage
            their corporate pantry procurement requirements.
          </p>
        </div>

        {/* STATS */}

        <div
          className="
            mt-12
            grid
            max-w-2xl
            grid-cols-2
            gap-3
            sm:grid-cols-3
          "
        >
          {[
            {
              value: "6",
              label: "Product Categories",
            },
            {
              value: "Bulk",
              label: "Procurement",
            },
            {
              value: "B2B",
              label: "Business Focus",
              className: "col-span-2 sm:col-span-1",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                p-4
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/15
                hover:bg-white/[0.04]
                ${stat.className ?? ""}
              `}
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-[#d89b32]/[0.035]
                  blur-2xl
                "
              />

              <div className="relative text-2xl font-bold tracking-tight">
                {stat.value}
              </div>

              <div
                className="
                  relative
                  mt-1
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white/25
                "
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-28
          lg:px-8
          lg:pb-36
        "
      >
        <div className="mb-10">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#d89b32]
            "
          >
            Our Range
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-[-0.04em]
              sm:text-4xl
            "
          >
            Corporate pantry
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-white/35
            "
          >
            Essential pantry products for offices,
            employee refreshment areas, meetings,
            events and everyday workplace operations.
          </p>
        </div>

        {/* PRODUCT GRID */}

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {products.map((product, index) => (
            <article
              key={product.code}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#d89b32]/25
                hover:bg-white/[0.045]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  aspect-[16/10]
                  overflow-hidden
                  border-b
                  border-white/[0.07]
                  bg-white/[0.035]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0b1220]/30
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-contain
                    p-6
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Product code */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-white/10
                    bg-[#0b1220]/80
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    tracking-[0.12em]
                    text-white/45
                    backdrop-blur-md
                  "
                >
                  {product.code}
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.15em]
                      text-white/15
                      transition-colors
                      duration-300
                      group-hover:text-[#d89b32]/60
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="
                      text-white/10
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#d89b32]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    tracking-tight
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    mt-3
                    min-h-[72px]
                    text-sm
                    leading-6
                    text-white/35
                  "
                >
                  {product.description}
                </p>

                <div className="mt-6 h-px w-full bg-white/[0.07]" />

                {/* ENQUIRY */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    gap-2
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white/20
                      transition-colors
                      duration-300
                      group-hover:text-[#d89b32]
                    "
                  >
                    Enquire
                  </span>

                  <div className="flex items-center gap-2">

                    {/* WhatsApp */}

                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${product.name} on WhatsApp`}
                      className="
                        inline-flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.025]
                        text-white/30
                        transition-all
                        duration-300
                        hover:border-[#d89b32]/25
                        hover:bg-[#d89b32]/10
                        hover:text-[#d89b32]
                      "
                    >
                      <MessageCircle size={14} />
                    </a>

                    {/* Email */}

                    <a
                      href={getEmailLink(product.name)}
                      aria-label={`Email enquiry about ${product.name}`}
                      className="
                        inline-flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.025]
                        text-white/30
                        transition-all
                        duration-300
                        hover:border-[#d89b32]/25
                        hover:bg-[#d89b32]/10
                        hover:text-[#d89b32]
                      "
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHY RV
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-y
          border-white/10
          bg-white/[0.015]
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            px-6
            py-20
            lg:grid-cols-2
            lg:items-center
            lg:px-8
            lg:py-28
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#d89b32]
              "
            >
              Why RV
            </p>

            <h2
              className="
                mt-4
                max-w-xl
                text-3xl
                font-bold
                leading-tight
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              Keep your workplace
              <br className="hidden sm:block" />
              refreshed and ready.
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/35
              "
            >
              A well-stocked pantry supports employee
              comfort, meetings and everyday workplace
              operations. RV Corporate Needs brings
              essential pantry products together under
              one corporate procurement category.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <div
                key={item}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#d89b32]/20
                  hover:bg-white/[0.04]
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#d89b32]/15
                    bg-[#d89b32]/[0.07]
                  "
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                    className="text-[#d89b32]"
                  />
                </div>

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      font-bold
                      tracking-[0.14em]
                      text-white/15
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      text-sm
                      font-semibold
                      text-white/65
                    "
                  >
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-20
          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#d89b32]
              "
            >
              Workplace Pantry
            </p>

            <h2
              className="
                mt-4
                max-w-lg
                text-3xl
                font-bold
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              Everyday refreshment.
              <br />
              Reliable procurement.
            </h2>
          </div>

          <div
            className="
              space-y-5
              text-sm
              leading-7
              text-white/35
            "
          >
            <p>
              A corporate pantry is an everyday part of
              the workplace, supporting employees,
              meetings, visitors and business events.
            </p>

            <p>
              RV Corporate Needs brings commonly required
              pantry products together under one corporate
              procurement category, making regular
              workplace replenishment simpler.
            </p>

            <p>
              Whether you require tea and coffee powders,
              health drinks, drinking water, paper cups,
              plates or tableware, share your quantities
              and requirements with the RV team.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/10
          bg-white/[0.015]
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
            px-6
            py-20
            lg:px-8
            lg:py-28
          "
        >
          <div className="text-center">

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-[#d89b32]/20
                bg-[#d89b32]/10
              "
            >
              <MessageSquareQuote
                size={21}
                className="text-[#d89b32]"
              />
            </div>

            <p
              className="
                mt-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#d89b32]
              "
            >
              Frequently Asked Questions
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              Got questions?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-white/35
              "
            >
              A few common questions about our corporate
              pantry solutions.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-white/[0.025]
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-[#d89b32]/20"
                        : "border-white/10"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      transition-all
                      hover:bg-white/[0.035]
                      sm:px-6
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          hidden
                          text-[9px]
                          font-bold
                          tracking-[0.15em]
                          text-white/15
                          sm:block
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          text-sm
                          font-semibold
                          transition-colors
                          ${
                            isOpen
                              ? "text-white"
                              : "text-white/70"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`
                        shrink-0
                        text-white/30
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 text-[#d89b32]"
                            : ""
                        }
                      `}
                    />
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          border-t
                          border-white/[0.07]
                          px-5
                          py-5
                          text-sm
                          leading-7
                          text-white/35
                          sm:px-6
                          sm:pl-[4.5rem]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENQUIRY CTA
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-20
          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.035]
            p-8
            shadow-[0_25px_100px_rgba(0,0,0,0.2)]
            sm:p-12
            lg:p-14
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-[#d89b32]/10
              blur-[100px]
              transition-all
              duration-700
              group-hover:bg-[#d89b32]/15
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.025]
              via-transparent
              to-transparent
            "
          />

          <div className="relative max-w-2xl">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-[#d89b32]/20
                bg-[#d89b32]/10
              "
            >
              <Building2
                size={21}
                className="text-[#d89b32]"
              />
            </div>

            <p
              className="
                mt-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#d89b32]
              "
            >
              Bulk Enquiries
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              Need pantry supplies
              <br />
              for your workplace?
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-white/35
              "
            >
              Share the products you need, quantities,
              delivery requirements and any other
              procurement details with the RV Corporate
              Needs team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {/* WHATSAPP */}

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/button
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#d89b32]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#0b1220]
                  shadow-[0_10px_30px_rgba(216,155,50,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e4aa46]
                  hover:shadow-[0_15px_40px_rgba(216,155,50,0.2)]
                "
              >
                <MessageCircle size={17} />

                WhatsApp Enquiry

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover/button:-translate-y-0.5
                    group-hover/button:translate-x-0.5
                  "
                />
              </a>

              {/* EMAIL */}

              <a
                href={getEmailLink()}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.045]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <Mail size={17} />

                Email Enquiry

                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          border-t
          border-white/10
          px-6
          py-8
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-3
            text-center
            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-white/20
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          <span>RV Corporate Needs</span>

          <span>
            Corporate Solutions · Pantry
          </span>
        </div>
      </footer>
    </main>
  );
}