import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ChevronRight,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";

// import Breadcrumb from "../components/Breadcrumb";
import { specialties } from "../data/navigation";

/* =========================================================
   SETTINGS

   Desktop:
   4 columns
   Initial = 4 rows = 16 cards
   Each View More = 2 rows = 8 cards
========================================================= */

const INITIAL_VISIBLE = 16;
const LOAD_MORE_COUNT = 8;

export default function Specialities() {
  const [visibleCount, setVisibleCount] =
    useState(INITIAL_VISIBLE);

  const visibleSpecialities = specialties.slice(
    0,
    visibleCount
  );

  const allVisible =
    visibleCount >= specialties.length;

  const handleViewMore = () => {
    if (allVisible) {
      /* Collapse back to first 4 rows */
      setVisibleCount(INITIAL_VISIBLE);

      /* optional smooth scroll */
      setTimeout(() => {
        document
          .getElementById("all-specialities")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);

      return;
    }

    /* Show next 2 desktop rows = 8 cards */
    setVisibleCount((current) =>
      Math.min(
        current + LOAD_MORE_COUNT,
        specialties.length
      )
    );
  };

  return (
    <main className="bg-white">


      {/* <Breadcrumb current="Specialities" /> */}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#edf7f6]">

        <div
          className="
            relative
            max-w-[1450px]
            mx-auto

            px-3
            sm:px-4
            lg:px-6

            py-4
            md:py-6
            lg:py-8
          "
        >
          <div
            className="
              max-w-[760px]
              mx-auto
              text-center
            "
          >
            {/* HERO ICON */}

            <div
              className="
                w-[58px]
                h-[58px]

                mx-auto

                rounded-full

                bg-white

                border
                border-[#e1eceb]

                shadow-[0_8px_25px_rgba(6,75,80,0.08)]

                flex
                items-center
                justify-center
              "
            >
              <Stethoscope
                size={27}
                strokeWidth={1.6}
                className="text-[#C8942E]"
              />
            </div>

            <p
              className="
                mt-5

                text-[11px]
                md:text-[12px]

                uppercase

                tracking-[0.18em]

                font-semibold

                text-[#E85C91]
              "
            >
              Akeso Global Medical Services
            </p>

            <h1
              className="
                mt-2

                text-[31px]
                sm:text-[36px]
                md:text-[42px]
                lg:text-[46px]

                leading-tight

                font-semibold

                text-[#064B50]
              "
            >
              All Specialities
            </h1>

            <p
              className="
                mt-4

                max-w-[680px]
                mx-auto

                text-[14px]
                md:text-[15px]

                leading-7

                text-[#667576]
              "
            >
              Explore our comprehensive range of medical
              specialities, supported by experienced
              doctors, advanced technology and
              patient-focused care.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL SPECIALITIES
      ===================================================== */}

      <section
        id="all-specialities"
        className="
          scroll-mt-[100px]
          py-14
          md:py-18
          lg:py-20
          bg-[#fbfcfc]
        "
      >
        <div
          className="
            max-w-[1500px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              SECTION HEADING
          ================================================= */}

          <div
            className="
              max-w-[720px]
              mx-auto

              text-center

              mb-9
              md:mb-11
            "
          >
            <p
              className="
                text-[11px]
                md:text-[12px]

                uppercase

                tracking-[0.18em]

                font-semibold

                text-[#C8942E]
              "
            >
              Centres of Excellence
            </p>

            <h2
              className="
                mt-2

                text-[28px]
                sm:text-[31px]
                md:text-[36px]

                font-semibold

                text-[#064B50]
              "
            >
              Our Specialities
            </h2>

            <p
              className="
                mt-3

                max-w-[650px]
                mx-auto

                text-[14px]
                md:text-[15px]

                leading-7

                text-[#667576]
              "
            >
              Choose a speciality to explore doctors,
              treatments, technologies and healthcare
              services available at Akeso Global Medical
              Services.
            </p>
          </div>

          {/* =================================================
              CARDS

              MOBILE = 1
              TABLET = 2
              SMALL DESKTOP = 3
              LARGE DESKTOP = 4
          ================================================= */}

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4

              gap-5
              md:gap-6
            "
          >
            {visibleSpecialities.map(
              ([name, slug, Icon]) => (
                <SpecialityCard
                  key={slug}
                  name={name}
                  slug={slug}
                  Icon={Icon}
                />
              )
            )}
          </div>

          {/* =================================================
              VIEW MORE / VIEW LESS
          ================================================= */}

          {specialties.length >
            INITIAL_VISIBLE && (
            <div
              className="
                mt-10
                md:mt-12

                flex
                flex-col
                items-center
                justify-center
              "
            >
              {/* COUNT */}

              <p
                className="
                  mb-3

                  text-[12px]

                  text-[#7b8888]
                "
              >
                Showing{" "}
                <span className="font-semibold text-[#064B50]">
                  {Math.min(
                    visibleCount,
                    specialties.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-[#064B50]">
                  {specialties.length}
                </span>{" "}
                specialities
              </p>

              <button
                type="button"
                onClick={handleViewMore}
                className="
                  group

                  min-h-[46px]

                  px-7

                  rounded-full

                  border
                  border-[#E85C91]

                  bg-white

                  text-[14px]
                  font-semibold

                  text-[#E85C91]

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  transition-all
                  duration-300

                  hover:bg-[#E85C91]
                  hover:text-white

                  hover:shadow-[0_8px_25px_rgba(232,92,145,0.20)]
                "
              >
                {allVisible
                  ? "View Less"
                  : "View More"}

                {allVisible ? (
                  <ArrowUp
                    size={16}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-[2px]
                    "
                  />
                ) : (
                  <ArrowDown
                    size={16}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-y-[2px]
                    "
                  />
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   REUSABLE SPECIALITY CARD
========================================================= */

function SpecialityCard({
  name,
  slug,
  Icon,
}) {
  return (
    <Link
      to={`/speciality/${slug}`}
      className="
        group
        relative

        min-h-[225px]

        rounded-[16px]

        bg-white

        border
        border-[#e5eceb]

        px-5
        py-6

        overflow-hidden

        flex
        flex-col
        items-center
        justify-center

        text-center

        shadow-[0_7px_24px_rgba(6,75,80,0.055)]

        transition-all
        duration-300

        hover:-translate-y-[3px]

        hover:border-[#E85C91]/35

        hover:shadow-[0_14px_34px_rgba(6,75,80,0.11)]
      "
    >
      {/* =====================================================
          DOT BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.14]

          pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(#C8942E 1px, transparent 1px)",

          backgroundSize: "18px 18px",
        }}
      />

      {/* =====================================================
          ICON
      ===================================================== */}

      <div
        className="
          relative
          z-10

          w-[64px]
          h-[64px]

          rounded-full

          bg-[#edf7f6]

          flex
          items-center
          justify-center

          transition-all
          duration-300

          group-hover:bg-[#064B50]
        "
      >
        {Icon && (
          <Icon
            size={31}
            strokeWidth={1.5}
            className="
              text-[#C8942E]

              transition-colors
              duration-300

              group-hover:text-white
            "
          />
        )}
      </div>

      {/* =====================================================
          NAME
      ===================================================== */}

      <h3
        className="
          relative
          z-10

          mt-4

          min-h-[44px]

          max-w-[260px]

          flex
          items-center
          justify-center

          text-[16px]
          md:text-[17px]

          leading-[21px]
          md:leading-[22px]

          font-semibold

          text-[#263F41]

          transition-colors
          duration-300

          group-hover:text-[#064B50]
        "
      >
        {name}
      </h3>

      {/* =====================================================
          KNOW MORE
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mt-2

          flex
          items-center
          justify-center

          gap-[7px]

          text-[13px]
          md:text-[14px]

          font-medium

          text-[#064B50]
        "
      >
        Know More

        {/* SMALL ARROW CIRCLE */}

        <span
          className="
            w-[25px]
            h-[25px]

            rounded-full

            bg-[#E85C91]

            text-white

            flex
            items-center
            justify-center

            transition-all
            duration-300

            group-hover:bg-[#C8942E]
            group-hover:translate-x-[2px]
          "
        >
          <ChevronRight
            size={13}
            strokeWidth={2.3}
          />
        </span>
      </div>
    </Link>
  );
}