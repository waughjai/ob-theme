const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	entry: {
		'./ob-starter/assets/dist/index': './ob-starter/assets/src/index.js',
	},
	output: {
		path: path.resolve( __dirname ),
		filename: '[name].js',
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	mode: 'development',
	watch: 'production' !== process.env.NODE_ENV,
	plugins: [ new MiniCssExtractPlugin( {
		filename: ( { chunk } ) => `./${ chunk.name.replace( 'index', 'style.css' ) }`,
	} ) ],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
			},
		],
	},
};
