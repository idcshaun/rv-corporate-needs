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
   GITHUB PAGES BASE PATH
========================================================= */

const BASE_PATH = "/rv-corporate-needs";

/* =========================================================
   PRODUCTS
========================================================= */

const corporateProducts = [
  {
    name: "IT Products",
    href: `${BASE_PATH}/solutions/corporate/it-products`,
  },
  {
    name: "Pantry",
    href: `${BASE_PATH}/solutions/corporate/pantry`,
  },
  {
    name: "Stationery",
    href: `${BASE_PATH}/solutions/corporate/stationery`,
  },
  {
    name: "Hygiene",
    href: `${BASE_PATH}/solutions/corporate/hygiene`,
  },
  {
    name: "Housekeeping",
    href: `${BASE_PATH}/solutions/corporate/housekeeping`,
  },
  {
    name: "Corporate Gifting",
    href: `${BASE_PATH}/solutions/corporate/corporate-gifting`,
  },
];

const industrialProducts = [
  {
    name: "Bearings",
    href: `${BASE_PATH}/solutions/industrial/bearings`,
  },
  {
    name: "Cleanroom",
    href: `${BASE_PATH}/solutions/industrial/cleanroom-solutions`,
  },
  {
    name: "ESD",
    href: `${BASE_PATH}/solutions/industrial/esd-solutions`,
  },
  {
    name: "Fabrication",
    href: `${BASE_PATH}/solutions/industrial/fabrication-unit`,
  },
  {
    name: "Garments",
    href: `${BASE_PATH}/solutions/industrial/garments-accessories`,
  },
  {
    name: "Lubricants",
    href: `${BASE_PATH}/solutions/industrial/lubricants`,
  },
];

/* =========================================================
   EMAIL
========================================================= */

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
   MAIN NAVBAR
