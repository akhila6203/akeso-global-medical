import {
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


export default function HealthcareEasier({
  cards = [],
}) {
  return (
    <section
      className="
        bg-[#EEF6F5]
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
            Patient Support
          </span>

          <h2
            className="
              mx-auto
              mt-3
              max-w-[850px]
              text-[30px]
              font-semibold
              leading-tight
              text-[#064B50]
              sm:text-[36px]
              lg:text-[40px]
            "
          >
            We’re Here To Make
            Managing Your Healthcare
            Easier
          </h2>
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
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="
                group
                overflow-hidden
                rounded-[20px]
                border
                border-[#DCECEB]
                bg-white
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(6,75,80,0.10)]
              "
            >
              <div
                className="
                  h-[210px]
                  overflow-hidden
                  bg-[#DCECEB]
                "
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-6">
                <h3
                  className="
                    text-[20px]
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {card.title}
                </h3>

                <span
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}