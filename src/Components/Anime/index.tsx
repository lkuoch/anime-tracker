import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Card from "./card";
import { useGetSeriesQuery } from "@Packages/Anilist/Series/api";
import { selectors } from "@Packages/Anilist/Series/state";
import { Series } from "@Packages/Anilist/Series/types";
import { useAppSelector } from "src/App/hooks";

const Anime: FC = () => {
  const page = useAppSelector(selectors.selectCurrentPage);
  const { ids, entities } = useAppSelector(selectors.selectAdapted);
  const { isLoading } = useGetSeriesQuery({ page });

  if (isLoading) {
    return <h1>LOADING!!!</h1>;
  }

  return (
    <Grid templateColumns="repeat(5, 1fr)">
      {ids.map((id) => (
        <GridItem colSpan={1} key={id}>
          <Card id={id as number} entity={entities[id] as Series} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Anime;
