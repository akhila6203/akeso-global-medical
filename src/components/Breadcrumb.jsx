import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumb({
  current,
  parent,
  parentPath,
}) {
  return (
    <div className="bg-white border-b border-[#e7eeee]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center gap-2 text-[13px]">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[#667576] hover:text-[#E85C91]"
          >
            <Home size={14} />
            Home
          </Link>

          <ChevronRight
            size={14}
            className="text-[#C8942E]"
          />

          {parent && parentPath && (
            <>
              <Link
                to={parentPath}
                className="text-[#667576] hover:text-[#E85C91]"
              >
                {parent}
              </Link>

              <ChevronRight
                size={14}
                className="text-[#C8942E]"
              />
            </>
          )}

          <span className="font-medium text-[#064B50]">
            {current}
          </span>
        </div>
      </div>
    </div>
  );
}