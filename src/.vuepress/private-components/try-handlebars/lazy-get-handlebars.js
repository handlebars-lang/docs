// Cache version -> Promise<Handlebars>
const handlebarsCache = {};
let lastHandlebarsLoadPromise = Promise.resolve();

export async function lazyGetHandlebars(version) {
  if (handlebarsCache[version] == null) {
    handlebarsCache[version] = loadHandlebarsWhenReady(version);
  }
  return handlebarsCache[version];
}

async function loadHandlebarsWhenReady(version) {
  lastHandlebarsLoadPromise = lastHandlebarsLoadPromise.then(
    () => loadHandlebarsNow(version),
    () => loadHandlebarsNow(version)
  );
  return lastHandlebarsLoadPromise;
}

async function loadHandlebarsNow(version) {
  const script = createHandlebarsScriptElement(version);
  return new Promise((resolve, reject) => {
    script.addEventListener("load", () => {
      try {
        let globalHandlebars = getAndRemoveGlobalHandlebars(version);
        return resolve(globalHandlebars);
      } catch (err) {
        reject(err);
      } finally {
        script.remove();
      }
    });
    script.addEventListener("error", errorObject => {
      script.remove();
      reject(new Error(`The script ${errorObject.target.src} didn't load correctly.`));
    });
    document.body.appendChild(script);
  });
}

function createHandlebarsScriptElement(version) {
  const script = document.createElement("script");
  script.src = resolveHandlebarsUrl(version);
  script.type = "application/javascript";
  return script;
}

function resolveHandlebarsUrl(version) {
  return `https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/${version}/handlebars.min.js`;
}

function getAndRemoveGlobalHandlebars(version) {
  let currentHandlebarsInstance = window.Handlebars;
  if (currentHandlebarsInstance == null) {
    throw new Error(
      `Handlebars version ${version} did not save global "Handlebars" variable, despite script loading successfully!`
    );
  }

  window.Handlebars.noConflict();
  return currentHandlebarsInstance;
}
