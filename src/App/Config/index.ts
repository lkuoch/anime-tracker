const config = (isProd: boolean) => ({
  vars: {
    anilist_endpoint: "https://graphql.anilist.co/",
  },

  features: {
    serviceWorker: {
      enabled: false,
      __description__: "Allow offloading of redux to a service worker",
    },

    header: {
      enabled: true,
      __description__: "Shows the header on the main cart page",
    },
  },
});

export default config;
