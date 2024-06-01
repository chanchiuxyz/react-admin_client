const {override, fixBabelImports, addLessLoader} = require('customize-cra');
// const { modifyVars } = require('less');

module.exports = override(
    fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    addLessLoader({
        lessOptions:{
        javascriptEnabled: true,
        modifyVars:{'@primary-color': '#1Da57A'},
        }
    }),

)