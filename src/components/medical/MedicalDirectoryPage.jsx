import {
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  HeartPulse,
  Search,
  Stethoscope,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import Breadcrumb from "../Breadcrumb";
import SectionHeading from "../speciality/SectionHeading";


export default function MedicalDirectoryPage({
  type,
  items = [],
}) {
  const [search, setSearch] =
    useState("");


  const isTreatment =
    type === "treatments";


  const title =
    isTreatment
      ? "Treatments & Procedures"
      : "Ailments & Conditions";


  const eyebrow =
    isTreatment
      ? "Treatment Directory"
      : "Health Conditions";


  const description =
    isTreatment
      ? "Explore treatment and procedure information available across our specialist care areas."
      : "Explore ailments and conditions across different specialist care areas.";


  const Icon =
    isTreatment
      ? Stethoscope
      : HeartPulse;


  const filtered =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      if (!query) {
        return items;
      }

      return items.filter(
        (item) =>
          item.name
            ?.toLowerCase()
            .includes(query) ||
          item.specialityName
            ?.toLowerCase()
            .includes(query) ||
          item.description
            ?.toLowerCase()
            .includes(query)
      );
    }, [items, search]);


  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          {
            label: title,
          },
        ]}
        title={title}
        description={description}
      />


      <section
        className="
          bg-white
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
          <SectionHeading
            eyebrow={eyebrow}
            title={
              isTreatment
                ? "All Treatments"
                : "All Ailments"
            }
            description={
              isTreatment
                ? "Browse treatments from all available specialist care sections."
                : "Browse ailments and conditions from all available specialist care sections."
            }
          />


          {/* SEARCH */}

          <div
            className="
              relative
              mx-auto
              mt-9
              max-w-[650px]
            "
          >
            <Search
              size={19}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-[#C8942E]
              "
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder={
                isTreatment
                  ? "Search treatments..."
                  : "Search ailments..."
              }
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-[#DCECEB]
                bg-white
                pl-14
                pr-5
                text-[14px]
                outline-none
                transition
                focus:border-[#064B50]
              "
            />
          </div>


          {/* GRID */}

          <div
            className="
              mt-11
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filtered.map(
              (item) => (
                <article
                  key={item.id}
                  className="
                    group
                    flex
                    min-h-[220px]
                    flex-col
                    rounded-[20px]
                    border
                    border-[#DCECEB]
                    bg-white
                    p-7
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C8942E]/60
                    hover:shadow-[0_15px_38px_rgba(6,75,80,0.09)]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EEF6F5]
                      text-[#C8942E]
                    "
                  >
                    <Icon
                      size={21}
                    />
                  </div>

                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#C8942E]
                    "
                  >
                    {
                      item.specialityName
                    }
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[18px]
                      font-semibold
                      text-[#064B50]
                    "
                  >
                    {item.name}
                  </h3>

                  {item.description && (
                    <p
                      className="
                        mt-3
                        line-clamp-3
                        text-[14px]
                        leading-7
                        text-[#667576]
                      "
                    >
                      {
                        item.description
                      }
                    </p>
                  )}

                  <Link
                    to={`/speciality/${item.specialitySlug}/${type}`}
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
                  </Link>
                </article>
              )
            )}
          </div>


          {filtered.length === 0 && (
            <p
              className="
                mt-12
                text-center
                text-[15px]
                text-[#667576]
              "
            >
              No results found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}