import express from "express";
import authRoutes from "./routes/auth.routes.js";
const app = express();

// Middleware
app.use(express.json());

app.use("/api", authRoutes);
// app.use("/",courseRoutes);


export default app;
