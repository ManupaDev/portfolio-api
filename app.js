"use strict";

import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import projectRouter from "./routes/projectRouter.js";
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());

app.use("/api/projects", projectRouter);

const DB = process.env.MONGODB_URI;
mongoose
  .connect(
    "mongodb+srv://manupadev:j9zo9sLFqd2riP8o@cluster0.g6hornn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connections successful");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
