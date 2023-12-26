import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./Routes/auth.js";
dotenv.config();
const app = express();
const port = 8000;

const corsOptions = {
  origin: true, // reflect (enable) the HTTP request's original IP address
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database is connected");
  } catch (error) {
    console.log("MongoDB is lost!");
  }
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", auth);

app.listen(port, () => {
  connectDB();
  console.log("Server running on port " + port);
});
