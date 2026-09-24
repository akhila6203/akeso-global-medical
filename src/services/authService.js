const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

async function request(
  endpoint,
  options = {}
) {
  let response;

  try {
    response = await fetch(
      `${API_URL}${endpoint}`,
      {
        ...options,

        headers: {
          "Content-Type":
            "application/json",

          ...(options.headers || {}),
        },
      }
    );
  } catch {
    throw new Error(
      "Unable to connect to the server. Please make sure the backend is running on localhost:5000."
    );
  }

  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        "Something went wrong. Please try again."
    );
  }

  return data;
}

/* ================================
   REGISTER

   Backend should:
   1. Create account
   2. Generate activation token
   3. Email /set-password?token=...
================================ */

export function registerUser({
  name,
  email,
  phone,
}) {
  return request("/auth/register", {
    method: "POST",

    body: JSON.stringify({
      name,
      email,
      phone,
    }),
  });
}

/* ================================
   SET PASSWORD
   Registration activation link
================================ */

export function setPassword({
  token,
  password,
}) {
  return request(
    "/auth/set-password",
    {
      method: "POST",

      body: JSON.stringify({
        token,
        password,
      }),
    }
  );
}

/* ================================
   LOGIN
================================ */

export function loginUser({
  email,
  password,
}) {
  return request("/auth/login", {
    method: "POST",

    body: JSON.stringify({
      email,
      password,
    }),
  });
}

/* ================================
   FORGOT PASSWORD

   Backend should send:
   /reset-password?token=...
================================ */

export function forgotPassword(
  email
) {
  return request(
    "/auth/forgot-password",
    {
      method: "POST",

      body: JSON.stringify({
        email,
      }),
    }
  );
}

/* ================================
   RESET PASSWORD
================================ */

export function resetPassword({
  token,
  password,
}) {
  return request(
    "/auth/reset-password",
    {
      method: "POST",

      body: JSON.stringify({
        token,
        password,
      }),
    }
  );
}