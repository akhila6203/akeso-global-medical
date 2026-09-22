import {
  ChevronRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  services,
} from "../data/navigation";

export default function Services() {
  return (
    <main>
      <section
        className="
          bg-[#edf7f6]
          py-14
          md:py-20
        "
      >
        <div
          className="
            max-w-[1450px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <p
            className="
              text-[#E85C91]
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.16em]
            "
          >
            Patient Services
          </p>

          <h1
            className="
              mt-3
              text-[34px]
              md:text-[44px]
              font-semibold
              text-[#064B50]
            "
          >
            Our Services
          </h1>

          <p
            className="
              mt-4
              max-w-[650px]
              text-[15px]
              leading-7
              text-[#667576]
            "
          >
            Access healthcare support and medical
            services designed to make your care
            journey convenient and connected.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div
          className="
            max-w-[1450px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
            "
          >
            {services.map((item) => {
              const Icon = item[2];

              return (
                <Link
                  key={item[1]}
                  to={`/services/${item[1]}`}
                  className="
                    group
                    relative
                    min-h-[180px]
                    p-6
                    rounded-xl
                    bg-white
                    border
                    border-[#e2e9e8]
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#E85C91]
                    hover:shadow-[0_12px_30px_rgba(6,75,80,0.10)]
                  "
                >
                  {Icon && (
                    <Icon
                      size={38}
                      strokeWidth={1.3}
                      className="
                        text-[#C8942E]
                        transition-colors
                        group-hover:text-[#E85C91]
                      "
                    />
                  )}

                  <h2
                    className="
                      mt-7
                      pr-10
                      text-[16px]
                      font-semibold
                      text-[#263F41]
                    "
                  >
                    {item[0]}
                  </h2>

                  <span
                    className="
                      absolute
                      right-5
                      bottom-5
                      w-8
                      h-8
                      rounded-full
                      bg-[#edf7f6]
                      text-[#064B50]
                      flex
                      items-center
                      justify-center

                      group-hover:bg-[#E85C91]
                      group-hover:text-white
                    "
                  >
                    <ChevronRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}