import React, { FC } from "react";

import { useSelector } from "@Hooks";
import { useGetSeriesQuery } from "@Packages/Anilist/Series/api";
import { selectors } from "@Packages/Anilist/Series/state";

import { EuiFlexGrid, EuiLoadingSpinner } from "@elastic/eui";
import Card from "./card";

const Anime: FC = () => {
  const page = useSelector(selectors.selectCurrentPage);
  const entities = useSelector(selectors.selectAll);
  const { isLoading } = useGetSeriesQuery({ page });

  if (isLoading) {
    return (
      <div>
        <EuiLoadingSpinner size="xl" />
      </div>
    );
  }

  return (
    <EuiFlexGrid columns={4}>
      {entities.map((entity) => (
        <Card key={entity.id} entity={entity} />
      ))}
    </EuiFlexGrid>
  );
};

export default Anime;
