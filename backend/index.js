import dotenv from 'dotenv';
//configure dotenv for environment variables
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from "./src/config/db.js";
import healthCheckRoutes from "./src/routes/healthCheck.routes.js";
// import linkRoutes from "./src/routes/link.routes.js";
// import { redirectLink } from "./src/controllers/link.controller.js";

//defining the port
const PORT = process.env.PORT || 5000;


//make an express app
const app = express();

//defining the database connection  {this is in the src/config/db.js file}
connectDB();

//defining the middleware
app.use(cors());
app.use(express.json());

// app.use("/api/links", linkRoutes);
// app.get("/:shortCode", redirectLink);

//use health check routes
app.use("/health", healthCheckRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});