const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.ts'
	},
	output: {
		filename: '[name].[chunkhash:10].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.ts|js$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			},
			{
				test: /\.css|sass|scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env', {}]]
							}
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				// https://juejin.cn/post/6970333716040122381
				// https://juejin.cn/post/6987383865748750343
				// https://juejin.cn/post/7014466035923288072
				test: /\.(jpe?g|png|svg|gif)$/,
				type: 'asset',
				generator: {
					filename: 'img/[hash][ext][query]' // 局部指定输出位置
				},
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024 // 限制于 8kb
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'css/[hash][ext][query]' // 局部指定输出位置
				}
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve('./src')
		},
		extensions: ['.ts', '.js'],
		plugins: [new TsconfigPathsPlugin()]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'webpack vue',
			template: './index.html'
		}),
		new VueLoaderPlugin(),
		new Webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default']
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[chunkhash:10].css'
		})
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin()]
	},
	externals: {
		vue: 'Vue',
		// vuex: 'Vuex',
		'element-ui': 'ELEMENT'
	}
};
