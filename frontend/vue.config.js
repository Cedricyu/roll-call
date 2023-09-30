const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: false, // Disable the vendors chunk
        },
      },
    },
  },
  transpileDependencies: true, // You can keep your existing configuration here
});
