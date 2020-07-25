const path = require('path');
const nodeExternals = require('webpack-node-externals');
 
module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env']
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    target: 'node',
    mode: "development",
    watch: true,
    node: {
        net: 'empty',
        fs: 'empty'
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: [nodeExternals()],
    plugins: []
};