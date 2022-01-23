
const path = require('path')
const entryPath = path.resolve(__dirname, '../src/index.js');
const outputPath = path.resolve(__dirname, '../dist');
module.exports = {
    mode: 'production',
    entry: {
		app: entryPath
	},
	output: {
		path: outputPath,
		filename: 'js/[name].[hash:8].js',
    	publicPath: '/'
	},
  devServer: {
    host: 'localhost',
    port: '8883',
    open: true,
    overlay: true,
  }
}