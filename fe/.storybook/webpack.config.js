const path = require('path');
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });

  config.resolve.modules.push(path.resolve('./src'));
  config.resolve.modules.push(path.resolve('./node_modules'));
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
