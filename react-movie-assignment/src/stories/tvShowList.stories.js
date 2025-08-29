import React from "react";
import TvList from "../components/tvList";
import SampleMovie from "./sampleDataTv";
import { MemoryRouter } from "react-router";
import Grid from "@mui/material/Grid";
import TvShowContextProvider from "../contexts/tvShowContext";
import AddToTvShowFavouritesIcon from "../components/cardIcons/addToTvShowFavourites";

export default {
  title: "Home Page/TvShowList",
  component: TvList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowContextProvider>{Story()}</TvShowContextProvider>,
  ] ,
};

export const Basic = () => {
  const tv = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
  ];
  return (
    <Grid container spacing={5}>
      <TvList
        tvs={tv}
        action={(tv) => <AddToTvShowFavouritesIcon tv={tv} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
