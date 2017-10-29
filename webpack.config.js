var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n',
  raw: true
})

function getBaseConfig () {
  return {
    entry: {
      'index': './src/'
    },
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/
        }
      ]
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
      bannerPlugin
    ],
    resolve: {
      alias: {
        $utils: './src/utils/index.js'
      }
    },
    devtool: 'source-map'
  }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.rules[1].loader = 'vue-loader'
webConfig.module.rules.push({
  test: /\.scss$/,
  loader: 'style-loader!css-loader!sass-loader',
  exclude: /node_modules/
})
/**
 * important! should use postTransformNode to add $processStyle for
 * inline style normalization.
 */
webConfig.module.rules[1].options = {
  compilerModules: [
    {
      postTransformNode: el => {
        el.staticStyle = `$processStyle(${el.staticStyle})`
        el.styleBinding = `$processStyle(${el.styleBinding})`
      }
    }
  ]
}

var nativeConfig = getBaseConfig()
nativeConfig.output.filename = '[name].weex.js'
nativeConfig.module.rules[1].loader = 'weex-loader'
nativeConfig.module.rules.push({
  test: /\.scss$/,
  loader: 'weex-loader',
  exclude: /node_modules/
})

module.exports = [webConfig, nativeConfig]
