import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Mail,
  User,
} from "lucide-react";

import {
  getUser,
  logout,
} from "../utils/auth";

export default function Profile() {
  const navigate = useNavigate();

  const user = getUser();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <main
      className="
        min-h-[70vh]
        bg-[#f5fafa]
        px-4
        py-14
      "
    >
      <div
        className="
          mx-auto
          max-w-[650px]
          rounded-[20px]
          bg-white
          p-8
          shadow-lg
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[75px]
            w-[75px]
            items-center
            justify-center
            rounded-full
            bg-[#064B50]
            text-white
          "
        >
          <User size={32} />
        </div>

        <h1
          className="
            mt-4
            text-center
            text-[28px]
            font-bold
            text-[#064B50]
          "
        >
          {user?.name || "My Profile"}
        </h1>

        <div
          className="
            mt-7
            rounded-xl
            bg-[#f7fafa]
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <Mail
              size={18}
              className="text-[#C8942E]"
            />

            <span>
              {user?.email || ""}
            </span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            mt-6
            flex
            h-[48px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#E85C91]
            font-semibold
            text-white
          "
        >
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </main>
  );
}