const nodeExternals = require("webpack-node-externals");
module.exports = 
  {
    mode: "production",
    entry: ["./index.js"],
    output: {
      filename: "./bin/index-bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /src\tests/]
        }
      ]
    },
    target:'node',    externals:[nodeExternals()],    watch:false
  }
