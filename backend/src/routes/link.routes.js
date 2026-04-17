import express from "express";
import {createLink} from "../controllers/link.controller.js";
const linkRoutes = express.Router();

//define route for creating a new short link
linkRoutes.post("/", createLink);  

export default linkRoutes;  //export the router to be used in the main application file