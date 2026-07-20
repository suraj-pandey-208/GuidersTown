import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MentorDetails from "./pages/MentorDetails";
import Bookings from "./pages/MyBookings";
import Profile from "./pages/Profile";
import BookSlot from "./pages/BookSlot";
import TrackDetails from "./pages/TrackDetails";

import ProtectedRoute from "./components/ProtectedRoute";

import api from "./api/axios";
import { setUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await api.get("/auth/me");

        dispatch(setUser(res.data.user));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/mentor/:id" element={<MentorDetails />} />

        <Route path="/tracks/:slug" element={<TrackDetails />} />

        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookSlot />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;