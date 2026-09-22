import { useState } from "react";

import {
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

export default function Register({
  embedded = false,
  onLogin,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] =
    useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!form.phone.trim()) {
      setError(
        "Please enter your mobile number."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const data = await registerUser({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      });

      setSuccess(
        data?.message ||
          "Account created successfully. Please check your email to set your password."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      setError(
        err?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
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
                max-w-[500px]
                rounded-[20px]
                bg-white
                p-8
                shadow-[0_15px_45px_rgba(6,75,80,0.10)]
              `
        }
      >
        {/* HEADING */}
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
            Akeso Global Medical Services
          </p>

          <h1
            className="
              mt-3
              text-[30px]
              font-bold
              text-[#064B50]
            "
          >
            Create Account
          </h1>

          <p
            className="
              mt-2
              text-[14px]
              leading-6
              text-[#667576]
            "
          >
            Register your details to access
            Akeso medical services.
          </p>
        </div>

        {/* ERROR */}
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

        {/* SUCCESS */}
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
          className="mt-8 space-y-5"
        >
          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            Icon={UserRound}
            autoComplete="name"
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            Icon={Mail}
            autoComplete="email"
          />

          <InputField
            label="Mobile Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            Icon={Phone}
            autoComplete="tel"
          />

          <button
            type="submit"
            disabled={loading}
            className="
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
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p
          className="
            mt-7
            text-center
            text-[14px]
            text-[#667576]
          "
        >
          Already have an account?{" "}

          <button
            type="button"
            onClick={() => {
              if (embedded) {
                onLogin?.();
              } else {
                navigate("/login");
              }
            }}
            className="
              font-semibold
              text-[#E85C91]
              hover:text-[#d84078]
            "
          >
            Login
          </button>
        </p>
      </div>
    </main>
  );
}

function InputField({
  label,
  Icon,
  ...props
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-[13px]
          font-semibold
          text-[#173f42]
        "
      >
        {label}
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
        <Icon
          size={19}
          className="shrink-0 text-[#C8942E]"
        />

        <input
          {...props}
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
    </div>
  );
}