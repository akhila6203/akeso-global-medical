import {
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";

import heroDoctor from "../../assets/home/hero-doctor.jpg";

// export default function HeroBanner() {
export default function HeroBanner({
  onOpenAuth,
}) {
  const navigate = useNavigate();

  const findDoctor = () => {
  if (isLoggedIn()) {
    navigate("/doctors");
    return;
  }

  onOpenAuth?.(
    "login",
    "/doctors"
  );
};

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#064B50]
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-[570px]
          max-w-[1500px]
          grid-cols-1
          items-center
          lg:grid-cols-2
        "
      >
        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div
          className="
            relative
            z-10
            px-6
            py-16
            sm:px-10
            lg:px-14
            xl:px-16
          "
        >
          <div className="max-w-[670px]">
            {/* BRAND */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-8
                  bg-[#C8942E]
                "
              />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#E7B34D]
                  sm:text-[12px]
                "
              >
                Akeso Global Medical Services
              </p>
            </div>

            {/* HEADING */}

            <h1
              className="
                mt-7
                text-[38px]
                font-semibold
                leading-[1.1]
                tracking-[-0.02em]
                text-white
                sm:text-[47px]
                lg:text-[52px]
                xl:text-[58px]
              "
            >
              Trusted Medical Care
              <span className="block">
                With Experienced
              </span>

              <span
                className="
                  mt-1
                  block
                  text-[#F0B43C]
                "
              >
                Specialists.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-[590px]
                text-[15px]
                leading-7
                text-white/85
                sm:text-[16px]
              "
            >
              Access trusted doctors, advanced
              treatments and compassionate healthcare
              services designed around every
              patient&apos;s needs.
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <button
                type="button"
                onClick={findDoctor}
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#E85C91]
                  px-7
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-[#d94c81]
                "
              >
                <Stethoscope size={17} />

                Find a Doctor

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate("/contact")
                }
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/35
                  bg-white/10
                  px-7
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-[#064B50]
                "
              >
                <CalendarDays size={17} />

                Book Appointment

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT DOCTOR IMAGE
        ========================== */}

        <div
          className="
            relative
            hidden
            h-full
            min-h-[570px]
            lg:block
          "
        >
          <img
  src={heroDoctor}
  alt="Akeso Medical Specialist"
  className="
    absolute
    bottom-0
    right-0
    h-[94%]
    w-full
    object-contain
    object-bottom
  "
/>

          {/* LEFT SOFT BLEND */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-[180px]
              bg-gradient-to-r
              from-[#064B50]
              to-transparent
            "
          />
        </div>
      </div>

      {/* MOBILE DOCTOR IMAGE */}

      <div
        className="
          relative
          mx-auto
          h-[350px]
          max-w-[520px]
          lg:hidden
        "
      >
       <img
  src={heroDoctor}
  alt="Akeso Medical Specialist"
  className="
    h-full
    w-full
    object-contain
    object-bottom
  "
/>
      </div>
    </section>
  );
}