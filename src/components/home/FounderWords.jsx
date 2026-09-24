import {
  Quote,
} from "lucide-react";

export default function FounderWords() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-7">

        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#dce7e6]
            bg-[#064B50]
            px-7
            py-10
            text-center
            sm:px-12
            md:py-14
          "
        >
          <Quote
            size={45}
            className="
              mx-auto
              text-[#C8942E]
              opacity-90
            "
          />

          <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E6B956]">
            Words From Our Founder
          </p>

          <h2
            className="
              mx-auto
              mt-5
              max-w-[800px]
              text-[23px]
              font-medium
              leading-[1.6]
              text-white
              md:text-[29px]
            "
          >
            Founder message will be added here once
            the final approved content is provided.
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-14 bg-[#C8942E]" />

          <p className="mt-4 text-[14px] font-semibold text-white">
            Founder Name
          </p>

          <p className="mt-1 text-[12px] text-white/60">
            Founder, Akeso Global Health
          </p>
        </div>

      </div>
    </section>
  );
}