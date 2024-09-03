const { join } = require('path');

const { composePlugins, withNx } = require('@nx/webpack');
const {
  NxTsconfigPathsWebpackPlugin,
} = require('@nx/webpack/tsconfig-paths-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = composePlugins(
  () => ({
    output: {
      path: join(__dirname, '../../dist/apps/api'),
      library: {
        type: 'module',
      },
    },
    target: 'node20',
    externalsPresets: {
      node: true,
    },
    experiments: {
      outputModule: true,
    },
    plugins: [
      new NxTsconfigPathsWebpackPlugin({
        tsConfig: join(__dirname, 'tsconfig.app.json'),
      }),
    ],
  }),
  withNx({
    compiler: 'tsc',
    main: join(__dirname, 'src/main.ts'),
    optimization: false,
    outputHashing: false,
    tsConfig: join(__dirname, 'tsconfig.app.json'),
    outputFileName: 'main.js',
    generatePackageJson: true,
  }),
  (config) => {
    const externals = [];
    externals.push(
      nodeExternals({
        modulesDir: join(__dirname, '../../node_modules'),
        importType: 'node-commonjs',
      })
    );

    config.externals = externals;

    return config;
  }
);
