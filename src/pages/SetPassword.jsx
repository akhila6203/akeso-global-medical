import { useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import PasswordForm from "../components/auth/PasswordForm";

import {
  setPassword,
} from "../services/authService";

export default function SetPassword({
  embedded = false,
  onLogin,
}) {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const token =
    searchParams.get("token") || "";

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleSubmit =
    async (password) => {
      if (!token) {
        setError(
          "This activation link is invalid or missing."
        );
        return;
      }

      try {
        setLoading(true);
        setError("");
        setSuccess("");

        const data =
          await setPassword({
            token,
            password,
          });

        setSuccess(
          data?.message ||
            "Password created successfully."
        );

        /*
          After password creation:
          open Login form.
        */

        setTimeout(() => {
          if (
            embedded &&
            onLogin
          ) {
            onLogin();
          } else {
            navigate(
              "/login",
              {
                replace: true,
              }
            );
          }
        }, 1000);
      } catch (err) {
        setError(
          err?.message ||
            "Unable to create password."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <PasswordForm
      title="Set Your Password"
      subtitle="Activate Your Account"
      description="Create a secure password to activate your Akeso account."
      buttonText="Create Password"
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
    />
  );
}