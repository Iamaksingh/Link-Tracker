import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({   //designing a new schema for the link model
  originalUrl: { type: String, required: true , trim: true},
  shortCode: { type: String, unique: true , index: true},
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Link", linkSchema);  //exporting the model to be used in other parts of the application