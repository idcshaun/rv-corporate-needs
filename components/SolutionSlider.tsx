"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Sparkles,
} from "lucide-react";

type Solution = {
  name: string;
  description: string;
  href: string;
};

const corporateSolutions: Solution[] = [
  {
    name: "IT Products",
    description:
      "Technology products and everyday IT requirements for modern workplaces.",
    href: "/solutions/corporate/it-products",
  },
  {
    name: "Pantry",
    description:
      "Pantry supplies and everyday essentials for offices and workplaces.",
    href: "/solutions/corporate/pantry",
  },
  {
    name: "Stationery",
    description:
      "Workplace stationery and office essentials for everyday business needs.",
    href: "/solutions/corporate/stationery",
  },
  {
    name: "Hygiene",
    description:
      "Hand hygiene, washroom, cleaning and workplace hygiene essentials.",
    href: "/solutions/corporate/hygiene",
  },
  {
    name: "Housekeeping",
    description:
      "Housekeeping and facility-maintenance supplies for professional workplaces.",
    href: "/solutions/corporate/housekeeping",
  },
  {
    name: "Corporate Gifting",
    description:
      "Thoughtful corporate gifting solutions for clients, teams and occasions.",
    href: "/solutions/corporate/corporate-gifting",
  },
  {
    name: "Garments",
    description:
      "Workwear and garment requirements for organisations and teams.",
    href: "/solutions/corporate/garments",
  },
];

const industrialSolutions: Solution[] = [
  {
    name: "Bearings",
    description:
      "Industrial bearing solutions for machinery, maintenance and production requirements.",
    href: "/solutions/industrial/bearings",
  },
  {
    name: "Cleanroom",
    description:
      "Cleanroom products and controlled-environment essentials for industrial operations.",
    href: "/solutions/industrial/cleanroom",
  },
  {
    name: "ESD",
    description:
      "Electrostatic discharge protection products for sensitive industrial environments.",
    href: "/solutions/industrial/esd",
  },
  {
    name: "Fabrication",
    description:
      "Fabrication-related products and requirements supporting industrial operations.",
    href: "/solutions/industrial/fabrication",
  },
  {
    name: "Garments",
    description:
      "Industrial workwear and protective garment requirements for operational teams.",
    href: "/solutions/industrial/garments",
  },
  {
    name: "Lubricants",
    description:
      "Industrial lubrication products for machinery, maintenance and operational needs.",
    href: "/solutions/industrial/lubricants",
  },
];

const allSolutions = {
  Corporate: corporateSolutions,
  Industrial: industrialSolutions,
};

