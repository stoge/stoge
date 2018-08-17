const { injectBabelPlugin } = require('react-app-rewired')
const rewireMobX = require('react-app-rewire-mobx')
const rewireSass = require('react-app-rewire-scss')

module.exports = function override(config, env){
    config = rewireSass(config, env);
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    config = injectBabelPlugin("babel-plugin-styled-components", config)
    config = rewireMobX(config, env)


    return config
}
