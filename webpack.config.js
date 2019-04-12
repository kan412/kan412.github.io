const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer:{
        contentBase: "/dist"
    },
    module:{
        rules:[
                {
                    test: /\.json$/,
                    use:['./customLoader.js']
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test:/\.css$/,
                    use:['style-loader', 'css-loader', 'postcss-loader']             
                }
            ]
         },
        plugins: [
            new HtmlWebpackPlugin({ 
                template: './index.html'
            })
        ],
        optimization: {
            minimizer: [
              new UglifyJSPlugin({
                uglifyOptions: {
                  compress: {
                    drop_console: true,
                  }
                }
              })
            ]
        }
    }

