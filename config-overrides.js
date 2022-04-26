const path = require('path');
const { addWebpackAlias, override, fixBabelImports, addLessLoader } = require('customize-cra');

// Add just the necessary icons to decrease bundle size
function overrides(config, env) {
  config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(__dirname, 'src/icons.js');

  return config;
}

module.exports = override(
  overrides,
  addWebpackAlias({
    '~': path.join(__dirname, 'src'),
    '@store': path.join(__dirname, 'src/store'),
    '@i18n': path.join(__dirname, 'src/i18n'),
    '@schemas': path.join(__dirname, 'src/schemas'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    paths: ['./src/styles', './node_modules'],
    javascriptEnabled: true,
  }),
);
