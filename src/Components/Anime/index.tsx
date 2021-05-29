import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";

import AnimeCard from "./card";
import { selectors } from "@Core/Series/redux";
import { Series } from "@Core/Series/types";
import { useAppSelector } from "@Store/hooks";

const Anime: FC = () => {
  const { ids, entities } = useAppSelector(selectors.selectAdapted);

  return (
    <Grid container spacing={2}>
      {ids.length > 0 && ids.map((id) => <AnimeCard key={id} id={id as number} entity={entities[id] as Series} />)}
    </Grid>
  );
};

export default Anime;
