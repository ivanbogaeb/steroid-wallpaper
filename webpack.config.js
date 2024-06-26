const path = require("path");

module.exports = {
	mode  : "production",
	entry : "./src/steroid-wallpaper.ts",
	output: {
		filename: "steroid-wallpaper.bundle.js",
		path: path.resolve(__dirname,"dist")
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: "/node_modules/"
			}
		]
	},
	resolve: {
		extensions: [".ts",".js"]
	}
};
