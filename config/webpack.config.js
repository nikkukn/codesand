const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  // ... rest of your webpack configuration ...

  plugins: [
    // ... other plugins ...

    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240, // Only process assets bigger than 10kb.
      minRatio: 0.8, // Only compress when compression ratio is below this value.
    }),
  ],
};
