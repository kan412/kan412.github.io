const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer:{
        contentBase: path.join(__dirname, 'dist')
    },
    module:{
        rules:[
                {
                    test: /\.json$/,
                    type: 'javascript/auto',    
                    exclude: /(node_modules)/,
                    loader: path.resolve(__dirname, './customLoader.js')
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

