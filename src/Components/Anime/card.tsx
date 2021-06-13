import React, { FC } from "react";
import { Badge, Box, Image } from "@chakra-ui/react";

import { Series } from "@DataLayer/Series/types";

interface Props {
  id: number;
  entity: Series;
}

const AnimeCard: FC<Props> = (props) => {
  const { entity } = props;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={entity!.coverImage!.extraLarge!} alt="anime-cover-image" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            HELLO
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {entity?.title?.english}
        </Box>

        <Box>{entity?.title?.native}</Box>

        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          <div dangerouslySetInnerHTML={{ __html: entity?.description! }} />
        </Box>
      </Box>
    </Box>
  );
};

export default AnimeCard;
