const merge = require('webpack-merge');
const maxAssetSize = 1024 * 1024* 100;

module.exports =  async ({ config, mode }) => {
  return {...config, ...{
    //...
    node: {fs: 'empty'},
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30 * 1024,
        maxSize: maxAssetSize,
      }
    },
    performance: {
      hints: false,
      maxAssetSize: maxAssetSize,
      maxEntrypointSize: maxAssetSize
    }
  }};
};
