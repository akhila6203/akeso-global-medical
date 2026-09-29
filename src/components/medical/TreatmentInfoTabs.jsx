export default function TreatmentInfoTabs({
  items = [],
  activeIndex = 0,
  onChange,
}) {
  return (
    <div
      className="
        flex
        w-full
        flex-wrap
        items-center
        justify-center
        gap-2

        sm:gap-3
      "
    >
      {items.map((item, index) => {
        const active =
          activeIndex === index;

        const Icon =
          item.icon;

        return (
          <button
            key={item.key}
            type="button"
            onClick={() =>
              onChange(index)
            }
            className={`
              inline-flex
              min-h-[44px]
              flex-1
              items-center
              justify-center
              gap-1.5
              rounded-[11px]
              border
              px-2
              py-2.5
              text-center
              text-[10px]
              font-semibold
              leading-[1.25]
              transition-all
              duration-300

              sm:min-h-[48px]
              sm:flex-none
              sm:gap-2
              sm:px-5
              sm:py-3
              sm:text-[13px]

              lg:min-h-[50px]
              lg:px-6
              lg:text-[14px]

              ${
                active
                  ? `
                    border-[#064B50]
                    bg-[#064B50]
                    text-white
                    shadow-[0_7px_18px_rgba(6,75,80,0.12)]
                  `
                  : `
                    border-[#D7E6E4]
                    bg-white
                    text-[#536466]
                    hover:border-[#C8942E]
                    hover:text-[#064B50]
                  `
              }
            `}
          >
            {Icon && (
              <Icon
                size={16}
                strokeWidth={1.8}
                className={`
                  shrink-0

                  ${
                    active
                      ? "text-[#E6B956]"
                      : "text-[#6B8586]"
                  }
                `}
              />
            )}

            <span>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}