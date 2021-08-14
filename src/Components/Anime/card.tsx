import React, { FC } from "react";

import { EuiCard, EuiFlexItem } from "@elastic/eui";

import { Series } from "@Packages/Anilist/Series/types";

interface Props {
  entity: Series;
}

const AnimeCard: FC<Props> = (props) => {
  const { entity } = props;

  return (
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src={entity.coverImage.medium} alt={entity.title.native} />
          </div>
        }
        title={entity.title.native}
        description={entity.title.english}
      />
    </EuiFlexItem>
  );
};

export default AnimeCard;
