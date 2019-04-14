const path = require('path');
module.exports = {
    context: path.join(__dirname, 'Scripts'),
    entry: {
        "build": ['babel-polyfill', './main.js'],
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "Scripts", 'build'),
        filename: '[name].bundle.js',
        libraryTarget: 'var',
        library: 'lib',
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    mode: "development"
};