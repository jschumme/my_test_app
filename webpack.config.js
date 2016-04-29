var path = require('path');
var webpack = require('webpack');

module.exports = {
    content: __dirname,
    entry: "./app/src/js/app.jsx",
    output: {
        path: __dirname + "/",
        publicPath: './assets/',
        filename: "./app/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    }
}