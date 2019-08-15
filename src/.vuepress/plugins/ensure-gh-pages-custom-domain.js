const fs = require("fs-extra");
const path = require("path");

module.exports = {
  ensureGhPagesCustomDomain
};

function ensureGhPagesCustomDomain(options, ctx) {
  return {
    name: "copy CNAME to ensure custom domain settings on Github-pages",
    async generated() {
      return fs.copy("CNAME", path.join(ctx.outDir, "CNAME"));
    }
  };
}
