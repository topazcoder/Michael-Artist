require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Daniel Michael`,
    // description: `Daniel Michael's artist website`,
    description: `Hailing from New York, Daniel Michael is an up and coming singer/songwriter, producer and artist with a penchant for writing infectious tunes and relatable narratives. Inspired by internationally acclaimed Artists like Billy Joel, Queen, Tears for Fears, U.K., Allan Holdsworth and Dirty Loops, Daniel Michael’s music journey began at a tender age, performing with his father’s band. Being an avid storyteller, Daniel Michael is greatly influenced by real life, drawing inspiration for his music from personal experiences, allowing him to invoke strong emotions in people. The multi-talented artist also seems to have a unique innate competency to ingeniously present music in multiple styles, all while maintaining a consistent brand. With big dreams and plenty of energy to spare, Daniel Michael seeks to reach out to audiences from all walks of life, and is well on his way to becoming one of the most phenomenal artists in our generation.`,
    author: `@dannymichaels`,
    siteUrl: `https://www.danielmichaelmusic.com/`,
    image: `https://www.danielmichaelmusic.com/og-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/assets/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `album-covers`,
        path: `${__dirname}/src/assets/album-covers`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Kodchasan',
              variants: ['400', '500', '600', '700'],
            },
            {
              family: 'Exo',
              variants: ['300', '400', '500', '600', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: `Events`,
            mapping: { image: `fileNode` },
          },

          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: `GalleryImages`,
            mapping: { image: `fileNode` },
          },
        ],
      },
    },
  ],
};
