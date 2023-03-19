const { override, addBabelPlugin } = require('customize-cra')

const overrides = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
    },
  ])
)

module.exports = overrides
