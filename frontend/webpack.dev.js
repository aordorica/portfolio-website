const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        historyApiFallback: true,
        port: 8000,
        allowedHosts: 'all'
    },
});