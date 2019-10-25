// Cache version -> Promise<Handlebars>
const handlebarsCache = {};

export async function lazyGetHandlebars(version) {
  if (handlebarsCache[version] == null) {
    handlebarsCache[version] = loadHandlebarsWhenReady(version);
  }
  return handlebarsCache[version];
}

async function loadHandlebarsWhenReady(version) {
  return loadHandlebarsNow(version);
}

async function loadHandlebarsNow(version) {
  const response = await fetch(resolveHandlebarsUrl(version));
  if (response.ok) {
    const exports = {};
    const handlebarsUmdCode = await response.text();
    Function("", handlebarsUmdCode).call(exports);
    return exports["Handlebars"];
  }
}

function resolveHandlebarsUrl(version) {
  return `https://unpkg.com/handlebars@${version}/dist/handlebars.min.js`;
}
