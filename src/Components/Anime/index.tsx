import React, { FC } from "react";
import { Grid } from "@fluentui/react-northstar";

import Card from "./card";
import { useGetSeriesQuery } from "@Packages/Anilist/Series/api";
import { selectors } from "@Packages/Anilist/Series/state";
import { useAppSelector } from "src/App/hooks";

const Anime: FC = () => {
  const page = useAppSelector(selectors.selectCurrentPage);
  const entities = useAppSelector(selectors.selectEntities);
  const { isLoading } = useGetSeriesQuery({ page });

  if (isLoading) {
    return <h1>LOADING!!!</h1>;
  }

  return (
    <Grid
      content={Object.entries(entities).map(([id, entity]) => (
        <Card key={id} id={id} entity={entity} />
      ))}
    />
  );
};

export default Anime;
