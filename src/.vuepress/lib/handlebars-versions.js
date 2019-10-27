import axios from "axios";
import semver from "semver";

export async function retrieveHandlebarsVersions() {
  const npmMetadata = await retrieveHandlebarsMetadataFromNpmjs();

  const allVersions = Object.keys(npmMetadata.versions).filter(version => semver.gte(version, "3.0.0"));
  allVersions.sort(semver.rcompare);

  return {
    latest: npmMetadata["dist-tags"].latest,
    allVersions
  };
}

async function retrieveHandlebarsMetadataFromNpmjs() {
  const response = await axios.get("https://registry.npmjs.org/handlebars/");
  return response.data;
}
