import express from "express";
const healthCheckRoutes = express.Router();

//health check route
healthCheckRoutes.get("/", (req, res) => {
  res.send("Server is online");
});

export default healthCheckRoutes;