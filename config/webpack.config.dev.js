'use strict';

var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var paths = require('./paths');
var getClientEnvironment = require('./env');



// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
var publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
var publicUrl = '';
// Get environment variables to inject into our app.
var env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    // We ship a few polyfills by default:
    require.resolve('./polyfills'),
    'bootstrap-loader',
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: publicPath
  },
  resolve: {
    modules: [
      paths.appSrc,
      "node_modules"
    ],
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  },

  module: {
    // First, run the linter.
    // It's important to do this before Babel processes the JS.
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'eslint-loader',
      //   options: {
      //     include: paths.appSrc,
      //     enforce: 'pre',
      //   },
      // },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        exclude: [
          /\.html$/,
          // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
          // because you might change the hot reloading server from the custom one
          // to Webpack's built-in webpack-dev-server/client?/, which would not
          // get properly excluded by /\.(js|jsx)$/ because of the query string.
          // Webpack 2 fixes this, but for now we include this hack.
          // https://github.com/facebookincubator/create-react-app/issues/1713
          /\.(js|jsx)(\?.*)?$/,
          /\.sass$/,
          /\.scss$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      },

      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      // // JSON is not enabled by default in Webpack but both Node and Browserify
      // // allow it implicitly so we also enable it.
      // {
      //   test: /\.json$/,
      //   loader: 'json'
      // },
      // // "file" loader for svg
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      // // ** STOP ** Are you adding a new loader?
      // // Remember to add the new extension(s) to the "url" loader exclusion list.
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: "popper.js",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    }),
    new InterpolateHtmlPlugin(env.raw),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
  //   // Makes some environment variables available in index.html.
  //   // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
  //   // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  //   // In development, this will be an empty string.
  //   new InterpolateHtmlPlugin(env.raw),
  //   // Generates an `index.html` file with the <script> injected.
  //   // Makes some environment variables available to the JS code, for example:
  //   // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
  //   new webpack.DefinePlugin(env.stringified),
  //   // This is necessary to emit hot updates (currently CSS only):
  //   new webpack.HotModuleReplacementPlugin(),
  //   // Watcher doesn't work well if you mistype casing in a path so we use
  //   // a plugin that prints an error when you attempt to do this.
  //   // See https://github.com/facebookincubator/create-react-app/issues/240
  //   new CaseSensitivePathsPlugin(),
  //   // If you require a missing module and then `npm install` it, you still have
  //   // to restart the development server for Webpack to discover it. This plugin
  //   // makes the discovery automatic so you don't have to restart.
  //   // See https://github.com/facebookincubator/create-react-app/issues/186
  //   new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  // ],
  // // Some libraries import Node modules but don't use them in the browser.
  // // Tell Webpack to provide empty mocks for them so importing them works.
  // node: {
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // }
};
