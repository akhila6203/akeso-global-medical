
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { servicePdfContent } from "../../data/servicePdfContent";

export default function ServicePdfSection({ slug }) {
  const content = servicePdfContent[slug];

  if (!content) return null;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-7 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-9 sm:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C88416]">
            Akeso Medical Services
          </p>

          <h2 className="mt-3 text-[27px] font-semibold leading-tight text-[#064B50] sm:text-[34px] lg:text-[38px]">
            {content.title}
          </h2>

          <p className="mt-5 max-w-[950px] text-[15px] leading-8 text-[#465A5B] sm:text-[16px]">
            {content.introduction}
          </p>
        </div>

        {/* PDF CONTENT */}
        <div className="space-y-9 sm:space-y-11">
          {content.sections.map((section, index) => (
            <article
              key={section.title}
              className="border-b border-[#E0EAE8] pb-8 last:border-b-0 last:pb-0"
            >
              <div className="mb-5 flex items-start gap-3">
                <span className="mt-1 h-7 w-[3px] shrink-0 rounded-full bg-[#C8942E]" />

                <h3 className="text-[20px] font-semibold leading-snug text-[#064B50] sm:text-[23px]">
                  {section.title}
                </h3>
              </div>

              {section.paragraphs?.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-4 text-[15px] leading-8 text-[#465A5B] last:mb-0 sm:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets?.length > 0 && (
                <ul className="space-y-4">
                  {section.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1.5 shrink-0 text-[#C8942E]"
                      />

                      <span className="text-[15px] leading-7 text-[#465A5B] sm:text-[16px]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.items?.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.items.map((item, i) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-[#E0EAE8] bg-[#F8FBFA] p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E7F1EF] text-[13px] font-bold text-[#064B50]">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <h4 className="text-[17px] font-semibold leading-6 text-[#064B50]">
                          {item.title}
                        </h4>
                      </div>

                      <p className="mt-3 text-[14px] leading-7 text-[#52696A] sm:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CONTACT CTA */}
        <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-[#F1F7F5] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-[21px] font-semibold text-[#064B50]">
              Need Assistance?
            </h3>

            <p className="mt-2 max-w-[620px] text-[14px] leading-7 text-[#52696A]">
              Contact Akeso Global Medical Services for
              service availability, appointment coordination
              and further assistance.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#064B50] px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#0B6268]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
