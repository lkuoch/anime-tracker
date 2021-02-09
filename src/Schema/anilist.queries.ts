import gql from "graphql-tag";

export const Series = /*#__PURE__*/ gql`
  query Series($page: Int) {
    Page(page: $page) {
      media {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
        }
        bannerImage
      }
    }
  }
`;
