module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  indexPath: "index.html",
  devServer: {
    open: true,
    port: 7189,
    https: false,
    proxy: {
      "/monitor": {
        target: "http://127.0.0.1:7190",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/monitor": "/monitor"
        }
      }
    }

  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
