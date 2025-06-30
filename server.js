import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import confessRoutes from "./routes/confess.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à la base MongoDB
connectDB();

// Routes
app.use("/api/confess", confessRoutes);
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend Confessy is running ✅" });
});

// Lancement serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
