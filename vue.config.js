module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  indexPath: "index.html",
  transpileDependencies: [],
  devServer: {
    open: true,
    port: 7189,
    https: false,
    proxy: {
      "/monitor": {
        target: "http://192.168.1.86",
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
