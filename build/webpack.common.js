const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
	entry: {
		app: './src/index.ts'
	},
	output: {
		filename: 'js/[id].[chunkhash:10].js',
		path: path.resolve(__dirname, '../dist'),
		chunkFilename:'js/[id][chunkhash:7].js'
	},
	module: {
		rules: [
			// ts js
			{
				test: /\.ts|js$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			// vue
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			},
			// css sass scss
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
			// jpg
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
			'@': path.resolve('src'),
			'@/components': path.resolve('./src/components')
		},
		extensions: ['.ts', '.js', '.json'],
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
			Vue: ['vue/dist/vue.esm.js', 'default'],
			VueRouter: ['vue-router/dist/vue-router.esm.js', 'default'],
			Vuex: ['vuex/dist/vuex.esm.js', 'default']
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[id].[chunkhash:10].css'
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				// test: /\.js(\?.*)?$/i,
				// parallel: true,
				terserOptions: {
					format: {
						comments: false
					},
					// 	// 使用默认 terser 压缩函数
					compress: true,
					// 	// 最高级别，删除无用代码
					toplevel: true
				},
				extractComments: false,
				exclude: /\/excludes/
			})
		]
	},
	externals: {
		vue: 'Vue',
		'vue-router': 'VueRouter',
		vuex: 'Vuex',
		// 'axios': 'axios',
		'element-ui': 'ELEMENT'
	}
};
