import React from "react";
import TvShowDetails from "../components/tvDetails";
import SampleTvShow from "./sampleDataTv";
import { MemoryRouter } from "react-router";
import TvShowContextProvider from "../contexts/tvShowContext";

export default {
  title: "TV Show Details Page/TvShowDetails",
  component: TvShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowContextProvider>{Story()}</TvShowContextProvider>,
  ],
};

export const Basic = () => <TvShowDetails tv={SampleTvShow} /> ;

Basic.storyName = "Default";