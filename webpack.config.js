const path = require('path');
require('@babel/polyfill');
require('isomorphic-fetch');

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill','isomorphic-fetch','./src/js/news-feed.js'],
    output:{
        path: path.resolve(__dirname, 'dist/js/'),
        filename: 'news-feed.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

}