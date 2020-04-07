var merge = require('webpack-merge');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
  config: function (cfg) {
    const strategy = merge.strategy({
      'plugins': 'prepend'
    });

    return strategy(cfg, {
      plugins: [
        new HtmlWebpackPlugin({
          inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin()
      ]
    });
  }
}
