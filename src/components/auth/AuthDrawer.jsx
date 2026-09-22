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
  redirect = "/doctors",
}) {
  if (!open) return null;

  return (
    <>
      {/* =========================
          BACKDROP
      ========================== */}
      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[200]
          bg-[#032f33]/40
          backdrop-blur-[2px]
        "
      />

      {/* =========================
          RIGHT DRAWER
      ========================== */}
      <aside
        className="
          fixed
          right-0
          top-0
          z-[210]

          h-screen
          w-full
          sm:w-[480px]
          lg:w-[500px]

          overflow-y-auto
          bg-white

          shadow-[-15px_0_45px_rgba(6,75,80,0.16)]
        "
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close authentication"
          className="
            absolute
            right-5
            top-5
            z-30

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full
            border
            border-[#d9e4e4]

            bg-white
            text-[#064B50]

            transition-all
            duration-200

            hover:border-[#E85C91]
            hover:bg-[#fff5f8]
            hover:text-[#E85C91]
          "
        >
          <X size={19} />
        </button>

        {/* FORM CONTENT */}
        <div
          className="
            min-h-full
            px-7
            pb-12
            pt-[82px]

            sm:px-10
            lg:px-11
          "
        >
          {mode === "login" && (
            <Login
              embedded
              redirect={redirect}
              onClose={onClose}
              onRegister={() =>
                onModeChange("register")
              }
              onForgot={() =>
                onModeChange("forgot")
              }
            />
          )}

          {mode === "register" && (
            <Register
              embedded
              onLogin={() =>
                onModeChange("login")
              }
            />
          )}

          {mode === "forgot" && (
            <ForgotPassword
              embedded
              onLogin={() =>
                onModeChange("login")
              }
            />
          )}

          {mode === "set-password" && (
            <SetPassword
              embedded
              onLogin={() =>
                onModeChange("login")
              }
            />
          )}

          {mode === "reset-password" && (
            <ResetPassword
              embedded
              onLogin={() =>
                onModeChange("login")
              }
            />
          )}
        </div>
      </aside>
    </>
  );
}