export default function SolutionsSlider() {
  const [activeTab, setActiveTab] = useState<
    "Corporate" | "Industrial"
  >("Corporate");

  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const solutions = allSolutions[activeTab];

  /*
   * Duplicate the cards so the track can continuously
   * move without a visible ending.
   */
  const duplicatedSolutions = [...solutions, ...solutions];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationFrame: number;
    let position = 0;

    const speed = 0.45;

    const animate = () => {
      if (!isPaused) {
        position += speed;

        const halfWidth = track.scrollWidth / 2;

        if (position >= halfWidth) {
          position = 0;
        }

        track.style.transform = `translate3d(-${position}px, 0, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [activeTab, isPaused]);

  const move = (direction: "left" | "right") => {
    const track = trackRef.current;

    if (!track) return;

    const amount = 350;

    track.style.transition = "transform 450ms ease";

    const currentTransform =
      new DOMMatrix(getComputedStyle(track).transform);

    const currentX = currentTransform.m41;

    const nextX =
      direction === "right"
        ? currentX - amount
        : currentX + amount;

    track.style.transform = `translate3d(${nextX}px, 0, 0)`;

    window.setTimeout(() => {
      track.style.transition = "";
    }, 500);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-white/10
        bg-[#0b1220]
        py-24
        lg:py-32
      "
    >
      {/* Ambient glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d89b32]/[0.055]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          right-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/[0.025]
          blur-[140px]
        "
      />

      <div className="relative z-10">
        {/* Header */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-[#d89b32]"
                />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#d89b32]
                  "
                >
                  What We Supply
                </p>
              </div>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-bold
                  leading-[1]
                  tracking-[-0.055em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Everything your
                <br />
                <span className="text-white/45">
                  business needs.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/35
                  sm:text-base
                "
              >
                From everyday corporate essentials to
                specialised industrial requirements, RV
                Corporate Needs brings your procurement
                needs together.
              </p>
            </div>

            {/* Navigation */}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move("left")}
                aria-label="Previous solutions"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  text-white/35
                  transition-all
                  duration-300
                  hover:border-[#d89b32]/30
                  hover:bg-[#d89b32]/10
                  hover:text-[#d89b32]
                "
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={() => move("right")}
                aria-label="Next solutions"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  text-white/35
                  transition-all
                  duration-300
                  hover:border-[#d89b32]/30
                  hover:bg-[#d89b32]/10
                  hover:text-[#d89b32]
                "
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* Category switcher */}

          <div
            className="
              mt-10
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              p-1
              backdrop-blur-xl
            "
          >
            {(
              Object.keys(allSolutions) as Array<
                keyof typeof allSolutions
              >
            ).map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-[#d89b32] text-[#0b1220] shadow-[0_8px_30px_rgba(216,155,50,0.12)]"
                        : "text-white/35 hover:text-white/70"
                    }
                  `}
                >
                  {tab === "Corporate" ? (
                    <Building2 size={14} />
                  ) : (
                    <Factory size={14} />
                  )}

                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Moving cards */}

        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left fade */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-20
              bg-gradient-to-r
              from-[#0b1220]
              to-transparent
              sm:w-32
              lg:w-48
            "
          />

          {/* Right fade */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-20
              bg-gradient-to-l
              from-[#0b1220]
              to-transparent
              sm:w-32
              lg:w-48
            "
          />

          <div
            ref={trackRef}
            className="
              flex
              w-max
              gap-4
              pl-6
              will-change-transform
              lg:pl-8
            "
          >
            {duplicatedSolutions.map(
              (solution, index) => (
                <Link
                  key={`${solution.name}-${index}`}
                  href={solution.href}
                  className="
                    group
                    relative
                    block
                    w-[285px]
                    shrink-0
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#d89b32]/25
                    hover:bg-white/[0.045]
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
                    sm:w-[330px]
                    lg:w-[360px]
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
                      h-44
                      w-44
                      rounded-full
                      bg-[#d89b32]/[0.045]
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Card top */}

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
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/15
                        transition-colors
                        group-hover:text-[#d89b32]/60
                      "
                    >
                      {String(
                        (index % solutions.length) + 1
                      ).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        text-white/15
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#d89b32]
                      "
                    />
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      relative
                      mt-10
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
                    {activeTab === "Corporate" ? (
                      <Building2
                        size={20}
                        strokeWidth={1.6}
                        className="
                          text-[#d89b32]
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    ) : (
                      <Factory
                        size={20}
                        strokeWidth={1.6}
                        className="
                          text-[#d89b32]
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    )}
                  </div>

                  {/* Content */}

                  <h3
                    className="
                      relative
                      mt-7
                      text-xl
                      font-bold
                      tracking-[-0.025em]
                      text-white
                    "
                  >
                    {solution.name}
                  </h3>

                  <p
                    className="
                      relative
                      mt-3
                      min-h-[72px]
                      text-sm
                      leading-6
                      text-white/35
                    "
                  >
                    {solution.description}
                  </p>

                  {/* Bottom */}

                  <div
                    className="
                      relative
                      mt-7
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/[0.07]
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/20
                        transition-colors
                        group-hover:text-[#d89b32]
                      "
                    >
                      Explore Solution
                    </span>

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.025]
                        transition-all
                        group-hover:border-[#d89b32]/20
                        group-hover:bg-[#d89b32]/10
                      "
                    >
                      <ArrowUpRight
                        size={13}
                        className="
                          text-white/25
                          transition-colors
                          group-hover:text-[#d89b32]
                        "
                      />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Bottom information */}

        <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/15
              "
            >
              {isPaused
                ? "Paused"
                : "Hover to pause · Explore our solutions"}
            </p>

            <Link
              href="/solutions"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white/35
                transition-colors
                hover:text-[#d89b32]
              "
            >
              View all solutions

              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}