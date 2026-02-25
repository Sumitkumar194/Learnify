import express from "express";
import authRoutes from "./routes/auth.routes.js";
import courseRoutes from "./routes/course.route.js";
import adminRoutes from "./routes/admin.route.js";
import cors from "cors";
const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // your frontend port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use("/api", authRoutes);
app.use("/course", courseRoutes);
app.use("/admin", adminRoutes);

export default app;
