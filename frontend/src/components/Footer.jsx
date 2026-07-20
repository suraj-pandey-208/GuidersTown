import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              GuidersTown
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Learn directly from experienced mentors and accelerate your
              journey in Open Source, Interview Preparation, and Hackathons.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#tracks"
                  className="hover:text-white transition"
                >
                  Tracks
                </a>
              </li>

              <li>
                <a
                  href="#mentors"
                  className="hover:text-white transition"
                >
                  Mentors
                </a>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="hover:text-white transition"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Us
            </h3>

            <div className="text-gray-400">
              <a
                href="https://www.linkedin.com/in/suraj-pandey-65b234382"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} GuidersTown
        </div>

      </div>
    </footer>
  );
};

export default Footer;