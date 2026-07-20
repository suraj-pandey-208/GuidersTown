import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        mentorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor",
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        college: {
            type: String,
            required: true,
        },

        year: {
            type: String,
            required: true,
        },

        track: {
            type: String,
            enum: ["Interview Prep", "Hackathon", "Open Source"],
            required: true,
        },

        goal: {
            type: String,
            required: true,
        },

        github: {
            type: String,
            default: "",
        },

        linkedin: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: ["waiting", "confirmed", "ongoing", "completed"],
            default: "waiting",
        },
    },
    {
        timestamps: true,
    }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;