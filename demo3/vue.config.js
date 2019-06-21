const glob = require("glob");
const webpack = require("webpack");
const path = require("path");

function getPageEntries(scanPath) {
  return glob.sync(scanPath).reduce((acc, curr) => {
    const conf = require(curr + "/config.js");
    const app = curr.split("/").slice(-1)[0];
    acc[app] = {
      entry: curr + "/main.js",
      filename: app + "/index.html",
      title: conf.title,
      template: "./public/index.html",
      chunks: ["chunk-vendors", "chunk-common", "corejs", "async-vendors", app]
    };
    return acc;
  }, {});
}

const pages = getPageEntries("./src/pages/*");
const isProd = process.env.NODE_ENV === "production";
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  pages,
  outputDir: "./dist",
  productionSourceMap: false,
  publicPath: "./",
  lintOnSave:false,//启动禁用eslint
  chainWebpack: config => {
    config.plugins.delete("prefetch").delete("preload");
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@comp", resolve("src/components"));
    config.when(isProd, config =>
      config.output
        .set("filename", `./[name].[hash].js`)
        .set("chunkFilename", `./[name].[hash].js`)
    );
    config.devServer.set('disableHostCheck', true);//禁用host检查
  },
  configureWebpack:
    process.env.NODE_ENV === "production"
      ? {
          plugins: [
            new webpack.DllReferencePlugin({
              context: process.cwd(),
              manifest: require(path.join(
                process.cwd(),
                "dll",
                "vendor-manifest.json"
              ))
            })
          ],
          optimization: {
            minimize: false,
            splitChunks: {
              chunks: "all",
              minSize: 0,
              cacheGroups: {
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  chunks: "initial",
                  name: "chunk-vendors",
                  priority: 1,
                  minChunks: 2
                },
                corejs: {
                  test: /[\\/]node_modules[\\/]core-js/,
                  chunks: "initial",
                  name: "corejs",
                  priority: 2,
                  minChunks: 1
                },
                common: {
                  chunks: "initial",
                  test: /[\\/]src[\\/]/,
                  name: "chunk-common",
                  priority: 3,
                  minChunks: 2,
                  reuseExistingChunk: true
                },
                "async-vendors": {
                  test: /[\\/]node_modules[\\/]/,
                  minChunks: 2,
                  priority: 4,
                  chunks: "async",
                  name: "async-vendors"
                }
              }
            },
            runtimeChunk: {
              name: entrypoint => `runtimechunk~${entrypoint.name}`
            }
          }
        }
      : {}
};
