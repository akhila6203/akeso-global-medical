import {
  ChevronRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

export default function InternationalHero() {
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
          max-w-[1450px]

          px-4
          sm:px-6
          lg:px-8

          py-6
          sm:py-6
          md:py-8
          lg:py-10

          text-center
        "
      >
        {/* ==============================
            BREADCRUMB
        ============================== */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2

            text-[13px]
            sm:text-[14px]

            font-medium
          "
        >
          <Link
            to="/"
            className="
              text-white

              transition-colors
              duration-300

              hover:text-[#E6B956]
            "
          >
            Home
          </Link>

          <ChevronRight
            size={15}
            strokeWidth={2}
            className="
              text-[#E6B956]
            "
          />

          <span
            className="
              font-semibold
              text-white
            "
          >
            International Patients
          </span>
        </div>


        {/* ==============================
            MAIN HEADING
        ============================== */}

        <h1
          className="
            mt-7

            text-[34px]
            sm:text-[40px]
            md:text-[48px]
            lg:text-[52px]

            font-semibold
            leading-tight

            text-white
          "
        >
          International Patients
        </h1>


        {/* ==============================
            DESCRIPTION
        ============================== */}

        <p
          className="
            mx-auto
            mt-5

            max-w-[760px]

            text-[14px]
            sm:text-[15px]
            md:text-[16px]

            leading-7

            text-white
          "
        >
          From your first medical consultation
          to treatment, surgery and recovery in
          India, Akeso coordinates your
          healthcare journey with dedicated
          patient support.
        </p>
      </div>
    </section>
  );
}