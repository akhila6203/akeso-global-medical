import {
  Navigate,
  useLocation,
} from "react-router-dom";

import { isLoggedIn } from "../utils/auth";

export default function ProtectedRoute({
  children,
}) {
  const location = useLocation();

  if (!isLoggedIn()) {
    const redirect =
      location.pathname +
      location.search;

    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(
          redirect
        )}`}
        replace
      />
    );
  }

  return children;
}