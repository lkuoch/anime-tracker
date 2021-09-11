const config = (isProd: boolean) => ({
  isProd,

  features: {},

  vars: {
    anilist_endpoint: "https://graphql.anilist.co/",
  },
});

export default config;
