const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./src",
        aliases: {
          "@components": "components",
          "@helpers": "helpers",
          "@hooks": "hooks",
          "@pages": "pages",
          "@routes": "routes",
          "@store": "store",
          "@theme": "theme",
        }
      }
    }
  ]
};