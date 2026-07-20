import jwt from "jsonwebtoken";

export const generateToken = (userId, role) => {
    const token = jwt.sign(
        {
            id: userId,
            role: role,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "7d",
        }
    );

    return token;
};

export default generateToken;