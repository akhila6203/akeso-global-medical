export const TOKEN_KEY =
  "akeso_token";

export const USER_KEY =
  "akeso_user";

export function isLoggedIn() {
  return Boolean(
    localStorage.getItem(TOKEN_KEY)
  );
}

export function getUser() {
  try {
    const user =
      localStorage.getItem(USER_KEY);

    return user
      ? JSON.parse(user)
      : null;
  } catch {
    return null;
  }
}

export function saveLogin(
  token,
  user
) {
  localStorage.setItem(
    TOKEN_KEY,
    token
  );

  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );

  window.dispatchEvent(
    new Event("akeso-auth-change")
  );
}

export function logout() {
  localStorage.removeItem(
    TOKEN_KEY
  );

  localStorage.removeItem(
    USER_KEY
  );

  window.dispatchEvent(
    new Event("akeso-auth-change")
  );
}