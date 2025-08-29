import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { TvShowContext } from "../contexts/tvShowContext";
import { useQueries } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTvShowFavourites from "../components/cardIcons/removeFromTvShowFavourites";

const FavouriteTvShowPage = () => {
  const {favourites: tvIds } = useContext(TvShowContext);

  // Create an array of queries and run in parallel.
  const favouriteTvShowQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTV,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tv = favouriteTvShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Favourite TV Shows"
      tvs={tv}
      action={(tv) => {
        return (
          <>
            <RemoveFromTvShowFavourites tv={tv} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvShowPage;