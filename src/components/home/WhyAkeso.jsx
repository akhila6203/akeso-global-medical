import {
  BadgeDollarSign,
  Stethoscope,
  Hospital,
  ShieldCheck,
  Headphones,
  Plane,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Significant Cost Savings",
    text: "Access high-quality treatment in India at substantially lower costs compared with many international markets.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Specialists",
    text: "Connect with experienced surgeons and medical teams matched to your individual medical requirements.",
  },
  {
    icon: Hospital,
    title: "Trusted Hospitals",
    text: "Care through leading hospitals following recognised clinical and patient-safety standards.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Technology",
    text: "Internationally certified implants and advanced medical technology for modern patient care.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    text: "A dedicated coordinator supports your journey from consultation through treatment and recovery.",
  },
  {
    icon: Plane,
    title: "Travel Assistance",
    text: "Support with visa documentation, airport transfers, local coordination and stay planning.",
  },
];

export default function WhyAkeso() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B78124]">
            The Akeso Difference
          </p>

          <h2 className="mt-3 text-[31px] font-semibold text-[#064B50] md:text-[40px]">
            Why Choose Akeso?
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#5f7071]">
            Making international healthcare more
            accessible, coordinated and patient-focused
            from your first consultation through recovery.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(
            ({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="
                  rounded-2xl
                  border
                  border-[#dfe9e8]
                  bg-[#fbfcfc]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C8942E]/50
                  hover:shadow-[0_14px_35px_rgba(6,75,80,0.10)]
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
                    bg-[#e8f3f2]
                    text-[#B78124]
                  "
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-[17px] font-semibold text-[#064B50]">
                  {title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#667576]">
                  {text}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}