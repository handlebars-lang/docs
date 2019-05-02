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
  return new Promise(async (resolve, reject) => {
    script.addEventListener("load", () => {
      try {
        let globalHandlebars = getAndRemoveGlobalHandlebars();
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
  return `http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v${version}.js`;
}

function getAndRemoveGlobalHandlebars() {
  if (window.Handlebars == null) {
    throw new Error(
      `Handlebars version ${version} did not save global "Handlebars" variable, despite script loading successfully!`
    );
  }
  return window.Handlebars.noConflict();
}

/*

    return new Promise((resolve, reject) => {


        const hbsScript = createHandlebarsScriptElement(version);
        hbsScript.addEventListener("load", () => {
            let handlebarsInstance = getGlobalHandlebarsAndCleanUp(hbsScript);
            if (!window.Handlebars) {
                return reject(new Error("Handlebars entity not found after successful load"));
            }
            return resolve(handlebarsInstance);
        });

        hbsScript.addEventListener("error", err => {
            debugger;
            hbsScript.remove();
            if (Handlebars) {
                Handlebars.noConflict();
            }
            reject(err);
        });
        document.body.appendChild(hbsScript)
    });

 */
