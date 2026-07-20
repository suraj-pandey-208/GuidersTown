import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section */}

        <div>

          {/* Badge */}

          <span className="inline-block px-5 py-3 rounded-full bg-blue-100 text-blue-700 text-sm md:text-base font-semibold">
            15 Days of Real Impact
          </span>

          {/* Heading */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">
            Learn from mentors who have already walked the path.
          </h1>

          {/* Description */}

          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl">
            Join a 15-day mentorship journey designed for students who want to
            excel in Open Source, Interview Preparation, and Hackathons.
          </p>

          {/* Button */}

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#mentors"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition text-center w-fit"
            >
              Explore Mentors
            </a>
          </div>

          {/* Stats */}

          <div className="flex flex-wrap gap-8 md:gap-12 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                15 Days
              </h2>

              <p className="text-gray-500">
                Mentorship Program
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                3 Live
              </h2>

              <p className="text-gray-500">
                Interactive Sessions
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                20 Students
              </h2>

              <p className="text-gray-500">
                Per Batch
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex justify-center">
          <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 w-full max-w-md">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What you will get
            </h3>

            <div className="space-y-4">

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold">
                  Open Source Track
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Learn Git, GitHub and contribute to real-world projects.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold">
                  Interview Prep
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Crack internships and placements with guided preparation.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold">
                  Hackathon Track
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Build projects and win hackathons with expert mentors.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;