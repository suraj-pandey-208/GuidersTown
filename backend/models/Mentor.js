import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    image: {
      type: String,
      default: "",
    },

    company: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      // required: true,
    },

    bio: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    tracks: [
      {
        type: String,
        enum: ["Interview Prep", "Hackathon", "Open Source"],
      },
    ],

    github: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    totalStudents: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      default: 399,
    },

    earlyBirdPrice: {
      type: Number,
      default: 299,
    },

    batchSize: {
      type: Number,
      default: 20,
    },

    liveSessions: {
      type: Number,
      default: 3,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;