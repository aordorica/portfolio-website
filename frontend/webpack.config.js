const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    // devtool: "eval-cheap-module-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
    },
};
