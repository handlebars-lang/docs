/* eslint-env node */

// Entry point for the vuepress-config
// The location of this file is hard-coded in vuepress, so
//
require("@babel/register");
module.exports = require("./config-using-babel").default;
