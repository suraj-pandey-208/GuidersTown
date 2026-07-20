import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./config/connectDb.js";

import authRoutes from "./routes/authRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

/* ==========================
   Middlewares
========================== */

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cookieParser());

app.use(
  cors({
    origin: "https://guiders-town.vercel.app",
    credentials: true,
  })
);

/* ==========================
   Routes
========================== */

app.get("/", (req, res) => {
    res.send("I am home page");
});

app.use("/api/auth", authRoutes);

app.use("/api/mentors", mentorRoutes);

app.use("/api/bookings", bookingRoutes);

/* ==========================
   Server
========================== */

app.listen(port, async () => {
    console.log(`Server is listening on port ${port}`);

    await connectDb();
});