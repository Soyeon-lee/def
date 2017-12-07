import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.[name].js'
    },
    module: {
        rules: [{
                test: /.(s|c)ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // html의 title 태그의 텍스트 변경
            title: 'My first App',
            // 템플릿이 될 html
            template: './index.html',
            // 적용할 html 파일이 있는 경로
            // filename: './path/to/myindex.html',

            //파비콘 설정
            favicon: './src/images/favicon_cleaned.svg'
        })
    ],
    devServer: {
        contentBase: `${__dirname}/`,
    }
};