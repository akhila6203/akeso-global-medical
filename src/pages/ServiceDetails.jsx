
import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  AlertCircle,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  services,
  getServiceBySlug,
} from "../data/servicesData";

/* =========================================
   RESPONSIVE CARDS
   More than 4: Auto Slider
   4 or fewer: Normal Grid
========================================= */

function CardsDisplay({
  items = [],
  renderCard,
  columns = 3,
  forceSlider = false,
}) {
  const sliderRef = useRef(null);
  const pausedRef = useRef(false);
  const movingRef = useRef(false);
  const settleRef = useRef(null);

  const isSlider = forceSlider || items.length > 4;

  const repeatedItems = isSlider
    ? [...items, ...items, ...items]
    : items;

  const getStep = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return 0;

    const first = slider.children[0];
    const second = slider.children[1];

    if (!first || !second) return 0;

    return second.offsetLeft - first.offsetLeft;
  }, []);

  const resetToMiddle = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider || !isSlider) return;

    const step = getStep();
    if (!step) return;

    slider.scrollTo({
      left: step * items.length,
      behavior: "instant",
    });
  }, [getStep, isSlider, items.length]);

  const normalize = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider || !isSlider) return;

    const step = getStep();
    if (!step) return;

    const groupWidth = step * items.length;
    const current = slider.scrollLeft;

    if (current < groupWidth * 0.5) {
      slider.scrollTo({
        left: current + groupWidth,
        behavior: "instant",
      });
    } else if (current > groupWidth * 1.5) {
      slider.scrollTo({
        left: current - groupWidth,
        behavior: "instant",
      });
    }
  }, [getStep, isSlider, items.length]);

  const move = useCallback(
    (direction) => {
      const slider = sliderRef.current;

      if (!slider || !isSlider || movingRef.current) {
        return;
      }

      const step = getStep();
      if (!step) return;

      movingRef.current = true;

      slider.scrollBy({
        left: step * direction,
        behavior: "smooth",
      });

      if (settleRef.current) {
        clearTimeout(settleRef.current);
      }

      settleRef.current = setTimeout(() => {
        normalize();
        movingRef.current = false;
      }, 650);
    },
    [getStep, normalize, isSlider]
  );

  useEffect(() => {
    if (!isSlider || !items.length) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new ResizeObserver(() => {
      if (!movingRef.current) {
        resetToMiddle();
      }
    });

    resetToMiddle();
    observer.observe(slider);

    return () => {
      observer.disconnect();
      if (settleRef.current) {
        clearTimeout(settleRef.current);
      }
    };
  }, [isSlider, resetToMiddle, items.length]);

  useEffect(() => {
    if (!isSlider || !items.length) return;

    const interval = setInterval(() => {
      if (
        !pausedRef.current &&
        !movingRef.current &&
        !document.hidden
      ) {
        move(1);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isSlider, move, items.length]);

  if (!items.length) return null;

  if (!isSlider) {
    return (
      <div
        className={`grid gap-5 ${
          columns === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {items.map((item, index) => (
          <div key={index} className="h-full min-w-0">
            {renderCard(item, index)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative"
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
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Previous card"
        className="
          absolute left-0 top-1/2 z-20
          flex h-10 w-10
          -translate-x-1/3 -translate-y-1/2
          items-center justify-center
          rounded-full border border-[#D8E7E5]
          bg-white text-[#064B50] shadow-lg
          transition hover:bg-[#064B50]
          hover:text-white sm:h-12 sm:w-12
          lg:-translate-x-1/2
        "
      >
        <ArrowLeft size={20} />
      </button>

      <div
        ref={sliderRef}
        onScroll={() => {
          if (settleRef.current) {
            clearTimeout(settleRef.current);
          }

          settleRef.current = setTimeout(() => {
            normalize();
            movingRef.current = false;
          }, 180);
        }}
        className="
          flex snap-x snap-mandatory
          gap-5 overflow-x-auto pb-4
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="
              h-auto w-[87%] shrink-0 snap-start
              sm:w-[calc((100%-20px)/2)]
              lg:w-[calc((100%-40px)/3)]
            "
          >
            {renderCard(item, index % items.length)}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Next card"
        className="
          absolute right-0 top-1/2 z-20
          flex h-10 w-10
          translate-x-1/3 -translate-y-1/2
          items-center justify-center
          rounded-full bg-[#064B50]
          text-white shadow-lg
          transition hover:bg-[#0B6268]
          sm:h-12 sm:w-12 lg:translate-x-1/2
        "
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-[780px] text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8942E]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-[28px] font-semibold leading-tight text-[#064B50] sm:text-[36px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[15px] leading-8 text-[#52696A]">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================
   MAIN SERVICE DETAILS PAGE
========================================= */

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    setOpenFaq(0);
  }, [slug]);

  if (!service) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-[30px] font-semibold text-[#064B50]">
            Service Not Found
          </h1>

          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#064B50] px-6 py-3 text-white"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="overflow-hidden bg-white">

      {/* COMPACT BREADCRUMB */}
      <section className="bg-[#064B50] px-5 py-8 text-center text-white sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1050px]">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold sm:text-[14px]"
          >
            <Link to="/" className="hover:text-[#E3B04B]">
              Home
            </Link>

            <ChevronRight size={16} className="text-[#E3B04B]" />

            <Link to="/services" className="hover:text-[#E3B04B]">
              Services
            </Link>

            <ChevronRight size={16} className="text-[#E3B04B]" />

            <span>{service.name}</span>
          </nav>

          <h1 className="mt-5 text-[30px] font-semibold leading-tight sm:text-[40px] lg:text-[46px]">
            {service.name}
          </h1>

          <p className="mx-auto mt-3 max-w-[850px] text-[14px] leading-7 text-white/90 sm:text-[16px] sm:leading-8">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1250px] gap-8 px-5 sm:px-7 lg:grid-cols-2 lg:items-center lg:gap-14">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8942E]">
              {service.eyebrow}
            </p>

            <h2 className="mt-4 text-[30px] font-semibold leading-tight text-[#064B50] sm:text-[39px] lg:text-[43px]">
              {service.name}
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-[#52696A] sm:text-[16px]">
              {service.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#064B50] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B6268]"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/international/request-an-estimate"
                className="inline-flex items-center gap-2 rounded-xl border border-[#C8942E] px-6 py-3.5 text-sm font-semibold text-[#064B50]"
              >
                Request an Estimate
              </Link>
            </div>
          </div>

          <div className="flex min-h-[290px] items-center justify-center rounded-[25px] bg-[#064B50] p-8 text-center text-white sm:min-h-[350px]">
            <div className="max-w-[420px]">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#E3B04B]">
                {Icon && <Icon size={37} strokeWidth={1.6} />}
              </div>

              <h2 className="mt-7 text-[25px] font-semibold leading-snug sm:text-[31px]">
                {service.highlight}
              </h2>

              <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#C8942E]" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE HELP YOU WITH - NO SLIDER */}
      <section className="bg-[#F5F9F8] py-14 sm:py-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">

          <SectionHeading
            eyebrow="Service Overview"
            title="What We Help You With"
            description="Explore the services and coordination support available according to your requirements."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(service.benefits || []).map((benefit, index) => (
              <div
                key={index}
                className="flex min-h-[130px] items-start gap-4 rounded-[18px] border border-[#DCE8E6] bg-white p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F3] text-[#C8942E]">
                  <Check size={21} strokeWidth={2.2} />
                </div>

                <h3 className="pt-1 text-[16px] font-semibold leading-7 text-[#064B50]">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SUPPORT */}
      {service.benefitDetails?.length > 0 && (
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
            <SectionHeading
              eyebrow="Dedicated Support"
              title="Our Support Services"
              description="Explore the different types of coordinated support available."
            />

            <div className="mt-10">
              <CardsDisplay
                items={service.benefitDetails}
                renderCard={(item, index) => (
                  <div className="h-full min-h-[250px] rounded-[22px] border border-[#DCE8E6] bg-white p-6 sm:p-7">
                    <span className="text-[28px] font-semibold text-[#C8942E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 text-[19px] font-semibold text-[#064B50]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-8 text-[#52696A]">
                      {item.description}
                    </p>
                  </div>
                )}
              />
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS - AUTO SLIDER */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">

          <SectionHeading
            eyebrow="Our Process"
            title="How It Works"
            description="A simple step-by-step process to coordinate your medical service."
          />

          <div className="mt-10">
            <CardsDisplay
              items={service.process || []}
              forceSlider={(service.process || []).length > 1}
              renderCard={(step, index) => (
                <div className="h-full min-h-[245px] rounded-[20px] border border-[#E0EAE8] bg-white p-6 transition hover:border-[#C8942E]/50 hover:shadow-[0_12px_35px_rgba(6,75,80,0.08)] sm:p-7">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#064B50] text-[16px] font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold text-[#064B50]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#52696A]">
                    {step.description}
                  </p>
                </div>
              )}
            />
          </div>
        </div>
      </section>

      {/* THINGS YOU SHOULD KNOW + MEDICAL NOTICE */}
      <section className="bg-[#F7FAF9] py-14 sm:py-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">

          <SectionHeading
            eyebrow="Important Information"
            title="Things You Should Know"
            description="Helpful information about medical responsibilities, service requirements and availability."
          />

          <div className="mt-10">
            <CardsDisplay
              items={service.details || []}
              columns={3}
              renderCard={(item) => (
                <div className="h-full min-h-[260px] rounded-[20px] border border-[#E0EAE8] bg-white p-6 transition duration-300 hover:border-[#C8942E]/50 hover:shadow-[0_12px_30px_rgba(6,75,80,0.06)] sm:p-7">
                  <h3 className="text-[19px] font-semibold leading-snug text-[#064B50]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-8 text-[#52696A]">
                    {item.content}
                  </p>
                </div>
              )}
            />
          </div>

          {service.notice && (
            <div className="mt-8 flex items-start gap-4 rounded-[18px] border border-[#E8DDBE] bg-[#FCF9F0] p-6 sm:p-7">
              <AlertCircle
                size={24}
                className="mt-1 shrink-0 text-[#B88627]"
              />

              <div>
                <h3 className="text-[19px] font-semibold text-[#064B50]">
                  Important Medical Notice
                </h3>

                <p className="mt-3 text-[15px] leading-8 text-[#52696A]">
                  {service.notice}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[950px] px-5 sm:px-7">

          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Have Questions?"
            description="Find answers to common questions about this service."
          />

          <div className="mt-10 space-y-4">
            {(service.faqs || []).map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[17px] border border-[#DDE8E6] bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-[16px] font-semibold text-[#064B50]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#C8942E] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#EDF1F0] px-5 py-5 sm:px-6">
                      <p className="text-[15px] leading-8 text-[#52696A]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#064B50] py-14 sm:py-16">
        <div className="mx-auto max-w-[850px] px-5 text-center">
          <HeartHandshake
            size={36}
            className="mx-auto text-[#E3B04B]"
          />

          <h2 className="mt-5 text-[28px] font-semibold text-white sm:text-[36px]">
            {service.ctaTitle}
          </h2>

          <p className="mt-4 text-[15px] leading-8 text-white/80">
            {service.ctaDescription}
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C8942E] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B78322]"
          >
            Contact Akeso
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-[27px] font-semibold text-[#064B50] sm:text-[34px]">
              Explore Other Services
            </h2>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#064B50]"
            >
              View All Services
              <ArrowRight size={17} />
            </Link>
          </div>

          <CardsDisplay
            items={services.filter(
              (item) => item.slug !== service.slug
            )}
            renderCard={(item) => {
              const RelatedIcon = item.icon;

              return (
                <Link
                  to={`/services/${item.slug}`}
                  className="group block h-full min-h-[230px] rounded-[20px] border border-[#DCE8E6] bg-white p-6 transition hover:border-[#C8942E] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF6F5] text-[#C8942E]">
                    {RelatedIcon && <RelatedIcon size={24} />}
                  </div>

                  <h3 className="mt-5 text-[19px] font-semibold text-[#064B50]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#52696A]">
                    {item.shortDescription}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#064B50]">
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            }}
          />
        </div>
      </section>
    </main>
  );
}




// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   CircleCheck,
//   ShieldCheck,
// } from "lucide-react";

// import {
//   Link,
//   useParams,
// } from "react-router-dom";

// import Breadcrumb from "../components/Breadcrumb";
// import ServicePdfSection from "../components/services/ServicePdfSection";

// import {
//   getServiceBySlug,
// } from "../data/servicesData";


// export default function ServiceDetails() {
//   const { slug } =
//     useParams();

//   const service =
//     getServiceBySlug(slug);


//   if (!service) {
//     return (
//       <main className="
//         flex
//         min-h-[60vh]
//         items-center
//         justify-center
//         bg-white
//         px-5
//       ">
//         <div className="text-center">
//           <h1 className="
//             text-[30px]
//             font-semibold
//             text-[#064B50]
//           ">
//             Service Not Found
//           </h1>

//           <Link
//             to="/services"
//             className="
//               mt-6
//               inline-flex
//               items-center
//               gap-2
//               rounded-xl
//               bg-[#064B50]
//               px-6
//               py-3.5
//               text-[14px]
//               font-semibold
//               text-white
//             "
//           >
//             <ArrowLeft size={17} />
//             View All Services
//           </Link>
//         </div>
//       </main>
//     );
//   }


//   const ServiceIcon =
//     service.icon;


//   return (
//     <main className="bg-white">

//       {/* ===================================================
//           BREADCRUMB
//       =================================================== */}

//       <Breadcrumb
//         title={service.name}
//         description={
//           service.heroDescription
//         }
//         items={[
//           {
//             label: "Services",
//             to: "/services",
//           },
//           {
//             label: service.name,
//           },
//         ]}
//       />


//       {/* ===================================================
//           ABOUT + HIGHLIGHT
//       =================================================== */}

//       <section className="
//         py-14
//         sm:py-16
//         lg:py-20
//       ">
//         <div className="
//           mx-auto
//           grid
//           max-w-[1280px]
//           overflow-hidden
//           rounded-[26px]
//           border
//           border-[#D7E6E4]
//           lg:grid-cols-2
//         ">

//           {/* LEFT */}

//           <div className="
//             bg-[#F3F8F7]
//             p-6
//             sm:p-9
//             lg:p-12
//           ">
//             <p className="
//               text-[11px]
//               font-bold
//               uppercase
//               tracking-[0.22em]
//               text-[#C88416]
//             ">
//               {service.eyebrow}
//             </p>

//             <h2 className="
//               mt-4
//               text-[29px]
//               font-semibold
//               leading-tight
//               text-[#064B50]
//               sm:text-[36px]
//               lg:text-[42px]
//             ">
//               {service.name}
//             </h2>

//             <h3 className="
//               mt-7
//               text-[20px]
//               font-semibold
//               text-[#064B50]
//               sm:text-[22px]
//             ">
//               {service.aboutTitle}
//             </h3>

//             <p className="
//               mt-4
//               text-[15px]
//               leading-8
//               text-[#353636]
//               sm:text-[16px]
//             ">
//               {service.about}
//             </p>


//             {/* BUTTONS */}

//             <div className="
//               mt-8
//               flex
//               flex-col
//               gap-3
//               sm:flex-row
//             ">
//               <Link
//                 to="/contact"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   bg-[#064B50]
//                   px-6
//                   py-3.5
//                   text-[14px]
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#0B6268]
//                 "
//               >
//                 Contact Us
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                  to="/international/request-an-estimate"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-[#C8942E]
//                   bg-white
//                   px-6
//                   py-3.5
//                   text-[14px]
//                   font-semibold
//                   text-[#064B50]
//                   transition
//                   hover:bg-[#FAF6EC]
//                 "
//               >
//                 Request an Estimate
//                 <ArrowRight size={17} />
//               </Link>
//             </div>
//           </div>


//           {/* RIGHT */}

//           <div className="
//             relative
//             flex
//             min-h-[340px]
//             items-center
//             justify-center
//             overflow-hidden
//             bg-[#07575C]
//             p-7
//             text-white
//             sm:min-h-[420px]
//             sm:p-10
//           ">
           
//             <div className="
//               relative
//               max-w-[500px]
//               text-center
//             ">
//               <div className="
//                 mx-auto
//                 flex
//                 h-[92px]
//                 w-[92px]
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-white/10
//                 text-[#E3B04B]
//               ">
//                 <ServiceIcon
//                   size={38}
//                   strokeWidth={1.7}
//                 />
//               </div>

//               <h3 className="
//                 mt-8
//                 text-[25px]
//                 font-semibold
//                 sm:text-[30px]
//               ">
//                 {service.introTitle}
//               </h3>

//               <p className="
//                 mt-4
//                 text-[15px]
//                 leading-8
//                 text-white/85
//                 sm:text-[16px]
//               ">
//                 {service.introText}
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>


// {/* ===================================================
//     PDF SERVICE INFORMATION
// =================================================== */}

// <ServicePdfSection slug={service.slug} />

//       {/* ===================================================
//           HOW WE HELP
//       =================================================== */}

//       <section className="
//         bg-[#F7FAF9]
//         py-14
//         sm:py-16
//         lg:py-20
//       ">
//         <div className="
//           mx-auto
//           max-w-[1300px]
//           px-5
//           sm:px-7
//           lg:px-10
//         ">
//           <SectionTitle
//             eyebrow="Service Support"
//             title="How We Can Help"
//             description={`Explore the key support available through our ${service.name} service.`}
//           />

//           <FeatureGrid
//             items={service.features}
//           />
//         </div>
//       </section>


//       {/* ===================================================
//           LAB: WHY AKESO
//       =================================================== */}

//       {service.whyItems?.length > 0 && (
//         <section className="
//           bg-white
//           py-14
//           sm:py-16
//           lg:py-20
//         ">
//           <div className="
//             mx-auto
//             max-w-[1350px]
//             px-5
//             sm:px-7
//             lg:px-10
//           ">
//             <SectionTitle
//               eyebrow="Diagnostic Coordination"
//               title={
//                 service.whyTitle
//               }
//               description="A coordinated approach helps patients organise prescribed investigations as part of their overall medical journey."
//             />

//             <div className="
//               mt-10
//               grid
//               gap-5
//               sm:grid-cols-2
//               lg:grid-cols-4
//             ">
//               {service.whyItems.map(
//                 (item) => (
//                   <InfoCard
//                     key={item.title}
//                     item={item}
//                     centered
//                   />
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//       )}


//       {/* ===================================================
//           LAB: FREQUENTLY PRESCRIBED TESTS
//       =================================================== */}

//       {service.tests?.length > 0 && (
//         <section className="
//           bg-[#F7FAF9]
//           py-14
//           sm:py-16
//           lg:py-20
//         ">
//           <div className="
//             mx-auto
//             max-w-[1300px]
//             px-5
//             sm:px-7
//             lg:px-10
//           ">
//             <SectionTitle
//               eyebrow="Laboratory Testing"
//               title={
//                 service.testsTitle
//               }
//               description="Common investigations may be prescribed according to symptoms, medical history and the treating clinician's assessment."
//             />

//             <div className="
//               mt-10
//               grid
//               gap-5
//               sm:grid-cols-2
//               lg:grid-cols-4
//             ">
//               {service.tests.map(
//                 (item) => (
//                   <InfoCard
//                     key={item.title}
//                     item={item}
//                   />
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//       )}


//       {/* ===================================================
//           HOMECARE / POST-OP SPECIAL SECTION
//       =================================================== */}

//       {service.careItems?.length > 0 && (
//         <section className="
//           bg-[#FAF8F2]
//           py-14
//           sm:py-16
//           lg:py-20
//         ">
//           <div className="
//             mx-auto
//             max-w-[1350px]
//             px-5
//             sm:px-7
//             lg:px-10
//           ">
//             <SectionTitle
//               eyebrow={
//                 service.slug ===
//                 "post-op-care"
//                   ? "Healing Beyond Surgery"
//                   : "Continued Care"
//               }
//               title={
//                 service.careTitle
//               }
//               description={
//                 service.slug ===
//                 "post-op-care"
//                   ? "Recovery support that goes beyond the procedure, helping patients transition through rehabilitation and wellbeing."
//                   : "Support can be tailored around the patient's medical recommendations and recovery requirements."
//               }
//             />

//             <div className="
//               mt-10
//               grid
//               gap-5
//               sm:grid-cols-2
//               lg:grid-cols-4
//             ">
//               {service.careItems.map(
//                 (item) => (
//                   <InfoCard
//                     key={item.title}
//                     item={item}
//                     centered
//                   />
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//       )}


//       {/* ===================================================
//           HIGHLIGHT
//       =================================================== */}

//       {service.highlightTitle && (
//         <section className="
//           bg-[#07575C]
//           py-12
//           sm:py-14
//         ">
//           <div className="
//             mx-auto
//             max-w-[1050px]
//             px-5
//             text-center
//             sm:px-7
//           ">
//             <ServiceIcon
//               size={36}
//               className="
//                 mx-auto
//                 text-[#E2AE46]
//               "
//             />

//             <h2 className="
//               mt-5
//               text-[27px]
//               font-semibold
//               text-white
//               sm:text-[34px]
//             ">
//               {service.highlightTitle}
//             </h2>

//             <p className="
//               mx-auto
//               mt-4
//               max-w-[780px]
//               text-[16px]
//               leading-8
//               text-white/80
//               sm:text-[16px]
//             ">
//               {service.highlightText}
//             </p>
//           </div>
//         </section>
//       )}


//       {/* ===================================================
//           PROCESS
//       =================================================== */}

//       <section className="
//         bg-white
//         py-14
//         sm:py-16
//         lg:py-20
//       ">
//         <div className="
//           mx-auto
//           max-w-[1150px]
//           px-5
//           sm:px-7
//           lg:px-10
//         ">
//           <SectionTitle
//             eyebrow="Step By Step"
//             title={
//               service.processTitle
//             }
//             description="A simple coordinated approach designed to help patients understand the next stage of their care journey."
//           />


//           <div className="
//             mt-11
//             space-y-4
//           ">
//             {service.process.map(
//               (step, index) => (
//                 <div
//                   key={step.title}
//                   className="
//                     group
//                     flex
//                     gap-4
//                     rounded-[20px]
//                     border
//                     border-[#D9E7E5]
//                     bg-white
//                     p-5
//                     transition
//                     hover:border-[#C8942E]/60
//                     hover:shadow-[0_12px_35px_rgba(6,75,80,0.07)]
//                     sm:gap-6
//                     sm:p-6
//                   "
//                 >
//                   <div className="
//                     flex
//                     h-12
//                     w-12
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-[#064B50]
//                     text-[13px]
//                     font-bold
//                     text-white
//                   ">
//                     {String(
//                       index + 1
//                     ).padStart(
//                       2,
//                       "0"
//                     )}
//                   </div>

//                   <div className="min-w-0">
//                     <h3 className="
//                       text-[17px]
//                       font-semibold
//                       text-[#064B50]
//                       sm:text-[18px]
//                     ">
//                       {step.title}
//                     </h3>

//                     <p className="
//                       mt-2
//                       text-[15px]
//                       leading-7
//                       text-[#404041]
//                       sm:text-[15px]
//                     ">
//                       {step.text}
//                     </p>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section>


//       {/* ===================================================
//           BENEFITS
//       =================================================== */}

//       {service.benefits?.length > 0 && (
//         <section className="
//           bg-[#F3F8F7]
//           py-14
//           sm:py-16
//           lg:py-20
//         ">
//           <div className="
//             mx-auto
//             max-w-[1150px]
//             px-5
//             sm:px-7
//             lg:px-10
//           ">
//             <SectionTitle
//               eyebrow="Patient Support"
//               title={
//                 service.benefitsTitle
//               }
//             />

//             <div className="
//               mt-9
//               grid
//               gap-4
//               md:grid-cols-2
//             ">
//               {service.benefits.map(
//                 (item) => (
//                   <div
//                     key={item}
//                     className="
//                       flex
//                       items-start
//                       gap-3
//                       rounded-[16px]
//                       border
//                       border-[#D9E7E5]
//                       bg-white
//                       p-5
//                     "
//                   >
//                     <CircleCheck
//                       size={20}
//                       className="
//                         mt-0.5
//                         shrink-0
//                         text-[#C8942E]
//                       "
//                     />

//                     <p className="
//                       text-[15px]
//                       leading-7
//                       text-[#373737]
//                     ">
//                       {item}
//                     </p>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//       )}


//       {/* ===================================================
//           MEDICAL NOTE
//       =================================================== */}

//       <section className="
//         bg-white
//         py-12
//         sm:py-14
//       ">
//         <div className="
//           mx-auto
//           max-w-[1100px]
//           px-5
//           sm:px-7
//         ">
//           <div className="
//             flex
//             items-start
//             gap-4
//             rounded-[20px]
//             border
//             border-[#E6D7B6]
//             bg-[#FAF8F2]
//             p-5
//             sm:p-6
//           ">
//             <ShieldCheck
//               size={22}
//               className="
//                 mt-0.5
//                 shrink-0
//                 text-[#C8942E]
//               "
//             />

//             <div>
//               <h3 className="
//                 text-[16px]
//                 font-semibold
//                 text-[#064B50]
//               ">
//                 Important Care Information
//               </h3>

//               <p className="
//                 mt-2
//                 text-[15px]
//                 leading-7
//                 text-[#333435]
//               ">
//                 {service.note}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* ===================================================
//           CTA
//       =================================================== */}

//       <section className="
//         bg-[#064B50]
//         py-14
//         sm:py-16
//       ">
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
//             tracking-[0.2em]
//             text-[#E2AE46]
//           ">
//             Akeso Global Medical Services
//           </p>

//           <h2 className="
//             mt-3
//             text-[28px]
//             font-semibold
//             text-white
//             sm:text-[35px]
//           ">
//             Need Help Planning Your Care?
//           </h2>

//           <p className="
//             mx-auto
//             mt-4
//             max-w-[680px]
//             text-[15px]
//             leading-8
//             text-white/80
//           ">
//             Contact our team for service
//             information, or request an
//             estimate when you are ready
//             to begin planning your
//             medical journey.
//           </p>


//           <div className="
//             mt-7
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
//                 hover:bg-[#F3F8F7]
//               "
//             >
//               Contact Us
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//                to="/international/request-an-estimate"
//               className="
//                 inline-flex
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
//                 hover:bg-[#E2AE46]
//                 hover:text-[#064B50]
//               "
//             >
//               Request an Estimate
//               <ArrowRight size={17} />
//             </Link>
//           </div>


//           <Link
//             to="/services"
//             className="
//               mt-7
//               inline-flex
//               items-center
//               gap-2
//               text-[13px]
//               font-semibold
//               text-white/75
//               transition
//               hover:text-white
//             "
//           >
//             <ArrowLeft size={16} />
//             Back to All Services
//           </Link>
//         </div>
//       </section>

//     </main>
//   );
// }


// /* =========================================================
//    SECTION TITLE
// ========================================================= */

// function SectionTitle({
//   eyebrow,
//   title,
//   description,
// }) {
//   return (
//     <div className="
//       mx-auto
//       max-w-[800px]
//       text-center
//     ">
//       {eyebrow && (
//         <p className="
//           text-[11px]
//           font-bold
//           uppercase
//           tracking-[0.2em]
//           text-[#C88416]
//           sm:text-[12px]
//         ">
//           {eyebrow}
//         </p>
//       )}

//       <h2 className="
//         mt-3
//         text-[27px]
//         font-semibold
//         leading-tight
//         text-[#064B50]
//         sm:text-[33px]
//         lg:text-[38px]
//       ">
//         {title}
//       </h2>

//       {description && (
//         <p className="
//           mx-auto
//           mt-4
//           max-w-[700px]
//           text-[15px]
//           leading-7
//           text-[#444545]
//           sm:text-[15px]
//           sm:leading-8
//         ">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }


// /* =========================================================
//    FEATURE GRID
// ========================================================= */

// function FeatureGrid({
//   items = [],
// }) {
//   return (
//     <div className="
//       mt-10
//       grid
//       gap-5
//       sm:grid-cols-2
//       lg:grid-cols-3
//     ">
//       {items.map(
//         (item) => (
//           <InfoCard
//             key={item.title}
//             item={item}
//           />
//         )
//       )}
//     </div>
//   );
// }


// /* =========================================================
//    INFO CARD
// ========================================================= */

// function InfoCard({
//   item,
//   centered = false,
// }) {
//   const Icon =
//     item.icon;

//   return (
//     <article
//       className={`
//         min-w-0
//         rounded-[20px]
//         border
//         border-[#D9E7E5]
//         bg-white
//         p-6
//         transition
//         duration-300
//         hover:-translate-y-1
//         hover:border-[#C8942E]/60
//         hover:shadow-[0_16px_38px_rgba(6,75,80,0.08)]
//         ${centered
//           ? "text-center"
//           : ""}
//       `}
//     >
//       <div
//         className={`
//           flex
//           h-12
//           w-12
//           items-center
//           justify-center
//           rounded-xl
//           bg-[#EEF6F5]
//           text-[#C8942E]
//           ${centered
//             ? "mx-auto"
//             : ""}
//         `}
//       >
//         <Icon
//           size={22}
//           strokeWidth={1.7}
//         />
//       </div>

//       <h3 className="
//         mt-5
//         break-words
//         text-[17px]
//         font-semibold
//         leading-6
//         text-[#064B50]
//       ">
//         {item.title}
//       </h3>

//       <p className="
//         mt-3
//         break-words
//         text-[15px]
//         leading-7
//         text-[#363738]
//       ">
//         {item.text}
//       </p>
//     </article>
//   );
// }