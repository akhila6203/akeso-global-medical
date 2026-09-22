import { useState } from "react";

import {
  ArrowLeft,
  Mail,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { forgotPassword } from "../services/authService";

export default function ForgotPassword({
  embedded = false,
  onLogin,
}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError(
        "Please enter your email address."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const data = await forgotPassword(
        email.trim()
      );

      setSuccess(
        data?.message ||
          "Password reset link has been sent to your email."
      );
    } catch (err) {
      setError(
        err?.message ||
          "Could not send reset email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const goLogin = () => {
    if (embedded) {
      onLogin?.();
    } else {
      navigate("/login");
    }
  };

  return (
    <main
      className={
        embedded
          ? "w-full bg-transparent"
          : `
              flex
              min-h-[75vh]
              items-center
              justify-center
              bg-[#f5fafa]
              px-4
              py-14
            `
      }
    >
      <div
        className={
          embedded
            ? "w-full"
            : `
                w-full
                max-w-[460px]
                rounded-[20px]
                bg-white
                p-8
                shadow-[0_15px_45px_rgba(6,75,80,0.10)]
              `
        }
      >
        <div
          className={
            embedded
              ? "text-left"
              : "text-center"
          }
        >
          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#C8942E]
            "
          >
            Account Recovery
          </p>

          <h1
            className="
              mt-3
              text-[30px]
              font-bold
              text-[#064B50]
            "
          >
            Forgot Password?
          </h1>

          <p
            className="
              mt-2
              text-[14px]
              leading-6
              text-[#667576]
            "
          >
            Enter your registered email address.
            We will send you a link to create a
            new password.
          </p>
        </div>

        {error && (
          <div
            className="
              mt-6
              rounded-lg
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-[13px]
              text-red-600
            "
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="
              mt-6
              rounded-lg
              border
              border-emerald-200
              bg-emerald-50
              px-4
              py-3
              text-[13px]
              leading-5
              text-emerald-700
            "
          >
            {success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8"
        >
          <label
            htmlFor="forgot-email"
            className="
              mb-2
              block
              text-[13px]
              font-semibold
              text-[#173f42]
            "
          >
            Email Address
          </label>

          <div
            className="
              flex
              h-[56px]
              items-center
              gap-3
              rounded-xl
              border
              border-[#dce5e5]
              bg-white
              px-4

              focus-within:border-[#064B50]
              focus-within:ring-2
              focus-within:ring-[#064B50]/10
            "
          >
            <Mail
              size={19}
              className="text-[#C8942E]"
            />

            <input
              id="forgot-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Enter your email"
              autoComplete="email"
              className="
                h-full
                w-full
                bg-transparent
                text-[14px]
                text-[#263F41]
                outline-none
                placeholder:text-[#91a0a1]
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              mt-6
              flex
              h-[54px]
              w-full
              items-center
              justify-center
              rounded-xl
              bg-[#064B50]
              text-[15px]
              font-semibold
              text-white
              transition
              hover:bg-[#0B6B70]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>
        </form>

        <button
          type="button"
          onClick={goLogin}
          className="
            mx-auto
            mt-7
            flex
            items-center
            gap-2
            text-[14px]
            font-semibold
            text-[#E85C91]
            hover:text-[#d84078]
          "
        >
          <ArrowLeft size={16} />
          Back to Login
        </button>
      </div>
    </main>
  );
}