========================================================= */

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navbarRef = useRef<HTMLElement | null>(null);

  const quoteLink = getQuoteLink();

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
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ======================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     CLOSE MENUS
  ======================================================= */

  function closeMenus() {
    setProductsOpen(false);
    setMobileOpen(false);
  }

  /* =======================================================
     PRODUCTS TOGGLE
  ======================================================= */

  function toggleProducts() {
    setProductsOpen((current) => !current);
  }

  /* =======================================================
     HOME
  ======================================================= */

  function handleHome() {
    closeMenus();

    const currentPath = window.location.pathname;

    if (
      currentPath === BASE_PATH ||
      currentPath === `${BASE_PATH}/`
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    window.location.href = `${BASE_PATH}/`;
  }

  /* =======================================================
     SECTION NAVIGATION
  ======================================================= */

  function scrollToSection(sectionId: string) {
    closeMenus();

    const currentPath = window.location.pathname;

    const isHome =
      currentPath === BASE_PATH ||
      currentPath === `${BASE_PATH}/`;

    if (!isHome) {
      window.location.href = `${BASE_PATH}/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);

    if (!element) {
      window.location.href = `${BASE_PATH}/#${sectionId}`;
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

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
        {/* ===================================================
            MAIN NAVBAR
        ==================================================== */}

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
            {/* =================================================
                LOGO
            ================================================= */}

            <button
              type="button"
              onClick={handleHome}
              aria-label="Go to home"
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
                rounded-xl
                outline-none
              "
            >
              {/* RV MARK */}

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

              {/* BRAND TEXT */}

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
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
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
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition-all
                  duration-200
                  hover:bg-white/40
                "
              >
                Home
              </button>

              {/* PRODUCTS */}

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
                    text-[13px]
                    font-bold
                    text-[#111827]
                    transition-all
                    duration-200
                    hover:bg-white/40
                  "
                >
                  Products

                  <ChevronDown
                    size={15}
                    strokeWidth={2.4}
                    className={`
                      transition-transform
                      duration-200
                      ${productsOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* DESKTOP DROPDOWN */}

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
                          href={`${BASE_PATH}/solutions/corporate`}
                          onClick={closeMenus}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-3
                            py-3
                            transition-all
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
                            className="
                              text-[#64748b]
                              transition-all
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-[#b47716]
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
                                group
                                flex
                                items-center
                                justify-between
                                rounded-lg
                                px-3
                                py-2.5
                                text-[12px]
                                font-bold
                                text-[#334155]
                                transition-all
                                hover:bg-white/60
                                hover:text-[#111827]
                              "
                            >
                              <span>{product.name}</span>

                              <ArrowUpRight
                                size={13}
                                className="
                                  opacity-0
                                  transition-all
                                  group-hover:translate-x-0.5
                                  group-hover:-translate-y-0.5
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
                          href={`${BASE_PATH}/solutions/industrial`}
                          onClick={closeMenus}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-3
                            py-3
                            transition-all
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
                            className="
                              text-[#64748b]
                              transition-all
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-[#b47716]
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
                                group
                                flex
                                items-center
                                justify-between
                                rounded-lg
                                px-3
                                py-2.5
                                text-[12px]
                                font-bold
                                text-[#334155]
                                transition-all
                                hover:bg-white/60
                                hover:text-[#111827]
                              "
                            >
                              <span>{product.name}</span>

                              <ArrowUpRight
                                size={13}
                                className="
                                  opacity-0
                                  transition-all
                                  group-hover:translate-x-0.5
                                  group-hover:-translate-y-0.5
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

              {/* BRANDS */}

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
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition-all
                  hover:bg-white/40
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
                  h-10
                  items-center
                  justify-center
                  rounded-xl
                  px-4
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition-all
                  hover:bg-white/40
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
                  h-10
                  items-center
                  justify-center
                  rounded-xl
                  px-4
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition-all
                  hover:bg-white/40
                "
              >
                Contact
              </button>
            </nav>

            {/* =================================================
                DESKTOP QUOTE BUTTON
            ================================================= */}

            <div className="ml-auto hidden lg:block">
              <a
                href={quoteLink}
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
                  text-[#111827]
                  shadow-[0_8px_25px_rgba(216,155,50,0.22)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#e5ab49]
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
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                setMobileOpen((current) => !current);
                setProductsOpen(false);
              }}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className="
                ml-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#aeb4bd]
                bg-[#111827]
                text-white
                shadow-[0_5px_15px_rgba(15,23,42,0.15)]
                transition-all
                hover:bg-[#172033]
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>

          {/* ===================================================
              MOBILE MENU
          ==================================================== */}

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
                  overscroll-contain
                  rounded-[18px]
                  border
                  border-[#b3b8c0]
                  bg-[#d5d8dd]
                  p-2
                "
              >
                {/* HOME */}

                <button
                  type="button"
                  onClick={handleHome}
                  className="
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    rounded-xl
                    px-4
                    text-left
                    text-[15px]
                    font-bold
                    text-[#111827]
                    transition-all
                    hover:bg-white/60
                  "
                >
                  Home
                </button>

                {/* PRODUCTS */}

                <button
                  type="button"
                  onClick={toggleProducts}
                  aria-expanded={productsOpen}
                  className="
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    text-left
                    text-[15px]
                    font-bold
                    text-[#111827]
                    transition-all
                    hover:bg-white/60
                  "
                >
                  <span>Products</span>

                  <ChevronDown
                    size={18}
                    className={`
                      transition-transform
                      duration-200
                      ${productsOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* MOBILE PRODUCT LIST */}

                {productsOpen && (
                  <div
                    className="
                      mt-1
                      space-y-2
                      rounded-[16px]
                      border
                      border-[#b7bcc4]
                      bg-[#cbd0d6]
                      p-2
                    "
                  >
                    {/* CORPORATE */}

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
                        href={`${BASE_PATH}/solutions/corporate`}
                        onClick={closeMenus}
                        className="
                          flex
                          min-h-[66px]
                          items-center
                          justify-between
                          px-4
                          py-3
                          transition-all
                          hover:bg-white/60
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

                        <ArrowUpRight
                          size={17}
                          className="text-[#64748b]"
                        />
                      </Link>

                      <div
                        className="
                          border-t
                          border-[#c0c4ca]
                          px-2
                          py-2
                        "
                      >
                        {corporateProducts.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={closeMenus}
                            className="
                              flex
                              min-h-[44px]
                              items-center
                              rounded-lg
                              px-3
                              text-[14px]
                              font-semibold
                              text-[#334155]
                              transition-all
                              hover:bg-white/60
                              hover:text-[#111827]
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
                        overflow-hidden
                        rounded-[14px]
                        border
                        border-[#b5bac2]
                        bg-[#e0e2e6]
                      "
                    >
                      <Link
                        href={`${BASE_PATH}/solutions/industrial`}
                        onClick={closeMenus}
                        className="
                          flex
                          min-h-[66px]
                          items-center
                          justify-between
                          px-4
                          py-3
                          transition-all
                          hover:bg-white/60
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

                        <ArrowUpRight
                          size={17}
                          className="text-[#64748b]"
                        />
                      </Link>

                      <div
                        className="
                          border-t
                          border-[#c0c4ca]
                          px-2
                          py-2
                        "
                      >
                        {industrialProducts.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={closeMenus}
                            className="
                              flex
                              min-h-[44px]
                              items-center
                              rounded-lg
                              px-3
                              text-[14px]
                              font-semibold
                              text-[#334155]
                              transition-all
                              hover:bg-white/60
                              hover:text-[#111827]
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
                    mt-1
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    rounded-xl
                    px-4
                    text-left
                    text-[15px]
                    font-bold
                    text-[#111827]
                    transition-all
                    hover:bg-white/60
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
                    min-h-[48px]
                    w-full
                    items-center
                    rounded-xl
                    px-4
                    text-left
                    text-[15px]
                    font-bold
                    text-[#111827]
                    transition-all
                    hover:bg-white/60
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
                    min-h-[48px]
                    w-full
                    items-center
                    rounded-xl
                    px-4
                    text-left
                    text-[15px]
                    font-bold
                    text-[#111827]
                    transition-all
                    hover:bg-white/60
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
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#d89b32]
                    text-[13px]
                    font-extrabold
                    text-[#111827]
                    shadow-[0_8px_20px_rgba(216,155,50,0.18)]
                  "
                >
                  <Mail
                    size={16}
                    strokeWidth={2.5}
                  />

                  Request a Quote

                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          CONTENT OFFSET
      ====================================================== */}

      <div className="h-3" />
    </>
  );
}