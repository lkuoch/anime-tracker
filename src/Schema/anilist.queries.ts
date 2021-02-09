import gql from 'graphql-tag';

export const _Series = /*#__PURE__*/ gql`
    query _Series($page: Int) {
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