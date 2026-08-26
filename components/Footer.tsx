import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const solutions = [
  "Office & Stationery",
  "Housekeeping & Hygiene",
  "IT Products",
  "Pantry Supplies",
  "Corporate Gifting",
  "Industrial Solutions",
];

export default function Footer() {
  return (
    <footer className="bg-[#070b13] text-white">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.7fr_1fr]">

          {/* Brand */}
          <div>

            <a href="#" className="inline-flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#0b1220]">
                RV
              </div>

              <div>
                <p className="text-sm font-bold tracking-tight">
                  RV CORPORATE
                </p>

                <p className="text-[10px] font-medium tracking-[0.2em] text-white/35">
                  NEEDS
                </p>
              </div>

            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/40">
              A complete materials and service provider helping businesses
              simplify corporate, workplace and industrial procurement.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#d89b32] px-5 py-3 text-sm font-semibold !text-[#0b1220] transition-all hover:-translate-y-0.5 hover:bg-[#e5ad4e]"
            >
              Request a Quote

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

          {/* Quick links */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Navigation
            </p>

            <div className="mt-6 flex flex-col gap-4">

              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}

            </div>

          </div>

          {/* Solutions */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Solutions
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

              {solutions.map((solution) => (
                <a
                  key={solution}
                  href="#solutions"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {solution}
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* Contact strip */}
        <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-3">

          <div className="flex items-center gap-4 border-b border-white/10 p-5 sm:border-b-0 sm:border-r">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
              <Phone
                size={17}
                className="text-[#d89b32]"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                Phone
              </p>

              <p className="mt-1 text-sm text-white/70">
                Contact our team
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 border-b border-white/10 p-5 sm:border-b-0 sm:border-r">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
              <Mail
                size={17}
                className="text-[#d89b32]"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                Email
              </p>

              <p className="mt-1 text-sm text-white/70">
                Send an enquiry
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 p-5">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
              <MapPin
                size={17}
                className="text-[#d89b32]"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                Locations
              </p>

              <p className="mt-1 text-sm text-white/70">
                Chennai · Bengaluru
              </p>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} RV Corporate Needs. All rights reserved.
          </p>

          <p className="text-xs text-white/20">
            Corporate Procurement · Workplace Solutions · Industrial Supply
          </p>

        </div>

      </div>
    </footer>
  );
}