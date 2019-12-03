const path = require("path");
const webpack = require("webpack");

module.exports = {
	target: "node",
	mode: "development",
	entry: "./src/index.js",

	output: {
		filename: "index.js",
		libraryTarget: "commonjs2",
		path: path.resolve("./lib")
	},

	plugins: [new webpack.ProgressPlugin()],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, "src")],
				loader: "babel-loader",

				options: {
					plugins: ["syntax-dynamic-import"],

					presets: [
						[
							"@babel/preset-env",
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: "async",
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
