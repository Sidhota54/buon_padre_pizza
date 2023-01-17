/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Buon Padre Pizza, Wings, Salads, Calzones, Wine and Beer in Chandler, Arizona`,
    description: `Buon Padre Pizza is your local gold standard gourmet pizza experience. We offer pizza, beer, wings, gluten-free options, and salads. Located in Chandler, AZ!`,
    image: `static/bpp-logo-571e9ad6a865f5ebfb16821d3e0c58b4.png`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
    
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Barlow:wght: 700",
         "Caveat: 400,700"
        ],
        display: 'swap'
      }
    }
  ],
}
