"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  PenLine,
  Sparkles,
  Cpu,
  Utensils,
  Gift,
  ShieldCheck,
  Layers3,
  CircleDot,
  Droplets,
  Shirt,
  Wrench,
} from "lucide-react";

/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const corporateProducts = [
  {
    name: "Stationery",
    description:
      "Workplace stationery and everyday office essentials for organized operations.",
    href: "/solutions/corporate/stationery",
    icon: PenLine,
  },
  {
    name: "Housekeeping",
    description:
      "Practical housekeeping supplies that support clean and efficient workplaces.",
    href: "/solutions/corporate/housekeeping",
    icon: Sparkles,
  },
  {
    name: "IT Products",
    description:
      "Essential IT and workplace technology products sourced around your requirements.",
    href: "/solutions/corporate/it-products",
    icon: Cpu,
  },
  {
    name: "Pantry",
    description:
      "Pantry and workplace refreshment essentials for day-to-day business needs.",
    href: "/solutions/corporate/pantry",
    icon: Utensils,
  },
  {
    name: "Corporate Gifting",
    description:
      "Thoughtful corporate gifting options for employees, clients and business occasions.",
    href: "/solutions/corporate/corporate-gifting",
    icon: Gift,
  },
  {
    name: "Hygiene",
    description:
      "Hygiene and sanitation essentials for safer, cleaner working environments.",
    href: "/solutions/corporate/hygiene",
    icon: ShieldCheck,
  },
];

