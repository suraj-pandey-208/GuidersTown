import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

import api from "../api/axios";

const BookSlot = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    college: "",
    year: "",
    track: "",
    goal: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await api.post("/bookings", {
        mentorId: id,
        ...formData,
      });

      toast.success("Booking successful ");

      navigate("/my-bookings");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Booking failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}

       <div className="bg-blue-600 px-8 py-7 relative">
  <button
    onClick={() => navigate(-1)}
    className="absolute left-5 top-5 h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition"
  >
    <ArrowLeft size={22} />
  </button>

  <h1 className="text-3xl font-bold text-center text-white">
    Book Your Slot
  </h1>

  <p className="text-center text-blue-100 mt-2">
    Fill in your details to reserve your seat.
  </p>
</div>

        <div className="p-8">
          {/* User Info */}

          <div className="mb-8 bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-4">
              Booking as
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">
                  Name
                </p>

                <h2 className="text-lg font-semibold text-gray-900">
                  {user?.name}
                </h2>
              </div>

              <div className="md:text-right">
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="text-lg text-gray-700 break-all">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Phone Number */}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>

              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <span className="px-4 py-3 bg-gray-100 text-gray-700 border-r">
                  +91
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 outline-none"
                  maxLength={10}
                  required
                />
              </div>
            </div>

            {/* College */}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                College Name
              </label>

              <input
                type="text"
                name="college"
                placeholder="Enter your college name"
                value={formData.college}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Year and Track */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Current Year
                </label>

                <input
                  type="text"
                  name="year"
                  placeholder="1st / 2nd / 3rd / 4th"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Track
                </label>

                <select
                  name="track"
                  value={formData.track}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">
                    Select Track
                  </option>

                  <option value="Interview Prep">
                    Interview Prep
                  </option>

                  <option value="Hackathon">
                    Hackathon
                  </option>

                  <option value="Open Source">
                    Open Source
                  </option>
                </select>
              </div>
            </div>

            {/* Goal */}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Goal
              </label>

              <textarea
                name="goal"
                placeholder="Tell us what you want to achieve..."
                value={formData.goal}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                required
              />
            </div>

            {/* Social Links */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  GitHub Profile
                </label>

                <input
                  type="url"
                  name="github"
                  placeholder="https://github.com/username"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  LinkedIn Profile
                </label>

                <input
                  type="url"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-base transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? "Booking your slot..."
                : "Confirm Booking"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookSlot; 