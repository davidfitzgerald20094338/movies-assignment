import React, { useState } from "react";
import Header from "../headerMovieList"; // keep as-is if this is what your project uses
import FilterCard from "../filterTvShowsCard";
import TvList from "../tvList";
import Grid from "@mui/material/Grid";

function TvShowListPageTemplate({ tvs, tvShows, tvshows, title, action }) {
  // Normalize incoming prop name -> always use `list`
  const list =
    Array.isArray(tvs) ? tvs :
    Array.isArray(tvShows) ? tvShows :
    Array.isArray(tvshows) ? tvshows : [];

  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  const displayedTvShows = list
    .filter((m) =>
      (m.name || "").toLowerCase().includes(nameFilter.toLowerCase())
    )
    .filter((m) => (genreId > 0 ? (m.genre_ids || []).includes(genreId) : true));

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TvList action={action} tvs={displayedTvShows} />
      </Grid>
    </Grid>
  );
}

export default TvShowListPageTemplate;
