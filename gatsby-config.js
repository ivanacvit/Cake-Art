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
        text: 'ABOUT US',
        path: '/about'
      },
      {
        text: 'CAKE GALLERY',
        path: '/cakegallery'
      },
      {
        text: 'BLOG&RECIPES',
        path: '/blog'
      },
     
     {
       text: 'CONTACT US',
       path: '/contact'
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
    `gatsby-transformer-sharp`,
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