import {
  Activity,
  ArrowRight,
  ClipboardPlus,
  HeartPulse,
  Settings,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


const icons = {
  activity: Activity,
  clipboard: ClipboardPlus,
  settings: Settings,
  heart: HeartPulse,
};


export default function HealthLibraryProvides({
  items = [],
}) {
  return (
    <section
      className="
        bg-[#FAF8F2]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1350px]
          px-5
          sm:px-7
          lg:px-10
        "
      >
        <div className="text-center">
          <span
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#C8942E]
            "
          >
            Explore More
          </span>

          <h2
            className="
              mt-3
              text-[30px]
              font-semibold
              text-[#064B50]
              sm:text-[36px]
              lg:text-[40px]
            "
          >
            Health Library Provides
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[720px]
              text-[14px]
              leading-7
              text-[#667576]
              sm:text-[15px]
            "
          >
            Explore conditions,
            treatments, ailments and
            healthcare technologies
            through dedicated sections.
          </p>
        </div>


        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {items.map((item) => {
            const Icon =
              icons[item.icon] ||
              Activity;

            return (
              <Link
                key={item.title}
                to={item.path}
                className="
                  group
                  flex
                  min-h-[270px]
                  flex-col
                  rounded-[20px]
                  border
                  border-[#DCECEB]
                  bg-white
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C8942E]/50
                  hover:shadow-[0_16px_40px_rgba(6,75,80,0.09)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EEF6F5]
                    text-[#C8942E]
                  "
                >
                  <Icon size={26} />
                </div>

                <h3
                  className="
                    mt-5
                    text-[19px]
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-7
                    text-[#667576]
                  "
                >
                  {item.description}
                </p>

                <span
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-5
                    text-[14px]
                    font-semibold
                    text-[#064B50]
                    transition
                    group-hover:text-[#C8942E]
                  "
                >
                  Know More

                  <ArrowRight
                    size={17}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// import {
//   useState,
// } from "react";

// import {
//   Activity,
//   ArrowRight,
//   ChevronDown,
//   ClipboardPlus,
//   HeartPulse,
//   Settings,
// } from "lucide-react";

// import {
//   Link,
// } from "react-router-dom";

// import {
//   treatmentSpecialities,
//   ailmentSpecialities,
// } from "../../data/healthLibraryData";


// const icons = {
//   activity: Activity,
//   clipboard: ClipboardPlus,
//   settings: Settings,
//   heart: HeartPulse,
// };


// export default function HealthLibraryProvides({
//   items = [],
// }) {
//   const [
//     openType,
//     setOpenType,
//   ] = useState(null);


//   const toggleDropdown = (
//     type
//   ) => {
//     setOpenType(
//       (current) =>
//         current === type
//           ? null
//           : type
//     );
//   };


//   const getOptions = (
//     type
//   ) => {
//     if (
//       type === "treatments"
//     ) {
//       return treatmentSpecialities;
//     }

//     if (
//       type === "ailments"
//     ) {
//       return ailmentSpecialities;
//     }

//     return [];
//   };


//   return (
//     <section
//       className="
//         bg-[#FAF8F2]
//         py-14

//         sm:py-16
//         lg:py-20
//       "
//     >
//       <div
//         className="
//           mx-auto
//           max-w-[1300px]
//           px-5

//           sm:px-7
//           lg:px-10
//         "
//       >

//         {/* HEADING */}

//         <div className="text-center">
//           <span
//             className="
//               text-[12px]
//               font-semibold
//               uppercase
//               tracking-[0.22em]
//               text-[#C8942E]
//             "
//           >
//             Explore More
//           </span>

//           <h2
//             className="
//               mt-3
//               text-[30px]
//               font-semibold
//               text-[#064B50]

//               sm:text-[36px]
//               lg:text-[40px]
//             "
//           >
//             Health Library Provides
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-4
//               max-w-[700px]
//               text-[14px]
//               leading-7
//               text-[#667576]

//               sm:text-[15px]
//             "
//           >
//             Explore conditions,
//             treatments, ailments and
//             medical technologies
//             through Akeso's existing
//             healthcare sections.
//           </p>
//         </div>


//         {/* CARDS */}

//         <div
//           className="
//             mt-10
//             grid
//             grid-cols-1
//             gap-5

//             sm:grid-cols-2
//             lg:grid-cols-4
//           "
//         >
//           {items.map((item) => {
//             const Icon =
//               icons[item.icon] ||
//               Activity;

//             const hasDropdown =
//               item.type ===
//                 "treatments" ||
//               item.type ===
//                 "ailments";

//             const isOpen =
//               openType ===
//               item.type;

//             return (
//               <div
//                 key={item.title}
//                 className="
//                   relative
//                 "
//               >

//                 {hasDropdown ? (
//                   <button
//                     type="button"
//                     onClick={() =>
//                       toggleDropdown(
//                         item.type
//                       )
//                     }
//                     className="
//                       group
//                       flex
//                       min-h-[260px]
//                       w-full
//                       flex-col
//                       rounded-[20px]
//                       border
//                       border-[#DCECEB]
//                       bg-white
//                       p-7
//                       text-left
//                       transition
//                       duration-300

//                       hover:-translate-y-1
//                       hover:shadow-[0_16px_40px_rgba(6,75,80,0.10)]
//                     "
//                   >
//                     <CardContent
//                       item={item}
//                       Icon={Icon}
//                       dropdown
//                       open={isOpen}
//                     />
//                   </button>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     className="
//                       group
//                       flex
//                       min-h-[260px]
//                       flex-col
//                       rounded-[20px]
//                       border
//                       border-[#DCECEB]
//                       bg-white
//                       p-7
//                       transition
//                       duration-300

//                       hover:-translate-y-1
//                       hover:shadow-[0_16px_40px_rgba(6,75,80,0.10)]
//                     "
//                   >
//                     <CardContent
//                       item={item}
//                       Icon={Icon}
//                     />
//                   </Link>
//                 )}


//                 {/* =================================
//                     SPECIALITY DROPDOWN
//                 ================================== */}

//                 {hasDropdown &&
//                   isOpen && (
//                   <div
//                     className="
//                       absolute
//                       left-0
//                       right-0
//                       top-[calc(100%+10px)]
//                       z-30
//                       max-h-[330px]
//                       overflow-y-auto
//                       rounded-[18px]
//                       border
//                       border-[#DCECEB]
//                       bg-white
//                       p-2
//                       shadow-[0_20px_55px_rgba(6,75,80,0.16)]
//                     "
//                   >
//                     <p
//                       className="
//                         px-3
//                         py-2
//                         text-[11px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.15em]
//                         text-[#C8942E]
//                       "
//                     >
//                       Select Speciality
//                     </p>

//                     {getOptions(
//                       item.type
//                     ).map(
//                       (option) => (
//                         <Link
//                           key={
//                             option.slug
//                           }
//                           to={
//                             option.path
//                           }
//                           className="
//                             flex
//                             items-center
//                             justify-between
//                             gap-3
//                             rounded-xl
//                             px-3
//                             py-3
//                             text-[13px]
//                             font-medium
//                             text-[#263F41]
//                             transition

//                             hover:bg-[#EEF6F5]
//                             hover:text-[#064B50]
//                           "
//                         >
//                           <span>
//                             {
//                               option.name
//                             }
//                           </span>

//                           <ArrowRight
//                             size={15}
//                             className="
//                               shrink-0
//                               text-[#C8942E]
//                             "
//                           />
//                         </Link>
//                       )
//                     )}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


// function CardContent({
//   item,
//   Icon,
//   dropdown = false,
//   open = false,
// }) {
//   return (
//     <>
//       <div
//         className="
//           flex
//           h-14
//           w-14
//           items-center
//           justify-center
//           rounded-2xl
//           bg-[#EEF6F5]
//           text-[#C8942E]
//         "
//       >
//         <Icon size={26} />
//       </div>

//       <h3
//         className="
//           mt-5
//           text-[19px]
//           font-semibold
//           text-[#064B50]
//         "
//       >
//         {item.title}
//       </h3>

//       <p
//         className="
//           mt-3
//           text-[14px]
//           leading-6
//           text-[#667576]
//         "
//       >
//         {item.description}
//       </p>

//       <span
//         className="
//           mt-auto
//           flex
//           items-center
//           gap-2
//           pt-5
//           text-[14px]
//           font-semibold
//           text-[#064B50]
//         "
//       >
//         Know More

//         {dropdown ? (
//           <ChevronDown
//             size={17}
//             className={`
//               transition
//               duration-300

//               ${
//                 open
//                   ? "rotate-180"
//                   : ""
//               }
//             `}
//           />
//         ) : (
//           <ArrowRight
//             size={17}
//           />
//         )}
//       </span>
//     </>
//   );
// }