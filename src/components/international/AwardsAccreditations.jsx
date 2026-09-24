import {
  ArrowLeft,
  ArrowRight,
  Award,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";


/* =========================================================
   SAMPLE AWARDS DATA

   IMPORTANT:
   UI testing purpose only.

   Actual verified Akeso / partner hospital award details
   vachaka year, month, title replace cheyyandi.
========================================================= */

const awards = [
  {
    id: 1,
    year: "2026",
    month: "January",
    title: "Healthcare Excellence Recognition",
  },

  {
    id: 2,
    year: "2025",
    month: "November",
    title: "International Patient Care Recognition",
  },

  {
    id: 3,
    year: "2025",
    month: "August",
    title: "Quality Healthcare Recognition",
  },

  {
    id: 4,
    year: "2025",
    month: "March",
    title: "Patient-Centred Care Recognition",
  },

  {
    id: 5,
    year: "2024",
    month: "December",
    title: "Healthcare Network Recognition",
  },

  {
    id: 6,
    year: "2024",
    month: "July",
    title: "Medical Care Excellence Recognition",
  },
];


/* =========================================================
   ACCREDITATION LOGOS

   Put your approved logo images inside:

   public/images/accreditations/

   Example:
   jci.png
   nabh.png
   iso.png

   Add/remove objects based on actual accreditations.
========================================================= */

const accreditations = [
  {
    id: 1,
    name: "JCI",
    logo: "/images/accreditations/jci.png",
  },

  {
    id: 2,
    name: "NABH",
    logo: "/images/accreditations/nabh.png",
  },

  {
    id: 3,
    name: "Accreditation 3",
    logo: "/images/accreditations/accreditation-3.png",
  },

  {
    id: 4,
    name: "Accreditation 4",
    logo: "/images/accreditations/accreditation-4.png",
  },

  {
    id: 5,
    name: "Accreditation 5",
    logo: "/images/accreditations/accreditation-5.png",
  },

  {
    id: 6,
    name: "Accreditation 6",
    logo: "/images/accreditations/accreditation-6.png",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AwardsAccreditations() {
  return (
    <>
      <AwardsSection />

      <AccreditationsSection />
    </>
  );
}


/* =========================================================
   AWARDS & RECOGNITIONS
========================================================= */

function AwardsSection() {
  const [visibleCount, setVisibleCount] =
    useState(4);

  const [currentIndex, setCurrentIndex] =
    useState(0);


  /* =====================================================
     RESPONSIVE

     Mobile  : 1
     Tablet  : 2
     Desktop : 4
  ===================================================== */

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
    };
  }, []);


  /* RESET */

  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);


  /* =====================================================
     SHOULD SLIDE?

     Desktop:
     slider only when > 4

     Tablet:
     slider when > 2

     Mobile:
     slider when > 1
  ===================================================== */

  const shouldSlide =
    awards.length > visibleCount;


  /* NEXT */

  const nextSlide = () => {
    if (!shouldSlide) return;

    setCurrentIndex(
      (previousIndex) =>
        (previousIndex + 1) %
        awards.length
    );
  };


  /* PREVIOUS */

  const previousSlide = () => {
    if (!shouldSlide) return;

    setCurrentIndex(
      (previousIndex) =>
        (
          previousIndex -
          1 +
          awards.length
        ) %
        awards.length
    );
  };


  /* =====================================================
     AUTO PLAY
  ===================================================== */

  useEffect(() => {
    if (!shouldSlide) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (previousIndex) =>
          (previousIndex + 1) %
          awards.length
      );
    }, 4500);

    return () => {
      clearInterval(timer);
    };
  }, [shouldSlide]);


  /* =====================================================
     VISIBLE AWARDS

     IMPORTANT:
     If total awards are less than visible count,
     only existing awards display avuthayi.

     Duplicate cards ravu.
  ===================================================== */

  const numberOfCards =
    Math.min(
      visibleCount,
      awards.length
    );

  const visibleAwards =
    shouldSlide
      ? Array.from(
          {
            length: numberOfCards,
          },

          (_, index) =>
            awards[
              (
                currentIndex +
                index
              ) % awards.length
            ]
        )
      : awards;


  return (
    <section
      className="
        bg-white

        py-16
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1500px]

          px-5
          sm:px-7
          lg:px-10
        "
      >

        {/* ===============================================
            HEADING
        =============================================== */}

        <div
          className="
            mx-auto
            max-w-[820px]

            text-center
          "
        >
          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[#C8942E]
            "
          >
            Recognition
          </p>

          <h2
            className="
              mt-3

              text-[30px]
              font-semibold
              leading-tight

              text-[#064B50]

              md:text-[40px]
            "
          >
            Awards & Recognitions
          </h2>

          <p
            className="
              mx-auto
              mt-4

              max-w-[720px]

              text-[16px]
              leading-7

              text-[#000000]
            "
          >
            Recognitions and achievements
            received across our healthcare
            network.
          </p>
        </div>


        {/* ===============================================
            AWARDS
        =============================================== */}

        <div
          className="
            relative
            mt-11
          "
        >

          {/* LEFT ARROW */}

          {shouldSlide && (
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous awards"
              className="
                absolute
                left-[-12px]
                top-1/2
                z-20

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#D8E4E3]

                bg-white

                text-[#000000]

                shadow-[0_8px_25px_rgba(0,0,0,0.10)]

                transition-all
                duration-300

                hover:border-[#C8942E]
                hover:bg-[#064B50]
                hover:text-white

                lg:left-[-18px]
              "
            >
              <ArrowLeft size={18} />
            </button>
          )}


          {/* AWARD CARDS */}

          <div
            className={`
              grid
              gap-5

              ${
                numberOfCards === 1
                  ? "grid-cols-1"
                  : ""
              }

              ${
                numberOfCards >= 2
                  ? "md:grid-cols-2"
                  : ""
              }

              ${
                numberOfCards >= 3
                  ? "xl:grid-cols-4"
                  : ""
              }
            `}
          >
            {visibleAwards.map(
              (award, position) => (
                <AwardCard
                  key={`${award.id}-${position}`}
                  award={award}
                />
              )
            )}
          </div>


          {/* RIGHT ARROW */}

          {shouldSlide && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next awards"
              className="
                absolute
                right-[-12px]
                top-1/2
                z-20

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#C8942E]

                bg-[#064B50]

                text-white

                shadow-[0_8px_25px_rgba(6,75,80,0.15)]

                transition-all
                duration-300

                hover:bg-[#C8942E]

                lg:right-[-18px]
              "
            >
              <ArrowRight size={18} />
            </button>
          )}

        </div>


        {/* DOTS */}

        {shouldSlide && (
          <div
            className="
              mt-7

              flex
              justify-center
              gap-2
            "
          >
            {awards.map(
              (award, index) => (
                <button
                  key={award.id}
                  type="button"
                  onClick={() =>
                    setCurrentIndex(index)
                  }
                  aria-label={`Award slide ${
                    index + 1
                  }`}
                  className={`
                    h-2
                    rounded-full

                    transition-all
                    duration-300

                    ${
                      currentIndex ===
                      index
                        ? "w-8 bg-[#C8942E]"
                        : "w-2 bg-[#D3E3E2] hover:bg-[#064B50]"
                    }
                  `}
                />
              )
            )}
          </div>
        )}

      </div>
    </section>
  );
}


/* =========================================================
   AWARD CARD
========================================================= */

function AwardCard({
  award,
}) {
  return (
    <article
      className="
        group

        relative

        flex
        min-h-[285px]

        flex-col
        items-center
        justify-center

        overflow-hidden

        rounded-[22px]

        border
        border-[#E0E9E8]

        bg-[#FAF8F2]

        px-5
        py-8

        text-center

        shadow-[0_10px_30px_rgba(6,75,80,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-[#C8942E]/60

        hover:shadow-[0_16px_38px_rgba(6,75,80,0.10)]
      "
    >


      {/* AWARD ICON */}

      <div
        className="
          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-xl

          bg-white

          text-[#C8942E]

          shadow-sm
        "
      >
        <Award
          size={24}
          strokeWidth={1.8}
        />
      </div>


      {/* YEAR */}

      <div
        className="
          mt-5

          flex
          items-center
          justify-center
          gap-2
        "
      >
        <span
          className="
            h-px
            w-5

            bg-[#C8942E]
          "
        />

        <span
          className="
            text-[20px]
            font-semibold

            text-[#000000]
          "
        >
          {award.year}
        </span>

        <span
          className="
            h-px
            w-5

            bg-[#C8942E]
          "
        />
      </div>


      {/* MONTH */}

      <p
        className="
          mt-2

          text-[14px]
          font-semibold

          text-[#C8942E]
        "
      >
        {award.month}
      </p>


      {/* AWARD NAME */}

      <h3
        className="
          mt-3

          text-[16px]
          font-semibold
          leading-6

          text-[#000000]
        "
      >
        {award.title}
      </h3>

    </article>
  );
}


/* =========================================================
   ACCREDITATIONS
========================================================= */

function AccreditationsSection() {
  const [visibleCount, setVisibleCount] =
    useState(5);

  const [currentIndex, setCurrentIndex] =
    useState(0);


  /* =====================================================
     RESPONSIVE

     Mobile  : 1 logo
     Tablet  : 3 logos
     Desktop : 5 logos
  ===================================================== */

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 1200) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
    };
  }, []);


  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);


  const shouldSlide =
    accreditations.length >
    visibleCount;


  const nextSlide = () => {
    if (!shouldSlide) return;

    setCurrentIndex(
      (previousIndex) =>
        (previousIndex + 1) %
        accreditations.length
    );
  };


  const previousSlide = () => {
    if (!shouldSlide) return;

    setCurrentIndex(
      (previousIndex) =>
        (
          previousIndex -
          1 +
          accreditations.length
        ) %
        accreditations.length
    );
  };


  /* AUTO PLAY */

  useEffect(() => {
    if (!shouldSlide) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (previousIndex) =>
          (previousIndex + 1) %
          accreditations.length
      );
    }, 4500);

    return () => {
      clearInterval(timer);
    };
  }, [shouldSlide]);


  /* =====================================================
     IMPORTANT

     5 logos unte:
     all 5 visible - no slider.

     3 logos unte:
     only 3 visible - no duplicate.

     6+ logos unte:
     5 visible + slider.
  ===================================================== */

  const numberOfLogos =
    Math.min(
      visibleCount,
      accreditations.length
    );

  const visibleAccreditations =
    shouldSlide
      ? Array.from(
          {
            length: numberOfLogos,
          },

          (_, index) =>
            accreditations[
              (
                currentIndex +
                index
              ) %
              accreditations.length
            ]
        )
      : accreditations;


  return (
    <section
      className="
        bg-[#F7FAF9]

        py-16
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1500px]

          px-5
          sm:px-7
          lg:px-10
        "
      >

        {/* HEADING */}

        <div
          className="
            mx-auto
            max-w-[820px]

            text-center
          "
        >
          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[#C8942E]
            "
          >
            Quality & Trust
          </p>

          <h2
            className="
              mt-3

              text-[30px]
              font-semibold

              text-[#064B50]

              md:text-[40px]
            "
          >
            Accreditations
          </h2>

          <p
            className="
              mx-auto
              mt-4

              max-w-[700px]

              text-[16px]
              leading-7

              text-[#000000]
            "
          >
            Recognised quality and healthcare
            accreditation standards across
            our care network.
          </p>
        </div>


        {/* ===============================================
            LOGO SLIDER
        =============================================== */}

        <div
          className="
            relative
            mt-11
          "
        >

          {/* LEFT */}

          {shouldSlide && (
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous accreditations"
              className="
                absolute
                left-[-12px]
                top-1/2
                z-20

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#D8E4E3]

                bg-white

                text-[#000000]

                shadow-[0_8px_25px_rgba(0,0,0,0.10)]

                transition-all
                duration-300

                hover:border-[#C8942E]
                hover:bg-[#064B50]
                hover:text-white

                lg:left-[-18px]
              "
            >
              <ArrowLeft size={18} />
            </button>
          )}


          {/* LOGOS */}

          <div
            className="
              grid
              grid-cols-1
              gap-5

              md:grid-cols-3
              xl:grid-cols-5
            "
          >
            {visibleAccreditations.map(
              (
                accreditation,
                position
              ) => (
                <AccreditationLogo
                  key={`${accreditation.id}-${position}`}
                  accreditation={
                    accreditation
                  }
                />
              )
            )}
          </div>


          {/* RIGHT */}

          {shouldSlide && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next accreditations"
              className="
                absolute
                right-[-12px]
                top-1/2
                z-20

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#C8942E]

                bg-[#064B50]

                text-white

                shadow-[0_8px_25px_rgba(6,75,80,0.15)]

                transition-all
                duration-300

                hover:bg-[#C8942E]

                lg:right-[-18px]
              "
            >
              <ArrowRight size={18} />
            </button>
          )}

        </div>


        {/* DOTS */}

        {shouldSlide && (
          <div
            className="
              mt-7

              flex
              justify-center
              gap-2
            "
          >
            {accreditations.map(
              (
                accreditation,
                index
              ) => (
                <button
                  key={
                    accreditation.id
                  }
                  type="button"
                  onClick={() =>
                    setCurrentIndex(index)
                  }
                  aria-label={`Accreditation ${
                    index + 1
                  }`}
                  className={`
                    h-2
                    rounded-full

                    transition-all
                    duration-300

                    ${
                      currentIndex ===
                      index
                        ? "w-8 bg-[#C8942E]"
                        : "w-2 bg-[#D3E3E2] hover:bg-[#064B50]"
                    }
                  `}
                />
              )
            )}
          </div>
        )}

      </div>
    </section>
  );
}


/* =========================================================
   ACCREDITATION LOGO

   LOGO ONLY - NO TITLE / DESCRIPTION DISPLAY
========================================================= */

function AccreditationLogo({
  accreditation,
}) {
  return (
    <article
      className="
        flex
        min-h-[180px]

        items-center
        justify-center

        rounded-[20px]

        border
        border-[#E0E9E8]

        bg-white

        p-6

        shadow-[0_8px_28px_rgba(6,75,80,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-[#C8942E]/60

        hover:shadow-[0_14px_34px_rgba(6,75,80,0.10)]
      "
    >
      <img
        src={accreditation.logo}
        alt={accreditation.name}
        className="
          h-[100px]
          w-full

          object-contain

          sm:h-[110px]
        "
      />
    </article>
  );
}