import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvShowPage from "./pages/tvDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; 
import WatchListMoviesPage from "./pages/watchlistMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMovies from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularTvShowsPage from './pages/popularTvShowsPage';
import FavouriteTvShowPage from "./pages/favouriteTvShowPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <SiteHeader />
     <MoviesContextProvider>
      <TvShowsContextProvider>
      <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/top_rated" element={<TopRatedMoviesPage />} />
        <Route exact path="/movies/watch_list" element={<WatchListMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/tv/:id" element={<TvShowPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" />  } />
        <Route path="/movies/upcoming" element={<UpcomingMovies/>}  />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/tv/popular" element={<PopularTvShowsPage/>} />
        <Route path="/tv/favourites" element={<FavouriteTvShowPage/>} />
      </Routes>
      </TvShowsContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);