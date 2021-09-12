import React from "react";
import { EuiCard, EuiFlexItem } from "@elastic/eui";

import { Series } from "src/Data/Packages/Anilist/Series/types";

interface Props {
  entity: Series;
}

const AnimeCard = (props: Props) => {
  const { entity } = props;

  return (
    <EuiFlexItem>
      <EuiCard textAlign="center" title={entity.title.native} description="" style={{ height: "100%" }}>
        <img
          src={entity.coverImage.large}
          alt={entity.title.native}
          width="85%"
          height="275px"
          style={{ display: "block", margin: "auto" }}
        />
      </EuiCard>
    </EuiFlexItem>
  );
};

export default AnimeCard;
