import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import VerificationPage from "./pages/auth/components/VerificationPage.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/movies" element={<ProtectedRoute element={<Movies />} />} />
        <Route path="/movieshow" element={<ProtectedRoute element={<MovieShow />} />} />
        <Route path="/subscription" element={<ProtectedRoute element={<Subscription />} />} />
        <Route path="/support" element={<Support />} /> {/* No authentication required for support */}
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verified" element={<VerificationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
