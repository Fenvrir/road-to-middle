import path from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config
