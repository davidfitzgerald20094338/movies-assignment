const express = require("express");
const router = express.Router();
const fetch = (...a) => import("node-fetch").then(({ default: f }) => f(...a));

const tmdb = (p) =>
  `https://api.themoviedb.org/3${p}${p.includes("?") ? "&" : "?"}api_key=${process.env.TMDB_KEY}`;

// Top rated movies
router.get("/movies/top_rated", async (_req, res) => {
  const r = await fetch(tmdb("/movie/top_rated"));
  const data = await r.json();
  res.json(data);
});

// Popular TV shows
router.get("/tv/popular", async (_req, res) => {
  const r = await fetch(tmdb("/tv/popular"));
  const data = await r.json();
  res.json(data);
});

// TV show details
router.get("/tv/:id", async (req, res) => {
  const r = await fetch(tmdb(`/tv/${req.params.id}`));
  const data = await r.json();
  res.json(data);
});

module.exports = router;
