import dotenv from "dotenv";
import express from "express";
import appointmentRoutes from "./routes/appointments.js";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//import globalErrorHandler from "./middlewares/globalErrorHandler";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


// Load configuration from a .env file
dotenv.config();
// express app
const app = express();
connectDB();

// middleware
app.use(cors());

app.use(cors({
  origin: 'https://paws-time-client.vercel.app'
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Server deployed and running on vercel.");
});

// routes
app.use("/api/appointments", appointmentRoutes);
app.use("/api/user", userRoutes);

//app.use(globalErrorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
