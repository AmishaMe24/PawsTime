import dotenv from "dotenv";
import express from "express";
import appointmentRoutes from "./routes/appointments.js";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// Load configuration from a .env file
dotenv.config();

// Database connection
let dbConnection;
const connectDB = async () => {
  if (dbConnection) return dbConnection;
  try {
    dbConnection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add connection pooling
      poolSize: 10,
      // Set a reasonable timeout
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected successfully');
    return dbConnection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Express app
const app = express();

// Middleware
app.use(cors({
  origin: 'https://paws-time-client.vercel.app',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB before handling requests
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Server deployed and running on vercel.");
});

app.use("/api/appointments", appointmentRoutes);
app.use("/api/user", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Only start the server if not in a serverless environment
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
