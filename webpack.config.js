const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/main.js',

    //出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle-[name]-[hash:5].js',
        // publicPath:'./'
    },

    //测试服务器
    devServer: {
        contentBase: path.join(__dirname, './src')
    },

    //加载器
    module: {
        rules: [
            //js和jsx加载器
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                }],
                include: path.join(__dirname, './src')
            },

            // 其他加载器
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    //第三方插件
    plugins: [
        //删除dist文件夹
        new CleanWebpackPlugin(),

        // 创建dist文件
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename:'index.html'
        })
    ]
}