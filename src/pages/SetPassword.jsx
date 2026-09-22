import { useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import PasswordForm from "../components/auth/PasswordForm";

import { setPassword } from "../services/authService";

export default function SetPassword({
  embedded = false,
  onLogin,
}) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const token =
    searchParams.get("token") || "";

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] =
    useState("");

  const handleSubmit = async (password) => {
    if (!token) {
      setError(
        "Invalid or missing activation token."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const data = await setPassword({
        token,
        password,
      });

      setSuccess(
        data?.message ||
          "Password created successfully."
      );

      setTimeout(() => {
        if (embedded && onLogin) {
          onLogin();
        } else {
          navigate(
            "/login?passwordCreated=1",
            {
              replace: true,
            }
          );
        }
      }, 1200);
    } catch (err) {
      setError(
        err?.message ||
          "Could not create password. The link may be invalid or expired."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PasswordForm
      embedded={embedded}
      title="Create Password"
      subtitle="Activate Your Account"
      description="Create a secure password to complete your Akeso account."
      buttonText="Create Password"
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
    />
  );
}