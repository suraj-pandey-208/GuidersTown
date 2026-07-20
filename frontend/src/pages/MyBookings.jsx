// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// import api from "../api/axios";

// const MyBookings = () => {
//   const navigate = useNavigate();

//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await api.get("/bookings/my-bookings");

//         setBookings(res.data.bookings);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Initial fetch
//     fetchBookings();

//     // Auto refresh every 5 seconds
//     const interval = setInterval(fetchBookings, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "waiting":
//         return "bg-yellow-100 text-yellow-700";

//       case "confirmed":
//         return "bg-green-100 text-green-700";

//       case "completed":
//         return "bg-blue-100 text-blue-700";

//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white px-8 py-6 rounded-2xl shadow-lg">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Loading...
//           </h1>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 py-10 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}

//         <div className="mb-10 flex items-center gap-4">
//           <button
//             onClick={() => navigate("/")}
//             className="h-12 w-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-100 transition"
//           >
//             <ArrowLeft size={22} />
//           </button>

//           <div>
//             <h1 className="text-4xl font-bold text-gray-900">
//               My Bookings
//             </h1>

//             <p className="text-gray-500 mt-1">
//               Track all your mentorship bookings here.
//             </p>
//           </div>
//         </div>

//         {/* Empty State */}

//         {bookings.length === 0 ? (
//           <div className="bg-white p-10 rounded-3xl shadow-md text-center">
//             <h2 className="text-2xl font-semibold text-gray-800">
//               No bookings found 
//             </h2>

//             <p className="text-gray-500 mt-3">
//               Book a mentor to start your journey.
//             </p>

//             <button
//               onClick={() => navigate("/")}
//               className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
//             >
//               Explore Mentors
//             </button>
//           </div>
//         ) : (
//           <div className="grid lg:grid-cols-2 gap-6">
//             {bookings.map((booking) => (
//               <div
//                 key={booking._id}
//                 className="bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 {/* Card Header */}

//                 <div className="flex items-start justify-between">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900">
//                       {booking.mentorId?.name}
//                     </h2>

//                     <p className="text-gray-500 mt-1">
//                       {booking.mentorId?.company}
//                     </p>
//                   </div>

//                   <span
//                     className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
//                       booking.status
//                     )}`}
//                   >
//                     {booking.status}
//                   </span>
//                 </div>

//                 {/* Booking Details */}

//                 <div className="grid grid-cols-2 gap-4 mt-6">
//                   <div className="bg-gray-50 p-4 rounded-2xl">
//                     <p className="text-sm text-gray-500">
//                       Program
//                     </p>

//                     <p className="font-semibold mt-1">
//                       {booking.track}
//                     </p>
//                   </div>

//                   <div className="bg-gray-50 p-4 rounded-2xl">
//                     <p className="text-sm text-gray-500">
//                       Duration
//                     </p>

//                     <p className="font-semibold mt-1">
//                       15 Days
//                     </p>
//                   </div>

//                   <div className="bg-gray-50 p-4 rounded-2xl">
//                     <p className="text-sm text-gray-500">
//                       Live Sessions
//                     </p>

//                     <p className="font-semibold mt-1">
//                       3 Sessions
//                     </p>
//                   </div>

//                   <div className="bg-gray-50 p-4 rounded-2xl">
//                     <p className="text-sm text-gray-500">
//                       Year
//                     </p>

//                     <p className="font-semibold mt-1">
//                       {booking.year}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Footer */}

//                 <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
//                   <p className="text-sm text-gray-500">
//                     Booked on{" "}
//                     {new Date(
//                       booking.createdAt
//                     ).toLocaleDateString()}
//                   </p>

//                   <span className="text-blue-600 font-medium">
//                     Active Booking
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MyBookings;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import api from "../api/axios";

const MyBookings = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get("/bookings/my-bookings");

        setBookings(res.data.bookings);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();

    const interval = setInterval(fetchBookings, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "bg-yellow-100 text-yellow-700";

      case "confirmed":
        return "bg-green-100 text-green-700";

      case "completed":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white px-8 py-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Notification Banner */}

        {bookings.some(
          (booking) => booking.status === "waiting"
        ) && (
          <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-800">
            <p className="font-medium">
              📩 Your booking request has been received.
            </p>

            <p className="mt-1 text-sm text-blue-700">
              Once your seat is reserved, we will confirm it
              through email or WhatsApp.
            </p>
          </div>
        )}

        {/* Header */}

        <div className="mb-10 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="h-12 w-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              My Bookings
            </h1>

            <p className="text-gray-500 mt-1">
              Track all your mentorship bookings here.
            </p>
          </div>
        </div>

        {/* Empty State */}

        {bookings.length === 0 ? (
          <div className="bg-white p-10 rounded-3xl shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              No bookings found
            </h2>

            <p className="text-gray-500 mt-3">
              Book a mentor to start your journey.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Explore Mentors
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Header */}

                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {booking.mentorId?.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {booking.mentorId?.company}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>

                {/* Booking Details */}

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <p className="text-sm text-gray-500">
                      Program
                    </p>

                    <p className="font-semibold mt-1">
                      {booking.track}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <p className="text-sm text-gray-500">
                      Duration
                    </p>

                    <p className="font-semibold mt-1">
                      15 Days
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <p className="text-sm text-gray-500">
                      Live Sessions
                    </p>

                    <p className="font-semibold mt-1">
                      3 Sessions
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <p className="text-sm text-gray-500">
                      Year
                    </p>

                    <p className="font-semibold mt-1">
                      {booking.year}
                    </p>
                  </div>
                </div>

                {/* Footer */}

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Booked on{" "}
                    {new Date(
                      booking.createdAt
                    ).toLocaleDateString()}
                  </p>

                  <span className="text-blue-600 font-medium">
                    Active Booking
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookings;