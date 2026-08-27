"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
  X,
} from "lucide-react";

import "./navbar.css";

const BASE_PATH = "/rv-corporate-needs";

const corporateProducts = [
  {
    name: "IT Products",
    href: `${BASE_PATH}/solutions/corporate/it-products/`,
  },
  {
    name: "Pantry",
    href: `${BASE_PATH}/solutions/corporate/pantry/`,
  },
  {
    name: "Stationery",
    href: `${BASE_PATH}/solutions/corporate/stationery/`,
  },
  {
    name: "Hygiene",
    href: `${BASE_PATH}/solutions/corporate/hygiene/`,
  },
  {
    name: "Housekeeping",
    href: `${BASE_PATH}/solutions/corporate/housekeeping/`,
  },
  {
    name: "Corporate Gifting",
    href: `${BASE_PATH}/solutions/corporate/corporate-gifting/`,
  },
];

const industrialProducts = [
  {
    name: "Bearings",
    href: `${BASE_PATH}/solutions/industrial/bearings/`,
  },
  {
    name: "Cleanroom",
    href: `${BASE_PATH}/solutions/industrial/cleanroom-solutions/`,
  },
  {
    name: "ESD",
    href: `${BASE_PATH}/solutions/industrial/esd-solutions/`,
  },
  {
    name: "Fabrication",
    href: `${BASE_PATH}/solutions/industrial/fabrication-unit/`,
  },
  {
    name: "Garments",
    href: `${BASE_PATH}/solutions/industrial/garments-accessories/`,
  },
  {
    name: "Lubricants",
    href: `${BASE_PATH}/solutions/industrial/lubricants/`,
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

  const quoteLink = getQuoteLink();

  /*
   * Close menus when clicking outside
   */
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /*
   * Escape key
   */
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /*
   * Prevent background scrolling on mobile
   */
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("nav-mobile-open");
    } else {
      document.body.classList.remove("nav-mobile-open");
    }

    return () => {
      document.body.classList.remove("nav-mobile-open");
    };
  }, [mobileOpen]);

  function closeMenus() {
    setMobileOpen(false);
    setProductsOpen(false);
  }

  function goHome() {
    closeMenus();

    if (window.location.pathname === `${BASE_PATH}/`) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    window.location.href = `${BASE_PATH}/`;
  }

  function goToSection(section: string) {
    closeMenus();

    const isHome =
      window.location.pathname === BASE_PATH ||
      window.location.pathname === `${BASE_PATH}/`;

    if (!isHome) {
      window.location.href = `${BASE_PATH}/#${section}`;
      return;
    }

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function toggleMobile() {
    setMobileOpen((current) => !current);
    setProductsOpen(false);
  }

  function toggleProducts() {
    setProductsOpen((current) => !current);
  }

  return (
    <>
      <header
        ref={navbarRef}
        className="site-navbar"
      >
        <div className="navbar-shell">

          {/* LOGO */}

          <button
            type="button"
            className="navbar-brand"
            onClick={goHome}
            aria-label="Go to RV Corporate Needs home"
          >
            <span className="brand-mark">
              RV
            </span>

            <span className="brand-copy">
              <span className="brand-name">
                RV Corporate Needs
              </span>

              <span className="brand-tagline">
                Corporate & Industrial Procurement
              </span>
            </span>
          </button>

          {/* DESKTOP NAV */}

          <nav className="desktop-nav">

            <button
              type="button"
              onClick={goHome}
              className="nav-link"
            >
              Home
            </button>

            <div className="products-wrapper">

              <button
                type="button"
                onClick={toggleProducts}
                className={`nav-link products-button ${
                  productsOpen ? "active" : ""
                }`}
                aria-expanded={productsOpen}
              >
                Products

                <ChevronDown
                  size={15}
                  strokeWidth={2.3}
                  className={
                    productsOpen
                      ? "chevron rotated"
                      : "chevron"
                  }
                />
              </button>

              {productsOpen && (
                <div className="desktop-dropdown">

                  {/* CORPORATE */}

                  <div className="dropdown-column">

                    <a
                      href={`${BASE_PATH}/solutions/corporate/`}
                      onClick={closeMenus}
                      className="dropdown-heading"
                    >
                      <span>
                        <span className="dropdown-label">
                          CORPORATE
                        </span>

                        <span className="dropdown-title">
                          Workplace Solutions
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                      />
                    </a>

                    <div className="dropdown-items">
                      {corporateProducts.map(
                        (product) => (
                          <a
                            key={product.name}
                            href={product.href}
                            onClick={closeMenus}
                            className="dropdown-item"
                          >
                            <span>
                              {product.name}
                            </span>

                            <ArrowUpRight
                              size={13}
                            />
                          </a>
                        )
                      )}
                    </div>
                  </div>

                  {/* INDUSTRIAL */}

                  <div className="dropdown-column">

                    <a
                      href={`${BASE_PATH}/solutions/industrial/`}
                      onClick={closeMenus}
                      className="dropdown-heading"
                    >
                      <span>
                        <span className="dropdown-label">
                          INDUSTRIAL
                        </span>

                        <span className="dropdown-title">
                          Industrial Solutions
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                      />
                    </a>

                    <div className="dropdown-items">
                      {industrialProducts.map(
                        (product) => (
                          <a
                            key={product.name}
                            href={product.href}
                            onClick={closeMenus}
                            className="dropdown-item"
                          >
                            <span>
                              {product.name}
                            </span>

                            <ArrowUpRight
                              size={13}
                            />
                          </a>
                        )
                      )}
                    </div>
                  </div>

                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                goToSection("brands")
              }
              className="nav-link"
            >
              Brands
            </button>

            <button
              type="button"
              onClick={() =>
                goToSection("about")
              }
              className="nav-link"
            >
              About
            </button>

            <button
              type="button"
              onClick={() =>
                goToSection("contact")
              }
              className="nav-link"
            >
              Contact
            </button>

          </nav>

          {/* DESKTOP QUOTE */}

          <a
            href={quoteLink}
            className="quote-button desktop-quote"
          >
            <Mail
              size={15}
              strokeWidth={2.5}
            />

            <span>
              Request a Quote
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={2.5}
            />
          </a>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={toggleMobile}
            className="mobile-menu-button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}

        {mobileOpen && (
          <div className="mobile-panel">

            <button
              type="button"
              onClick={goHome}
              className="mobile-nav-link"
            >
              Home
            </button>

            <button
              type="button"
              onClick={toggleProducts}
              className="mobile-nav-link"
              aria-expanded={productsOpen}
            >
              <span>
                Products
              </span>

              <ChevronDown
                size={18}
                className={
                  productsOpen
                    ? "chevron rotated"
                    : "chevron"
                }
              />
            </button>

            {productsOpen && (
              <div className="mobile-products">

                {/* CORPORATE */}

                <div className="mobile-product-group">

                  <a
                    href={`${BASE_PATH}/solutions/corporate/`}
                    onClick={closeMenus}
                    className="mobile-category"
                  >
                    <span>
                      <span className="dropdown-label">
                        CORPORATE
                      </span>

                      <span className="mobile-category-title">
                        Workplace Solutions
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                    />
                  </a>

                  {corporateProducts.map(
                    (product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        onClick={closeMenus}
                        className="mobile-product"
                      >
                        {product.name}
                      </a>
                    )
                  )}

                </div>

                {/* INDUSTRIAL */}

                <div className="mobile-product-group">

                  <a
                    href={`${BASE_PATH}/solutions/industrial/`}
                    onClick={closeMenus}
                    className="mobile-category"
                  >
                    <span>
                      <span className="dropdown-label">
                        INDUSTRIAL
                      </span>

                      <span className="mobile-category-title">
                        Industrial Solutions
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                    />
                  </a>

                  {industrialProducts.map(
                    (product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        onClick={closeMenus}
                        className="mobile-product"
                      >
                        {product.name}
                      </a>
                    )
                  )}

                </div>

              </div>
            )}

            <button
              type="button"
              onClick={() =>
                goToSection("brands")
              }
              className="mobile-nav-link"
            >
              Brands
            </button>

            <button
              type="button"
              onClick={() =>
                goToSection("about")
              }
              className="mobile-nav-link"
            >
              About
            </button>

            <button
              type="button"
              onClick={() =>
                goToSection("contact")
              }
              className="mobile-nav-link"
            >
              Contact
            </button>

            <a
              href={quoteLink}
              onClick={closeMenus}
              className="quote-button mobile-quote"
            >
              <Mail
                size={16}
                strokeWidth={2.5}
              />

              <span>
                Request a Quote
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
              />
            </a>

          </div>
        )}
      </header>

      {/* NAVBAR SPACE */}

      <div className="navbar-spacer" />
    </>
  );
}