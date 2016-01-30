var path = require('path');

module.exports = {

  // set the base folder as context for the project
  context: path.join(__dirname, 'src'),

  // set the entry point for this project
  entry: 'index.ts',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [path.join(__dirname, "src")],
    extensions: ['', '.webpack.js', '.ts', '.js']
  },

  module: {
    loaders: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, exclude: [/node_modules/], loader: 'ts-loader'},

      // load css files and convert it to inline styles
      {test: /\.css$/, exclude: [/node_modules/], loader: 'style!css-loader'},

      // load fonts(inline base64 URLs for <=8k)
      { test: /\.(ttf|eot|svg|otf)$/, loader: "file" },
      { test: /\.woff(2)?$/, loader: "url?limit=8192&minetype=application/font-woff"},

      // load images (inline base64 URLs for <=8k images)
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}

    ]
  },

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    inline: true,
    port: 3030,
    historyApiFallback: true
  }
};
