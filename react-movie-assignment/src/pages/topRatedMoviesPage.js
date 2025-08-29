import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { getTopRated } from "../api/movies"; // <-- uses your backend

const TopRatedMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery(["topRated"], getTopRated);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error?.message || "Error loading top rated movies"}</h1>;

  const movies = data?.results ?? [];

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => <AddToPlaylistIcon movie={movie} />}
    />
  );
};

export default TopRatedMoviesPage;
