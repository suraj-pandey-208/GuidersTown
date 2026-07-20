import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Briefcase,
  Clock,
  Users,
} from "lucide-react";

import api from "../api/axios";

const MentorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await api.get(`/mentors/${id}`);
        setMentor(res.data.mentor);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white px-6 py-5 rounded-2xl shadow-lg">
          <h1 className="text-xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold">Mentor not found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}

        <button
          onClick={() => navigate("/")}
          className="mb-6 h-11 w-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          {/* Hero Section */}

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left Side */}

            <div className="relative mx-auto lg:mx-0 flex-shrink-0">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-52 h-52 rounded-3xl object-cover shadow-2xl border-4 border-white hover:scale-105 transition duration-300"
              />

              {mentor.isActive && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                  Available
                </div>
              )}
            </div>

            {/* Right Side */}

            <div className="flex-1 w-full">
              <h1 className="text-4xl lg:text-[52px] font-bold text-gray-900">
                {mentor.name}
              </h1>

              {/* Track + Designation + Company */}

              <div className="flex flex-wrap items-end gap-3 mt-6">
                {/* Track */}

                {mentor.tracks
                  ?.filter((track) => {
                    if (mentor.tracks.includes("Hackathon")) {
                      return track === "Hackathon";
                    }

                    return track.trim() !== "";
                  })
                  .map((track, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Track
                      </h3>

                      <div className="px-4 py-2.5 bg-green-100 text-green-700 rounded-2xl font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        {track}
                      </div>
                    </div>
                  ))}

                {/* Hackathon Mentor */}

                {mentor.tracks?.includes("Hackathon") ? (
                  <>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Achievement
                      </h3>

                      <div className="px-4 py-2.5 bg-blue-100 text-blue-700 rounded-2xl font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        3× Hackathon Winner
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Achievement
                      </h3>

                      <div className="px-4 py-2.5 bg-orange-100 text-orange-700 rounded-2xl font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        SIH 24 Winner
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Designation */}

                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Designation
                      </h3>

                      <div className="px-4 py-2.5 bg-blue-100 text-blue-700 rounded-2xl font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        {mentor.designation}
                      </div>
                    </div>

                    {/* Company */}

                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Company
                      </h3>

                      <div className="px-4 py-2.5 bg-orange-100 text-orange-700 rounded-2xl font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        {mentor.company}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Bio */}

              {mentor.bio && (
                <p className="text-gray-600 mt-7 leading-8 max-w-3xl">
                  {mentor.bio}
                </p>
              )}
            </div>
          </div>

          {/* Program Details */}

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              Program Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Duration */}

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock size={18} />
                  <p>Duration</p>
                </div>

                <h3 className="text-2xl font-bold mt-3">
                  15 Days
                </h3>
              </div>

              {/* Batch Size */}

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2 text-gray-500">
                  <Users size={18} />
                  <p>Batch Size</p>
                </div>

                <h3 className="text-2xl font-bold mt-3">
                  {mentor.batchSize}
                </h3>
              </div>

              {/* Live Sessions */}

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2 text-gray-500">
                  <Briefcase size={18} />
                  <p>Live Sessions</p>
                </div>

                <h3 className="text-2xl font-bold mt-3">
                  {mentor.liveSessions}
                </h3>
              </div>

              {/* Price */}

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <p className="text-gray-500">
                  Early Bird Price
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-3xl font-bold text-green-600">
                    ₹{mentor.earlyBirdPrice}
                  </span>

                  <span className="text-gray-400 line-through">
                    ₹{mentor.price}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  First 10 students only
                </p>
              </div>
            </div>
          </div>

          {/* Book Button */}

          <div className="flex justify-center mt-10">
            <Link
              to={`/book/${mentor._id}`}
              className="w-full md:w-[380px] text-center bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Book Your Slot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorDetails;