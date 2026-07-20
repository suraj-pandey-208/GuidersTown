import { Link } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Mentor Image */}

      <div className="flex justify-center">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow-md"
        />
      </div>

      {/* Mentor Info */}

      <h2 className="text-2xl font-bold text-center mt-5 text-gray-900">
        {mentor.name}
      </h2>

      <p className="text-center text-gray-500 text-lg mt-1">
        {mentor.designation}
      </p>

      <p className="text-center text-blue-600 font-medium mt-2">
        {mentor.company}
      </p>

      {/* Button */}

      <Link
        to={`/mentor/${mentor._id}`}
        className="block mt-6 text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default MentorCard;