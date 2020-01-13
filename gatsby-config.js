module.exports = {
  siteMetadata: {
    title: `Korisnicka sucelja`,
    description: `Korisnicka sucelja`,
    menuItems: [
      {
        text: 'HOME',
        path: '/'
      },
      {
        text: 'CAKE GALLERY',
        path: '/cakegallery',
        partiallyActive: true,
      },
      {
        text: 'BLOG&RECIPES',
        path: '/blog',
        partiallyActive: true,
      },
     
     {
       text: 'LOGIN',
       path: '/private',
       partiallyActive: true,
     }, 
     {
      text: 'COMMENT',
      path: '/comment',
      private: true,
    }, 
     ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/content`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  
    {
      resolve: "gatsby-theme-style-guide",
      options: {
        // sets path for generated page
        basePath: "/design-system",
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/content-dynamic/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `@FESB`,
        short_name: `@FESB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}