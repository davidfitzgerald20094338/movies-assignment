import api from "./client";

export const getTopRated = () =>
  api.get("/tmdb/movies/top_rated").then((r) => r.data);

export const getPopularTv = () =>
  api.get("/tmdb/tv/popular").then((r) => r.data);

export const getTvDetails = (id) =>
  api.get(`/tmdb/tv/${id}`).then((r) => r.data);
