const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const problemSolving = require('./problemSolving');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...problemSolving
};