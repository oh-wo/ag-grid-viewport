const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: {
        index: './index.js'
    },
    output: {
        path: __dirname +'/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.ejs',
        // filename: 'index.html'
    })],

    devtool: "#inline-source-map"
};
