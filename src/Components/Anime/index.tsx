import React, { FC } from "react";
import { Grid } from "@fluentui/react-northstar";

import Card from "./card";
import { useSelector } from "@Hooks";
import { useGetSeriesQuery } from "@Packages/Anilist/Series/api";
import { selectors } from "@Packages/Anilist/Series/state";

const Anime: FC = () => {
  const page = useSelector(selectors.selectCurrentPage);
  const entities = useSelector(selectors.selectAll);
  const { isLoading } = useGetSeriesQuery({ page });

  if (isLoading) {
    return <h1>LOADING!!!</h1>;
  }

  return (
    <Grid
      content={entities.map((entity) => (
        <Card key={entity.id} entity={entity} />
      ))}
    />
  );
};

export default Anime;
