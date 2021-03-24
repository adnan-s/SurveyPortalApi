var htmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}