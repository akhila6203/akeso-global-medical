
import axiosClient from "../api/axiosClient";

/* =========================================
   REGISTER
========================================= */
export async function registerUser({
  name,
  email,
  phone,
}) {
  const response = await axiosClient.post(
    "/customer-auth/register",
    {
      name,
      email,
      phone,
    }
  );

  return response.data;
}

/* =========================================
   SET PASSWORD
========================================= */
export async function setPassword({
  token,
  password,
}) {
  const response = await axiosClient.post(
    "/customer-auth/set-password",
    {
      token,
      password,
    }
  );

  return response.data;
}

/* =========================================
   LOGIN
========================================= */
export async function loginUser({
  email,
  password,
}) {
  const response = await axiosClient.post(
    "/customer-auth/login",
    {
      email,
      password,
    }
  );

  return response.data;
}

/* =========================================
   FORGOT PASSWORD
========================================= */
export async function forgotPassword(email) {
  const response = await axiosClient.post(
    "/customer-auth/forgot-password",
    { email }
  );

  return response.data;
}

/* =========================================
   RESET PASSWORD
========================================= */
export async function resetPassword({
  token,
  password,
}) {
  const response = await axiosClient.post(
    "/customer-auth/reset-password",
    {
      token,
      password,
    }
  );

  return response.data;
}


export async function validateActivationToken(token) {
  const response = await axiosClient.post(
    "/customer-auth/validate-activation-token",
    { token }
  );

  return response.data;
}

export async function validateResetToken(token) {
  const response = await axiosClient.post(
    "/customer-auth/validate-reset-token",
    { token }
  );

  return response.data;
}



// const API_URL =
//   import.meta.env.VITE_API_URL ||
//   "http://localhost:5000/api";

// /* =====================================
//    EXISTING BACKEND REQUEST FUNCTION
// ===================================== */

// async function request(endpoint, options = {}) {
//   let response;

//   try {
//     response = await fetch(
//       `${API_URL}${endpoint}`,
//       {
//         ...options,
//         headers: {
//           "Content-Type": "application/json",
//           ...(options.headers || {}),
//         },
//       }
//     );
//   } catch {
//     throw new Error(
//       "Unable to connect to the server. Please make sure the backend is running."
//     );
//   }

//   let data = {};

//   try {
//     data = await response.json();
//   } catch {
//     data = {};
//   }

//   if (!response.ok) {
//     throw new Error(
//       data?.message ||
//       "Something went wrong. Please try again."
//     );
//   }

//   return data;
// }

// /* =====================================
//    REGISTER - ORIGINAL FUNCTION
// ===================================== */

// export function registerUser({
//   name,
//   email,
//   phone,
// }) {
//   return request("/auth/register", {
//     method: "POST",
//     body: JSON.stringify({
//       name,
//       email,
//       phone,
//     }),
//   });
// }

// /* =====================================
//    SET PASSWORD - ORIGINAL FUNCTION
// ===================================== */

// export function setPassword({
//   token,
//   password,
// }) {
//   return request("/auth/set-password", {
//     method: "POST",
//     body: JSON.stringify({
//       token,
//       password,
//     }),
//   });
// }

// /* =====================================
//    LOGIN - FRONTEND DEMO ONLY
//    NO BACKEND REQUIRED
// ===================================== */

// export async function loginUser({
//   email,
//   password,
// }) {
//   const DEMO_EMAIL = "demo@akeso.com";
//   const DEMO_PASSWORD = "Akeso@123";

//   const enteredEmail =
//     String(email || "").trim().toLowerCase();

//   const enteredPassword =
//     String(password || "");

//   if (
//     enteredEmail !== DEMO_EMAIL ||
//     enteredPassword !== DEMO_PASSWORD
//   ) {
//     throw new Error(
//       "Invalid email or password."
//     );
//   }

//   return {
//     token: "demo-only-session",
//     user: {
//       id: "demo-user",
//       name: "Akeso Demo User",
//       email: DEMO_EMAIL,
//     },
//   };
// }

// /* =====================================
//    FORGOT PASSWORD - ORIGINAL FUNCTION
// ===================================== */

// export function forgotPassword(email) {
//   return request("/auth/forgot-password", {
//     method: "POST",
//     body: JSON.stringify({
//       email,
//     }),
//   });
// }

// /* =====================================
//    RESET PASSWORD - ORIGINAL FUNCTION
// ===================================== */

// export function resetPassword({
//   token,
//   password,
// }) {
//   return request("/auth/reset-password", {
//     method: "POST",
//     body: JSON.stringify({
//       token,
//       password,
//     }),
//   });
// }



