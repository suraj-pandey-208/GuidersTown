import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import api from "../api/axios";
import { logoutUser } from "../redux/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");

      dispatch(logoutUser());

      toast.success("Logged out successfully");

      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");

      console.log(error);
    }
  };

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">
            GuidersTown
          </h1>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <a
            href="#tracks"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Tracks
          </a>

          <a
            href="#mentors"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Mentors
          </a>

          {user && (
            <Link
              to="/my-bookings"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              My Bookings
            </Link>
          )}
        </div>

        {/* Desktop Buttons */}

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <a
              href="#tracks"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Tracks
            </a>

            <a
              href="#mentors"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Mentors
            </a>

            {user && (
              <Link
                to="/my-bookings"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                My Bookings
              </Link>
            )}

            {user ? (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-full border py-2 rounded-lg text-center hover:bg-gray-100 transition"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;