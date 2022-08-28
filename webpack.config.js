const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtract    = require('mini-css-extract-plugin');
const CopyWebPack       = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Un titulo nuevo',
            // template: '/src/index.html'
            template: 'src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css'
        }),
        new CopyWebPack({
            patterns: [
                { from: 'src/assets', to: 'assests/'},
            ]
        })
    ]
}

