import dotenv from 'dotenv';
//configure dotenv for environment variables
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from "./src/config/db.js";

import healthCheckRoutes from "./src/routes/healthCheck.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import linkRoutes from "./src/routes/link.routes.js";
import {redirectLink} from "./src/controllers/link.controller.js";

//defining the port
const PORT = process.env.PORT || 5000;

//make an express app
const app = express();

//defining the middleware
app.use(cors());
app.use(express.json());

//use health check routes
app.use("/health", healthCheckRoutes);

//use auth routes
app.use("/api/auth", authRoutes);

//use link routes 
app.use("/api/links", linkRoutes);

//define route for redirecting to the original URL when a short URL is accessed
app.get("/:shortCode", redirectLink);

//before starting the server, connect to the database 
const startServer = async () => { 
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect DB", error);
    process.exit(1);
  }
};

startServer();