import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  specialties,
} from "../../data/navigation";

export default function HomeSpecialities() {
  /*
    Desktop:
    4 columns x 2 rows = 8 cards

    Remaining specialities:
    View All Specialities -> /specialities
  */

  const homeSpecialities = specialties.slice(0, 8);

  return (
    <section className="py-16 md:py-20 bg-[#f5f8f7]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================
            CENTER HEADING
        ========================= */}

        <div className="max-w-[720px] mx-auto text-center mb-10">
          <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#E85C91]">
            Centres of Excellence
          </p>

          <h2 className="mt-2 text-[30px] md:text-[38px] font-semibold text-[#064B50]">
            Our Specialities
          </h2>

          <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-[#667576]">
            Expert care across medical specialities,
            combining clinical excellence, advanced
            technology and compassionate patient support.
          </p>
        </div>

        {/* =========================
            8 SEPARATE CARDS
        ========================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            md:gap-6
          "
        >
          {homeSpecialities.map(
            ([name, slug, Icon]) => (
              <Link
                key={slug}
                to={`/speciality/${slug}`}
                className="
                  group
                  relative
                  min-h-[220px]
                  rounded-2xl
                  bg-white
                  border
                  border-[#e5eceb]
                  px-5
                  py-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  overflow-hidden

                  shadow-[0_8px_26px_rgba(6,75,80,0.06)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#E85C91]/40
                  hover:shadow-[0_16px_36px_rgba(6,75,80,0.12)]
                "
              >
                {/* subtle dotted design */}

                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#C8942E 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10

                    w-16
                    h-16

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
                      size={33}
                      strokeWidth={1.4}
                      className="
                        text-[#C8942E]
                        transition-colors
                        group-hover:text-white
                      "
                    />
                  )}
                </div>

                {/* NAME */}

                <h3
                  className="
                    relative
                    z-10

                    mt-4

                    min-h-[44px]

                    flex
                    items-center
                    justify-center

                    text-[16px]
                    leading-[21px]
                    font-semibold
                    text-[#263F41]

                    group-hover:text-[#064B50]
                  "
                >
                  {name}
                </h3>

                {/* KNOW MORE */}

                <div
                  className="
                    relative
                    z-10

                    mt-3

                    flex
                    items-center
                    justify-center
                    gap-2

                    text-[13px]
                    font-medium
                    text-[#064B50]
                  "
                >
                  Know More

                  <span
                    className="
                      w-8
                      h-8

                      rounded-full

                      bg-[#E85C91]
                      text-white

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      group-hover:bg-[#C8942E]
                      group-hover:translate-x-1
                    "
                  >
                    <ChevronRight size={15} />
                  </span>
                </div>
              </Link>
            )
          )}
        </div>

        {/* =========================
            VIEW ALL
        ========================= */}

        <div className="mt-10 flex justify-center">
          <Link
            to="/specialities"
            className="
              group

              min-h-[48px]

              px-7

              rounded-lg

              border
              border-[#E85C91]

              inline-flex
              items-center
              justify-center
              gap-2

              text-[14px]
              font-semibold
              text-[#E85C91]

              bg-white

              transition-all
              duration-300

              hover:bg-[#E85C91]
              hover:text-white
              hover:shadow-lg
            "
          >
            View All Specialities

            <ArrowRight
              size={17}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}