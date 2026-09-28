import {
  ArrowLeft,
} from "lucide-react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import {
  getTechnologyBySlug,
} from "../data/technologyData";


export default function TechnologyDetails() {
  const { slug } =
    useParams();

  const technology =
    getTechnologyBySlug(
      slug
    );


  if (!technology) {
    return (
      <Navigate
        to="/technologies"
        replace
      />
    );
  }


  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          {
            label:
              "Technologies",
            to: "/technologies",
          },
          {
            label:
              technology.name,
          },
        ]}
        title={technology.name}
        description={
          technology.description
        }
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
            grid
            max-w-[1300px]
            items-center
            gap-9
            px-5
            sm:px-7
            lg:grid-cols-2
            lg:gap-14
            lg:px-10
          "
        >
          <div>
            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#C8942E]
              "
            >
              Medical Technology
            </span>

            <h2
              className="
                mt-3
                text-[30px]
                font-semibold
                leading-tight
                text-[#064B50]
                sm:text-[36px]
              "
            >
              {technology.name}
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-8
                text-[#667576]
              "
            >
              {
                technology.description
              }
            </p>

            <p
              className="
                mt-4
                text-[14px]
                leading-7
                text-[#667576]
              "
            >
              Availability and
              suitability of medical
              technology depends on the
              hospital, clinical
              indication and specialist
              evaluation.
            </p>

            <Link
              to="/technologies"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#064B50]
                px-6
                py-3
                text-[14px]
                font-semibold
                text-[#064B50]
                transition
                hover:bg-[#064B50]
                hover:text-white
              "
            >
              <ArrowLeft
                size={17}
              />

              All Technologies
            </Link>
          </div>


          <div
            className="
              overflow-hidden
              rounded-[22px]
              border
              border-[#DCECEB]
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
                h-[300px]
                w-full
                object-cover
                sm:h-[390px]
                lg:h-[430px]
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
}