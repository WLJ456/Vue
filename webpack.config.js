const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
//导入内存中生成的HTML页面的插件
//并且插件需要放到配置文件中 plugins数组中
module.exports = {
    //入口文件，表示要webpack打包的文件
    entry: path.join(__dirname, "./src/main.js"),
    //出口文件
    output: {
        path: path.join(__dirname, './dist'),
        //输出文件的名称
        filename: 'bundle.js'
    },
    plugins: [
        //当引用了htmlWebpackPlugin了在页面就不用在刻意导入bundle.js文件
        //htmlWebpackPlugin 作用：
        //1.自动在内存中根据指定页面生成一个内存的页面
        //2.自动，把打包好的bundle.js文件追加到页面中去
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定模板页面
            filename: 'index.html',//指定生成页面的名称，
            // minify:{   //打包html配置
            //     removeAttributeQuotes:true,
            //     collapseWhitespace:true
            // },
            // hash:true,
        }),
        new VueLoaderPlugin() 
    ],
    module: {
        rules: [
            //匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //从右到左调用
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },//处理图片路径
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    //配置vue包入口文件
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }

}