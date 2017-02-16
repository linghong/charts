const webpack = require('webpack');
const path=require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports={
	entry: {
		bundle: ['./js/stock.js','./js/stock-step-after.js'],
		vendor: ['jquery', 'd3', 'd3-axis', 'd3-scale', 'd3-zoom']
	},
	output: {
		//must specify an absolouate path, __dirname references to current directory
		//save the name as "build"
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'		
	},
	module:{
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,			
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader'
				})	
			}				
		]		
	},

	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new webpack.ProvidePlugin({
      		jQuery: 'jquery',
      		$: 'jquery',
      		jquery: 'jquery'
    	}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
};
