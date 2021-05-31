const path = require('path');

const aliases = {
  '@': '.',
  '@components': 'src/components',
  '@layout': 'src/layout',
  '@locale': 'src/locale',
  '@mixin': 'src/mixin',
  '@pages': 'src/pages',
  '@plugins': 'src/plugins',
  '@router': 'src/router',
  '@scss': 'src/scss',
  '@store': 'src/store'
}

const resolveSrc = (_path) => path.resolve(__dirname, _path);

module.exports = {
  webpack: {},
  jest: {},
  jsconfig: {}
}

Object.keys(aliases).map((alias) => {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
  const aliasHasExtension = /\.\w+$/.test(aliasTo);
  module.exports.jest[`^${alias}$`] = aliasHasExtension
    ? `<rootDir>/${aliasTo}`
    : `<rootDir>/${aliasTo}/index.js`;
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`;
  console.log(module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`);
  module.exports.jsconfig[`${alias}/*`] = [`${aliasTo}/*`];
  module.exports.jsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
      `${aliasTo}/index.js`,
      `${aliasTo}/index.json`,
      `${aliasTo}/index.vue`,
      `${aliasTo}/index.scss`,
      `${aliasTo}/index.css`
    ];
});
