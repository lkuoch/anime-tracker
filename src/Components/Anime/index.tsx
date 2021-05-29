import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";

import AnimeCard from "./card";
import { useGetSeriesQuery } from "@DataLayer/Series/api";
import { selectors } from "@DataLayer/Series/state";
import { Series } from "@DataLayer/Series/types";
import { useAppSelector } from "src/App/hooks";

const Anime: FC = () => {
  const page = useAppSelector(selectors.selectCurrentPage);
  const { ids, entities } = useAppSelector(selectors.selectAdapted);
  const { isLoading } = useGetSeriesQuery({ page });

  if (isLoading) {
    return <h1>LOADING!!!</h1>;
  }

  return (
    <Grid container spacing={2}>
      {ids.length > 0 && ids.map((id) => <AnimeCard key={id} id={id as number} entity={entities[id] as Series} />)}
    </Grid>
  );
};

export default Anime;
