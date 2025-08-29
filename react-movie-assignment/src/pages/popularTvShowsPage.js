import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateTvShowListPage";
import { getPopularTv } from "../api/movies";
import AddToTvShowFavouritesIcon from "../components/cardIcons/addToTvShowFavourites";

const PopularTvShowsPage = () => {
  const { data, error, isLoading, isError } = useQuery(["popularTv"], getPopularTv);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error?.message || "Error loading popular TV shows"}</h1>;

  // Ensure we always pass an array
  const tv = Array.isArray(data?.results) ? data.results : [];

  return (
    <PageTemplate
      title="Popular TV Shows"
      tvShows={tv}                // CamelCase prop (common)
      tvshows={tv}                // snake-ish prop (belt & braces)
      action={(show) => <AddToTvShowFavouritesIcon tvShow={show} />}
    />
  );
};

export default PopularTvShowsPage;
