import { useEffect, useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import PasswordForm from "../components/auth/PasswordForm";

import {
  setPassword,
  validateActivationToken,
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
      setError("Activation link is missing or invalid.");
      setCheckingToken(false);
      return;
    }

    try {
      await validateActivationToken(token);

      if (!cancelled) {
        setTokenValid(true);
        setError("");
      }
    } catch (err) {
      if (!cancelled) {
        setError(
          err?.response?.data?.message ||
          "This activation link has expired or has already been used."
        );
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

if (checkingToken) {
  return (
    <div className="w-full py-6 text-center text-[#064B50]">
      Checking your activation link...
    </div>
  );
}
   if (!tokenValid) {
  return null;
}
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




// import { useState } from "react";

// import {
//   useNavigate,
//   useSearchParams,
// } from "react-router-dom";

// import PasswordForm from "../components/auth/PasswordForm";

// import {
//   setPassword,
// } from "../services/authService";

// export default function SetPassword({
//   embedded = false,
//   onLogin,
// }) {
//   const navigate = useNavigate();

//   const [searchParams] =
//     useSearchParams();

//   const token =
//     searchParams.get("token") || "";

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
//           "This activation link is invalid or missing."
//         );
//         return;
//       }

//       try {
//         setLoading(true);
//         setError("");
//         setSuccess("");

//         const data =
//           await setPassword({
//             token,
//             password,
//           });

//         setSuccess(
//           data?.message ||
//             "Password created successfully."
//         );

//         /*
//           After password creation:
//           open Login form.
//         */

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
//         }, 1000);
//       } catch (err) {
//         setError(
//           err?.message ||
//             "Unable to create password."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   return (
//     <PasswordForm
//       title="Set Your Password"
//       subtitle="Activate Your Account"
//       description="Create a secure password to activate your Akeso account."
//       buttonText="Create Password"
//       onSubmit={handleSubmit}
//       loading={loading}
//       error={error}
//       success={success}
//     />
//   );
// }