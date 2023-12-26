import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 8000;

const corsOptions = {
  origin: true, // reflect (enable) the HTTP request's original IP address
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
