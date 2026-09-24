import {
  useEffect,
  useState,
} from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CallbackModal from "./components/CallbackModal";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthDrawer from "./components/auth/AuthDrawer";

import Home from "./pages/Home";
import Specialities from "./pages/Specialities";
import DynamicPage from "./pages/DynamicPage";
import Profile from "./pages/Profile";

import BecomePartnerPage from "./pages/BecomePartner";
import Contact from "./pages/Contact";
import InternationalPatients from "./pages/InternationalPatients";
import RequestEstimate from "./pages/RequestEstimate";
import PlanYourTrip from "./pages/PlanYourTrip";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [callbackOpen, setCallbackOpen] =
    useState(false);

  const [authOpen, setAuthOpen] =
    useState(false);

  const [authMode, setAuthMode] =
    useState("login");

  const [authRedirect, setAuthRedirect] =
    useState("/doctors");

  // const openAuth = (
  //   mode = "login",
  //   redirect = "/doctors"
  // ) => {
  //   setAuthMode(mode);
  //   setAuthRedirect(redirect);
  //   setAuthOpen(true);
  // };
  const openAuth = (
  mode = "login",
  redirect = ""
) => {
  setAuthMode(mode);
  setAuthRedirect(redirect);
  setAuthOpen(true);
};

  const closeAuth = () => {
    setAuthOpen(false);

    // If auth URL itself opened the drawer,
    // closing returns user to home.
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forgot-password" ||
      location.pathname === "/set-password" ||
      location.pathname === "/reset-password"
    ) {
      navigate("/", {
        replace: true,
      });
    }
  };

  /*
    Handles URLs opened directly from:
    - activation email
    - reset password email
    - old /login links
  */
  useEffect(() => {
    const params =
      new URLSearchParams(location.search);

    if (location.pathname === "/login") {
      setAuthMode("login");

      setAuthRedirect(
        params.get("redirect") ||
          "/doctors"
      );

      setAuthOpen(true);
    }

    if (location.pathname === "/register") {
      setAuthMode("register");
      setAuthOpen(true);
    }

    if (
      location.pathname ===
      "/forgot-password"
    ) {
      setAuthMode("forgot");
      setAuthOpen(true);
    }

    if (
      location.pathname ===
      "/set-password"
    ) {
      setAuthMode("set-password");
      setAuthOpen(true);
    }

    if (
      location.pathname ===
      "/reset-password"
    ) {
      setAuthMode("reset-password");
      setAuthOpen(true);
    }
  }, [
    location.pathname,
    location.search,
  ]);

  return (
    <>
      <Header
        onCallback={() =>
          setCallbackOpen(true)
        }
        onOpenAuth={openAuth}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        {/* AUTH URLS
            Keep Home behind drawer.
        */}

        <Route
          path="/login"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/forgot-password"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/set-password"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/reset-password"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        {/* PROFILE */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* DOCTORS */}

        <Route
          path="/doctors"
          element={
            <ProtectedRoute>
              <DynamicPage
                fixedTitle="Our Doctors"
              />
            </ProtectedRoute>
          }
        />

        {/* SPECIALITIES */}

        <Route
          path="/specialities"
          element={<Specialities />}
        />

        <Route
          path="/speciality/:slug"
          element={<DynamicPage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* HEALTH LIBRARY */}

        <Route
          path="/health-library"
          element={
            <DynamicPage
              fixedTitle="Health Library"
            />
          }
        />

        <Route
          path="/health-library/:slug"
          element={<DynamicPage />}
        />

        {/* SERVICES */}

        <Route
          path="/services"
          element={
            <DynamicPage
              fixedTitle="Services"
            />
          }
        />

        <Route
          path="/services/:slug"
          element={<DynamicPage />}
        />

     <Route
  path="/international-patients"
  element={
    <InternationalPatients
      onOpenAuth={openAuth}
    />
  }
/>

<Route
  path="/international/request-an-estimate"
  element={<RequestEstimate />}
/>

<Route
  path="/international/plan-your-trip"
  element={<PlanYourTrip />}
/>

      <Route
        path="/international/:slug"
        element={<DynamicPage />}
      />

        <Route
          path="/international/:slug"
          element={<DynamicPage />}
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={
            <DynamicPage
              fixedTitle="Contact Us"
            />
          }
        />

<Route
  path="/become-a-partner"
  element={<BecomePartnerPage />}
/>
        <Route
          path="*"
          element={
            <DynamicPage
              fixedTitle="Page"
            />
          }
        />
      </Routes>

      <Footer />

      <CallbackModal
        open={callbackOpen}
        onClose={() =>
          setCallbackOpen(false)
        }
      />

      <AuthDrawer
        open={authOpen}
        mode={authMode}
        redirect={authRedirect}
        onClose={closeAuth}
        onModeChange={setAuthMode}
      />
    </>
  );
}