import dotenv from "dotenv";
// import app from "./app";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
/* import express from "express";
const app = express();

async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected");
    app.on("error", (error) => {
      console.error("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
};
 */
