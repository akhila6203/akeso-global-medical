
import {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

import ServicesGrid from "../components/services/ServicesGrid";
import { services } from "../data/servicesData";

/* =========================================
   WHY CHOOSE AKESO
========================================= */

const advantages = [
  {
    icon: Stethoscope,
    title: "Specialist Coordination",
    description:
      "Support in connecting with suitable medical specialists and healthcare providers.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Focused Assistance",
    description:
      "Guidance and coordination across different stages of the healthcare journey.",
  },
  {
    icon: ShieldCheck,
    title: "Continuity of Care",
    description:
      "Support for consultations, investigations, treatment planning and recovery.",
  },
  {
    icon: ClipboardCheck,
    title: "Organised Appointments",
    description:
      "Assistance with medical appointments, reports and relevant follow-up coordination.",
  },
];

/* =========================================
   PATIENT JOURNEY
========================================= */

const journey = [
  {
    title: "Contact Akeso",
    text: "Share your healthcare requirements and available medical information.",
  },
  {
    title: "Medical Coordination",
    text: "We help identify appropriate available healthcare services.",
  },
  {
    title: "Service Planning",
    text: "Receive relevant appointment details and coordination information.",
  },
  {
    title: "Continued Support",
    text: "Arrange appropriate follow-up and recovery support when required.",
  },
];

/* =========================================
   INFINITE WHY CHOOSE AKESO SLIDER

   Three copies are used so the slider
   can loop in either direction.

========================================= */

const repeatedAdvantages = [
  ...advantages,
  ...advantages,
  ...advantages,
];

function WhyChooseSlider() {
  const sliderRef = useRef(null);
  const pausedRef = useRef(false);
  const scrollingRef = useRef(false);
  const timeoutRef = useRef(null);

  const [ready, setReady] = useState(false);

  const getCardStep = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return 0;

    const firstCard = slider.firstElementChild;
    const secondCard = firstCard?.nextElementSibling;

    if (!firstCard) return 0;

    if (secondCard) {
      return (
        secondCard.offsetLeft -
        firstCard.offsetLeft
      );
    }

    return firstCard.getBoundingClientRect().width;
  }, []);

  const setMiddlePosition = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const step = getCardStep();

    if (!step) return;

    slider.scrollLeft = step * advantages.length;
  }, [getCardStep]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const initialize = () => {
      setMiddlePosition();
      setReady(true);
    };

    initialize();

    const observer = new ResizeObserver(() => {
      if (!scrollingRef.current) {
        setMiddlePosition();
      }
    });

    observer.observe(slider);

    return () => {
      observer.disconnect();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [setMiddlePosition]);

  const normalizePosition = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const step = getCardStep();

    if (!step) return;

    const groupWidth =
      step * advantages.length;

    const current = slider.scrollLeft;

    if (current < groupWidth * 0.5) {
      slider.scrollTo({
        left: current + groupWidth,
        behavior: "instant",
      });
    } else if (
      current > groupWidth * 1.5
    ) {
      slider.scrollTo({
        left: current - groupWidth,
        behavior: "instant",
      });
    }
  }, [getCardStep]);

  const moveSlider = useCallback(
    (direction) => {
      const slider = sliderRef.current;

      if (!slider || scrollingRef.current) {
        return;
      }

      const step = getCardStep();

      if (!step) return;

      scrollingRef.current = true;

      slider.scrollBy({
        left: direction * step,
        behavior: "smooth",
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        normalizePosition();
        scrollingRef.current = false;
      }, 550);
    },
    [getCardStep, normalizePosition]
  );

  useEffect(() => {
    if (!ready) return;

    const interval = setInterval(() => {
      if (
        !pausedRef.current &&
        !scrollingRef.current &&
        !document.hidden
      ) {
        moveSlider(1);
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [ready, moveSlider]);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1250px] px-5 sm:px-7">

        
{/* SECTION HEADING - CENTER */}
<div className="text-center">
  <p className="
    text-[12px]
    font-bold
    uppercase
    tracking-[0.18em]
    text-[#C8942E]
  ">
    Why Choose Akeso
  </p>

  <h2 className="
    mt-3
    text-[28px]
    font-semibold
    leading-tight
    text-[#064B50]
    sm:text-[36px]
  ">
    Care Beyond Coordination
  </h2>
</div>


        {/* SLIDER + MIDDLE ARROWS */}
        <div
          className="relative mt-9"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            pausedRef.current = false;
          }}
          onFocusCapture={() => {
            pausedRef.current = true;
          }}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget
              )
            ) {
              pausedRef.current = false;
            }
          }}
        >

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={() => moveSlider(-1)}
            aria-label="Previous card"
            className="
              absolute
              left-0
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-x-1/3
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#D8E7E5]
              bg-white
              text-[#064B50]
              shadow-lg
              transition
              hover:bg-[#064B50]
              hover:text-white
              sm:h-12
              sm:w-12
              lg:-translate-x-1/2
            "
          >
            <ArrowLeft size={20} />
          </button>

          {/* INFINITE SLIDER */}
          <div
            ref={sliderRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              scroll-smooth
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {repeatedAdvantages.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`${item.title}-${index}`}
                    className="
                      flex
                      min-h-[255px]
                      w-[86%]
                      shrink-0
                      snap-start
                      flex-col
                      rounded-[22px]
                      border
                      border-[#DCE8E6]
                      bg-white
                      p-6
                      transition
                      duration-300
                      hover:border-[#C8942E]/50
                      hover:shadow-[0_14px_40px_rgba(6,75,80,0.08)]
                      sm:w-[calc((100%-20px)/2)]
                      sm:p-7
                      lg:w-[calc((100%-40px)/3)]
                    "
                  >
                    <div className="
                      flex
                      h-[65px]
                      w-[65px]
                      items-center
                      justify-center
                      rounded-[18px]
                      bg-[#EEF6F5]
                      text-[#C8942E]
                    ">
                      <Icon
                        size={29}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="
                      mt-7
                      text-[20px]
                      font-semibold
                      leading-snug
                      text-[#064B50]
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      mt-4
                      text-[15px]
                      leading-8
                      text-[#52696A]
                    ">
                      {item.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={() => moveSlider(1)}
            aria-label="Next card"
            className="
              absolute
              right-0
              top-1/2
              z-20
              flex
              h-10
              w-10
              translate-x-1/3
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#064B50]
              text-white
              shadow-lg
              transition
              hover:bg-[#0B6268]
              sm:h-12
              sm:w-12
              lg:translate-x-1/2
            "
          >
            <ArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}

/* =========================================
   MAIN SERVICES PAGE
========================================= */

export default function Services() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================
          BREADCRUMB - INTERNATIONAL PAGE STYLE
      ===================================== */}
      
{/* BREADCRUMB - COMPACT */}
<section className="
  bg-[#064B50]
  px-5
  py-8
  text-center
  text-white
  sm:py-10
  lg:py-12
">

        <div className="mx-auto max-w-[1050px]">

          <nav
            aria-label="Breadcrumb"
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              text-[14px]
              font-semibold
              sm:text-[15px]
            "
          >
            <Link
              to="/"
              className="transition hover:text-[#E3B04B]"
            >
              Home
            </Link>

            <ChevronRight
              size={17}
              className="text-[#E3B04B]"
            />

            <span>Services</span>
          </nav>

          <h1 className="
            mt-4
            text-[34px]
            font-semibold
            leading-tight
            sm:text-[40px]
            lg:text-[46px]
          ">
            Our Services
          </h1>

          
<p className="
  mx-auto
  mt-3
  max-w-[850px]
  text-[14px]
  leading-7
  text-white/90
  sm:text-[16px]
  sm:leading-8
">
  From your first medical consultation
  to diagnosis, treatment planning and
  recovery, Akeso helps coordinate your
  healthcare journey with patient-focused
  support.
</p>


        </div>
      </section>

      {/* =====================================
          INTRODUCTION
      ===================================== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="
          mx-auto
          grid
          max-w-[1250px]
          gap-10
          px-5
          sm:px-7
          lg:grid-cols-2
          lg:items-center
          lg:gap-16
        ">

          {/* LEFT CONTENT */}
          <div>
            <p className="
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#C8942E]
            ">
              Akeso Global Medical Services
            </p>

            <h2 className="
              mt-4
              text-[30px]
              font-semibold
              leading-tight
              text-[#064B50]
              sm:text-[38px]
              lg:text-[44px]
            ">
              Healthcare Support at Every Stage
            </h2>

            <p className="
              mt-5
              text-[15px]
              leading-8
              text-[#52696A]
              sm:text-[16px]
            ">
              Akeso Global Medical Services Private
              Limited facilitates access to healthcare
              services in India, including medical
              second opinions, specialist consultations,
              diagnostic services, teleconsultations,
              treatment coordination and post-operative
              care support.
            </p>

            <p className="
              mt-4
              text-[15px]
              leading-8
              text-[#52696A]
            ">
              Our services are designed to help patients
              and families coordinate medical care
              according to individual requirements
              and available healthcare providers.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#064B50]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0B6268]
                "
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/international/request-an-estimate"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#C8942E]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#064B50]
                  transition
                  hover:bg-[#FAF6EC]
                "
              >
                Request an Estimate
              </Link>

            </div>
          </div>

          {/* RIGHT CARD - CIRCLES REMOVED */}
          <div className="
            overflow-hidden
            rounded-[25px]
            bg-[#064B50]
            p-7
            text-white
            sm:p-10
          ">
            <HeartHandshake
              size={42}
              className="text-[#E3B04B]"
            />

            <h2 className="
              mt-7
              text-[27px]
              font-semibold
              leading-tight
              sm:text-[34px]
            ">
              Your Health.
              <br />
              Our Coordination.
            </h2>

            <p className="
              mt-5
              text-[15px]
              leading-8
              text-white/80
            ">
              We help make healthcare coordination
              more organised and accessible for
              patients seeking medical services
              in India.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Medical consultations",
                "Diagnostic coordination",
                "Recovery and follow-up support",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-3
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#E3B04B]"
                  />

                  <span className="text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          SERVICES GRID
      ===================================== */}
      <section className="bg-[#F5F9F8] py-14 sm:py-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">

          <SectionTitle
            eyebrow="Our Healthcare Services"
            title="Explore Our Services"
            description="Find the right medical coordination service for your needs."
          />

          <div className="mt-10">
            <ServicesGrid services={services} />
          </div>

        </div>
      </section>

      {/* =====================================
          WHY CHOOSE AKESO AUTO SLIDER
      ===================================== */}
      <WhyChooseSlider />

      {/* =====================================
          PATIENT JOURNEY
      ===================================== */}
      <section className="bg-[#F9F8F4] py-14 sm:py-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">

          <SectionTitle
            eyebrow="Patient Journey"
            title="How We Support You"
            description="A simple coordination process from the first enquiry to continued care."
          />

          <div className="
            mt-10
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          ">
            {journey.map((step, index) => (
              <div
                key={step.title}
                className="
                  rounded-[20px]
                  border
                  border-[#E7E8E3]
                  bg-white
                  p-6
                "
              >
                <span className="
                  text-[30px]
                  font-semibold
                  text-[#C8942E]
                ">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="
                  mt-5
                  text-[19px]
                  font-semibold
                  text-[#064B50]
                ">
                  {step.title}
                </h3>

                <p className="
                  mt-3
                  text-[14px]
                  leading-7
                  text-[#52696A]
                ">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}
      <section className="
        bg-[#064B50]
        py-14
        text-center
        sm:py-16
      ">
        <div className="mx-auto max-w-[800px] px-5">

          <h2 className="
            text-[28px]
            font-semibold
            text-white
            sm:text-[36px]
          ">
            Let Us Help Coordinate Your Care
          </h2>

          <p className="
            mt-4
            text-[15px]
            leading-8
            text-white/80
          ">
            Contact our team to discuss your
            healthcare requirements and
            available services.
          </p>

          <Link
            to="/contact"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#C8942E]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#B78322]
            "
          >
            Get in Touch
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}

/* =========================================
   REUSABLE SECTION TITLE
========================================= */

function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-[760px] text-center">

      <p className="
        text-xs
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#C8942E]
      ">
        {eyebrow}
      </p>

      <h2 className="
        mt-3
        text-[28px]
        font-semibold
        text-[#064B50]
        sm:text-[36px]
      ">
        {title}
      </h2>

      <p className="
        mt-4
        text-[15px]
        leading-8
        text-[#52696A]
      ">
        {description}
      </p>

    </div>
  );
}




// import {
//   ArrowRight,
//   CheckCircle2,
//   HeartHandshake,
//   ShieldCheck,
//   Stethoscope,
// } from "lucide-react";

// import {
//   Link,
// } from "react-router-dom";

// import Breadcrumb from "../components/Breadcrumb";

// import ServicesGrid from "../components/services/ServicesGrid";

// import {
//   services,
// } from "../data/servicesData";


// export default function Services() {
//   return (
//     <main className="overflow-hidden bg-white">

//       {/* =====================================================
//           BREADCRUMB
//       ====================================================== */}

//       <Breadcrumb
//         items={[
//           {
//             label: "Services",
//           },
//         ]}
//         title="Our Services"
//         description="Explore coordinated healthcare services designed to support patients before, during and after their treatment journey."
//       />


//       {/* =====================================================
//           INTRODUCTION
//       ====================================================== */}

//       <section className="bg-white py-14 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">

//           <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">

//             {/* LEFT CONTENT */}

//             <div>
//               <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C88416] sm:text-[12px]">
//                 Patient-Centred Services
//               </p>

//               <h1 className="mt-4 max-w-[720px] text-[29px] font-semibold leading-[1.2] text-[#064B50] sm:text-[35px] lg:text-[42px]">
//                 Supporting Your Healthcare
//                 Journey Beyond the Hospital
//               </h1>

//               <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#3d3e3e] sm:text-[16px]">
//                 Akeso Global Medical Services
//                 helps patients coordinate
//                 important stages of their
//                 healthcare journey — from
//                 virtual specialist consultations
//                 and second opinions to
//                 diagnostic support, homecare
//                 and post-operative recovery.
//               </p>

//               <p className="mt-4 max-w-[720px] text-[15px] leading-8 text-[#3d3e3e] sm:text-[16px]">
//                 Our aim is to make it easier
//                 for patients and families to
//                 understand the next step,
//                 organise appropriate medical
//                 support and stay connected
//                 throughout their care journey.
//               </p>


//               {/* BUTTONS */}

//               <div className="mt-7 flex flex-col gap-3 sm:flex-row">

//                 <Link
//                   to="/contact"
//                   className="
//                     inline-flex
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     bg-[#064B50]
//                     px-6
//                     py-3.5
//                     text-[14px]
//                     font-semibold
//                     text-white
//                     transition
//                     duration-300
//                     hover:bg-[#0B6268]
//                   "
//                 >
//                   Contact Us

//                   <ArrowRight
//                     size={17}
//                   />
//                 </Link>


//                 <Link
//                    to="/international/request-an-estimate"
//                   className="
//                     inline-flex
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-[#C8942E]
//                     bg-white
//                     px-6
//                     py-3.5
//                     text-[14px]
//                     font-semibold
//                     text-[#064B50]
//                     transition
//                     duration-300
//                     hover:bg-[#FAF6EC]
//                   "
//                 >
//                   Request an Estimate

//                   <ArrowRight
//                     size={17}
//                   />
//                 </Link>

//               </div>
//             </div>


//             {/* RIGHT DESIGN */}

//             <div className="
//               relative
//               overflow-hidden
//               rounded-[26px]
//               bg-[#064B50]
//               p-6
//               sm:p-8
//               lg:p-9
//             ">

//               <div className="relative">

//                 <div className="
//                   flex
//                   h-14
//                   w-14
//                   items-center
//                   justify-center
//                   rounded-[16px]
//                   bg-white/10
//                   text-[#E2AE46]
//                 ">
//                   <HeartHandshake
//                     size={27}
//                     strokeWidth={1.7}
//                   />
//                 </div>


//                 <p className="
//                   mt-8
//                   text-[11px]
//                   font-bold
//                   uppercase
//                   tracking-[0.2em]
//                   text-[#E2AE46]
//                 ">
//                   Coordinated Care
//                 </p>

//                 <h2 className="
//                   mt-3
//                   text-[25px]
//                   font-semibold
//                   leading-tight
//                   text-white
//                   sm:text-[30px]
//                 ">
//                   One Journey.
//                   <br />
//                   Connected Support.
//                 </h2>

//                 <p className="
//                   mt-4
//                   max-w-[500px]
//                   text-[14px]
//                   leading-7
//                   text-white/75
//                   sm:text-[15px]
//                 ">
//                   Different stages of medical
//                   care can require different
//                   forms of support. Our
//                   services are designed to
//                   help patients move through
//                   those stages in a more
//                   organised way.
//                 </p>


//                 {/* MINI FEATURES */}

//                 <div className="mt-8 space-y-3">

//                   {[
//                     "Specialist coordination",
//                     "Patient-focused support",
//                     "Care journey assistance",
//                   ].map(
//                     (item) => (
//                       <div
//                         key={item}
//                         className="
//                           flex
//                           items-center
//                           gap-3
//                           rounded-xl
//                           border
//                           border-white/10
//                           bg-white/[0.06]
//                           px-4
//                           py-3
//                         "
//                       >
//                         <CheckCircle2
//                           size={18}
//                           className="
//                             shrink-0
//                             text-[#E2AE46]
//                           "
//                         />

//                         <span className="
//                           text-[14px]
//                           text-white/90
//                         ">
//                           {item}
//                         </span>
//                       </div>
//                     )
//                   )}

//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =====================================================
//           ALL SERVICES
//       ====================================================== */}

//       <section className="bg-[#F5F9F8] py-14 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-[1350px] px-5 sm:px-7 lg:px-10">

//           {/* HEADING */}

//           <div className="mx-auto max-w-[800px] text-center">

//             <p className="
//               text-[11px]
//               font-bold
//               uppercase
//               tracking-[0.22em]
//               text-[#C88416]
//               sm:text-[12px]
//             ">
//               Explore Our Services
//             </p>

//             <h2 className="
//               mt-3
//               text-[28px]
//               font-semibold
//               leading-tight
//               text-[#064B50]
//               sm:text-[34px]
//               lg:text-[39px]
//             ">
//               Care Designed Around
//               Your Medical Journey
//             </h2>

//             <p className="
//               mx-auto
//               mt-4
//               max-w-[720px]
//               text-[14px]
//               leading-7
//               text-[#4b4c4c]
//               sm:text-[15px]
//               sm:leading-8
//             ">
//               Choose a service to learn
//               how Akeso can support you
//               at different stages of
//               consultation, diagnosis,
//               treatment and recovery.
//             </p>

//           </div>


//           {/* REUSABLE SERVICE CARDS */}

//           <div className="mt-10 lg:mt-12">
//             <ServicesGrid
//               services={services}
//             />
//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           WHY AKESO
//       ====================================================== */}

//       <section className="bg-white py-14 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">

//           <div className="mx-auto max-w-[800px] text-center">

//             <p className="
//               text-[11px]
//               font-bold
//               uppercase
//               tracking-[0.22em]
//               text-[#C88416]
//             ">
//               Why Akeso
//             </p>

//             <h2 className="
//               mt-3
//               text-[28px]
//               font-semibold
//               text-[#064B50]
//               sm:text-[34px]
//               lg:text-[38px]
//             ">
//               More Than Medical
//               Coordination
//             </h2>

//             <p className="
//               mx-auto
//               mt-4
//               max-w-[700px]
//               text-[15px]
//               leading-8
//               text-[#393a3a]
//             ">
//               We focus on helping patients
//               understand and coordinate the
//               different stages involved in
//               their healthcare journey.
//             </p>

//           </div>


//           {/* WHY CARDS */}

//           <div className="
//             mt-10
//             grid
//             gap-5
//             sm:grid-cols-2
//             lg:grid-cols-3
//           ">

//             <WhyCard
//               icon={Stethoscope}
//               title="Appropriate Care Coordination"
//               description="Support in connecting with suitable medical services and specialists according to the patient's healthcare requirements."
//             />

//             <WhyCard
//               icon={HeartHandshake}
//               title="Patient-Focused Support"
//               description="Healthcare journeys can be complex, so our approach focuses on helping patients and families understand each stage more clearly."
//             />

//             <WhyCard
//               icon={ShieldCheck}
//               title="Continuity of Care"
//               description="Support can continue across consultation, diagnostic coordination, treatment planning and suitable recovery requirements."
//             />

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           PATIENT JOURNEY
//       ====================================================== */}

//       <section className="bg-[#F8F6F0] py-14 sm:py-16 lg:py-20">
//         <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-10">

//           <div className="mx-auto max-w-[780px] text-center">

//             <p className="
//               text-[11px]
//               font-bold
//               uppercase
//               tracking-[0.22em]
//               text-[#C88416]
//             ">
//               Patient Journey
//             </p>

//             <h2 className="
//               mt-3
//               text-[28px]
//               font-semibold
//               text-[#064B50]
//               sm:text-[34px]
//               lg:text-[38px]
//             ">
//               Support at Every Stage
//             </h2>

//           </div>


//           <div className="
//             mt-10
//             grid
//             gap-5
//             sm:grid-cols-2
//             lg:grid-cols-4
//           ">

//             <JourneyCard
//               number="01"
//               title="Connect"
//               description="Tell us about your medical concern and the support you are looking for."
//             />

//             <JourneyCard
//               number="02"
//               title="Coordinate"
//               description="Relevant medical information and service requirements can be organised."
//             />

//             <JourneyCard
//               number="03"
//               title="Receive Care"
//               description="Proceed with the appropriate consultation, investigation or support service."
//             />

//             <JourneyCard
//               number="04"
//               title="Continue Support"
//               description="Follow-up and recovery requirements can be coordinated as the care journey progresses."
//             />

//           </div>

//         </div>
//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}

//       <section className="bg-[#064B50] py-14 sm:py-16 lg:py-[72px]">
//         <div className="
//           mx-auto
//           max-w-[900px]
//           px-5
//           text-center
//           sm:px-7
//         ">

//           <p className="
//             text-[11px]
//             font-bold
//             uppercase
//             tracking-[0.22em]
//             text-[#E2AE46]
//           ">
//             Akeso Global Medical Services
//           </p>


//           <h2 className="
//             mt-3
//             text-[28px]
//             font-semibold
//             leading-tight
//             text-white
//             sm:text-[35px]
//             lg:text-[39px]
//           ">
//             Need Help Choosing
//             the Right Service?
//           </h2>


//           <p className="
//             mx-auto
//             mt-4
//             max-w-[680px]
//             text-[15px]
//             leading-8
//             text-white/80
//           ">
//             Speak with our team for
//             service information, or share
//             your medical requirements to
//             begin planning your healthcare
//             journey.
//           </p>


//           {/* CTA BUTTONS */}

//           <div className="
//             mt-8
//             flex
//             flex-col
//             justify-center
//             gap-3
//             sm:flex-row
//           ">

//             <Link
//               to="/contact"
//               className="
//                 inline-flex
//                 w-full
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-xl
//                 bg-white
//                 px-7
//                 py-3.5
//                 text-[14px]
//                 font-semibold
//                 text-[#064B50]
//                 transition
//                 duration-300
//                 hover:bg-[#F1F7F6]
//                 sm:w-auto
//               "
//             >
//               Contact Us

//               <ArrowRight
//                 size={17}
//               />
//             </Link>


//             <Link
//                to="/international/request-an-estimate"
//               className="
//                 inline-flex
//                 w-full
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-xl
//                 border
//                 border-[#E2AE46]
//                 px-7
//                 py-3.5
//                 text-[14px]
//                 font-semibold
//                 text-white
//                 transition
//                 duration-300
//                 hover:bg-[#E2AE46]
//                 hover:text-[#064B50]
//                 sm:w-auto
//               "
//             >
//               Request an Estimate

//               <ArrowRight
//                 size={17}
//               />
//             </Link>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }


// /* =========================================================
//    WHY AKESO CARD
// ========================================================= */

// function WhyCard({
//   icon: Icon,
//   title,
//   description,
// }) {
//   return (
//     <article className="
//       group
//       min-w-0
//       rounded-[20px]
//       border
//       border-[#D9E7E5]
//       bg-white
//       p-6
//       transition
//       duration-300
//       hover:-translate-y-1
//       hover:border-[#C8942E]/60
//       hover:shadow-[0_16px_38px_rgba(6,75,80,0.08)]
//       sm:p-7
//     ">

//       <div className="
//         flex
//         h-12
//         w-12
//         items-center
//         justify-center
//         rounded-xl
//         bg-[#EEF6F5]
//         text-[#C8942E]
//         transition
//         group-hover:bg-[#064B50]
//         group-hover:text-white
//       ">
//         <Icon
//           size={22}
//           strokeWidth={1.7}
//         />
//       </div>


//       <h3 className="
//         mt-5
//         break-words
//         text-[18px]
//         font-semibold
//         text-[#064B50]
//       ">
//         {title}
//       </h3>


//       <p className="
//         mt-3
//         break-words
//         text-[15px]
//         leading-7
//         text-[#3d3e3e]
//         sm:text-[15px]
//       ">
//         {description}
//       </p>

//     </article>
//   );
// }


// /* =========================================================
//    JOURNEY CARD
// ========================================================= */

// function JourneyCard({
//   number,
//   title,
//   description,
// }) {
//   return (
//     <article className="
//       relative
//       min-w-0
//       overflow-hidden
//       rounded-[20px]
//       border
//       border-[#E5DDCB]
//       bg-white
//       p-6
//       sm:p-7
//     ">

//       <span className="
//         absolute
//         right-4
//         top-2
//         text-[55px]
//         font-bold
//         leading-none
//         text-[#064B50]/[0.05]
//       ">
//         {number}
//       </span>


//       <div className="
//         flex
//         h-10
//         w-10
//         items-center
//         justify-center
//         rounded-full
//         bg-[#064B50]
//         text-[12px]
//         font-bold
//         text-white
//       ">
//         {number}
//       </div>


//       <h3 className="
//         relative
//         mt-5
//         text-[18px]
//         font-semibold
//         text-[#064B50]
//       ">
//         {title}
//       </h3>


//       <p className="
//         relative
//         mt-3
//         text-[15px]
//         leading-7
//         text-[#3d3e3e]
//       ">
//         {description}
//       </p>

//     </article>
//   );
// }