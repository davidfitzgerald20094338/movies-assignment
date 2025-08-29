const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const userListRoutes = require("./routes/userLists");
app.use("/users/me", userListRoutes);

const tmdbRoutes = require("./routes/tmdb");
app.use("/tmdb", tmdbRoutes);




// routes
const movieRoutes = require("./routes/movies");
app.use("/api/movies", movieRoutes);

// connect to Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Mongo error:", err));

// test route
app.get("/", (_req, res) => res.send("API is running!"));

// start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
