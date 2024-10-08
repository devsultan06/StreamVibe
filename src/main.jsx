/* eslint-disable no-undef */
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movie";
import MovieShow from "./pages/MovieShow/MovieShow";
import Subscription from "./pages/Subscription/Subscription";
import Support from "./pages/Support/Support";
import Authentication from "./pages/auth/Authentication";
import NotFound from "./pages/404-page/NotFound";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/profile/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
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
        <Route
          path="/support"
          element={<ProtectedRoute element={<Support />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </UserProvider>
  </BrowserRouter>
);
