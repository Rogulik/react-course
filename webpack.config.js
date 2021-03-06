const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

        return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public' ),
            filename: 'bundle.js'

        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },

        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: './src/index.html'
                }
            ),
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        
        devServer: {
            contentBase: path.join(__dirname,'/public'),
            historyApiFallback: true
        }
    }
}