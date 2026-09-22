import {
  CalendarDays,
  ChevronRight,
  Search,
  Stethoscope,
} from "lucide-react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  specialties,
} from "../data/navigation";

import Breadcrumb from "../components/Breadcrumb";

export default function SpecialityDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const speciality = specialties.find(
    (item) => item[1] === slug
  );

  if (!speciality) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-[30px] font-semibold text-[#064B50]">
            Speciality Not Found
          </h1>

          <Link
            to="/specialities"
            className="inline-flex mt-5 text-[#E85C91] font-medium"
          >
            View All Specialities
          </Link>
        </div>
      </main>
    );
  }

  const [name, , Icon] = speciality;

  return (
    <main className="bg-white">
      {/* =========================
          BREADCRUMB
      ========================= */}

      <Breadcrumb
        parent="Specialities"
        parentPath="/specialities"
        current={name}
      />

      {/* =========================
          SPECIALITY HERO
      ========================= */}

      <section className="relative bg-[#f8fbfa] overflow-visible">
        {/* decorative background */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-28 top-8 w-[520px] h-[260px] rounded-[50%] border border-[#E85C91]/15 rotate-[-8deg]" />

          <div className="absolute -right-32 top-6 w-[500px] h-[280px] rounded-[50%] border border-[#C8942E]/15 rotate-[10deg]" />
        </div>

        <div
          className="
            relative

            max-w-[1450px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8

            pt-12
            pb-24

            md:pt-16
            md:pb-28
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_300px_1fr]
              gap-8
              lg:gap-12

              items-center
            "
          >
            {/* LEFT */}

            <div className="text-center lg:text-left">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#C8942E]">
                World-Class
              </p>

              <h1
                className="
                  mt-2

                  text-[34px]
                  md:text-[44px]

                  leading-tight
                  font-semibold

                  text-[#064B50]
                "
              >
                {name}
              </h1>

              <p
                className="
                  mt-4

                  max-w-[470px]

                  mx-auto
                  lg:mx-0

                  text-[14px]
                  md:text-[15px]

                  leading-7

                  text-[#667576]
                "
              >
                Comprehensive, patient-focused care
                supported by experienced specialists,
                modern technology and personalised
                treatment planning.
              </p>
            </div>

            {/* CENTER ICON */}

            <div className="flex justify-center">
              <div
                className="
                  w-[190px]
                  h-[190px]

                  md:w-[220px]
                  md:h-[220px]

                  rounded-full

                  bg-white

                  border
                  border-[#C8942E]/25

                  shadow-[0_18px_45px_rgba(6,75,80,0.10)]

                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-[145px]
                    h-[145px]

                    md:w-[165px]
                    md:h-[165px]

                    rounded-full

                    bg-[#edf7f6]

                    flex
                    items-center
                    justify-center
                  "
                >
                  {Icon && (
                    <Icon
                      size={78}
                      strokeWidth={1.15}
                      className="text-[#C8942E]"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="
                max-w-[380px]
                w-full

                mx-auto
                lg:ml-auto

                bg-white

                rounded-2xl

                border
                border-[#e6eceb]

                shadow-[0_14px_40px_rgba(6,75,80,0.08)]

                p-6
              "
            >
              <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[#E85C91]">
                Need Assistance?
              </p>

              <h2 className="mt-2 text-[21px] font-semibold text-[#064B50]">
                Connect With Our Team
              </h2>

              <p className="mt-2 text-[13px] leading-6 text-[#667576]">
                Our care team can help you find the
                right specialist and appointment.
              </p>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="
                  mt-5
                  w-full
                  h-11

                  rounded-lg

                  bg-[#064B50]

                  text-white
                  text-[14px]
                  font-semibold

                  flex
                  items-center
                  justify-center
                  gap-2

                  hover:bg-[#0B6B70]
                "
              >
                <CalendarDays
                  size={17}
                  className="text-[#C8942E]"
                />

                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            FLOATING SEARCH BAR
        ========================= */}

        <div
          className="
            absolute

            left-1/2
            -translate-x-1/2

            bottom-0
            translate-y-1/2

            z-20

            w-full
            max-w-[950px]

            px-4
          "
        >
          <div
            className="
              bg-white

              rounded-xl

              shadow-[0_16px_45px_rgba(6,75,80,0.14)]

              overflow-hidden

              grid
              grid-cols-1
              md:grid-cols-[1fr_190px_210px]
            "
          >
            <div
              className="
                min-h-[68px]

                px-5

                flex
                items-center
                gap-3
              "
            >
              <Search
                size={19}
                className="text-[#E85C91]"
              />

              <input
                type="text"
                placeholder="Search for Specialities"
                className="
                  w-full

                  outline-none

                  text-[14px]

                  text-[#263F41]

                  placeholder:text-[#9aa5a5]
                "
              />
            </div>

            <button
              type="button"
              onClick={() => {
                const token =
                  localStorage.getItem("akeso_token");

                if (token) {
                  navigate("/doctors");
                } else {
                  navigate(
                    "/login?redirect=/doctors"
                  );
                }
              }}
              className="
                min-h-[68px]

                bg-[#064B50]

                text-white
                font-semibold

                flex
                items-center
                justify-center
                gap-2

                hover:bg-[#0B6B70]
              "
            >
              <Stethoscope
                size={18}
                className="text-[#C8942E]"
              />

              Find a Doctor
            </button>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                min-h-[68px]

                bg-white

                border-t
                md:border-t-0
                md:border-l
                border-[#e6eceb]

                text-[#064B50]
                font-semibold

                flex
                items-center
                justify-center
                gap-2

                hover:bg-[#fff3f7]
                hover:text-[#E85C91]
              "
            >
              <CalendarDays
                size={18}
                className="text-[#C8942E]"
              />

              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section className="pt-24 md:pt-28 pb-14 md:pb-16">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#E85C91]">
            Centre of Excellence
          </p>

          <h2 className="mt-2 text-[27px] md:text-[34px] font-semibold text-[#064B50]">
            About {name}
          </h2>

          <p className="mt-4 max-w-[850px] mx-auto text-[14px] md:text-[15px] leading-7 text-[#667576]">
            Akeso Global Medical Services provides
            comprehensive support for patients seeking
            {` ${name}`} care. Detailed speciality content,
            doctors, treatments, technologies and patient
            information can later be managed from your
            admin panel and API.
          </p>
        </div>
      </section>

      {/* =========================
          OTHER SPECIALITIES
      ========================= */}

      <section className="py-14 md:py-20 bg-[#f5f8f7]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <p className="text-[12px] uppercase tracking-[0.17em] font-semibold text-[#C8942E]">
              Explore Our Expertise
            </p>

            <h2 className="mt-2 text-[28px] md:text-[36px] font-semibold text-[#064B50]">
              Our Specialities
            </h2>

            <p className="mt-3 text-[14px] md:text-[15px] leading-7 text-[#667576]">
              Explore other areas of medical expertise
              available through Akeso Global Medical
              Services.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >
            {specialties
              .filter((item) => item[1] !== slug)
              .slice(0, 8)
              .map(([itemName, itemSlug, ItemIcon]) => (
                <Link
                  key={itemSlug}
                  to={`/speciality/${itemSlug}`}
                  className="
                    group

                    min-h-[185px]

                    rounded-2xl

                    bg-white

                    border
                    border-[#e5eceb]

                    p-5

                    flex
                    flex-col
                    items-center
                    justify-center

                    text-center

                    shadow-[0_7px_24px_rgba(6,75,80,0.05)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#E85C91]/40
                    hover:shadow-[0_14px_34px_rgba(6,75,80,0.10)]
                  "
                >
                  {ItemIcon && (
                    <ItemIcon
                      size={33}
                      strokeWidth={1.35}
                      className="text-[#C8942E]"
                    />
                  )}

                  <h3 className="mt-4 text-[15px] leading-[21px] font-semibold text-[#263F41]">
                    {itemName}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-[13px] font-medium text-[#064B50]">
                    Know More

                    <span className="w-7 h-7 rounded-full bg-[#E85C91] text-white flex items-center justify-center group-hover:bg-[#C8942E]">
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/specialities"
              className="
                inline-flex
                items-center
                justify-center

                min-h-[46px]

                px-7

                rounded-lg

                border
                border-[#E85C91]

                text-[14px]
                font-semibold
                text-[#E85C91]

                hover:bg-[#E85C91]
                hover:text-white
              "
            >
              View All Specialities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}