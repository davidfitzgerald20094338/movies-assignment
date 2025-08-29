const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

const makeToken = (user) =>
  jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

router.post("/signup", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash });
    res.json({ token: makeToken(user) });
  } catch (e) {
    res.status(400).json({ error: "Email already in use" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ token: makeToken(user) });
});

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).lean();
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json({
    email: user.email,
    favouritesMovies: user.favouritesMovies,
    watchlistMovies: user.watchlistMovies
  });
});

module.exports = router;
