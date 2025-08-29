const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");

// ----- FAVOURITES (movies) -----
router.get("/favourites/movies", auth, async (req, res) => {
  const u = await User.findById(req.user.id).lean();
  res.json(u?.favouritesMovies || []);
});

router.post("/favourites/movies", auth, async (req, res) => {
  const { tmdbId } = req.body;
  if (typeof tmdbId !== "number") return res.status(400).json({ error: "tmdbId must be a number" });
  const u = await User.findByIdAndUpdate(
    req.user.id,
    { $addToSet: { favouritesMovies: tmdbId } },
    { new: true }
  );
  res.json(u.favouritesMovies);
});

router.delete("/favourites/movies/:tmdbId", auth, async (req, res) => {
  const id = Number(req.params.tmdbId);
  const u = await User.findByIdAndUpdate(
    req.user.id,
    { $pull: { favouritesMovies: id } },
    { new: true }
  );
  res.json(u.favouritesMovies);
});

// ----- WATCHLIST (movies) -----
router.get("/watchlist/movies", auth, async (req, res) => {
  const u = await User.findById(req.user.id).lean();
  res.json(u?.watchlistMovies || []);
});

router.post("/watchlist/movies", auth, async (req, res) => {
  const { tmdbId } = req.body;
  if (typeof tmdbId !== "number") return res.status(400).json({ error: "tmdbId must be a number" });
  const u = await User.findByIdAndUpdate(
    req.user.id,
    { $addToSet: { watchlistMovies: tmdbId } },
    { new: true }
  );
  res.json(u.watchlistMovies);
});

router.delete("/watchlist/movies/:tmdbId", auth, async (req, res) => {
  const id = Number(req.params.tmdbId);
  const u = await User.findByIdAndUpdate(
    req.user.id,
    { $pull: { watchlistMovies: id } },
    { new: true }
  );
  res.json(u.watchlistMovies);
});

module.exports = router;   // <--- THIS LINE IS CRUCIAL
