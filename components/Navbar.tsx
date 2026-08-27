"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Mail,
  X,
} from "lucide-react";

const corporateProducts = [
  {
    name: "IT Products",
    href: "/solutions/corporate/it-products",
  },
  {
    name: "Pantry",
    href: "/solutions/corporate/pantry",
  },
  {
    name: "Stationery",
    href: "/solutions/corporate/stationery",
  },
  {
    name: "Hygiene",
    href: "/solutions/corporate/hygiene",
  },
  {
    name: "Housekeeping",
    href: "/solutions/corporate/housekeeping",
  },
  {
    name: "Corporate Gifting",
    href: "/solutions/corporate/corporate-gifting",
  },
];

const industrialProducts = [
  {
    name: "Bearings",
    href: "/solutions/industrial/bearings",
  },
  {
    name: "Cleanroom",
    href: "/solutions/industrial/cleanroom-solutions",
  },
  {
    name: "ESD",
    href: "/solutions/industrial/esd-solutions",
  },
  {
    name: "Fabrication",
    href: "/solutions/industrial/fabrication-unit",
  },
  {
    name: "Garments",
    href: "/solutions/industrial/garments-accessories",
  },
  {
    name: "Lubricants",
    href: "/solutions/industrial/lubricants",
  },
];

const EMAIL = "sales@rvcorporateneeds.com";

