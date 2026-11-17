// 
import { config } from "dotenv";
import express from "express";
import authRoutes from './routes/authRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import { connectDB, disconnectDB } from "./config/db.js";

config()
const app = express();

// Body parsing middlewares
app.use(express.json())



app.use('/auth', authRoutes);
app.use('/movies', movieRoutes)

const PORT = Number(process.env.PORT ?? 3000);
let server;


try {
  await connectDB();
  server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (error) {
  console.error("Unable to start server:", error);
  await disconnectDB();
  process.exit(1);
}

const shutdown = (signal) => {
  console.log(`${signal} received; shutting down`);
  server?.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
