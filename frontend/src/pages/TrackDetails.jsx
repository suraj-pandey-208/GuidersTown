import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LaptopMinimal } from "lucide-react";

const tracks = {
  "open-source": {
    title: "Open Source",
    icon: "💻",

    description:
      "Learn Git, GitHub and contribute to real-world open-source projects.",

    topics: [
      "Git & GitHub",
      "Pull Requests",
      "Open Source Workflow",
      "Real Contributions",
    ],

    timeline: [
      {
        title: "Week 1",
        description: "Learn Git and GitHub fundamentals.",
      },
      {
        title: "Week 2",
        description: "Start contributing to open-source projects.",
      },
      {
        title: "Final Step",
        description: "Create pull requests and collaborate.",
      },
    ],
  },

  "interview-prep": {
    title: "Interview Prep",
    icon: "📚",

    description:
      "Build confidence and prepare for internships and placements through practical interview preparation.",

    topics: [
      "Resume Building & Optimization",
      "Strong Self Introduction",
      "Interview Preparation Strategy",
      "Project Presentation Skills",
      "HR & Behavioral Questions",
      "Communication Skills",
      "Mock Interview Practice",
      "Personalized Feedback",
    ],

    sessions: [
      {
        title: "Session 1",
        subtitle: "Resume & Foundations",

        points: [
          "Resume Building",
          "Strong Self Introduction",
          "What Interviewers Look For",
          "Structured Problem Solving",
        ],
      },

      {
        title: "Session 2",
        subtitle: "Interview Preparation",

        points: [
          "Project Presentation",
          "HR Questions",
          "Behavioral Questions",
          "Communication Skills",
        ],
      },

      {
        title: "Session 3",
        subtitle: "Mock Interviews & Feedback",

        points: [
          "Interview Simulation",
          "Common Mistakes",
          "Open Q&A Session",
          "Personalized Feedback",
        ],
      },
    ],

    timeline: [
      {
        title: "Days 1–5",
        description:
          "Improve your resume and prepare a strong self introduction.",
      },

      {
        title: "Days 6–10",
        description:
          "Prepare projects, communication skills and interview questions.",
      },

      {
        title: "Days 11–15",
        description:
          "Participate in mock interviews and implement feedback.",
      },
    ],
  },

  hackathon: {
    title: "Hackathon",
    icon: "🏆",

    description:
      "Learn how to identify real-world problems, build MVPs, collaborate in teams, and present winning solutions in hackathons.",

    topics: [
      "Problem Validation & Planning",
      "Market Research & Competitor Analysis",
      "Project Roadmap & Team Roles",
      "MVP Design & Wireframing",
      "Tech Stack & Architecture",
      "Pitch Deck Preparation",
      "Demo Presentation",
      "Judge Q&A Preparation",
    ],

    sessions: [
      {
        title: "Session 1",
        subtitle: "Problem Validation & Planning",

        points: [
          "Identify a real-world problem",
          "Write a clear problem statement",
          "Research 2–3 existing solutions and compare them",
          "Propose your solution",
          "Create a project roadmap",
          "Assign team roles",
        ],
      },

      {
        title: "Session 2",
        subtitle: "MVP Design",

        points: [
          "List all project features",
          "Prioritize features (Must Have, Nice to Have, Future)",
          "Create wireframes for at least 3 screens",
          "Define the tech stack",
          "Design the project architecture",
        ],
      },

      {
        title: "Session 3",
        subtitle: "Pitch & Demo",

        points: [
          "Prepare a 5-slide pitch deck",
          "Problem, Solution, Technology, Impact, Future Scope",
          "Create a 3-minute demo presentation/video",
          "Prepare answers for common judge questions",
          "Deliver a mock pitch to peers or mentors",
        ],
      },
    ],

    timeline: [
      {
        title: "Days 1–5",
        description:
          "Validate the problem, research competitors, and create the roadmap.",
      },

      {
        title: "Days 6–10",
        description:
          "Design the MVP, prepare wireframes, and finalize the architecture.",
      },

      {
        title: "Days 11–15",
        description:
          "Prepare the pitch deck, demo video, and practice presentations.",
      },
    ],
  },
};

const TrackDetails = () => {
  const { slug } = useParams();

  const track = tracks[slug];

  if (!track) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Track not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}

        <div className="text-center mb-16">
          <div className="text-7xl mb-4">{track.icon}</div>

          <h1 className="text-5xl font-bold text-gray-900">
            {track.title}
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {track.description}
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">📅</div>

            <h3 className="text-2xl font-semibold">Duration</h3>

            <p className="text-gray-600 mt-2 text-lg">
              15 Days
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="mb-5">
              <LaptopMinimal
                size={52}
                className="text-gray-700"
                strokeWidth={1.7}
              />
            </div>

            <h3 className="text-2xl font-semibold">
              Live Sessions
            </h3>

            <p className="text-gray-600 mt-2 text-lg">
              3 Sessions
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-5">👥</div>

            <h3 className="text-2xl font-semibold">
              Batch Size
            </h3>

            <p className="text-gray-600 mt-2 text-lg">
              20 Students
            </p>
          </div>
        </div>

        {/* Sessions */}

        {track.sessions && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-10">
              Live Session Breakdown
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {track.sessions.map((session, index) => (
                <div
                  key={index}
                  className="bg-white p-7 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                >
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {session.title}
                  </span>

                  <h3 className="text-2xl font-bold mt-4">
                    {session.subtitle}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {session.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <span className="text-green-600 font-bold">
                          ✓
                        </span>

                        <p className="text-gray-600">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topics */}

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10">
            What you will learn
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {track.topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold">
                    ✓
                  </div>

                  <span className="text-lg font-medium text-gray-800">
                    {topic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}

        <div className="bg-white rounded-3xl shadow-md p-8 mb-24">
          <h2 className="text-3xl font-bold text-center mb-10">
            Journey Timeline
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {track.timeline.map((step, index) => (
              <div key={index}>
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl font-semibold">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}

        <div className="flex justify-center items-center gap-5 mt-16 pb-10">
          <HashLink
            smooth
            to="/#mentors"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Book Your Slot
          </HashLink>

          <Link
            to="/"
            className="px-8 py-3 bg-white border border-gray-300 rounded-xl font-medium shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;