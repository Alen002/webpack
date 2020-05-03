const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}

//If you do not write the following code in module.exports -> mode: 'production',
//WARNING in configuration
//The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
//You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode///


