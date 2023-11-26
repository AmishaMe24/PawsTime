import dotenv from "dotenv";
import express from "express";
import appointmentRoutes from "./routes/appointments.js";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//import globalErrorHandler from "./middlewares/globalErrorHandler";

// Load configuration from a .env file
dotenv.config();
// express app
const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/appointments", appointmentRoutes);
app.use("/api/user", userRoutes);

//app.use(globalErrorHandler);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
