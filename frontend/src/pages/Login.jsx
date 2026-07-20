import { useState } from "react";
import {
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import {
  Eye,
  EyeOff,
} from "lucide-react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import toast from "react-hot-toast";

import api from "../api/axios";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.user
  );

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/auth/login",
        formData
      );

      dispatch(
        setUser(res.data.user)
      );

      toast.success(
        "Login successful"
      );

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200">
        {/* Heading */}

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to GuidersTown 
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Email */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Password */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter your password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition pr-12"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <Eye size={22} />
                ) : (
                  <EyeOff size={22} />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg">
            Login
          </button>
        </form>

        {/* Footer */}

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;