const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

async function request(endpoint, options = {}) {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },

      ...options,
    }
  );

  let data;

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Something went wrong. Please try again."
    );
  }

  return data;
}

export function registerUser(formData) {
  return request("/auth/register", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

export function loginUser(formData) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

export function forgotPassword(email) {
  return request("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export function setPassword(token, password) {
  return request("/auth/set-password", {
    method: "POST",
    body: JSON.stringify({
      token,
      password,
    }),
  });
}

export function resetPassword(token, password) {
  return request("/auth/reset-password", {
    method: "POST",
    body: JSON.stringify({
      token,
      password,
    }),
  });
}