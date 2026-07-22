// import {
//   Code2,
//   BriefcaseBusiness,
//   Trophy,
//   LaptopMinimal,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// const tracks = [
//   {
//     id: 1,
//     slug: "open-source",
//     title: "Open Source",
//     icon: <Code2 size={32} />,
//     description:
//       "Learn Git, GitHub, and contribute to real-world open-source projects.",
//   },

//   {
//     id: 2,
//     slug: "interview-prep",
//     title: "Interview Prep",
//     icon: <BriefcaseBusiness size={32} />,
//     description:
//       "Master DSA, resume building, and crack internships and placements.",
//   },

//   {
//     id: 3,
//     slug: "hackathon",
//     title: "Hackathon",
//     icon: <Trophy size={32} />,
//     description:
//       "Build projects, work in teams, and prepare to win hackathons.",
//   },
// ];

// const TrackSection = () => {
//   return (
//     <section id="tracks" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}

//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-gray-900">
//             Choose Your Track
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Pick the path that matches your goals and learn directly from
//             mentors who have already achieved it.
//           </p>
//         </div>

//         {/* Cards */}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {tracks.map((track) => (
//             <div
//               key={track.id}
//               className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//             >
//               {/* Icon */}

//               <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
//                 {track.icon}
//               </div>

//               {/* Title */}

//               <h3 className="text-2xl font-semibold mt-6">
//                 {track.title}
//               </h3>

//               {/* Description */}

//               <p className="text-gray-600 mt-3">
//                 {track.description}
//               </p>

//               {/* Details */}

//               <div className="mt-6 space-y-3 text-sm text-gray-500">
//                 <div className="flex items-center gap-3">
//                   <span className="text-lg">📅</span>

//                   <p>Duration: 15 Days</p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <LaptopMinimal size={18} />

//                   <p>3 Live Sessions</p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <span className="text-lg">👥</span>

//                   <p>Batch Size: 20 Students</p>
//                 </div>
//               </div>

//               {/* Button */}

//               <Link
//                 to={`/tracks/${track.slug}`}
//                 className="mt-8 block w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-center"
//               >
//                 Explore Track
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrackSection;
import {
  Code2,
  BriefcaseBusiness,
  Trophy,
  LaptopMinimal,
  CalendarDays,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

const tracks = [
  {
    id: 1,
    slug: "open-source",
    title: "Open Source",
    icon: <Code2 size={32} />,
    description:
      "Learn Git, GitHub, and contribute to real-world open-source projects.",
  },

  {
    id: 2,
    slug: "interview-prep",
    title: "Interview Prep",
    icon: <BriefcaseBusiness size={32} />,
    description:
      "Master DSA, resume building, and crack internships and placements.",
  },

  {
    id: 3,
    slug: "hackathon",
    title: "Hackathon",
    icon: <Trophy size={32} />,
    description:
      "Build projects, work in teams, and prepare to win hackathons.",
  },
];

const TrackSection = () => {
  return (
    <section id="tracks" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Choose Your Track
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Pick the path that matches your goals and learn directly from
            mentors who have already achieved it.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}

              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                {track.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-semibold mt-6">
                {track.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 mt-3">
                {track.description}
              </p>

              {/* Details */}

              <div className="mt-6 space-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} />

                  <p>Duration: 15 Days</p>
                </div>

                <div className="flex items-center gap-3">
                  <LaptopMinimal size={18} />

                  <p>3 Live Sessions</p>
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} />

                  <p>Batch Size: 20 Students</p>
                </div>
              </div>

              {/* Button */}

              <Link
                to={`/tracks/${track.slug}`}
                className="mt-8 block w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-center"
              >
                Explore Track
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackSection;