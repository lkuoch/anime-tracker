import React, { FC } from "react";
import { EuiButton, EuiFlexGrid, EuiLoadingSpinner } from "@elastic/eui";

import { useReduxDispatch, useReduxSelector } from "@Hooks";
import { useGetSeriesQuery } from "src/Data/Packages/Anilist/Series/api";
import { actions, selectors } from "src/Data/Packages/Anilist/Series/state";

import Card from "./card";

const Anime: FC = () => {
  const dispatch = useReduxDispatch();
  const page = useReduxSelector(selectors.selectCurrentPage);
  const entities = useReduxSelector(selectors.selectAll);
  const { isLoading } = useGetSeriesQuery({ page });

  const incrementPageCount = () => {
    dispatch(actions.incrementCurrentPage());
  };

  if (isLoading && page === 0) {
    return (
      <div>
        <EuiLoadingSpinner size="xl" />
      </div>
    );
  }

  return (
    <>
      <EuiFlexGrid columns={4}>
        {entities.map((entity) => (
          <Card key={entity.id} entity={entity} />
        ))}
      </EuiFlexGrid>

      <EuiButton color="primary" onClick={incrementPageCount}>
        Fetch next page
      </EuiButton>
    </>
  );
};

export default Anime;
