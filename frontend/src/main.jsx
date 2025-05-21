import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/landing-page/Landing.jsx";
import Home from "./pages/home/Home.jsx";
import Movies from "./pages/movies/Movies.jsx";
import MovieShow from "./pages/movieShow/MovieShow.jsx";
import Subscription from "./pages/subscription/Subscription.jsx";
import Support from "./pages/support/Support.jsx";
import Authentication from "./pages/auth/auth.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ForgotPassword from "./pages/auth/forgot-password.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const isUnderDevelopment = import.meta.env.VITE_MAINTENANCE_MODE === "false";

const MaintenancePage = () => (
  <div style={{ textAlign: "center", marginTop: "20%" }}>
    <h1>🚧 Site Under Development 🚧</h1>
    <p>We're currently making improvements. Please check back later.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/*"
        element={
          <AuthProvider>
            {isUnderDevelopment ? (
              <MaintenancePage />
            ) : (
              <Routes>
                <Route path="/auth" element={<Authentication />} />
                <Route
                  path="/home"
                  element={<ProtectedRoute element={<Home />} />}
                />
                <Route
                  path="/movies"
                  element={<ProtectedRoute element={<Movies />} />}
                />
                <Route
                  path="/movieshow"
                  element={<ProtectedRoute element={<MovieShow />} />}
                />
                <Route
                  path="/subscription"
                  element={<ProtectedRoute element={<Subscription />} />}
                />
                <Route path="/support" element={<Support />} />{" "}
                <Route
                  path="/profile"
                  element={<ProtectedRoute element={<Profile />} />}
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </AuthProvider>
        }
      />
    </Routes>
  </BrowserRouter>,
);
