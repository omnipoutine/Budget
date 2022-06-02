module.exports = {
  siteMetadata: {
    title: `Nikolai Whittaker Portfolio`,
    titleTemplate: `%s · Web Developer`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Web Developer based in Ottawa, Ontario, Canada.`,
    
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-TCMFVB24XR"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "markdown-pages",
      "path": `${__dirname}/src/markdown-pages/`
    },
    __key: "markdown-pages"
  },{
resolve: `gatsby-transformer-remark`,
options: {
  plugins: [
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
      },
    },
  ],
},
  }, `gatsby-plugin-react-helmet`
]
};