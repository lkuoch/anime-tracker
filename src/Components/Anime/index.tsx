import React, { FC } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import AnimeCard from "./card";
import { selectors, Series } from "@Core/Series/redux";

const Anime: FC = () => {
  const { ids, entities } = useSelector(selectors.selectAdapted);

  return (
    <Grid container spacing={2}>
      {ids.length > 0 && ids.map((id) => <AnimeCard key={id} id={id as number} entity={entities[id] as Series} />)}
    </Grid>
  );
};

export default Anime;