const industrialProducts = [
  {
    name: "ESD Solutions",
    description:
      "ESD protection products designed for controlled industrial and electronic environments.",
    href: "/solutions/industrial/esd-solutions",
    icon: ShieldCheck,
  },
  {
    name: "Cleanroom Solutions",
    description:
      "Cleanroom products and essentials for controlled manufacturing environments.",
    href: "/solutions/industrial/cleanroom-solutions",
    icon: Layers3,
  },
  {
    name: "Bearings",
    description:
      "Bearing products for machinery, maintenance and industrial applications.",
    href: "/solutions/industrial/bearings",
    icon: CircleDot,
  },
  {
    name: "Lubricants",
    description:
      "Industrial lubrication products supporting machinery performance and maintenance.",
    href: "/solutions/industrial/lubricants",
    icon: Droplets,
  },
  {
    name: "Garments & Accessories",
    description:
      "Industrial garments and accessories for workplace and production requirements.",
    href: "/solutions/industrial/garments-accessories",
    icon: Shirt,
  },
  {
    name: "Fabrication Unit",
    description:
      "Fabrication capabilities and products for specialized industrial requirements.",
    href: "/solutions/industrial/fabrication-unit",
    icon: Wrench,
  },
];

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  item,
  index,
}: {
  item: {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.025]
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#d89b32]/30
        hover:bg-white/[0.045]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]
      "
    >
      {/* Hover glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-[#d89b32]/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#d89b32]/10
        "
      />

      {/* Number */}

      <div className="relative flex items-center justify-between">
        <span
          className="
            text-[10px]
            font-bold
            tracking-[0.15em]
            text-white/20
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <ArrowUpRight
          size={16}
          className="
            text-white/15
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-[#d89b32]
          "
        />
      </div>

      {/* Icon */}

      <div
        className="
          relative
          mt-8
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          transition-all
          duration-300
          group-hover:border-[#d89b32]/20
          group-hover:bg-[#d89b32]/10
        "
      >
        <Icon
          size={21}
          strokeWidth={1.7}
          className="
            text-[#d89b32]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Name */}

      <h3
        className="
          relative
          mt-6
          text-xl
          font-bold
          tracking-tight
          text-white
          transition-colors
          group-hover:text-white
        "
      >
        {item.name}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          mt-3
          min-h-[72px]
          text-sm
          leading-6
          text-white/40
          transition-colors
          group-hover:text-white/50
        "
      >
        {item.description}
      </p>

      {/* Explore */}

      <div
        className="
          relative
          mt-7
          flex
          items-center
          gap-2
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-white/25
          transition-colors
          group-hover:text-[#d89b32]
        "
      >
        Explore category

        <ArrowUpRight
          size={13}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </div>
    </Link>
  );
}

/* =========================================================
   PRODUCTS PAGE
========================================================= */

export default function ProductsPage() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#0b1220]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -left-40
          -top-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#d89b32]/[0.07]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -bottom-40
          -right-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-white/[0.035]
          blur-[140px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative z-20">
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
          {/* RV BRAND */}

          <Link
            href="/"
            className="group"
          >
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                px-3.5
                py-2
                transition-all
                duration-300
                group-hover:bg-white/[0.09]
              "
            >
              <div
                className="
                  text-xl
                  font-black
                  leading-none
                  tracking-[-0.06em]
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

          {/* BACK HOME */}

          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-4
              py-2.5
              text-xs
              font-semibold
              text-white/60
              transition-all
              hover:bg-white/10
              hover:text-white
            "
          >
            <ArrowLeft
              size={15}
              className="
                transition-transform
                group-hover:-translate-x-0.5
              "
            />

            Home
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
          pb-16
          pt-12
          lg:px-8
          lg:pb-20
          lg:pt-20
        "
      >
        <div className="max-w-4xl">
          {/* Breadcrumb */}

          <div
            className="
              flex
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
              href="/"
              className="
                transition-colors
                hover:text-white/70
              "
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#d89b32]">
              Products
            </span>
          </div>

          {/* Label */}

          <p
            className="
              mt-10
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#d89b32]
            "
          >
            Product Categories
          </p>

          {/* Heading */}

          <h1
            className="
              mt-4
              text-5xl
              font-bold
              leading-[1.02]
              tracking-[-0.055em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Products built around
            <br />
            your requirements.
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-white/45
              sm:text-base
            "
          >
            From everyday corporate essentials to
            specialized industrial requirements, explore
            the categories we source and support for
            businesses.
          </p>
        </div>
      </section>

      {/* =====================================================
          CORPORATE PRODUCTS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-20
          lg:px-8
        "
      >
        {/* Section heading */}

        <div
          className="
            mb-7
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-end
            sm:justify-between
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
              Corporate
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                tracking-tight
              "
            >
              Workplace essentials
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-6
              text-white/35
              sm:text-right
            "
          >
            Everyday products that help businesses
            keep their workplaces running smoothly.
          </p>
        </div>

        {/* Corporate cards */}

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {corporateProducts.map(
            (item, index) => (
              <ProductCard
                key={item.href}
                item={item}
                index={index}
              />
            )
          )}
        </div>
      </section>

      {/* =====================================================
          INDUSTRIAL PRODUCTS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
        "
      >
        {/* Section heading */}

        <div
          className="
            mb-7
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-end
            sm:justify-between
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
              Industrial
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                tracking-tight
              "
            >
              Specialized industrial categories
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-6
              text-white/35
              sm:text-right
            "
          >
            Technical products and specialized
            categories for demanding industrial
            environments.
          </p>
        </div>

        {/* Industrial cards */}

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {industrialProducts.map(
            (item, index) => (
              <ProductCard
                key={item.href}
                item={item}
                index={index}
              />
            )
          )}
        </div>
      </section>

      {/* =====================================================
          QUOTE CTA
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.035]
            p-8
            sm:p-12
          "
        >
          {/* Glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-[#d89b32]/10
              blur-[90px]
            "
          />

          <div className="relative max-w-2xl">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#d89b32]
              "
            >
              Procurement support
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                sm:text-4xl
              "
            >
              Need something specific?
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-white/40
              "
            >
              Tell us what you need, along with the
              quantity or specification. We can help
              you identify and source the right
              products for your business.
            </p>

            <Link
              href="/#contact"
              className="
                mt-7
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
                transition
                hover:-translate-y-0.5
                hover:bg-[#e4aa46]
              "
            >
              Request a Quote

              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}