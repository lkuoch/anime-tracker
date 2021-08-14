import React, { FC } from "react";
import { Avatar, Card, CardHeader, CardBody, Flex, Text } from "@fluentui/react-northstar";
import { Series } from "@Packages/Anilist/Series/types";

interface Props {
  id: string;
  entity?: Series;
}

const AnimeCard: FC<Props> = (props) => {
  const { entity } = props;

  if (!entity) return null;

  return (
    <Card>
      <CardHeader>
        <Flex gap="gap.small">
          <Avatar
            image={entity.coverImage.extraLarge!}
            label="anime-cover-image"
            name={entity?.title?.english}
            status="unknown"
          />
          <Flex column>
            <Text content={entity.title.english} weight="bold" />
            <Text content={entity.title.native} size="small" />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>{entity?.description!}</CardBody>
    </Card>
  );
};

export default AnimeCard;
