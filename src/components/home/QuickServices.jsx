import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  services,
} from "../../data/navigation";

export default function QuickServices() {
  const [start, setStart] =
    useState(0);

  const [paused, setPaused] =
    useState(false);

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(() => {
    if (
      typeof window === "undefined"
    ) {
      return 5;
    }

    if (
      window.innerWidth >= 1280
    ) {
      return 5;
    }

    if (
      window.innerWidth >= 640
    ) {
      return 3;
    }

    return 1;
  });

  const totalServices =
    services.length;

  /* ========================================
     RESPONSIVE COUNT

     Mobile  < 640       = 1
     Tablet  640 - 1279  = 3
     Desktop >= 1280     = 5
  ======================================== */

  useEffect(() => {
    const handleResize = () => {
      const width =
        window.innerWidth;

      if (width >= 1280) {
        setVisibleCount(5);
      } else if (width >= 640) {
        setVisibleCount(3);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* ========================================
     SLIDER CONDITION

     Mobile  -> > 1
     Tablet  -> > 3
     Desktop -> > 5
  ======================================== */

  const sliderEnabled =
    totalServices > visibleCount;

  /* ========================================
     NEXT
  ======================================== */

  const next = () => {
    if (!sliderEnabled) {
      return;
    }

    setStart(
      (current) =>
        (current + 1) %
        totalServices
    );
  };

  /* ========================================
     PREVIOUS
  ======================================== */

  const previous = () => {
    if (!sliderEnabled) {
      return;
    }

    setStart(
      (current) =>
        (current -
          1 +
          totalServices) %
        totalServices
    );
  };

  /* ========================================
     AUTO PLAY
  ======================================== */

  useEffect(() => {
    if (
      paused ||
      !sliderEnabled
    ) {
      return;
    }

    const timer =
      setInterval(() => {
        setStart(
          (current) =>
            (current + 1) %
            totalServices
        );
      }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [
    paused,
    sliderEnabled,
    totalServices,
  ]);

  /* ========================================
     ORDERED SERVICES
  ======================================== */

  const orderedServices = [
    ...services.slice(start),
    ...services.slice(0, start),
  ];

  /* ========================================
     DESKTOP GRID
  ======================================== */

  const desktopCount =
    Math.min(totalServices, 5);

  const desktopGridClass = {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
  }[desktopCount];

  /* ========================================
     TABLET GRID
  ======================================== */

  const tabletCount =
    Math.min(totalServices, 3);

  const tabletGridClass = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
  }[tabletCount];

  return (
    <section
      className="
        overflow-hidden
        bg-white
        py-14

        sm:py-16
        md:py-20
      "
      onMouseEnter={() =>
        setPaused(true)
      }
      onMouseLeave={() =>
        setPaused(false)
      }
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]

          px-4

          sm:px-6
          lg:px-12
        "
      >
        {/* =================================
            HEADING
        ================================== */}

        <div
          className="
            mx-auto
            mb-9
            max-w-[720px]
            text-center

            sm:mb-10
          "
        >
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#C8942E]

              sm:text-[12px]
            "
          >
            Patient Services
          </p>

          <h2
            className="
              mt-2

              text-[28px]
              font-semibold
              leading-tight
              text-[#064B50]

              sm:text-[32px]
              md:text-[38px]
            "
          >
            How Can We Help You?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]

              text-[14px]
              leading-6
              text-[#667576]

              md:text-[15px]
              md:leading-7
            "
          >
            Access convenient healthcare
            services designed to support
            you at every stage of your
            medical journey.
          </p>
        </div>

        {/* =================================
            MOBILE
            ONLY ONE CARD
        ================================== */}

        <div className="block sm:hidden">
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[390px]
            "
          >
            {/* CLEAN MOBILE AREA */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[22px]

                bg-[#FAFDFC]

                px-[54px]
                py-3
              "
            >
              {/* ONE CARD ONLY */}

              <div
                className="
                  relative
                  z-10
                  w-full
                "
              >
                <ServiceCard
                  service={
                    orderedServices[0]
                  }
                  mobile
                />
              </div>
            </div>

            {/* MOBILE LEFT ARROW */}

            {sliderEnabled && (
              <button
                type="button"
                onClick={previous}
                aria-label="Previous service"
                className="
                  absolute
                  left-1
                  top-1/2
                  z-30

                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#C8942E]

                  bg-white
                  text-[#064B50]

                  shadow-[0_6px_18px_rgba(6,75,80,0.12)]

                  transition-all
                  duration-200

                  active:scale-95
                  active:bg-[#FAF8F2]
                "
              >
                <ChevronLeft
                  size={19}
                  strokeWidth={2}
                />
              </button>
            )}

            {/* MOBILE RIGHT ARROW */}

            {sliderEnabled && (
              <button
                type="button"
                onClick={next}
                aria-label="Next service"
                className="
                  absolute
                  right-1
                  top-1/2
                  z-30

                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#064B50]

                  bg-[#064B50]
                  text-white

                  shadow-[0_6px_18px_rgba(6,75,80,0.16)]

                  transition-all
                  duration-200

                  active:scale-95
                  active:bg-[#0B6268]
                "
              >
                <ChevronRight
                  size={19}
                  strokeWidth={2}
                />
              </button>
            )}
          </div>

          {/* MOBILE DOTS */}

          {sliderEnabled && (
            <SliderDots
              start={start}
              setStart={setStart}
            />
          )}
        </div>

        {/* =================================
            TABLET
            3 CARDS
        ================================== */}

        <div
          className="
            relative

            hidden
            sm:block
            xl:hidden
          "
        >
          <div
            className={
              sliderEnabled
                ? "px-14"
                : ""
            }
          >
            <div
              className={`
                grid
                ${tabletGridClass}
                gap-5
              `}
            >
              {(totalServices > 3
                ? orderedServices.slice(
                    0,
                    3
                  )
                : services
              ).map((service) => (
                <ServiceCard
                  key={service[1]}
                  service={service}
                />
              ))}
            </div>
          </div>

          {/* TABLET LEFT */}

          {sliderEnabled && (
            <button
              type="button"
              onClick={previous}
              aria-label="Previous services"
              className="
                absolute
                left-0
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

                bg-white
                text-[#064B50]

                shadow-[0_7px_20px_rgba(6,75,80,0.12)]

                transition-all
                duration-200

                hover:bg-[#FAF8F2]
              "
            >
              <ChevronLeft
                size={20}
              />
            </button>
          )}

          {/* TABLET RIGHT */}

          {sliderEnabled && (
            <button
              type="button"
              onClick={next}
              aria-label="Next services"
              className="
                absolute
                right-0
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
                border-[#064B50]

                bg-[#064B50]
                text-white

                shadow-[0_7px_20px_rgba(6,75,80,0.14)]

                transition-all
                duration-200

                hover:border-[#C8942E]
                hover:bg-[#C8942E]
              "
            >
              <ChevronRight
                size={20}
              />
            </button>
          )}

          {sliderEnabled && (
            <SliderDots
              start={start}
              setStart={setStart}
            />
          )}
        </div>

        {/* =================================
            DESKTOP
            5 CARDS
        ================================== */}

        <div
          className="
            relative

            hidden
            xl:block
          "
        >
          <div
            className={
              sliderEnabled
                ? "px-14"
                : ""
            }
          >
            <div
              className={`
                grid
                ${desktopGridClass}
                gap-6
              `}
            >
              {(totalServices > 5
                ? orderedServices.slice(
                    0,
                    5
                  )
                : services
              ).map((service) => (
                <ServiceCard
                  key={service[1]}
                  service={service}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP LEFT */}

          {sliderEnabled && (
            <button
              type="button"
              onClick={previous}
              aria-label="Previous services"
              className="
                absolute
                left-0
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

                bg-white
                text-[#064B50]

                shadow-[0_7px_20px_rgba(6,75,80,0.12)]

                transition-all
                duration-200

                hover:bg-[#FAF8F2]
              "
            >
              <ChevronLeft
                size={20}
              />
            </button>
          )}

          {/* DESKTOP RIGHT */}

          {sliderEnabled && (
            <button
              type="button"
              onClick={next}
              aria-label="Next services"
              className="
                absolute
                right-0
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
                border-[#064B50]

                bg-[#064B50]
                text-white

                shadow-[0_7px_20px_rgba(6,75,80,0.14)]

                transition-all
                duration-200

                hover:border-[#C8942E]
                hover:bg-[#C8942E]
              "
            >
              <ChevronRight
                size={20}
              />
            </button>
          )}

          {sliderEnabled && (
            <SliderDots
              start={start}
              setStart={setStart}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   DOTS
========================================= */

function SliderDots({
  start,
  setStart,
}) {
  return (
    <div
      className="
        mt-6
        flex
        items-center
        justify-center
        gap-2
      "
    >
      {services.map(
        (service, index) => (
          <button
            key={service[1]}
            type="button"
            aria-label={`Go to service ${
              index + 1
            }`}
            onClick={() =>
              setStart(index)
            }
            className={`
              h-[7px]
              rounded-full

              transition-all
              duration-300

              ${
                index === start
                  ? `
                    w-7
                    bg-[#C8942E]
                  `
                  : `
                    w-[7px]
                    bg-[#c9d9d8]

                    hover:bg-[#064B50]/40
                  `
              }
            `}
          />
        )
      )}
    </div>
  );
}

/* =========================================
   SERVICE CARD
========================================= */

function ServiceCard({
  service,
  mobile = false,
}) {
  if (!service) {
    return null;
  }

  const [
    name,
    slug,
    Icon,
  ] = service;

  return (
    <Link
      to={`/services/${slug}`}
      className={`
        group
        relative

        block
        w-full

        overflow-hidden

        rounded-2xl

        border
        border-[#e1ebea]

        bg-[#FAFCFB]

        shadow-[0_7px_24px_rgba(6,75,80,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#C8942E]/60
        hover:bg-white
        hover:shadow-[0_14px_34px_rgba(6,75,80,0.10)]

        ${
          mobile
            ? `
              min-h-[210px]
              px-4
              py-6
            `
            : `
              min-h-[185px]
              p-5
            `
        }
      `}
    >
      {/* DOT BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage:
            "radial-gradient(#C8942E 1px, transparent 1px)",

          backgroundSize:
            "18px 18px",
        }}
      />

      {/* CARD CONTENT */}

      <div
        className={`
          relative
          z-10

          flex
          h-full
          flex-col
          items-center
          justify-center

          text-center

          ${
            mobile
              ? "min-h-[160px]"
              : "min-h-[143px]"
          }
        `}
      >
        {/* ICON */}

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-xl

            border
            border-[#dcebea]

            bg-[#EAF5F4]

            transition-all
            duration-300

            group-hover:border-[#064B50]
            group-hover:bg-[#064B50]
          "
        >
          {Icon && (
            <Icon
              size={24}
              strokeWidth={1.6}
              className="
                text-[#C8942E]

                transition-colors

                group-hover:text-white
              "
            />
          )}
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-4

            text-[16px]
            font-semibold
            leading-[22px]

            text-[#263F41]
          "
        >
          {name}
        </h3>

        {/* KNOW MORE */}

        <div
          className="
            mt-4
            flex
            justify-center
          "
        >
          <span
            className="
              inline-flex
              items-center
              justify-center
              gap-1.5

              rounded-lg

              border
              border-[#d2e3e1]

              bg-[#EAF5F4]

              px-4
              py-2

              text-[13px]
              font-semibold
              text-[#064B50]

              transition-all
              duration-300

              group-hover:border-[#064B50]
              group-hover:bg-[#064B50]
              group-hover:text-white
            "
          >
            Know More

            <ChevronRight
              size={15}
              strokeWidth={2}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </span>
        </div>
      </div>
    </Link>
  );
}


// import {
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   services,
// } from "../../data/navigation";

// export default function QuickServices() {
//   const [start, setStart] = useState(0);
//   const [paused, setPaused] = useState(false);

//   /* =========================================
//      SETTINGS
//   ========================================= */

//   const totalServices = services.length;

//   // Desktop lo maximum 5 cards
//   const desktopVisible = Math.min(
//     totalServices,
//     5
//   );

//   // Slider only if more than 5 services
//   const desktopSlider =
//     totalServices > 5;

//   /* =========================================
//      NEXT
//   ========================================= */

//   const next = () => {
//     if (totalServices <= 1) return;

//     setStart(
//       (current) =>
//         (current + 1) % totalServices
//     );
//   };

//   /* =========================================
//      PREVIOUS
//   ========================================= */

//   const previous = () => {
//     if (totalServices <= 1) return;

//     setStart(
//       (current) =>
//         (current - 1 + totalServices) %
//         totalServices
//     );
//   };

//   /* =========================================
//      AUTO SLIDER

//      Only desktop requirement:
//      5 kanna ekkuva services unte auto slide.
//   ========================================= */

//   useEffect(() => {
//     if (paused) return;

//     if (totalServices <= 5) return;

//     const timer = setInterval(() => {
//       setStart(
//         (current) =>
//           (current + 1) % totalServices
//       );
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [
//     paused,
//     totalServices,
//   ]);

//   /* =========================================
//      INFINITE ORDER
//   ========================================= */

//   const orderedServices = [
//     ...services.slice(start),
//     ...services.slice(0, start),
//   ];

//   /* =========================================
//      DESKTOP GRID

//      1 service  = 1 column
//      2 services = 2 columns
//      3 services = 3 columns
//      4 services = 4 columns
//      5+         = 5 columns
//   ========================================= */

//   const desktopGridClass = {
//     1: "xl:grid-cols-1",
//     2: "xl:grid-cols-2",
//     3: "xl:grid-cols-3",
//     4: "xl:grid-cols-4",
//     5: "xl:grid-cols-5",
//   }[desktopVisible];

//   return (
//     <section
//       className="py-16 md:py-20 bg-white"
//       onMouseEnter={() =>
//         setPaused(true)
//       }
//       onMouseLeave={() =>
//         setPaused(false)
//       }
//     >
//       <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">

//         {/* =========================
//             CENTER HEADING
//         ========================= */}

//         <div className="max-w-[720px] mx-auto text-center mb-10">
//           <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#C8942E]">
//             Patient Services
//           </p>

//           <h2 className="mt-2 text-[30px] md:text-[38px] font-semibold text-[#064B50]">
//             How Can We Help You?
//           </h2>

//           <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-[#667576]">
//             Access convenient healthcare services designed
//             to support you at every stage of your medical
//             journey.
//           </p>
//         </div>

//         {/* =========================
//             SLIDER AREA
//         ========================= */}

//         <div
//           className={`
//             relative

//             ${
//               desktopSlider
//                 ? "xl:px-14"
//                 : "xl:px-0"
//             }
//           `}
//         >

//           {/* =========================
//               LEFT ARROW

//               Desktop:
//               only show if services > 5
//           ========================= */}

//           {desktopSlider && (
//             <button
//               type="button"
//               onClick={previous}
//               aria-label="Previous services"
//               className="
//                 absolute
//                 z-20

//                 left-0
//                 md:left-1

//                 top-1/2
//                 -translate-y-1/2

//                 w-11
//                 h-11

//                 rounded-full

//                 bg-white

//                 border
//                 border-[#E85C91]

//                 text-[#E85C91]

//                 shadow-[0_7px_20px_rgba(6,75,80,0.12)]

//                 hidden
//                 xl:flex

//                 items-center
//                 justify-center

//                 transition-all

//                 hover:bg-[#E85C91]
//                 hover:text-white
//               "
//             >
//               <ChevronLeft size={20} />
//             </button>
//           )}


//           <div
//             className={`
//               hidden
//               xl:grid
//               ${desktopGridClass}
//               gap-6
//             `}
//           >
//             {(desktopSlider
//               ? orderedServices.slice(0, 5)
//               : services
//             ).map((service) => (
//               <ServiceCard
//                 key={service[1]}
//                 service={service}
//               />
//             ))}
//           </div>

//           {/* =========================
//               TABLET
//           ========================= */}

//           <div className="hidden sm:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-5">
//             {orderedServices
//               .slice(
//                 0,
//                 Math.min(
//                   3,
//                   totalServices
//                 )
//               )
//               .map((service) => (
//                 <ServiceCard
//                   key={service[1]}
//                   service={service}
//                 />
//               ))}
//           </div>

//           {/* =========================
//               MOBILE
//           ========================= */}

//           <div className="sm:hidden">
//             <ServiceCard
//               service={
//                 orderedServices[0]
//               }
//             />
//           </div>

//           {/* =========================
//               RIGHT ARROW

//               Desktop:
//               only show if services > 5
//           ========================= */}

//           {desktopSlider && (
//             <button
//               type="button"
//               onClick={next}
//               aria-label="Next services"
//               className="
//                 absolute
//                 z-20

//                 right-0
//                 md:right-1

//                 top-1/2
//                 -translate-y-1/2

//                 w-11
//                 h-11

//                 rounded-full

//                 bg-white

//                 border
//                 border-[#E85C91]

//                 text-[#E85C91]

//                 shadow-[0_7px_20px_rgba(6,75,80,0.12)]

//                 hidden
//                 xl:flex

//                 items-center
//                 justify-center

//                 transition-all

//                 hover:bg-[#E85C91]
//                 hover:text-white
//               "
//             >
//               <ChevronRight size={20} />
//             </button>
//           )}
//         </div>

//         {/* =========================
//             MOBILE / TABLET ARROWS

//             Tablet/mobile lo visible cards
//             kanna services ekkuva unte matrame
//             arrows show avutayi.
//         ========================= */}

//         {totalServices > 1 && (
//           <div className="mt-6 flex xl:hidden items-center justify-center gap-3">
//             <button
//               type="button"
//               onClick={previous}
//               className="
//                 w-10
//                 h-10
//                 rounded-full
//                 border
//                 border-[#E85C91]
//                 text-[#E85C91]
//                 flex
//                 items-center
//                 justify-center
//               "
//             >
//               <ChevronLeft size={18} />
//             </button>

//             <button
//               type="button"
//               onClick={next}
//               className="
//                 w-10
//                 h-10
//                 rounded-full
//                 bg-[#E85C91]
//                 text-white
//                 flex
//                 items-center
//                 justify-center
//               "
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         )}

//         {/* =========================
//             DOTS

//             Desktop lo 5 kanna ekkuva
//             services unnappudu matrame.
//         ========================= */}

//         {desktopSlider && (
//           <div className="mt-7 hidden xl:flex justify-center gap-2">
//             {services.map(
//               (service, index) => (
//                 <button
//                   type="button"
//                   aria-label={`Go to service ${
//                     index + 1
//                   }`}
//                   key={service[1]}
//                   onClick={() =>
//                     setStart(index)
//                   }
//                   className={`
//                     h-[7px]
//                     rounded-full
//                     transition-all
//                     duration-300

//                     ${
//                       index === start
//                         ? "w-7 bg-[#E85C91]"
//                         : "w-[7px] bg-[#ccd9d8]"
//                     }
//                   `}
//                 />
//               )
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* =========================================
//    SERVICE CARD

//    Your existing design kept same.
// ========================================= */

// function ServiceCard({ service }) {
//   if (!service) return null;

//   const [
//     name,
//     slug,
//     Icon,
//   ] = service;

//   return (
//     <Link
//       to={`/services/${slug}`}
//       className="
//         group
//         relative

//         min-h-[185px]

//         rounded-2xl

//         bg-[#f8faf9]

//         border
//         border-[#e6eceb]

//         p-5

//         overflow-hidden

//         shadow-[0_7px_24px_rgba(6,75,80,0.05)]

//         transition-all
//         duration-300

//         hover:-translate-y-1
//         hover:bg-white
//         hover:border-[#C8942E]/50
//         hover:shadow-[0_14px_34px_rgba(6,75,80,0.12)]
//       "
//     >
//       {/* DOT BACKGROUND */}

//       <div
//         className="absolute inset-0 opacity-[0.10]"
//         style={{
//           backgroundImage:
//             "radial-gradient(#C8942E 1px, transparent 1px)",
//           backgroundSize:
//             "18px 18px",
//         }}
//       />

//       <div className="relative z-10 h-full min-h-[143px] flex flex-col items-center
//             justify-center  text-center">

//         {/* ICON */}

//         <div
//           className="
//             w-12
//             h-12

//             rounded-xl

//             bg-[#edf7f6]

//             flex
//             items-center
//             justify-center

//             group-hover:bg-[#064B50]

//             transition-colors
//           "
//         >
//           {Icon && (
//             <Icon
//               size={25}
//               strokeWidth={1.5}
//               className="
//                 text-[#C8942E]
//                 group-hover:text-white
//               "
//             />
//           )}
//         </div>

//         {/* TITLE */}
//           <h3
//             className="
//               mt-5
//               text-[16px]
//               leading-[22px]
//               font-semibold
//               text-[#263F41]
//               text-center
//             "
//           >
//             {name}
//           </h3>

//         {/* KNOW MORE */}

//        <div className="mt-auto pt-4 flex justify-center">
//   <span
//     className="
//       inline-flex
//       items-center
//       gap-1
//       rounded-lg
//       border
//       border-[#d6e6e4]
//       bg-[#edf6f5]
//       px-4
//       py-2
//       text-[13px]
//       font-semibold
//       text-[#064B50]
//       transition-all
//       duration-300
//       group-hover:border-[#C8942E]
//       group-hover:bg-[#064B50]
//       group-hover:text-white
//     "
//   >
//     Know More

//     <ChevronRight
//       size={15}
//       className="
//         transition-transform
//         group-hover:translate-x-1
//       "
//     />
//   </span>
// </div>
//       </div>
//     </Link>
//   );
// }


