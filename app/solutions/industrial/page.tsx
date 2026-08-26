import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cog,
  Factory,
  Layers3,
  Shirt,
  Sparkles,
  Wrench,
} from "lucide-react";

const industrialSolutions = [
  {
    title: "Bearings",
    slug: "bearings",
    description:
      "Bearing and motion solutions for machinery, equipment and industrial applications.",
    icon: Cog,
  },
  {
    title: "Cleanroom Solutions",
    slug: "cleanroom-solutions",
    description:
      "Products and consumables for controlled, clean and contamination-sensitive environments.",
    icon: Sparkles,
  },
  {
    title: "ESD Solutions",
    slug: "esd-solutions",
    description:
      "Electrostatic discharge protection solutions for sensitive industrial and electronic environments.",
    icon: Layers3,
  },
  {
    title: "Fabrication Unit",
    slug: "fabrication-unit",
    description:
      "Fabrication capabilities and application-specific solutions for industrial requirements.",
    icon: Wrench,
  },
  {
    title: "Garments & Accessories",
    slug: "garments-accessories",
    description:
      "Industrial garments, protective workwear and accessories for workplace requirements.",
    icon: Shirt,
  },
  {
    title: "Lubricants",
    slug: "lubricants",
    description:
      "Industrial lubricants and maintenance solutions for machinery and operating environments.",
    icon: Factory,
  },
];

export default function IndustrialSolutionsPage() {
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
            px-6
            py-6
            lg:px-8
          "
        >
          {/* RV LOGO
              Clicking the logo returns to the
              Industrial Solutions page.
          */}

          <Link
            href="/solutions/industrial"
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
                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                group-hover:border-white/20
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
          pt-14
          lg:px-8
          lg:pb-20
          lg:pt-24
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
                duration-300
                hover:text-white/70
              "
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#d89b32]">
              Industrial
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
            Industrial Solutions
          </p>

          {/* Heading */}

          <h1
            className="
              mt-4
              max-w-4xl
              text-5xl
              font-bold
              leading-[1.02]
              tracking-[-0.055em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Built for the
            <br />
            industrial environment.
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
            From precision components and cleanroom
            requirements to workplace protection and
            maintenance, we provide specialised industrial
            procurement solutions.
          </p>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIAL SOLUTIONS
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
          lg:pb-28
        "
      >
        <div className="mb-10">

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            Explore
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              tracking-[-0.04em]
              sm:text-4xl
            "
          >
            Industrial solutions
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
            Specialised products and procurement solutions
            for industrial operations, facilities and
            manufacturing environments.
          </p>
        </div>

        {/* Product / Solution Grid */}

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {industrialSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <Link
                key={solution.slug}
                href={`/solutions/industrial/${solution.slug}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-7
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#d89b32]/30
                  hover:bg-white/[0.045]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                "
              >

                {/* Card Glow */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#d89b32]/[0.035]
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Number + Arrow */}

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-between
                  "
                >
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
                    size={17}
                    className="
                      text-white/20
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
                    group-hover:border-[#d89b32]/30
                    group-hover:bg-[#d89b32]/10
                  "
                >
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="
                      text-[#d89b32]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    relative
                    mt-7
                    text-xl
                    font-bold
                    tracking-tight
                  "
                >
                  {solution.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    relative
                    mt-3
                    text-sm
                    leading-6
                    text-white/40
                  "
                >
                  {solution.description}
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
                    tracking-[0.15em]
                    text-white/25
                    transition-colors
                    duration-300
                    group-hover:text-[#d89b32]
                  "
                >
                  Explore Solution

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CTA
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
          lg:pb-28
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

          {/* CTA Glow */}

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

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#d89b32]
              "
            >
              Industrial procurement
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
              Have a specialised requirement?
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-white/40
              "
            >
              Share your industrial requirement,
              specification or quantity and our team can
              help identify the right sourcing solution.
            </p>

            <Link
              href="/#contact"
              className="
                group/button
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
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e4aa46]
                hover:shadow-[0_15px_40px_rgba(216,155,50,0.2)]
              "
            >
              Request a Quote

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />
            </Link>
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
            font-semibold
            uppercase
            tracking-[0.15em]
            text-white/20
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          <span>
            RV Corporate Needs
          </span>

          <Link
            href="/products"
            className="
              transition-colors
              duration-300
              hover:text-white/50
            "
          >
            Product Catalogue
          </Link>
        </div>
      </footer>

    </main>
  );
}