import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import urlRoutes from "./api/routes/urlRoutes.js";
import { notFound, errorHandler } from "./middleware/error.js";
const app = express();

dotenv.config();

//connect to db
connectDB();

app.use(express.json());

app.use("/api/url", urlRoutes);

app.use(errorHandler);
app.use(notFound);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
