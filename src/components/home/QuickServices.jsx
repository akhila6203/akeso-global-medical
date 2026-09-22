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
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);

  /* =========================================
     SETTINGS
  ========================================= */

  const totalServices = services.length;

  // Desktop lo maximum 5 cards
  const desktopVisible = Math.min(
    totalServices,
    5
  );

  // Slider only if more than 5 services
  const desktopSlider =
    totalServices > 5;

  /* =========================================
     NEXT
  ========================================= */

  const next = () => {
    if (totalServices <= 1) return;

    setStart(
      (current) =>
        (current + 1) % totalServices
    );
  };

  /* =========================================
     PREVIOUS
  ========================================= */

  const previous = () => {
    if (totalServices <= 1) return;

    setStart(
      (current) =>
        (current - 1 + totalServices) %
        totalServices
    );
  };

  /* =========================================
     AUTO SLIDER

     Only desktop requirement:
     5 kanna ekkuva services unte auto slide.
  ========================================= */

  useEffect(() => {
    if (paused) return;

    if (totalServices <= 5) return;

    const timer = setInterval(() => {
      setStart(
        (current) =>
          (current + 1) % totalServices
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [
    paused,
    totalServices,
  ]);

  /* =========================================
     INFINITE ORDER
  ========================================= */

  const orderedServices = [
    ...services.slice(start),
    ...services.slice(0, start),
  ];

  /* =========================================
     DESKTOP GRID

     1 service  = 1 column
     2 services = 2 columns
     3 services = 3 columns
     4 services = 4 columns
     5+         = 5 columns
  ========================================= */

  const desktopGridClass = {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
  }[desktopVisible];

  return (
    <section
      className="py-16 md:py-20 bg-white"
      onMouseEnter={() =>
        setPaused(true)
      }
      onMouseLeave={() =>
        setPaused(false)
      }
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* =========================
            CENTER HEADING
        ========================= */}

        <div className="max-w-[720px] mx-auto text-center mb-10">
          <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#C8942E]">
            Patient Services
          </p>

          <h2 className="mt-2 text-[30px] md:text-[38px] font-semibold text-[#064B50]">
            How Can We Help You?
          </h2>

          <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-[#667576]">
            Access convenient healthcare services designed
            to support you at every stage of your medical
            journey.
          </p>
        </div>

        {/* =========================
            SLIDER AREA
        ========================= */}

        <div
          className={`
            relative

            ${
              desktopSlider
                ? "xl:px-14"
                : "xl:px-0"
            }
          `}
        >

          {/* =========================
              LEFT ARROW

              Desktop:
              only show if services > 5
          ========================= */}

          {desktopSlider && (
            <button
              type="button"
              onClick={previous}
              aria-label="Previous services"
              className="
                absolute
                z-20

                left-0
                md:left-1

                top-1/2
                -translate-y-1/2

                w-11
                h-11

                rounded-full

                bg-white

                border
                border-[#E85C91]

                text-[#E85C91]

                shadow-[0_7px_20px_rgba(6,75,80,0.12)]

                hidden
                xl:flex

                items-center
                justify-center

                transition-all

                hover:bg-[#E85C91]
                hover:text-white
              "
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* =========================
              DESKTOP

              3 services -> 3 cards
              4 services -> 4 cards
              5 services -> 5 cards
              6+ -> first 5 + slider
          ========================= */}

          <div
            className={`
              hidden
              xl:grid
              ${desktopGridClass}
              gap-6
            `}
          >
            {(desktopSlider
              ? orderedServices.slice(0, 5)
              : services
            ).map((service) => (
              <ServiceCard
                key={service[1]}
                service={service}
              />
            ))}
          </div>

          {/* =========================
              TABLET
          ========================= */}

          <div className="hidden sm:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-5">
            {orderedServices
              .slice(
                0,
                Math.min(
                  3,
                  totalServices
                )
              )
              .map((service) => (
                <ServiceCard
                  key={service[1]}
                  service={service}
                />
              ))}
          </div>

          {/* =========================
              MOBILE
          ========================= */}

          <div className="sm:hidden">
            <ServiceCard
              service={
                orderedServices[0]
              }
            />
          </div>

          {/* =========================
              RIGHT ARROW

              Desktop:
              only show if services > 5
          ========================= */}

          {desktopSlider && (
            <button
              type="button"
              onClick={next}
              aria-label="Next services"
              className="
                absolute
                z-20

                right-0
                md:right-1

                top-1/2
                -translate-y-1/2

                w-11
                h-11

                rounded-full

                bg-white

                border
                border-[#E85C91]

                text-[#E85C91]

                shadow-[0_7px_20px_rgba(6,75,80,0.12)]

                hidden
                xl:flex

                items-center
                justify-center

                transition-all

                hover:bg-[#E85C91]
                hover:text-white
              "
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* =========================
            MOBILE / TABLET ARROWS

            Tablet/mobile lo visible cards
            kanna services ekkuva unte matrame
            arrows show avutayi.
        ========================= */}

        {totalServices > 1 && (
          <div className="mt-6 flex xl:hidden items-center justify-center gap-3">
            <button
              type="button"
              onClick={previous}
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#E85C91]
                text-[#E85C91]
                flex
                items-center
                justify-center
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              className="
                w-10
                h-10
                rounded-full
                bg-[#E85C91]
                text-white
                flex
                items-center
                justify-center
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* =========================
            DOTS

            Desktop lo 5 kanna ekkuva
            services unnappudu matrame.
        ========================= */}

        {desktopSlider && (
          <div className="mt-7 hidden xl:flex justify-center gap-2">
            {services.map(
              (service, index) => (
                <button
                  type="button"
                  aria-label={`Go to service ${
                    index + 1
                  }`}
                  key={service[1]}
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
                        ? "w-7 bg-[#E85C91]"
                        : "w-[7px] bg-[#ccd9d8]"
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

/* =========================================
   SERVICE CARD

   Your existing design kept same.
========================================= */

function ServiceCard({ service }) {
  if (!service) return null;

  const [
    name,
    slug,
    Icon,
  ] = service;

  return (
    <Link
      to={`/services/${slug}`}
      className="
        group
        relative

        min-h-[185px]

        rounded-2xl

        bg-[#f8faf9]

        border
        border-[#e6eceb]

        p-5

        overflow-hidden

        shadow-[0_7px_24px_rgba(6,75,80,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-white
        hover:border-[#E85C91]/40
        hover:shadow-[0_14px_34px_rgba(6,75,80,0.12)]
      "
    >
      {/* DOT BACKGROUND */}

      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(#C8942E 1px, transparent 1px)",
          backgroundSize:
            "18px 18px",
        }}
      />

      <div className="relative z-10 h-full min-h-[143px] flex flex-col">

        {/* ICON */}

        <div
          className="
            w-12
            h-12

            rounded-xl

            bg-[#edf7f6]

            flex
            items-center
            justify-center

            group-hover:bg-[#064B50]

            transition-colors
          "
        >
          {Icon && (
            <Icon
              size={25}
              strokeWidth={1.5}
              className="
                text-[#C8942E]
                group-hover:text-white
              "
            />
          )}
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-5
            pr-7
            text-[16px]
            leading-[22px]
            font-semibold
            text-[#263F41]
          "
        >
          {name}
        </h3>

        {/* KNOW MORE */}

        <div className="mt-auto pt-4 flex items-center gap-2 text-[13px] font-medium text-[#064B50]">
          Know More

          <span
            className="
              w-7
              h-7

              rounded-full

              bg-[#E85C91]
              text-white

              flex
              items-center
              justify-center

              transition-all

              group-hover:bg-[#C8942E]
              group-hover:translate-x-1
            "
          >
            <ChevronRight size={14} />
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

//   const next = () => {
//     setStart(
//       (current) =>
//         (current + 1) % services.length
//     );
//   };

//   const previous = () => {
//     setStart(
//       (current) =>
//         (current - 1 + services.length) %
//         services.length
//     );
//   };

//   useEffect(() => {
//     if (paused) return;

//     const timer = setInterval(() => {
//       setStart(
//         (current) =>
//           (current + 1) % services.length
//       );
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [paused]);

//   const orderedServices = [
//     ...services.slice(start),
//     ...services.slice(0, start),
//   ];

//   return (
//     <section
//       className="py-16 md:py-20 bg-white"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
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

//         <div className="relative px-0 md:px-14">
//           {/* LEFT ARROW */}

//           <button
//             type="button"
//             onClick={previous}
//             aria-label="Previous services"
//             className="
//               absolute
//               z-20

//               left-0
//               md:left-1

//               top-1/2
//               -translate-y-1/2

//               w-11
//               h-11

//               rounded-full

//               bg-white

//               border
//               border-[#E85C91]

//               text-[#E85C91]

//               shadow-[0_7px_20px_rgba(6,75,80,0.12)]

//               hidden
//               md:flex

//               items-center
//               justify-center

//               transition-all

//               hover:bg-[#E85C91]
//               hover:text-white
//             "
//           >
//             <ChevronLeft size={20} />
//           </button>

//           {/* CARDS DESKTOP */}

//           <div className="hidden xl:grid grid-cols-5 gap-5">
//             {orderedServices
//               .slice(0, 5)
//               .map((service) => (
//                 <ServiceCard
//                   key={service[1]}
//                   service={service}
//                 />
//               ))}
//           </div>

//           {/* TABLET */}

//           <div className="hidden sm:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-5">
//             {orderedServices
//               .slice(0, 3)
//               .map((service) => (
//                 <ServiceCard
//                   key={service[1]}
//                   service={service}
//                 />
//               ))}
//           </div>

//           {/* MOBILE */}

//           <div className="sm:hidden">
//             <ServiceCard
//               service={orderedServices[0]}
//             />
//           </div>

//           {/* RIGHT ARROW */}

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next services"
//             className="
//               absolute
//               z-20

//               right-0
//               md:right-1

//               top-1/2
//               -translate-y-1/2

//               w-11
//               h-11

//               rounded-full

//               bg-white

//               border
//               border-[#E85C91]

//               text-[#E85C91]

//               shadow-[0_7px_20px_rgba(6,75,80,0.12)]

//               hidden
//               md:flex

//               items-center
//               justify-center

//               transition-all

//               hover:bg-[#E85C91]
//               hover:text-white
//             "
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* MOBILE ARROWS */}

//         <div className="mt-6 flex md:hidden items-center justify-center gap-3">
//           <button
//             type="button"
//             onClick={previous}
//             className="
//               w-10
//               h-10
//               rounded-full
//               border
//               border-[#E85C91]
//               text-[#E85C91]
//               flex
//               items-center
//               justify-center
//             "
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             type="button"
//             onClick={next}
//             className="
//               w-10
//               h-10
//               rounded-full
//               bg-[#E85C91]
//               text-white
//               flex
//               items-center
//               justify-center
//             "
//           >
//             <ChevronRight size={18} />
//           </button>
//         </div>

//         {/* DOTS */}

//         <div className="mt-7 flex justify-center gap-2">
//           {services.map((service, index) => (
//             <button
//               type="button"
//               aria-label={`Go to service ${index + 1}`}
//               key={service[1]}
//               onClick={() => setStart(index)}
//               className={`
//                 h-[7px]
//                 rounded-full
//                 transition-all
//                 duration-300

//                 ${
//                   index === start
//                     ? "w-7 bg-[#E85C91]"
//                     : "w-[7px] bg-[#ccd9d8]"
//                 }
//               `}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({ service }) {
//   if (!service) return null;

//   const [name, slug, Icon] = service;

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
//         hover:border-[#E85C91]/40
//         hover:shadow-[0_14px_34px_rgba(6,75,80,0.12)]
//       "
//     >
//       <div
//         className="absolute inset-0 opacity-[0.10]"
//         style={{
//           backgroundImage:
//             "radial-gradient(#C8942E 1px, transparent 1px)",
//           backgroundSize: "18px 18px",
//         }}
//       />

//       <div className="relative z-10 h-full min-h-[143px] flex flex-col">
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

//         <h3
//           className="
//             mt-5
//             pr-7
//             text-[16px]
//             leading-[22px]
//             font-semibold
//             text-[#263F41]
//           "
//         >
//           {name}
//         </h3>

//         <div className="mt-auto pt-4 flex items-center gap-2 text-[13px] font-medium text-[#064B50]">
//           Know More

//           <span
//             className="
//               w-7
//               h-7

//               rounded-full

//               bg-[#E85C91]
//               text-white

//               flex
//               items-center
//               justify-center

//               transition-all

//               group-hover:bg-[#C8942E]
//               group-hover:translate-x-1
//             "
//           >
//             <ChevronRight size={14} />
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }