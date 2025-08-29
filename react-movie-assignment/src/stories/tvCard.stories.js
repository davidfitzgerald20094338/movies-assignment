import React from "react";
import TvCard from "../components/tvCard";
import SampleTvShow from "./sampleDataTv";
import { MemoryRouter } from "react-router";
import TvContextProvider from "../contexts/tvShowContext";
import AddToTvShowFavouritesIcon from "../components/cardIcons/addToTvShowFavourites";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvContextProvider>{Story()}</TvContextProvider>,
  ] ,
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTvShow}
      action={(tv) => <AddToTvShowFavouritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
      action={(tv) => <AddToTvShowFavouritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";