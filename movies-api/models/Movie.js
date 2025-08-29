const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  overview: String,
  releaseDate: String,
  favourite: { type: Boolean, default: false },
  watchList: { type: Boolean, default: false }
});

module.exports = mongoose.model("Movie", movieSchema);
