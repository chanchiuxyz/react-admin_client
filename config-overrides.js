const {override, fixBabelImports, addLessLoader} = require('customize-cra');
const { modifyVars } = require('less');

module.exports = override(
    fixBabelImports('import',{
        librayName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars:{'@primary-color': '#1Da57A'}
    }),

)