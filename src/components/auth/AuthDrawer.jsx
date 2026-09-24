import { X } from "lucide-react";

import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import SetPassword from "../../pages/SetPassword";
import ResetPassword from "../../pages/ResetPassword";

export default function AuthDrawer({
  open,
  mode = "login",
  onClose,
  onModeChange,
  redirect = "",
}) {
  if (!open) {
    return null;
  }

  const changeMode = (newMode) => {
    onModeChange?.(newMode);
  };

  return (
    <>
      {/* BACKDROP */}

      <button
        type="button"
        aria-label="Close authentication"
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[200]
          h-full
          w-full
          cursor-default
          bg-[#032f33]/45
          backdrop-blur-[2px]
        "
      />

      {/* DRAWER */}

      <aside
        className="
          fixed
          right-0
          top-0
          z-[210]

          flex
          h-screen
          w-full
          flex-col

          overflow-hidden
          bg-white

          shadow-[-18px_0_45px_rgba(6,75,80,0.16)]

          sm:w-[480px]
          lg:w-[500px]
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            min-h-[92px]
            shrink-0
            items-center
            justify-between

            border-b
            border-[#e1ebea]

            bg-white

            px-6
            sm:px-8
          "
        >
          <img
            src="/logo.png"
            alt="Akeso Global Medical Services"
            className="
              h-[58px]
              w-auto
              max-w-[190px]
              object-contain
            "
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              border
              border-[#d6e5e3]

              bg-[#eef6f5]

              text-[#064B50]

              transition-all

              hover:border-[#C8942E]
              hover:bg-[#064B50]
              hover:text-white
            "
          >
            <X
              size={20}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* CONTENT */}

        <div
          className="
            flex-1
            overflow-y-auto

            px-6
            pb-12
            pt-10

            sm:px-9
            sm:pt-12
          "
        >
          {mode === "login" && (
            <Login
              embedded
              redirect={redirect}
              onClose={onClose}
              onRegister={() =>
                changeMode(
                  "register"
                )
              }
              onForgot={() =>
                changeMode(
                  "forgot"
                )
              }
            />
          )}

          {mode === "register" && (
            <Register
              embedded
              onLogin={() =>
                changeMode(
                  "login"
                )
              }
            />
          )}

          {mode === "forgot" && (
            <ForgotPassword
              embedded
              onLogin={() =>
                changeMode(
                  "login"
                )
              }
            />
          )}

          {mode ===
            "set-password" && (
            <SetPassword
              embedded
              onLogin={() =>
                changeMode(
                  "login"
                )
              }
            />
          )}

          {mode ===
            "reset-password" && (
            <ResetPassword
              embedded
              onLogin={() =>
                changeMode(
                  "login"
                )
              }
            />
          )}
        </div>

        <div
          className="
            h-[4px]
            shrink-0
            bg-gradient-to-r
            from-[#064B50]
            via-[#C8942E]
            to-[#064B50]
          "
        />
      </aside>
    </>
  );
}