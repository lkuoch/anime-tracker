import React, { FC } from "react";
import { EuiButton, EuiFlexGrid, EuiLoadingSpinner } from "@elastic/eui";

import { useSelector, useDispatch } from "@Hooks";
import { useGetSeriesQuery } from "@Packages/Anilist/Series/api";
import { actions, selectors } from "@Packages/Anilist/Series/state";

import Card from "./card";

const Anime: FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectors.selectCurrentPage);
  const entities = useSelector(selectors.selectAll);
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
      <EuiButton color="primary" onClick={incrementPageCount}>
        Fetch next page
      </EuiButton>

      <EuiFlexGrid columns={4}>
        {entities.map((entity) => (
          <Card key={entity.id} entity={entity} />
        ))}
      </EuiFlexGrid>
    </>
  );
};

export default Anime;
