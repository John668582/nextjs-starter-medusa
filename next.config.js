const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-server-img.s3.us-west-2.amazonaws.com"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
