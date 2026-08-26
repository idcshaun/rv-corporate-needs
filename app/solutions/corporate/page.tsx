import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Gift,
  House,
  Laptop,
  Package,
  Sparkles,
  ClipboardList,
} from "lucide-react";

const corporateSolutions = [
  {
    title: "Corporate Gifting",
    slug: "corporate-gifting",
    description:
      "Thoughtful gifting solutions for employees, clients, events and corporate occasions.",
    icon: Gift,
  },
  {
    title: "Housekeeping",
    slug: "housekeeping",
    description:
      "Everyday housekeeping and facility supplies to keep workplaces organised and efficient.",
    icon: House,
  },
  {
    title: "Hygiene",
    slug: "hygiene",
    description:
      "Workplace hygiene and washroom solutions for cleaner, safer business environments.",
    icon: Sparkles,
  },
  {
    title: "IT Products",
    slug: "it-products",
    description:
      "Technology and IT procurement solutions for modern offices and business operations.",
    icon: Laptop,
  },
  {
    title: "Pantry",
    slug: "pantry",
    description:
      "Pantry essentials and workplace refreshments for everyday office requirements.",
    icon: Package,
  },
  {
    title: "Stationery",
    slug: "stationery",
    description:
      "Complete stationery and office supply solutions for everyday workplace needs.",
    icon: ClipboardList,
  },
];

export default function CorporateSolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1220] text-white">
      {/* Background */}

      <div
        aria-hidden
        className="pointer-events-none fixed -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#d89b32]/[0.07] blur-[140px]"
      />

      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/[0.035] blur-[140px]"
      />

      {/* Header */}

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/" className="group">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-2 transition group-hover:bg-white/[0.09]">
              <div className="text-xl font-black leading-none tracking-[-0.06em]">
                RV
              </div>

              <div className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
                Corporate Needs
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* Hero */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8 lg:pt-24">
        <div className="max-w-4xl">
          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
            <Link
              href="/"
              className="transition hover:text-white/70"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#d89b32]">
              Corporate
            </span>
          </div>

          {/* Label */}

          <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d89b32]">
            Corporate Solutions
          </p>

          {/* Heading */}

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Everything your
            <br />
            workplace needs.
          </h1>

          {/* Description */}

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            From everyday office essentials to workplace
            services and technology, we bring together the
            products and solutions businesses need to operate
            smoothly.
          </p>
        </div>
      </section>

      {/* Solutions */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Corporate solutions
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {corporateSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <Link
                key={solution.slug}
                href={`/solutions/corporate/${solution.slug}`}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#d89b32]/30 hover:bg-white/[0.045]"
              >
                {/* Number */}

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d89b32]"
                  />
                </div>

                {/* Icon */}

                <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition group-hover:border-[#d89b32]/30 group-hover:bg-[#d89b32]/10">
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#d89b32]"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {solution.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {solution.description}
                </p>

                {/* Explore */}

                <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 transition group-hover:text-[#d89b32]">
                  Explore Solution

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#d89b32]/10 blur-[90px]"
          />

          <div className="relative max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d89b32]">
              Corporate procurement
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Looking for something specific?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/40">
              Tell us what your organisation needs and
              we&apos;ll help you find the right products and
              sourcing solution.
            </p>

            <Link
              href="/#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#d89b32] px-6 py-3.5 text-sm font-bold text-[#0b1220] transition hover:-translate-y-0.5 hover:bg-[#e4aa46]"
            >
              Request a Quote

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span>
            RV Corporate Needs
          </span>

          <Link
            href="/products"
            className="transition hover:text-white/50"
          >
            Product Catalogue
          </Link>
        </div>
      </footer>
    </main>
  );
}