function getQuoteLink() {
  const subject = encodeURIComponent(
    "Request for Quote - RV Corporate Needs"
  );

  const body = encodeURIComponent(`Hello RV Corporate Needs,

I would like to request a quote for your products/services.

Please share the available options, pricing and procurement details.

Thank you.`);

  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navbarRef = useRef<HTMLElement | null>(null);

  const quoteLink = getQuoteLink();

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMenus() {
    setProductsOpen(false);
    setMobileOpen(false);
  }

  function toggleProducts() {
    setProductsOpen((value) => !value);
  }

  function goHome() {
    closeMenus();

    if (window.location.pathname === "/rv-corporateneeds/" ||
        window.location.pathname === "/rv-corporateneeds") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function scrollToSection(id: string) {
    closeMenus();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <>
      <header
        ref={navbarRef}
        className="
          sticky
          top-0
          z-[100]
          w-full
          px-3
          pt-3
          sm:px-5
          lg:px-6
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-7xl
            rounded-[22px]
            border
            border-[#aeb4bd]
            bg-[#c9cdd3]
            shadow-[0_18px_50px_rgba(15,23,42,0.18)]
          "
        >
          <div
            className="
              flex
              min-h-[68px]
              items-center
              px-3
              sm:px-5
              lg:px-6
            "
          >

            {/* LOGO */}

            <Link
              href="/"
              onClick={closeMenus}
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
                rounded-xl
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-[14px]
                  border
                  border-[#aab0b9]
                  bg-[#111827]
                  shadow-[0_5px_15px_rgba(15,23,42,0.18)]
                  transition-all
                  duration-200
                  group-hover:bg-[#172033]
                "
              >
                <span
                  className="
                    text-[17px]
                    font-black
                    leading-none
                    tracking-[-0.08em]
                    text-white
                  "
                >
                  RV
                </span>
              </div>

              <div className="hidden sm:block">
                <div
                  className="
                    text-[13px]
                    font-extrabold
                    leading-none
                    tracking-[-0.03em]
                    text-[#111827]
                  "
                >
                  RV Corporate Needs
                </div>

                <div
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.20em]
                    text-[#475569]
                  "
                >
                  Corporate & Industrial Procurement
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}

            <nav
              className="
                absolute
                left-1/2
                hidden
                -translate-x-1/2
                items-center
                gap-1
                lg:flex
              "
            >
              <Link
                href="/"
                onClick={closeMenus}
                className="
                  flex h-10 items-center justify-center
                  rounded-xl px-4
                  text-[13px] font-bold
                  text-[#111827]
                  transition hover:bg-white/40
                "
              >
                Home
              </Link>

              {/* PRODUCTS */}

              <div className="relative">
                <button
                  type="button"
                  onClick={toggleProducts}
                  aria-expanded={productsOpen}
                  className="
                    flex h-10 items-center justify-center
                    gap-1.5 rounded-xl px-4
                    text-[13px] font-bold
                    text-[#111827]
                    transition hover:bg-white/40
                  "
                >
                  Products

                  <ChevronDown
                    size={15}
                    strokeWidth={2.4}
                    className={
                      productsOpen
                        ? "rotate-180 transition-transform"
                        : "transition-transform"
                    }
                  />
                </button>

                {productsOpen && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[54px]
                      w-[620px]
                      -translate-x-1/2
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-[#aeb4bd]
                      bg-[#d5d8dd]
                      p-3
                      shadow-[0_25px_70px_rgba(15,23,42,0.25)]
                    "
                  >
                    <div className="grid grid-cols-2 gap-3">

                      {/* CORPORATE */}

                      <div
                        className="
                          rounded-[18px]
                          border
                          border-[#b8bec6]
                          bg-[#e0e2e6]
                          p-2
                        "
                      >
                        <Link
                          href="/solutions/corporate"
                          onClick={closeMenus}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-3 py-3
                            hover:bg-white/60
                          "
                        >
                          <div>
                            <p
                              className="
                                text-[9px]
                                font-extrabold
                                uppercase
                                tracking-[0.18em]
                                text-[#b47716]
                              "
                            >
                              Corporate
                            </p>

                            <p
                              className="
                                mt-1
                                text-[12px]
                                font-extrabold
                                text-[#111827]
                              "
                            >
                              Workplace Solutions
                            </p>
                          </div>

                          <ArrowUpRight
                            size={17}
                            className="text-[#64748b]"
                          />
                        </Link>

                        <div className="mt-1 space-y-1">
                          {corporateProducts.map((product) => (
                            <Link
                              key={product.href}
                              href={product.href}
                              onClick={closeMenus}
                              className="
                                group
                                flex
                                items-center
                                justify-between
                                rounded-lg
                                px-3 py-2.5
                                text-[12px]
                                font-bold
                                text-[#334155]
                                hover:bg-white/60
                                hover:text-[#111827]
                              "
                            >
                              {product.name}

                              <ArrowUpRight
                                size={13}
                                className="
                                  opacity-0
                                  group-hover:opacity-100
                                "
                              />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* INDUSTRIAL */}

                      <div
                        className="
                          rounded-[18px]
                          border
                          border-[#b8bec6]
                          bg-[#e0e2e6]
                          p-2
                        "
                      >
                        <Link
                          href="/solutions/industrial"
                          onClick={closeMenus}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-3 py-3
                            hover:bg-white/60
                          "
                        >
                          <div>
                            <p
                              className="
                                text-[9px]
                                font-extrabold
                                uppercase
                                tracking-[0.18em]
                                text-[#b47716]
                              "
                            >
                              Industrial
                            </p>

                            <p
                              className="
                                mt-1
                                text-[12px]
                                font-extrabold
                                text-[#111827]
                              "
                            >
                              Industrial Solutions
                            </p>
                          </div>

                          <ArrowUpRight
                            size={17}
                            className="text-[#64748b]"
                          />
                        </Link>

                        <div className="mt-1 space-y-1">
                          {industrialProducts.map((product) => (
                            <Link
                              key={product.href}
                              href={product.href}
                              onClick={closeMenus}
                              className="
                                group
                                flex
                                items-center
                                justify-between
                                rounded-lg
                                px-3 py-2.5
                                text-[12px]
                                font-bold
                                text-[#334155]
                                hover:bg-white/60
                                hover:text-[#111827]
                              "
                            >
                              {product.name}

                              <ArrowUpRight
                                size={13}
                                className="
                                  opacity-0
                                  group-hover:opacity-100
                                "
                              />
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("brands")}
                className="
                  flex h-10 items-center justify-center
                  rounded-xl px-4
                  text-[13px] font-bold
                  text-[#111827]
                  hover:bg-white/40
                "
              >
                Brands
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="
                  flex h-10 items-center justify-center
                  rounded-xl px-4
                  text-[13px] font-bold
                  text-[#111827]
                  hover:bg-white/40
                "
              >
                About
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="
                  flex h-10 items-center justify-center
                  rounded-xl px-4
                  text-[13px] font-bold
                  text-[#111827]
                  hover:bg-white/40
                "
              >
                Contact
              </button>
            </nav>

            {/* QUOTE */}

            <div className="ml-auto hidden lg:block">
              <a
                href={quoteLink}
                className="
                  group
                  flex h-10 items-center gap-2
                  rounded-xl
                  bg-[#d89b32]
                  px-4
                  text-[11px]
                  font-extrabold
                  text-[#111827]
                  shadow-[0_8px_25px_rgba(216,155,50,0.22)]
                  transition
                  hover:-translate-y-0.5
                  hover:bg-[#e5ab49]
                "
              >
                <Mail size={14} />

                Request a Quote

                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* MOBILE BUTTON */}

            <button
              type="button"
              onClick={() => {
                setMobileOpen((value) => !value);
                setProductsOpen(false);
              }}
              className="
                ml-auto
                flex h-11 w-11
                items-center justify-center
                rounded-[14px]
                border border-[#aeb4bd]
                bg-[#111827]
                text-white
                lg:hidden
              "
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>

          {/* MOBILE MENU */}

          {mobileOpen && (
            <div
              className="
                border-t
                border-[#aeb4bd]
                px-3
                pb-3
                lg:hidden
              "
            >
              <div
                className="
                  mt-3
                  max-h-[calc(100vh-105px)]
                  overflow-y-auto
                  rounded-[18px]
                  border
                  border-[#b3b8c0]
                  bg-[#d5d8dd]
                  p-2
                "
              >
                <Link
                  href="/"
                  onClick={closeMenus}
                  className="
                    flex min-h-[48px] w-full
                    items-center rounded-xl px-4
                    text-[15px] font-bold
                    text-[#111827]
                    hover:bg-white/60
                  "
                >
                  Home
                </Link>

                <button
                  type="button"
                  onClick={toggleProducts}
                  className="
                    flex min-h-[48px] w-full
                    items-center justify-between
                    rounded-xl px-4
                    text-[15px] font-bold
                    text-[#111827]
                    hover:bg-white/60
                  "
                >
                  Products

                  <ChevronDown
                    size={18}
                    className={
                      productsOpen
                        ? "rotate-180 transition-transform"
                        : "transition-transform"
                    }
                  />
                </button>

                {productsOpen && (
                  <div className="space-y-2 p-2">

                    <div
                      className="
                        overflow-hidden
                        rounded-[14px]
                        border
                        border-[#b5bac2]
                        bg-[#e0e2e6]
                      "
                    >
                      <Link
                        href="/solutions/corporate"
                        onClick={closeMenus}
                        className="
                          flex min-h-[66px]
                          items-center justify-between
                          px-4 py-3
                        "
                      >
                        <div>
                          <div
                            className="
                              text-[10px]
                              font-extrabold
                              uppercase
                              tracking-[0.18em]
                              text-[#b47716]
                            "
                          >
                            Corporate
                          </div>

                          <div
                            className="
                              mt-1
                              text-[14px]
                              font-extrabold
                              text-[#111827]
                            "
                          >
                            Workplace Solutions
                          </div>
                        </div>

                        <ArrowUpRight size={17} />
                      </Link>

                      <div
                        className="
                          border-t
                          border-[#c0c4ca]
                          px-2 py-2
                        "
                      >
                        {corporateProducts.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            onClick={closeMenus}
                            className="
                              flex min-h-[44px]
                              items-center
                              rounded-lg px-3
                              text-[14px]
                              font-semibold
                              text-[#334155]
                              hover:bg-white/60
                            "
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div
                      className="
                        overflow-hidden
                        rounded-[14px]
                        border
                        border-[#b5bac2]
                        bg-[#e0e2e6]
                      "
                    >
                      <Link
                        href="/solutions/industrial"
                        onClick={closeMenus}
                        className="
                          flex min-h-[66px]
                          items-center justify-between
                          px-4 py-3
                        "
                      >
                        <div>
                          <div
                            className="
                              text-[10px]
                              font-extrabold
                              uppercase
                              tracking-[0.18em]
                              text-[#b47716]
                            "
                          >
                            Industrial
                          </div>

                          <div
                            className="
                              mt-1
                              text-[14px]
                              font-extrabold
                              text-[#111827]
                            "
                          >
                            Industrial Solutions
                          </div>
                        </div>

                        <ArrowUpRight size={17} />
                      </Link>

                      <div
                        className="
                          border-t
                          border-[#c0c4ca]
                          px-2 py-2
                        "
                      >
                        {industrialProducts.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            onClick={closeMenus}
                            className="
                              flex min-h-[44px]
                              items-center
                              rounded-lg px-3
                              text-[14px]
                              font-semibold
                              text-[#334155]
                              hover:bg-white/60
                            "
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                <button
                  type="button"
                  onClick={() => scrollToSection("brands")}
                  className="
                    flex min-h-[48px] w-full
                    items-center rounded-xl px-4
                    text-left text-[15px] font-bold
                    text-[#111827]
                    hover:bg-white/60
                  "
                >
                  Brands
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="
                    flex min-h-[48px] w-full
                    items-center rounded-xl px-4
                    text-left text-[15px] font-bold
                    text-[#111827]
                    hover:bg-white/60
                  "
                >
                  About
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="
                    flex min-h-[48px] w-full
                    items-center rounded-xl px-4
                    text-left text-[15px] font-bold
                    text-[#111827]
                    hover:bg-white/60
                  "
                >
                  Contact
                </button>

                <a
                  href={quoteLink}
                  onClick={closeMenus}
                  className="
                    mt-2
                    flex min-h-[52px] w-full
                    items-center justify-center
                    gap-2
                    rounded-xl
                    bg-[#d89b32]
                    text-[13px]
                    font-extrabold
                    text-[#111827]
                  "
                >
                  <Mail size={16} />

                  Request a Quote

                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="h-3" />
    </>
  );
}