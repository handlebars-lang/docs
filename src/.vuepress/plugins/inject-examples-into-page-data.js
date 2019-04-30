const axios = require("axios");
const path = require("path");
const fs = require("fs");

module.exports = function injectExamplesIntoPageData(options, ctx) {
  return {
    name: "injectExamplesIntoPageData",
    extendPagedata($page) {
      const { _filePath } = $page;
      const pageFilename = path.basename(_filePath, ".md");
      const pageDirname = path.dirname(_filePath);
      const hbsFiles = fs
        .readDirSync(pageDirname)
        .filter(fileInDir =>
          fileInDir.startsWith(`${pageFilename}-example.hbs`)
        );
    }
  };
};
