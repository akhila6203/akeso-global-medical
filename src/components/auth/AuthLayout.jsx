import { Link } from "react-router-dom";

export default function AuthLayout({
  title,
  description,
  children,
}) {
  return (
    <main
      className="
        min-h-[calc(100vh-80px)]
        bg-[#f3f8f7]
        flex
        items-center
        justify-center
        px-4
        py-14
      "
    >
      <div
        className="
          w-full
          max-w-[480px]
          bg-white
          rounded-2xl
          border
          border-[#e3ecea]
          shadow-[0_16px_45px_rgba(6,75,80,0.10)]
          p-6
          sm:p-8
        "
      >
        <Link to="/">
          <img
            src="/logo.jpg"
            alt="Akeso"
            className="
              h-[75px]
              w-auto
              mx-auto
              object-contain
            "
          />
        </Link>

        <div className="text-center mt-5">
          <h1
            className="
              text-[27px]
              font-bold
              text-[#064B50]
            "
          >
            {title}
          </h1>

          {description && (
            <p
              className="
                mt-2
                text-[14px]
                leading-6
                text-[#667576]
              "
            >
              {description}
            </p>
          )}
        </div>

        <div className="mt-7">
          {children}
        </div>
      </div>
    </main>
  );
}