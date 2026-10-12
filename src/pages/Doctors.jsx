
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Stethoscope,
  GraduationCap,
  MapPin,
  Clock3,
  BadgeCheck,
  UserRound,
} from "lucide-react";

import Breadcrumb from "../components/Breadcrumb";
import { doctors } from "../data/doctorsData";

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("All");

  const specialities = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.speciality)),
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const keyword = search.trim().toLowerCase();

      const matchesSearch = [
        doctor.name,
        doctor.speciality,
        doctor.designation,
        doctor.location,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);

      const matchesSpeciality =
        speciality === "All" ||
        doctor.speciality === speciality;

      return matchesSearch && matchesSpeciality;
    });
  }, [search, speciality]);

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb
        title="Our Doctors"
        description="Explore doctor profiles and areas of medical expertise."
        items={[{ label: "Doctors" }]}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C8942E]">
              Our Specialist Network
            </p>

            <h2 className="mt-3 text-[30px] font-semibold text-[#064B50] md:text-[42px]">
              Meet Our Doctors
            </h2>

            <p className="mt-4 text-[15px] leading-8 text-gray-600">
              Explore specialist profiles, qualifications,
              clinical expertise and practice information.
            </p>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-[#F7FAF9] p-4 sm:flex-row sm:p-5">

            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctors or specialities..."
                className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-[14px] outline-none focus:border-[#064B50]"
              />
            </div>

            <select
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-[14px] text-gray-700 outline-none focus:border-[#064B50] sm:w-[240px]"
            >
              {specialities.map((item) => (
                <option key={item} value={item}>
                  {item === "All"
                    ? "All Specialities"
                    : item}
                </option>
              ))}
            </select>
          </div>

          {/* DOCTOR CARDS */}
          {filteredDoctors.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {filteredDoctors.map((doctor) => (
                <article
                  key={doctor.id}
                  className="group overflow-hidden rounded-2xl border border-[#E5ECEB] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* DOCTOR IMAGE */}
                  <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-[#EEF5F3] sm:h-[300px]">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#064B50] shadow-sm">
                      {doctor.speciality}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-[21px] font-semibold text-[#064B50]">
                      {doctor.name}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-gray-500">
                      {doctor.designation}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-gray-100 pt-4">

                      {/* EXPERIENCE */}
                      <div className="flex items-start gap-3">
                        <Clock3
                          size={18}
                          className="mt-1 shrink-0 text-[#C8942E]"
                        />
                        <p className="text-[13px] text-gray-600">
                          <strong>Experience:</strong>{" "}
                          {doctor.experience != null
                            ? `${doctor.experience} Years`
                            : "To be confirmed"}
                        </p>
                      </div>

                      {/* QUALIFICATIONS */}
                      <div className="flex items-start gap-3">
                        <GraduationCap
                          size={18}
                          className="mt-1 shrink-0 text-[#C8942E]"
                        />
                        <p className="text-[13px] leading-6 text-gray-600">
                          <strong>Qualifications:</strong>{" "}
                          {doctor.qualifications.join(", ")}
                        </p>
                      </div>

                      {/* LOCATION */}
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className="mt-1 shrink-0 text-[#C8942E]"
                        />
                        <p className="text-[13px] text-gray-600">
                          <strong>Location:</strong>{" "}
                          {doctor.location}
                        </p>
                      </div>

                      {/* REGISTRATION */}
                      {/* <div className="flex items-start gap-3">
                        <BadgeCheck
                          size={18}
                          className="mt-1 shrink-0 text-[#C8942E]"
                        />
                        <p className="text-[13px] text-gray-600">
                          <strong>Registration No:</strong>{" "}
                          {doctor.registrationNumber ||
                            "To be verified"}
                        </p>
                      </div> */}
                    </div>

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="mt-6 flex h-11 items-center justify-center gap-2 rounded-lg bg-[#064B50] text-[13px] font-semibold text-white transition-colors hover:bg-[#08666C]"
                    >
                      Know More
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center rounded-2xl bg-[#F7FAF9] px-6 py-16 text-center">
              <UserRound size={42} className="text-[#064B50]" />

              <h3 className="mt-4 text-xl font-semibold text-[#064B50]">
                No Doctors Found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try a different name or speciality.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSpeciality("All");
                }}
                className="mt-5 rounded-lg bg-[#064B50] px-5 py-3 text-sm font-medium text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
