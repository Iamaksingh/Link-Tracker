import mongoose from "mongoose";

const connectDB = async () => {         //async fundtion for connection 
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;