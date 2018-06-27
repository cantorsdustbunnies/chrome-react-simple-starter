const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyPlugin = new CopyWebpackPlugin([
	{
		from: 'src/chrome_extension/manifest.json',
		to: 'manifest.json',
		toType: 'file',
	},
	{
		from: 'src/chrome_extension/images',
		to: 'images',
		toType: 'dir',
	},
]);

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: path.join(__dirname + '/build', './index.html'),
});

const reactConfig = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.png$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
	plugins: [htmlPlugin],
	devtool: 'cheap-module-source-map',
	devServer: {
		compress: true,
		port: 9000,
		hot: true,
	},
};

const chromeScriptConfig = {
	entry: {
		background: './src/chrome_extension/background/index.js',
		content: './src/chrome_extension/content/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname + '/build'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	devtool: 'cheap-module-source-map',
	plugins: [copyPlugin],
};

module.exports = [reactConfig, chromeScriptConfig];
