import { useEffect, useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import PasswordForm from "../components/auth/PasswordForm";

import {
  resetPassword,
  validateResetToken,
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

    const [checkingToken, setCheckingToken] = useState(true);
const [tokenValid, setTokenValid] = useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");


    useEffect(() => {
  let cancelled = false;

  async function checkToken() {
    setCheckingToken(true);
    setTokenValid(false);

    if (!token) {
      setCheckingToken(false);
      return;
    }

    try {
      const data = await validateResetToken(token);

      if (!cancelled) {
        setTokenValid(data?.valid === true);
      }
    } catch (err) {
      if (!cancelled) {
        setTokenValid(false);
      }
    } finally {
      if (!cancelled) {
        setCheckingToken(false);
      }
    }
  }

  checkToken();

  return () => {
    cancelled = true;
  };
}, [token]);


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

    if (checkingToken) {
  return (
    <div className="w-full py-6 text-center text-[#064B50]">
      Checking link...
    </div>
  );
}

if (!tokenValid) {
  return null;
}

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



// import {
//   useState,
// } from "react";

// import {
//   useNavigate,
//   useSearchParams,
// } from "react-router-dom";

// import PasswordForm from "../components/auth/PasswordForm";

// import {
//   resetPassword,
// } from "../services/authService";

// export default function ResetPassword({
//   embedded = false,
//   onLogin,
//   token: tokenProp,
// }) {
//   const navigate =
//     useNavigate();

//   const [searchParams] =
//     useSearchParams();

//   const token =
//     tokenProp ||
//     searchParams.get("token") ||
//     "";

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const [success, setSuccess] =
//     useState("");

//   const handleSubmit =
//     async (password) => {
//       if (!token) {
//         setError(
//           "Invalid or missing reset token."
//         );

//         return;
//       }

//       try {
//         setLoading(true);
//         setError("");
//         setSuccess("");

//         const data =
//           await resetPassword({
//             token,
//             password,
//           });

//         setSuccess(
//           data?.message ||
//             "Password reset successfully."
//         );

//         setTimeout(() => {
//           if (
//             embedded &&
//             onLogin
//           ) {
//             onLogin();
//           } else {
//             navigate(
//               "/login",
//               {
//                 replace: true,
//               }
//             );
//           }
//         }, 900);
//       } catch (err) {
//         setError(
//           err?.message ||
//             "Could not reset password."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   return (
//     <PasswordForm
//       title="Reset Password"
//       subtitle="Account Recovery"
//       description="Enter and confirm your new password."
//       buttonText="Reset Password"
//       onSubmit={handleSubmit}
//       loading={loading}
//       error={error}
//       success={success}
//     />
//   );
// }