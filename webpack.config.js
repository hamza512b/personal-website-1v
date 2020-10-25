const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            }
        ],
    },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "!!ejs-webpack-loader!src/index.ejs",
            filename: 'index.html'
        }),
        // new HandlebarsPlugin({
        //     htmlWebpackPlugin: {
        //         enabled: true,
        //         prefix: "html",
        //         HtmlWebpackPlugin
        //     },
        //     entry: path.resolve(__dirname, './src/index.hbs'),
        //     output: path.resolve(__dirname, './dist/index.html'),
        //     partials: [path.join(__dirname, './src/components/*/*.hbs')]
        // }),
        new CopyPlugin({
            patterns: [{ from: "public", to: "./" }]
        })
    ]
};