import {
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";

import heroDoctor from "../../assets/home/hero-doctor.jpg";

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
          w-full
          max-w-[1500px]

          grid-cols-[58%_42%]
          items-stretch

          min-h-[340px]

          sm:grid-cols-[55%_45%]
          sm:min-h-[430px]

          md:grid-cols-[52%_48%]
          md:min-h-[500px]

          lg:grid-cols-2
          lg:min-h-[570px]
          lg:items-center
        "
      >
        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div
          className="
            relative
            z-10

            flex
            items-center

            px-4
            py-8

            sm:px-7
            sm:py-10

            md:px-9
            md:py-12

            lg:px-14
            lg:py-16

            xl:px-16
          "
        >
          <div
            className="
              w-full
              max-w-[670px]
            "
          >
            {/* =================================
                BRAND
            ================================== */}

            <div
              className="
                flex
                items-center
                gap-2

                sm:gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-5
                  shrink-0
                  bg-[#C8942E]

                  sm:w-7

                  lg:w-8
                "
              />

              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#E7B34D]

                  min-[400px]:text-[8px]

                  sm:text-[10px]
                  sm:tracking-[0.17em]

                  md:text-[11px]

                  lg:text-[12px]
                  lg:tracking-[0.22em]
                "
              >
                Akeso Global Medical Services
              </p>
            </div>

            {/* =================================
                HEADING
            ================================== */}

            <h1
              className="
                mt-4

                text-[22px]
                font-semibold
                leading-[1.12]
                tracking-[-0.02em]
                text-white

                min-[400px]:text-[25px]

                sm:mt-5
                sm:text-[34px]

                md:mt-6
                md:text-[41px]

                lg:mt-7
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

            {/* =================================
                DESCRIPTION
            ================================== */}

            <p
              className="
                mt-3

                max-w-[590px]

                text-[9px]
                leading-[1.6]
                text-white/85

                min-[400px]:text-[10px]

                sm:mt-4
                sm:text-[12px]
                sm:leading-5

                md:mt-5
                md:text-[14px]
                md:leading-6

                lg:mt-6
                lg:text-[16px]
                lg:leading-7
              "
            >
              Access trusted doctors, advanced
              treatments and compassionate healthcare
              services designed around every
              patient&apos;s needs.
            </p>

            {/* =================================
                BUTTONS

                MOBILE  -> SIDE BY SIDE
                TABLET  -> SIDE BY SIDE
                DESKTOP -> SAME
            ================================== */}

            <div
              className="
                mt-5

                flex
                flex-nowrap
                items-center

                gap-1.5

                sm:mt-6
                sm:gap-2.5

                md:gap-3

                lg:mt-8
              "
            >
              {/* GET MEDICAL OPINION */}

              <button
                type="button"
                onClick={findDoctor}
                className="
                  group

                  inline-flex
                  min-w-0
                  items-center
                  justify-center

                  gap-1

                  whitespace-nowrap

                  rounded-full

                  bg-[#C8942E]

                  px-2.5
                  py-2

                  text-[7px]
                  font-semibold
                  text-white

                  transition
                  duration-300

                  hover:bg-[#A9781F]

                  min-[400px]:px-3
                  min-[400px]:text-[8px]

                  sm:min-h-[42px]
                  sm:gap-1.5
                  sm:px-4
                  sm:text-[10px]

                  md:min-h-[45px]
                  md:gap-2
                  md:px-5
                  md:text-[12px]

                  lg:min-h-[48px]
                  lg:px-7
                  lg:text-[16px]
                "
              >
                <Stethoscope
                  className="
                    h-[11px]
                    w-[11px]
                    shrink-0

                    sm:h-[14px]
                    sm:w-[14px]

                    md:h-4
                    md:w-4

                    lg:h-[17px]
                    lg:w-[17px]
                  "
                />

                <span>
                  Get Medical Opinion
                </span>

                <ArrowRight
                  className="
                    hidden
                    shrink-0

                    transition-transform

                    group-hover:translate-x-1

                    sm:block
                    sm:h-[13px]
                    sm:w-[13px]

                    md:h-[15px]
                    md:w-[15px]

                    lg:h-4
                    lg:w-4
                  "
                />
              </button>

              {/* BOOK APPOINTMENT */}

              <button
                type="button"
                onClick={() =>
                  navigate("/contact")
                }
                className="
                  group

                  inline-flex
                  min-w-0
                  items-center
                  justify-center

                  gap-1

                  whitespace-nowrap

                  rounded-full

                  border
                  border-white/35

                  bg-white/10

                  px-2.5
                  py-2

                  text-[7px]
                  font-semibold
                  text-white

                  transition
                  duration-300

                  hover:bg-white
                  hover:text-[#064B50]

                  min-[400px]:px-3
                  min-[400px]:text-[8px]

                  sm:min-h-[42px]
                  sm:gap-1.5
                  sm:px-4
                  sm:text-[10px]

                  md:min-h-[45px]
                  md:gap-2
                  md:px-5
                  md:text-[12px]

                  lg:min-h-[48px]
                  lg:px-7
                  lg:text-[14px]
                "
              >
                <CalendarDays
                  className="
                    h-[11px]
                    w-[11px]
                    shrink-0

                    sm:h-[14px]
                    sm:w-[14px]

                    md:h-4
                    md:w-4

                    lg:h-[17px]
                    lg:w-[17px]
                  "
                />

                <span>
                  Book Appointment
                </span>

                <ArrowRight
                  className="
                    hidden
                    shrink-0

                    transition-transform

                    group-hover:translate-x-1

                    sm:block
                    sm:h-[13px]
                    sm:w-[13px]

                    md:h-[15px]
                    md:w-[15px]

                    lg:h-[15px]
                    lg:w-[15px]
                  "
                />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================
            RIGHT DOCTOR IMAGE

            MOBILE  -> RIGHT
            TABLET  -> RIGHT
            DESKTOP -> RIGHT

            NO BOTTOM IMAGE
        ====================================== */}

        <div
          className="
            relative

            h-full
            min-h-[340px]

            overflow-hidden

            sm:min-h-[430px]

            md:min-h-[500px]

            lg:min-h-[570px]
          "
        >
          <img
            src={heroDoctor}
            alt="Akeso Medical Specialist"
            className="
              absolute
              bottom-0
              right-0

              h-full
              w-full

              object-cover

              object-[57%_center]

              sm:object-[55%_center]

              md:object-[52%_center]

              lg:h-[94%]
              lg:object-contain
              lg:object-bottom
            "
          />

          {/* =================================
              LEFT SOFT BLEND

              Smaller on mobile,
              original style on desktop.
          ================================== */}

          <div
            className="
              pointer-events-none

              absolute
              inset-y-0
              left-0

              w-[45px]

              bg-gradient-to-r
              from-[#064B50]
              to-transparent

              sm:w-[70px]

              md:w-[100px]

              lg:w-[180px]
            "
          />

          {/* MOBILE/TABLET SOFT OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[#064B50]/5

              lg:hidden
            "
          />
        </div>
      </div>
    </section>
  );
}


// import {
//   ArrowRight,
//   CalendarDays,
//   Stethoscope,
// } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// import { isLoggedIn } from "../../utils/auth";

// import heroDoctor from "../../assets/home/hero-doctor.jpg";

// // export default function HeroBanner() {
// export default function HeroBanner({
//   onOpenAuth,
// }) {
//   const navigate = useNavigate();

//   const findDoctor = () => {
//   if (isLoggedIn()) {
//     navigate("/doctors");
//     return;
//   }

//   onOpenAuth?.(
//     "login",
//     "/doctors"
//   );
// };

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#064B50]
//       "
//     >
//       <div
//         className="
//           mx-auto
//           grid
//           min-h-[570px]
//           max-w-[1500px]
//           grid-cols-1
//           items-center
//           lg:grid-cols-2
//         "
//       >
//         {/* =========================
//             LEFT CONTENT
//         ========================== */}

//         <div
//           className="
//             relative
//             z-10
//             px-6
//             py-16
//             sm:px-10
//             lg:px-14
//             xl:px-16
//           "
//         >
//           <div className="max-w-[670px]">
//             {/* BRAND */}

//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//               "
//             >
//               <span
//                 className="
//                   h-[2px]
//                   w-8
//                   bg-[#C8942E]
//                 "
//               />

//               <p
//                 className="
//                   text-[11px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#E7B34D]
//                   sm:text-[12px]
//                 "
//               >
//                 Akeso Global Medical Services
//               </p>
//             </div>

//             {/* HEADING */}

//             <h1
//               className="
//                 mt-7
//                 text-[38px]
//                 font-semibold
//                 leading-[1.1]
//                 tracking-[-0.02em]
//                 text-white
//                 sm:text-[47px]
//                 lg:text-[52px]
//                 xl:text-[58px]
//               "
//             >
//               Trusted Medical Care
//               <span className="block">
//                 With Experienced
//               </span>

//               <span
//                 className="
//                   mt-1
//                   block
//                   text-[#F0B43C]
//                 "
//               >
//                 Specialists.
//               </span>
//             </h1>

//             {/* DESCRIPTION */}

//             <p
//               className="
//                 mt-6
//                 max-w-[590px]
//                 text-[15px]
//                 leading-7
//                 text-white/85
//                 sm:text-[16px]
//               "
//             >
//               Access trusted doctors, advanced
//               treatments and compassionate healthcare
//               services designed around every
//               patient&apos;s needs.
//             </p>

//             {/* BUTTONS */}

//             <div
//               className="
//                 mt-8
//                 flex
//                 flex-wrap
//                 gap-3
//               "
//             >
//               <button
//                 type="button"
//                 onClick={findDoctor}
//                 className="
//                   group
//                   inline-flex
//                   min-h-[48px]
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   bg-[#C8942E]
                  
//                   px-7
//                   text-[16px]
//                   font-semibold
//                   text-white
//                   transition
//                   duration-300
//                   hover:bg-[#C8942E]
//                 "
//               >
//                 <Stethoscope size={17} />

//                 Get Medical Opinion

//                 <ArrowRight
//                   size={16}
//                   className="
//                     transition-transform
//                     group-hover:translate-x-1
//                   "
//                 />
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   navigate("/contact")
//                 }
//                 className="
//                   group
//                   inline-flex
//                   min-h-[48px]
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-white/35
//                   bg-white/10
//                   px-7
//                   text-[14px]
//                   font-semibold
//                   text-white
//                   transition
//                   duration-300
//                   hover:bg-white
//                   hover:text-[#064B50]
//                 "
//               >
//                 <CalendarDays size={17} />

//                 Book Appointment

//                 <ArrowRight
//                   size={15}
//                   className="
//                     transition-transform
//                     group-hover:translate-x-1
//                   "
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* =========================
//             RIGHT DOCTOR IMAGE
//         ========================== */}

//         <div
//           className="
//             relative
//             hidden
//             h-full
//             min-h-[570px]
//             lg:block
//           "
//         >
//           <img
//   src={heroDoctor}
//   alt="Akeso Medical Specialist"
//   className="
//     absolute
//     bottom-0
//     right-0
//     h-[94%]
//     w-full
//     object-contain
//     object-bottom
//   "
// />

//           {/* LEFT SOFT BLEND */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-y-0
//               left-0
//               w-[180px]
//               bg-gradient-to-r
//               from-[#064B50]
//               to-transparent
//             "
//           />
//         </div>
//       </div>

//       {/* MOBILE DOCTOR IMAGE */}

//       <div
//         className="
//           relative
//           mx-auto
//           h-[350px]
//           max-w-[520px]
//           lg:hidden
//         "
//       >
//        <img
//   src={heroDoctor}
//   alt="Akeso Medical Specialist"
//   className="
//     h-full
//     w-full
//     object-contain
//     object-bottom
//   "
// />
//       </div>
//     </section>
//   );
// }