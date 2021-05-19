import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import urlRoutes from "./api/routes/urlRoutes.js";
import { notFound, errorHandler } from "./middleware/error.js";
import userRoutes from "./api/routes/userRoutes.js";
import cors from "cors";
const app = express();

dotenv.config();

//connect to db
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/urls", urlRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);
app.use(notFound);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
