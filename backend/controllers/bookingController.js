import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    try {

        const {
            mentorId,
            phone,
            college,
            year,
            track,
            goal,
            github,
            linkedin,
        } = req.body;

        if (
            !mentorId ||
            !phone ||
            !college ||
            !year ||
            !track ||
            !goal
        ) {
            return res.status(400).json({
                success: false,
                message: "All required fields are mandatory",
            });
        }

        const booking = await Booking.create({
            student: req.user.id,
            mentorId,
            phone,
            college,
            year,
            track,
            goal,
            github,
            linkedin,
        });

        return res.status(201).json({
            success: true,
            message: "Seat reserved successfully",
            booking,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to create booking",
        });
    }
};

export const getMyBookings = async (req, res) => {
    try {

        const bookings = await Booking.find({
            student: req.user.id,
        })
            .populate("mentorId")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            bookings,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch bookings",
        });
    }
};