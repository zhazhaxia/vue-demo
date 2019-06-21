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

const pages = getPageEntries("../src/pages/*");

console.log('pp',pages)