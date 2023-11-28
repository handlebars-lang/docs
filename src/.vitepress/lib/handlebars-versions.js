import semver from "semver";

export async function retrieveHandlebarsVersions() {
  const response = await fetch("https://registry.npmjs.org/handlebars/");
  const npmMetaData = await response.json();

  const allVersions = Object.keys(npmMetaData.versions).filter((version) => semver.gte(version, "3.0.0"));
  allVersions.sort(semver.rcompare);

  return {
    latest: npmMetaData["dist-tags"].latest,
    allVersions,
  };
}
