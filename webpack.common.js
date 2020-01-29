const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.tsx'],
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                }],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                },
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                }],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                }, ],
            },
        ],
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            inject: true,
        }),
    ],
};