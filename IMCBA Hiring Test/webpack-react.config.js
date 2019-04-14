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
        publicPath: "/build/"
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
        extensions: ['.js', '.jsx']
    },
    mode: "development"
};