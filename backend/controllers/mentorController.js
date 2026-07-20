import Mentor from "../models/Mentor.js";

export const createMentor = async (req, res) => {
    try {

        const mentor = await Mentor.create(req.body);

        return res.status(201).json({
            success: true,
            mentor,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to create mentor",
        });

    }
};

export const getAllMentors = async (req, res) => {
    try {

        const mentors = await Mentor.find({
            isActive: true,
        });

        return res.status(200).json({
            success: true,
            count: mentors.length,
            mentors,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch mentors",
        });

    }
};

export const getSingleMentor = async (req, res) => {
    try {

        const { id } = req.params;

        const mentor = await Mentor.findById(id);

        if (!mentor) {
            return res.status(404).json({
                success: false,
                message: "Mentor not found",
            });
        }

        return res.status(200).json({
            success: true,
            mentor,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch mentor",
        });

    }
};