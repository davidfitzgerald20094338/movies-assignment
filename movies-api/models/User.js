const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  favouritesMovies: { type: [Number], default: [] },   // TMDB IDs
  watchlistMovies: { type: [Number], default: [] }
});

module.exports = mongoose.model("User", userSchema);
