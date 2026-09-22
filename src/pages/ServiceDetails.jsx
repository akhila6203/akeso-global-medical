import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
} from "lucide-react";

import {
  services,
} from "../data/navigation";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item[1] === slug
  );

  if (!service) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#064B50]">
            Service Not Found
          </h1>

          <Link
            to="/services"
            className="inline-block mt-4 text-[#E85C91]"
          >
            View Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service[2];

  return (
    <main>
      <section
        className="
          bg-[#edf7f6]
          py-16
          md:py-20
        "
      >
        <div
          className="
            max-w-[1200px]
            mx-auto
            px-4
            sm:px-6
          "
        >
          <Link
            to="/services"
            className="
              inline-flex
              items-center
              gap-2
              text-[14px]
              text-[#E85C91]
            "
          >
            <ArrowLeft size={16} />

            All Services
          </Link>

          <div className="mt-8">
            {Icon && (
              <Icon
                size={52}
                strokeWidth={1.3}
                className="text-[#C8942E]"
              />
            )}

            <h1
              className="
                mt-5
                text-[34px]
                md:text-[46px]
                font-semibold
                text-[#064B50]
              "
            >
              {service[0]}
            </h1>

            <p
              className="
                mt-5
                max-w-[720px]
                text-[15px]
                leading-7
                text-[#667576]
              "
            >
              Detailed information for{" "}
              {service[0]} can be added through the
              admin panel when the backend is
              connected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}