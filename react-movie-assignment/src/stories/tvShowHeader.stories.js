import React from "react";
import TvShowHeader from "../components/headerTvShow";
import SampleTvShow from "./sampleDataTv";
import { MemoryRouter } from "react-router";

export default {
  title: "TV Show Details Page/TvShowHeader",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowHeader tv={SampleTvShow} /> ;

Basic.storyName = "Default";