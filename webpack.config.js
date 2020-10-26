const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const { mode } = require("webpack-nano/argv");
const CopyPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        exclude: /node_modules/,
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }],
            },
            // Handlebars
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: "handlebars-loader",
                        options: {
                            partialDirs: path.resolve(__dirname, "./src/components")
                        }
                    }
                ],
            },
            // Scss
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            // Files
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
                type: 'asset/inline'
            },
        ],
    },
    entry: [
        path.resolve(__dirname, './src/index.js'),
        'webpack-plugin-serve/client'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    watch: mode === "development",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.hbs"),
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: "public", to: "./" }]
        }),
        new FriendlyErrorsWebpackPlugin(),
        new Serve({
            host: "localhost",
            port: process.env.PORT || 3000,
            static: "./dist",
            liveReload: true,
            waitForBuild: true,
            open: true,
            progress: false,
        })
    ]
};