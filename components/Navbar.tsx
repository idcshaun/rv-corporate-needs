"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
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
   QUOTE EMAIL
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
   NAVBAR
========================================================= */

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const quoteLink = getQuoteLink();

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
     MOBILE SCROLL LOCK
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
     HOME
  ======================================================= */

  function handleHome() {
    closeMenus();

    const path = window.location.pathname;

    if (path === BASE_PATH || path === `${BASE_PATH}/`) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = `${BASE_PATH}/`;
    }
  }

  /* =======================================================
     SECTION LINKS
  ======================================================= */

  function goToSection(id: string) {
    closeMenus();

    const path = window.location.pathname;

    const isHome =
      path === BASE_PATH || path === `${BASE_PATH}/`;

    if (!isHome) {
      window.location.href = `${BASE_PATH}/#${id}`;
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  /* =======================================================
     PRODUCTS TOGGLE
  ======================================================= */

  function toggleProducts() {
    setProductsOpen((current) => !current);
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <header className="sticky top-0 z-[100] w-full px-3 pt-3 sm:px-5 lg:px-6">
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
          {/* =================================================
              TOP NAVBAR
          ================================================= */}

          <div className="flex min-h-[68px] items-center px-3 sm:px-5 lg:px-6">
            {/* =================================================
                LOGO
            ================================================= */}

            <button
              type="button"
              onClick={handleHome}
              aria-label="Go to home"
              className="
                flex
                shrink-0
                items-center
                gap-3
                rounded-xl
                text-left
                outline-none
              "
            >
              {/* RV LOGO */}

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

              {/* BRAND */}

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
                DESKTOP NAV
            ================================================= */}

            <nav className="ml-auto hidden items-center gap-1 lg:flex">
              {/* HOME */}

              <button
                type="button"
                onClick={handleHome}
                className="
                  flex
                  h-10
                  items-center
                  rounded-xl
                  px-4
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition
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
                    gap-1.5
                    rounded-xl
                    px-4
                    text-[13px]
                    font-bold
                    text-[#111827]
                    transition
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

                {/* =================================================
                    DESKTOP PRODUCTS DROPDOWN
                ================================================= */}

                {productsOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[48px]
                      w-[620px]
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

                      <ProductGroup
                        title="Corporate"
                        subtitle="Workplace Solutions"
                        categoryHref={`${BASE_PATH}/solutions/corporate`}
                        products={corporateProducts}
                        onNavigate={closeMenus}
                      />

                      {/* INDUSTRIAL */}

                      <ProductGroup
                        title="Industrial"
                        subtitle="Industrial Solutions"
                        categoryHref={`${BASE_PATH}/solutions/industrial`}
                        products={industrialProducts}
                        onNavigate={closeMenus}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* BRANDS */}

              <button
                type="button"
                onClick={() => goToSection("brands")}
                className="
                  flex
                  h-10
                  items-center
                  rounded-xl
                  px-4
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition
                  hover:bg-white/40
                "
              >
                Brands
              </button>

              {/* ABOUT */}

              <button
                type="button"
                onClick={() => goToSection("about")}
                className="
                  flex
                  h-10
                  items-center
                  rounded-xl
                  px-4
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition
                  hover:bg-white/40
                "
              >
                About
              </button>

              {/* CONTACT */}

              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="
                  flex
                  h-10
                  items-center
                  rounded-xl
                  px-4
                  text-[13px]
                  font-bold
                  text-[#111827]
                  transition
                  hover:bg-white/40
                "
              >
                Contact
              </button>

              {/* QUOTE */}

              <a
                href={quoteLink}
                className="
                  ml-2
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
                  transition
                  hover:-translate-y-0.5
                  hover:bg-[#e5ab49]
                "
              >
                <Mail size={14} strokeWidth={2.5} />

                Request a Quote

                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                />
              </a>
            </nav>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                setMobileOpen((current) => !current);
                setProductsOpen(false);
              }}
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              className="
                ml-auto
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#aeb4bd]
                bg-[#111827]
                text-white
                shadow-[0_5px_15px_rgba(15,23,42,0.15)]
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

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

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
                  max-h-[calc(100vh-100px)]
                  overflow-y-auto
                  rounded-[18px]
                  border
                  border-[#b3b8c0]
                  bg-[#d5d8dd]
                  p-2
                "
              >
                {/* HOME */}

                <MobileNavButton
                  label="Home"
                  onClick={handleHome}
                />

                {/* PRODUCTS */}

                <button
                  type="button"
                  onClick={toggleProducts}
                  aria-expanded={productsOpen}
                  className="
                    flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    text-left
                    text-[15px]
                    font-bold
                    text-[#111827]
                    transition
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

                {/* MOBILE PRODUCTS */}

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
                    <MobileProductGroup
                      title="Corporate"
                      subtitle="Workplace Solutions"
                      categoryHref={`${BASE_PATH}/solutions/corporate`}
                      products={corporateProducts}
                      onNavigate={closeMenus}
                    />

                    <MobileProductGroup
                      title="Industrial"
                      subtitle="Industrial Solutions"
                      categoryHref={`${BASE_PATH}/solutions/industrial`}
                      products={industrialProducts}
                      onNavigate={closeMenus}
                    />
                  </div>
                )}

                {/* BRANDS */}

                <MobileNavButton
                  label="Brands"
                  onClick={() => goToSection("brands")}
                />

                {/* ABOUT */}

                <MobileNavButton
                  label="About"
                  onClick={() => goToSection("about")}
                />

                {/* CONTACT */}

                <MobileNavButton
                  label="Contact"
                  onClick={() => goToSection("contact")}
                />

                {/* QUOTE */}

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
          SMALL PAGE OFFSET
      ====================================================== */}

      <div className="h-3" />
    </>
  );
}

/* =========================================================
   DESKTOP PRODUCT GROUP
========================================================= */

function ProductGroup({
  title,
  subtitle,
  categoryHref,
  products,
  onNavigate,
}: {
  title: string;
  subtitle: string;
  categoryHref: string;
  products: {
    name: string;
    href: string;
  }[];
  onNavigate: () => void;
}) {
  return (
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
        href={categoryHref}
        onClick={onNavigate}
        className="
          group
          flex
          items-center
          justify-between
          rounded-xl
          px-3
          py-3
          transition
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
            {title}
          </p>

          <p
            className="
              mt-1
              text-[12px]
              font-extrabold
              text-[#111827]
            "
          >
            {subtitle}
          </p>
        </div>

        <ArrowUpRight
          size={17}
          className="
            text-[#64748b]
            transition
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-[#b47716]
          "
        />
      </Link>

      <div className="mt-1 space-y-1">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            onClick={onNavigate}
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
              transition
              hover:bg-white/60
              hover:text-[#111827]
            "
          >
            <span>{product.name}</span>

            <ArrowUpRight
              size={13}
              className="
                opacity-0
                transition
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:opacity-100
              "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE NAV BUTTON
========================================================= */

function MobileNavButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        min-h-[50px]
        w-full
        items-center
        rounded-xl
        px-4
        text-left
        text-[15px]
        font-bold
        text-[#111827]
        transition
        hover:bg-white/60
      "
    >
      {label}
    </button>
  );
}

/* =========================================================
   MOBILE PRODUCT GROUP
========================================================= */

function MobileProductGroup({
  title,
  subtitle,
  categoryHref,
  products,
  onNavigate,
}: {
  title: string;
  subtitle: string;
  categoryHref: string;
  products: {
    name: string;
    href: string;
  }[];
  onNavigate: () => void;
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[14px]
        border
        border-[#b5bac2]
        bg-[#e0e2e6]
      "
    >
      {/* CATEGORY */}

      <Link
        href={categoryHref}
        onClick={onNavigate}
        className="
          flex
          min-h-[66px]
          items-center
          justify-between
          px-4
          py-3
          transition
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
            {title}
          </div>

          <div
            className="
              mt-1
              text-[14px]
              font-extrabold
              text-[#111827]
            "
          >
            {subtitle}
          </div>
        </div>

        <ArrowUpRight
          size={17}
          className="text-[#64748b]"
        />
      </Link>

      {/* PRODUCTS */}

      <div
        className="
          border-t
          border-[#c0c4ca]
          px-2
          py-2
        "
      >
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            onClick={onNavigate}
            className="
              flex
              min-h-[44px]
              items-center
              rounded-lg
              px-3
              text-[14px]
              font-semibold
              text-[#334155]
              transition
              hover:bg-white/60
              hover:text-[#111827]
            "
          >
            {product.name}
          </Link>
        ))}
      </div>
    </div>
  );
}