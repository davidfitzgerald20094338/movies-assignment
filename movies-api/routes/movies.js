const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// GET all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// POST new movie
router.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
