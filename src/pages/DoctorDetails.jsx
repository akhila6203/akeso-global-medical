
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Stethoscope,
  UserRound,
  Clock3,
  MapPin,
  Languages,
  ShieldCheck,
} from "lucide-react";

import Breadcrumb from "../components/Breadcrumb";
import { doctors } from "../data/doctorsData";

export default function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find(
    (item) => String(item.id) === String(id)
  );

  if (!doctor) {
    return (
      <main className="min-h-screen bg-white">
        <Breadcrumb
          title="Doctor Not Found"
          items={[
            { label: "Doctors", to: "/doctors" },
            { label: "Not Found" },
          ]}
        />

        <div className="mx-auto max-w-[1200px] px-5 py-20 text-center">
          <UserRound
            size={50}
            className="mx-auto text-[#064B50]"
          />

          <h2 className="mt-5 text-2xl font-semibold text-[#064B50]">
            Doctor Not Found
          </h2>

          <Link
            to="/doctors"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#064B50] px-6 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={17} />
            Back to Doctors
          </Link>
        </div>
      </main>
    );
  }

  const relatedDoctors = doctors
    .filter((item) => item.id !== doctor.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">

      {/* BREADCRUMB */}
      <Breadcrumb
        title={doctor.name}
        description={doctor.designation}
        items={[
          { label: "Doctors", to: "/doctors" },
          { label: doctor.name },
        ]}
      />

      {/* PROFILE */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">

          <div className="grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">

            {/* LEFT IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-[#E5ECEB] bg-[#F0F6F4] p-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-[340px] w-full object-contain sm:h-[440px] lg:h-[500px]"
              />
            </div>

            {/* RIGHT DETAILS */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF5F2] px-4 py-2 text-[12px] font-semibold text-[#064B50]">
                <Stethoscope size={15} />
                {doctor.speciality}
              </span>

              <h1 className="mt-5 text-[30px] font-semibold leading-tight text-[#064B50] md:text-[42px]">
                {doctor.name}
              </h1>

              <p className="mt-3 text-[16px] font-medium text-[#C8942E]">
                {doctor.designation}
              </p>

              {/* BASIC INFORMATION */}
              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-[#F7FAF9] p-4">
                  <div className="flex items-center gap-2 text-[#064B50]">
                    <Clock3 size={19} />
                    <span className="font-semibold">Experience</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {doctor.experience != null
                      ? `${doctor.experience} Years`
                      : "To be confirmed"}
                  </p>
                </div>

                <div className="rounded-xl bg-[#F7FAF9] p-4">
                  <div className="flex items-center gap-2 text-[#064B50]">
                    <MapPin size={19} />
                    <span className="font-semibold">Location</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {doctor.location}
                  </p>
                </div>

                <div className="rounded-xl bg-[#F7FAF9] p-4">
                  <div className="flex items-center gap-2 text-[#064B50]">
                    <ShieldCheck size={19} />
                    <span className="font-semibold">
                      Medical Registration No.
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {doctor.registrationNumber ||
                      "To be verified"}
                  </p>
                  {doctor.registrationCouncil && (
                    <p className="mt-1 text-xs text-gray-500">
                      {doctor.registrationCouncil}
                    </p>
                  )}
                </div>

                <div className="rounded-xl bg-[#F7FAF9] p-4">
                  <div className="flex items-center gap-2 text-[#064B50]">
                    <Languages size={19} />
                    <span className="font-semibold">
                      Languages Spoken
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {doctor.languages.join(", ")}
                  </p>
                </div>
              </div>

              {/* ABOUT */}
              <h2 className="mt-9 text-[22px] font-semibold text-[#064B50]">
                About the Doctor
              </h2>

              <p className="mt-4 text-[15px] leading-8 text-gray-600">
                {doctor.about}
              </p>

              {/* QUALIFICATIONS */}
              <div className="mt-8">
                <h3 className="flex items-center gap-3 text-[19px] font-semibold text-[#064B50]">
                  <GraduationCap
                    size={22}
                    className="text-[#C8942E]"
                  />
                  Qualifications
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {doctor.qualifications.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[#E5ECEB] bg-[#F7FAF9] px-4 py-2 text-[13px] text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* EXPERTISE */}
              <div className="mt-8">
                <h3 className="flex items-center gap-3 text-[19px] font-semibold text-[#064B50]">
                  <Stethoscope
                    size={21}
                    className="text-[#C8942E]"
                  />
                  Areas of Expertise
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {doctor.expertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-[#F7FAF9] p-4"
                    >
                      <BadgeCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-[#C8942E]"
                      />
                      <span className="text-[14px] leading-6 text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/doctors"
                className="mt-9 inline-flex items-center gap-2 rounded-lg border border-[#064B50] px-6 py-3 text-[13px] font-semibold text-[#064B50] transition hover:bg-[#064B50] hover:text-white"
              >
                <ArrowLeft size={17} />
                Back to All Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED DOCTORS */}
      <section className="bg-[#F7FAF9] py-14 md:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">

          <div className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C8942E]">
              Specialist Network
            </p>

            <h2 className="mt-3 text-[28px] font-semibold text-[#064B50] md:text-[36px]">
              Explore More Doctors
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedDoctors.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#E5ECEB] bg-white"
              >
                <div className="flex h-[250px] items-center justify-center bg-[#EEF5F3] p-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[12px] font-semibold text-[#C8942E]">
                    {item.speciality}
                  </p>

                  <h3 className="mt-2 text-[20px] font-semibold text-[#064B50]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-gray-500">
                    {item.designation}
                  </p>

                  <p className="mt-3 text-[13px] text-gray-600">
                    Experience:{" "}
                    {item.experience != null
                      ? `${item.experience} Years`
                      : "To be confirmed"}
                  </p>

                  <Link
                    to={`/doctors/${item.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#064B50] hover:text-[#C8942E]"
                  >
                    Know More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
