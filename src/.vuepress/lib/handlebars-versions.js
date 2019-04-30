const axios = require("axios");
const semver = require("semver");

async function retrieveVersions() {
  const npmMetadata = await retrieveHandlebarsMetadataFromNpmjs();

  const allVersions = Object.keys(npmMetadata.versions);
  allVersions.sort(semver.rcompare);

  return {
    latest: npmMetadata["dist-tags"].latest,
    allVersions
  };
}

async function retrieveHandlebarsMetadataFromNpmjs() {
  const response = await axios.get("http://registry.npmjs.org/handlebars/");
  return response.data;
}

module.exports = {
  retrieveVersions
};
