// import MentorCard from "./MentorCard";

// const mentors = [
//   {
//     _id: 1,
//     name: "Rahul Sharma",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
//     company: "Microsoft",
//     designation: "SDE-2",
//     experience: 4,
//     rating: 5,
//     tracks: ["Interview Prep", "Hackathon"],
//     price: 399,
//     earlyBirdPrice: 299,
//   },

//   {
//     _id: 2,
//     name: "Priya Verma",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     company: "Google",
//     designation: "Software Engineer",
//     experience: 3,
//     rating: 4.9,
//     tracks: ["Open Source", "Interview Prep"],
//     price: 399,
//     earlyBirdPrice: 299,
//   },

//   {
//     _id: 3,
//     name: "Aman Singh",
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
//     company: "Amazon",
//     designation: "SDE-1",
//     experience: 2,
//     rating: 4.8,
//     tracks: ["Hackathon", "Open Source"],
//     price: 399,
//     earlyBirdPrice: 299,
//   },
// ];

// const MentorSection = () => {
//   return (
//     <section id="mentors" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-gray-900">
//             Meet Our Mentors
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Learn directly from mentors who have already cracked
//             interviews, won hackathons, and contributed to open source.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mentors.map((mentor) => (
//             <MentorCard key={mentor._id} mentor={mentor} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MentorSection;

import { useEffect, useState } from "react";
import api from "../api/axios";
import MentorCard from "./MentorCard";

const MentorSection = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await api.get("/mentors");

        setMentors(res.data.mentors);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-xl py-10">
        Loading mentors...
      </h1>
    );
  }

  return (
    <section id="mentors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          Meet Our Mentors
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor._id}
              mentor={mentor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;