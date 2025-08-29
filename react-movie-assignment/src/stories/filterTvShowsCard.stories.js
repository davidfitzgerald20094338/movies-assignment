import React from "react";
import FilterTvShowsCard from "../components/filterTvShowsCard";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    } ,
  },
});

export default {
  title: "Home Page/FilterTvShowsCard",
  component: FilterTvShowsCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => {
  return <FilterTvShowsCard onUserInput={action("filter input")} />;
};
Basic.storyName = "Default";