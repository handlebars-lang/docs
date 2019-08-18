/* eslint-env node */

import fs from "fs-extra";
import path from "path";

export function ensureGhPagesCustomDomain(options, ctx) {
  return {
    name: "copy CNAME to ensure custom domain settings on Github-pages",
    async generated() {
      return fs.copy("CNAME", path.join(ctx.outDir, "CNAME"));
    }
  };
}
