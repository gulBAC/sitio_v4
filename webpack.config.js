let path = require('path');
let webpack = require('webpack');
let extractCss = require("extract-text-webpack-plugin");
let optimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: "./assets/js/index.js",
  output: {
      path: path.resolve(__dirname, "static"),
      filename: "js/app.min.js",
      publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(woff2?|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            stylus: 'vue-style-loader!css-loader!stylus-loader?paths[]=node_modules'
          },
          postcss: optimizeCss
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"' //change to enable/disable vuejs debug
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
          compress: true,
          comments: false
    }),
    new extractCss({
      filename: "css/app.min.css",
      allChunks: true,
      ignoreOrder: true
    }),
    new optimizeCss({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.vue'],

    alias: {
        'vue$': 'vue/dist/vue.common.js'
    }
  }
}
