const path = require('path');
module.exports = {
    entry: [
        "./source/index.ts"
    ],
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: "base64.web.min.js",
        library: "base64",
        libraryTarget: "var"
    },
    resolve: {
        extensions: [ ".ts" ]
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true
    },
    target: "web"
};