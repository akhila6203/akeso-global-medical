import {
  useState,
} from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import PasswordForm from "../components/auth/PasswordForm";

import {
  resetPassword,
} from "../services/authService";

export default function ResetPassword({
  embedded = false,
  onLogin,
  token: tokenProp,
}) {
  const navigate =
    useNavigate();

  const [searchParams] =
    useSearchParams();

  const token =
    tokenProp ||
    searchParams.get("token") ||
    "";

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
          "Invalid or missing reset token."
        );

        return;
      }

      try {
        setLoading(true);
        setError("");
        setSuccess("");

        const data =
          await resetPassword({
            token,
            password,
          });

        setSuccess(
          data?.message ||
            "Password reset successfully."
        );

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
        }, 900);
      } catch (err) {
        setError(
          err?.message ||
            "Could not reset password."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <PasswordForm
      title="Reset Password"
      subtitle="Account Recovery"
      description="Enter and confirm your new password."
      buttonText="Reset Password"
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
    />
  );
}