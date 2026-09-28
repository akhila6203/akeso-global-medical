import {
  ChevronRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

export default function Breadcrumb({
  title,
  description = "",
  items = [],
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#064B50]
      "
    >
      {/* =========================================
          SUBTLE BACKGROUND
      ========================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.06),transparent_35%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-4
          py-12

          sm:px-6
          sm:py-14

          md:py-16

          lg:px-10
          lg:py-[52px]
        "
      >
        <div
          className="
            mx-auto
            max-w-[950px]
            text-center
          "
        >
          {/* =========================================
              BREADCRUMB
          ========================================== */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-2
              gap-y-2

              text-[12px]

              sm:text-[13px]

              md:text-[14px]
            "
          >
            {/* HOME */}
            <Link
              to="/"
              className="
                font-semibold
                text-white/90
                transition-colors
                duration-300
                hover:text-[#E6B956]
              "
            >
              Home
            </Link>

            {/* DYNAMIC BREADCRUMB ITEMS */}
            {items.map((item, index) => {
              const isLast =
                index === items.length - 1;

              return (
                <div
                  key={`${item.label}-${index}`}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  {/* ARROW */}
                  <ChevronRight
                    size={15}
                    strokeWidth={2}
                    className="
                      shrink-0
                      text-[#E6B956]
                    "
                  />

                  {/* CLICKABLE ITEM */}
                  {item.to && !isLast ? (
                    <Link
                      to={item.to}
                      className="
                        font-semibold
                        text-white/90
                        transition-colors
                        duration-300
                        hover:text-[#E6B956]
                      "
                    >
                      {item.label}
                    </Link>
                  ) : (
                    /* CURRENT PAGE */
                    <span
                      className="
                        font-semibold
                        text-white
                      "
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* =========================================
              TITLE
          ========================================== */}
          {title && (
            <h1
              className="
                mt-6

                text-[32px]
                font-semibold
                leading-[1.15]
                tracking-[-0.02em]
                text-white

                sm:text-[38px]

                md:mt-7
                md:text-[44px]

                lg:text-[52px]
              "
            >
              {title}
            </h1>
          )}

          {/* =========================================
              DESCRIPTION
          ========================================== */}
          {description && (
            <p
              className="
                mx-auto
                mt-5
                max-w-[780px]

                text-[14px]
                leading-7
                text-white/85

                sm:text-[15px]
                sm:leading-7

                md:text-[16px]
                md:leading-8
              "
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}


// import { 
//   ChevronRight, 
// } from "lucide-react"; 
 
// import { 
//   Link, 
// } from "react-router-dom"; 
 
// export default function Breadcrumb({ 
//   title, 
//   description = "", 
//   items = [], 
// }) { 
//   return ( 
//     <section 
//       className=" 
//         relative 
//         overflow-hidden 
//         bg-[#064B50] 
//       " 
//     > 
//       {/* subtle background */} 
//       <div 
//         className=" 
//           pointer-events-none 
//           absolute 
//           inset-0 
//           bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.06),transparent_35%)] 
//         " 
//       /> 
 
//       <div 
//         className=" 
//           relative 
//           z-10 
//           mx-auto 
//           max-w-[1400px] 
//           px-4 
//           py-12 
 
//           sm:px-6 
//           sm:py-14 
 
//           md:py-16 
 
//           lg:px-10 
//           lg:py-[52px] 
//         " 
//       > 
//         <div 
//           className=" 
//             mx-auto 
//             max-w-[950px] 
//             text-center 
//           " 
//         > 
//           {/* ========================= 
//               BREADCRUMB 
//           ========================== */} 
//           <div 
//             className=" 
//               flex 
//               flex-wrap 
//               items-center 
//               justify-center 
//               gap-x-2 
//               gap-y-2 
 
//               text-[12px] 
//               sm:text-[13px] 
//               md:text-[14px] 
//             " 
//           > 
//             <Link 
//               to="/" 
//               className=" 
//                 font-semibold 
//                 text-white/90 
//                 transition 
//                 hover:text-[#E6B956] 
//               " 
//             > 
//               Home 
//             </Link> 
 
//             {items.map( 
//               (item, index) => { 
//                 const isLast = 
//                   index === 
//                   items.length - 1; 
 
//                 return ( 
//                   <div 
//                     key={${item.label}-${index}} 
//                     className=" 
//                       flex 
//                       items-center 
//                       gap-2 
//                     " 
//                   > 
//                     <ChevronRight 
//                       size={15} 
//                       strokeWidth={2} 
//                       className=" 
//                         shrink-0 
//                         text-[#E6B956] 
//                       " 
//                     /> 
 
//                     {item.to && 
//                     !isLast ? ( 
//                       <Link 
//                         to={item.to} 
//                         className=" 
//                           font-semibold 
//                           text-white/90 
//                           transition 
//                           hover:text-[#E6B956] 
//                         " 
//                       > 
//                         {item.label} 
//                       </Link> 
//                     ) : ( 
//                       <span 
//                         className=" 
//                           font-semibold 
//                           text-white 
//                         " 
//                       > 
//                         {item.label} 
//                       </span> 
//                     )} 
//                   </div> 
//                 ); 
//               } 
//             )} 
//           </div> 
 
//           {/* ========================= 
//               TITLE 
//           ========================== */} 
//           {title && ( 
//             <h1 
//               className=" 
//                 mt-6 
//                 text-[32px] 
//                 font-semibold 
//                 leading-[1.15] 
//                 tracking-[-0.02em] 
//                 text-white 
 
//                 sm:text-[38px] 
 
//                 md:mt-7 
//                 md:text-[44px] 
 
//                 lg:text-[52px] 
//               " 
//             > 
//               {title} 
//             </h1> 
//           )} 
 
//           {/* ========================= 
//               DESCRIPTION 
//           ========================== */} 
//           {description && ( 
//             <p 
//               className=" 
//                 mx-auto 
//                 mt-5 
//                 max-w-[780px] 
 
//                 text-[14px] 
//                 leading-7 
//                 text-white/85 
 
//                 sm:text-[15px] 
//                 sm:leading-7 
 
//                 md:text-[16px] 
//                 md:leading-8 
//               " 
//             > 
//               {description} 
//             </p> 
//           )} 
//         </div> 
//       </div> 
//     </section> 
//   ); 
// }