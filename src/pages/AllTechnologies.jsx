import {
  ArrowRight,
  Search,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/speciality/SectionHeading";

import {
  technologies,
} from "../data/technologyData";


export default function AllTechnologies() {
  const [search, setSearch] =
    useState("");


  const filtered =
    useMemo(() => {
      const query =
        search
          .toLowerCase()
          .trim();

      if (!query) {
        return technologies;
      }

      return technologies.filter(
        (item) =>
          item.name
            .toLowerCase()
            .includes(query) ||
          item.description
            .toLowerCase()
            .includes(query) ||
          item.source
            ?.toLowerCase()
            .includes(query)
      );
    }, [search]);


  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          {
            label:
              "Technologies",
          },
        ]}
        title="Medical Technologies"
        description="Explore medical technologies used across different areas of specialist healthcare."
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
            max-w-[1400px]
            px-5
            sm:px-7
            lg:px-10
          "
        >
          <SectionHeading
            eyebrow="Advanced Care"
            title="All Technologies"
            description="Browse technologies available across the different areas of healthcare represented on the website."
          />


          <div
            className="
              relative
              mx-auto
              mt-9
              max-w-[620px]
            "
          >
            <Search
              size={20}
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
              placeholder="Search technology..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-[#D7E5E3]
                bg-white
                pl-14
                pr-5
                text-[14px]
                text-[#263F41]
                outline-none
                transition
                focus:border-[#064B50]
              "
            />
          </div>


          <div
            className="
              mt-11
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {filtered.map(
              (technology) => (
                <article
                  key={
                    technology.id
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#DCE8E7]
                    bg-white
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_16px_40px_rgba(6,75,80,0.09)]
                  "
                >
                  <div
                    className="
                      h-[210px]
                      overflow-hidden
                      bg-[#EEF6F5]
                    "
                  >
                    <img
                      src={
                        technology.image
                      }
                      alt={
                        technology.name
                      }
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

                  <div
                    className="
                      flex
                      min-h-[245px]
                      flex-col
                      p-6
                    "
                  >
                    <h2
                      className="
                        text-[19px]
                        font-semibold
                        text-[#064B50]
                      "
                    >
                      {
                        technology.name
                      }
                    </h2>

                    <p
                      className="
                        mt-3
                        line-clamp-4
                        text-[14px]
                        leading-7
                        text-[#667576]
                      "
                    >
                      {
                        technology.description
                      }
                    </p>

                    <Link
                      to={`/technologies/${technology.slug}`}
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
                  </div>
                </article>
              )
            )}
          </div>


          {filtered.length ===
            0 && (
            <p
              className="
                mt-12
                text-center
                text-[15px]
                text-[#667576]
              "
            >
              No technologies found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}