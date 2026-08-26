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

/* =========================================================
   DATA
========================================================= */

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

  const body = encodeURIComponent(
    `Hello RV Corporate Needs,

I would like to request a quote for your products/services.

Please share the available options, pricing and procurement details.

Thank you.`
  );

  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navbarRef = useRef<HTMLElement | null>(null);

  /* =======================================================
     CLOSE WHEN CLICKING OUTSIDE
  ======================================================= */

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
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =======================================================
     MENU HELPERS
  ======================================================= */

  function closeMenus() {
    setProductsOpen(false);
    setMobileOpen(false);
  }

  function toggleProducts() {
    setProductsOpen((current) => !current);
  }

  /* =======================================================
     SECTION NAVIGATION
  ======================================================= */

  function scrollToSection(sectionId: string) {
    closeMenus();

    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  /* =======================================================
     HOME
  ======================================================= */

  function handleHome() {
    closeMenus();

    if (window.location.pathname !== "/") {
      window.location.href = "/";
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =======================================================
     QUOTE
  ======================================================= */

  const quoteLink = getQuoteLink();

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <header
        ref={navbarRef}
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          px-4
          pt-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            relative
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            rounded-[24px]
            border
            border-white/10
            bg-[#0b1220]
            px-4
            shadow-[0_20px_70px_rgba(0,0,0,0.35)]
            backdrop-blur-2xl
            sm:px-5
          "
        >
          {/* =================================================
              LEFT — LOGO
          ================================================= */}

          <div className="flex shrink-0 items-center">
            <button
              type="button"
              onClick={handleHome}
              className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                px-1
                py-1
                text-left
                outline-none
              "
              aria-label="Go to home"
            >
              {/* RV MARK */}

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
                  border-white/10
                  bg-white/[0.05]
                  transition-all
                  duration-300
                  group-hover:border-[#d89b32]/30
                  group-hover:bg-[#d89b32]/10
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

              {/* BRAND NAME */}

              <div className="hidden sm:block">
                <div
                  className="
                    text-[13px]
                    font-extrabold
                    leading-none
                    tracking-[-0.03em]
                    text-white
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
                    text-white/40
                  "
                >
                  Corporate & Industrial Procurement
                </div>
              </div>
            </button>
          </div>

          {/* =================================================
              CENTER — DESKTOP NAVIGATION
          ================================================= */}

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
            {/* HOME */}

            <button
              type="button"
              onClick={handleHome}
              className="
                flex
                h-10
                items-center
                justify-center
                rounded-xl
                px-4
                text-[12px]
                font-bold
                text-white
                transition-all
                duration-200
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              Home
            </button>

            {/* =================================================
                PRODUCTS
            ================================================= */}

            <div className="relative">
              <button
                type="button"
                onClick={toggleProducts}
                aria-expanded={productsOpen}
                className="
                  flex
                  h-10
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  px-4
                  text-[12px]
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                Products

                <ChevronDown
                  size={14}
                  strokeWidth={2.2}
                  className={`
                    transition-transform
                    duration-200
                    ${productsOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* =================================================
                  PRODUCTS DROPDOWN
              ================================================= */}

              {productsOpen && (
                <div
                  className="
                    absolute
                    left-1/2
                    top-[52px]
                    w-[650px]
                    -translate-x-1/2
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/10
                    bg-[#0d1525]
                    p-3
                    shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                    backdrop-blur-2xl
                  "
                >
                  <div className="grid grid-cols-2 gap-3">
                    {/* =================================================
                        CORPORATE
                    ================================================= */}

                    <div
                      className="
                        rounded-[20px]
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        p-3
                      "
                    >
                      {/* CLICKABLE CATEGORY */}

                      <Link
                        href="/solutions/corporate"
                        onClick={closeMenus}
                        className="
                          group
                          mb-2
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          border
                          border-transparent
                          px-3
                          py-3
                          transition-all
                          duration-200
                          hover:border-[#d89b32]/20
                          hover:bg-[#d89b32]/[0.07]
                        "
                      >
                        <div>
                          <p
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.18em]
                              text-[#d89b32]
                            "
                          >
                            Corporate
                          </p>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              font-bold
                              text-white
                            "
                          >
                            Workplace Solutions
                          </p>
                        </div>

                        <ArrowUpRight
                          size={16}
                          className="
                            text-white/30
                            transition-all
                            duration-200
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                            group-hover:text-[#d89b32]
                          "
                        />
                      </Link>

                      {/* CORPORATE PRODUCTS */}

                      <div className="space-y-1">
                        {corporateProducts.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={closeMenus}
                            className="
                              group
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              px-3
                              py-2.5
                              text-[12px]
                              font-bold
                              text-white
                              transition-all
                              duration-200
                              hover:bg-white/[0.07]
                            "
                          >
                            <span
                              className="
                                font-bold
                                text-white/75
                                transition-colors
                                group-hover:text-white
                              "
                            >
                              {product.name}
                            </span>

                            <ArrowUpRight
                              size={13}
                              className="
                                text-white/20
                                transition-all
                                duration-200
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                                group-hover:text-[#d89b32]
                              "
                            />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* =================================================
                        INDUSTRIAL
                    ================================================= */}

                    <div
                      className="
                        rounded-[20px]
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        p-3
                      "
                    >
                      {/* CLICKABLE CATEGORY */}

                      <Link
                        href="/solutions/industrial"
                        onClick={closeMenus}
                        className="
                          group
                          mb-2
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          border
                          border-transparent
                          px-3
                          py-3
                          transition-all
                          duration-200
                          hover:border-[#d89b32]/20
                          hover:bg-[#d89b32]/[0.07]
                        "
                      >
                        <div>
                          <p
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.18em]
                              text-[#d89b32]
                            "
                          >
                            Industrial
                          </p>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              font-bold
                              text-white
                            "
                          >
                            Industrial Solutions
                          </p>
                        </div>

                        <ArrowUpRight
                          size={16}
                          className="
                            text-white/30
                            transition-all
                            duration-200
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                            group-hover:text-[#d89b32]
                          "
                        />
                      </Link>

                      {/* INDUSTRIAL PRODUCTS */}

                      <div className="space-y-1">
                        {industrialProducts.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={closeMenus}
                            className="
                              group
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              px-3
                              py-2.5
                              text-[12px]
                              font-bold
                              text-white
                              transition-all
                              duration-200
                              hover:bg-white/[0.07]
                            "
                          >
                            <span
                              className="
                                font-bold
                                text-white/75
                                transition-colors
                                group-hover:text-white
                              "
                            >
                              {product.name}
                            </span>

                            <ArrowUpRight
                              size={13}
                              className="
                                text-white/20
                                transition-all
                                duration-200
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                                group-hover:text-[#d89b32]
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

            {/* =================================================
                BRANDS
            ================================================= */}

            <button
              type="button"
              onClick={() => scrollToSection("brands")}
              className="
                flex
                h-10
                items-center
                justify-center
                rounded-xl
                px-4
                text-[12px]
                font-bold
                text-white
                transition-all
                duration-200
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              Brands
            </button>

            {/* =================================================
                ABOUT
            ================================================= */}

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="
                flex
                h-10
                items-center
                justify-center
                rounded-xl
                px-4
                text-[12px]
                font-bold
                text-white
                transition-all
                duration-200
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              About
            </button>

            {/* =================================================
                CONTACT
            ================================================= */}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                flex
                h-10
                items-center
                justify-center
                rounded-xl
                px-4
                text-[12px]
                font-bold
                text-white
                transition-all
                duration-200
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              Contact
            </button>
          </nav>

          {/* =================================================
              RIGHT — REQUEST QUOTE
          ================================================= */}

          <div className="ml-auto hidden shrink-0 lg:block">
            <a
              href={quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                h-10
                items-center
                gap-2
                rounded-xl
                bg-[#d89b32]
                px-4
                text-[11px]
                font-extrabold
                text-[#0b1220]
                shadow-[0_8px_30px_rgba(216,155,50,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e4aa46]
                hover:shadow-[0_12px_40px_rgba(216,155,50,0.22)]
              "
            >
              <Mail
               size={14}
               strokeWidth={2.5}
              />
              
              Request a Quote

              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="
              ml-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-white
              transition-all
              duration-200
              hover:border-white/20
              hover:bg-white/[0.08]
              lg:hidden
            "
          >
            {mobileOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        {mobileOpen && (
          <div
            className="
              mx-auto
              mt-2
              max-w-7xl
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-[#0d1525]
              p-3
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
              lg:hidden
            "
          >
            {/* HOME */}

            <button
              type="button"
              onClick={handleHome}
              className="
                flex
                h-11
                w-full
                items-center
                rounded-xl
                px-4
                text-left
                text-[13px]
                font-bold
                text-white
                transition-all
                hover:bg-white/[0.06]
              "
            >
              Home
            </button>

            {/* PRODUCTS */}

            <button
              type="button"
              onClick={toggleProducts}
              className="
                flex
                h-11
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                text-left
                text-[13px]
                font-bold
                text-white
                transition-all
                hover:bg-white/[0.06]
              "
            >
              <span>Products</span>

              <ChevronDown
                size={15}
                className={`
                  transition-transform
                  duration-200
                  ${productsOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* MOBILE PRODUCTS */}

            {productsOpen && (
              <div
                className="
                  mb-2
                  grid
                  gap-2
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-black/10
                  p-2
                "
              >
                {/* CORPORATE */}

                <div
                  className="
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
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
                      rounded-lg
                      px-3
                      py-3
                      hover:bg-[#d89b32]/[0.07]
                    "
                  >
                    <div>
                      <div
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#d89b32]
                        "
                      >
                        Corporate
                      </div>

                      <div
                        className="
                          mt-1
                          text-[11px]
                          font-bold
                          text-white
                        "
                      >
                        Workplace Solutions
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        text-white/30
                        group-hover:text-[#d89b32]
                      "
                    />
                  </Link>

                  <div className="mt-1 space-y-1">
                    {corporateProducts.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={closeMenus}
                        className="
                          block
                          rounded-lg
                          px-3
                          py-2.5
                          text-[12px]
                          font-bold
                          text-white/75
                          transition-all
                          hover:bg-white/[0.06]
                          hover:text-white
                        "
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* INDUSTRIAL */}

                <div
                  className="
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
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
                      rounded-lg
                      px-3
                      py-3
                      hover:bg-[#d89b32]/[0.07]
                    "
                  >
                    <div>
                      <div
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#d89b32]
                        "
                      >
                        Industrial
                      </div>

                      <div
                        className="
                          mt-1
                          text-[11px]
                          font-bold
                          text-white
                        "
                      >
                        Industrial Solutions
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        text-white/30
                        group-hover:text-[#d89b32]
                      "
                    />
                  </Link>

                  <div className="mt-1 space-y-1">
                    {industrialProducts.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={closeMenus}
                        className="
                          block
                          rounded-lg
                          px-3
                          py-2.5
                          text-[12px]
                          font-bold
                          text-white/75
                          transition-all
                          hover:bg-white/[0.06]
                          hover:text-white
                        "
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* BRANDS */}

            <button
              type="button"
              onClick={() => scrollToSection("brands")}
              className="
                flex
                h-11
                w-full
                items-center
                rounded-xl
                px-4
                text-left
                text-[13px]
                font-bold
                text-white
                transition-all
                hover:bg-white/[0.06]
              "
            >
              Brands
            </button>

            {/* ABOUT */}

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="
                flex
                h-11
                w-full
                items-center
                rounded-xl
                px-4
                text-left
                text-[13px]
                font-bold
                text-white
                transition-all
                hover:bg-white/[0.06]
              "
            >
              About
            </button>

            {/* CONTACT */}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                flex
                h-11
                w-full
                items-center
                rounded-xl
                px-4
                text-left
                text-[13px]
                font-bold
                text-white
                transition-all
                hover:bg-white/[0.06]
              "
            >
              Contact
            </button>

            {/* MOBILE QUOTE */}

            <a
              href={quoteLink}
              onClick={closeMenus}
              className="
                mt-2
                flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#d89b32]
                text-[12px]
                font-extrabold
                text-[#0b1220]
              "
            >
              <MessageCircle
                size={16}
                strokeWidth={2.5}
              />

              Request a Quote

              <ArrowUpRight
                size={15}
                strokeWidth={2.5}
              />
            </a>
          </div>
        )}
      </header>

      {/* =====================================================
          NAVBAR OFFSET
      ====================================================== */}

      <div className="h-[100px]" />
    </>
  );
}