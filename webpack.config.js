const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const PATH = require('path');

const SCSS_PATH = PATH.join(__dirname, './src/scss');
const CSS_PATH = PATH.join(__dirname, './');
const JS_PATH = PATH.join(__dirname, './src/js');
const JS_DIST_PATH = PATH.join(__dirname, './');


module.exports = [
	{
		entry: {
			'dist/common/css/app': SCSS_PATH + '/app.scss'
		},
		output: {
			path: CSS_PATH,
			filename: '[name].css'
		},
		module: {
			rules: [
				{
					test: /.scss$/,
					use: ExtractTextPlugin.extract({
						use:[
							{loader:"css-loader",options: {minimize: true}},　"postcss-loader", "sass-loader"]
					})
				},
				{
					test: /.(gif|jpg|png|svg|otf|ttf|woff|eot)$/,
					use: {
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							emitFile: false
						}
					}
				}
			]
		},
		plugins: [
			// new StyleLintPlugin(options),
			new ExtractTextPlugin('[name].css'),
		]
  },
// 	{
// 		entry: {
// 			'src/mock/common/inc/_inline': SCSS_PATH + '/inline.scss'
// 		},
// 		output: {
// 			path: CSS_PATH,
// 			filename: '[name].ejs'
// 		},
// 		module: {
// 			rules: [
// 				{
// 					test: /.scss$/,
// 					use: ExtractTextPlugin.extract({
// 						use: [
// 							{loader:"css-loader",options: {minimize: true}},　"postcss-loader", "sass-loader"]
// 					})
// 				}
// 			]
// 		},
// 		plugins: [
// 			// new StyleLintPlugin(options),
// 			new ExtractTextPlugin('[name].ejs'),
// 		]
//   },
	{
		entry: {
			'dist/common/js/bundle': JS_PATH + '/main.js',//ベースとなるjs
			// 'dist/common/js/form': JS_PATH + '/form.js'//フォームのみで使用するjs
		},
		output: {
			path: JS_DIST_PATH,
			filename: '[name].js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									['env', {'modules': false}]
								]
							}
						}
					],
					exclude: /node_modules/,
				}
			]
		},
		devtool: 'source-map'
  //   ////以下の処理は圧縮したい場合に使用する
	// 	// plugins: [
	// 	// 	new webpack.optimize.UglifyJsPlugin()
	// 	// ]
	}
];
