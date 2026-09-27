import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "HGRTC backend is running" });
});

// Ekhon hardcoded, pore MongoDB theke asbe
const courses = [
  { id: 1, title: "Hands-On Training on Real-Time PCR", date: "TBA", mode: "Hybrid", fee: "৳3,500", status: "open" },
  { id: 2, title: "Sanger Sequencing Training", date: "TBA", mode: "Offline", fee: "Fee: placeholder", status: "upcoming" },
  { id: 3, title: "Karyotyping Training", date: "TBA", mode: "Offline", fee: "Fee: placeholder", status: "upcoming" },
];

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === Number(req.params.id));
  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }
  res.json(course);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});