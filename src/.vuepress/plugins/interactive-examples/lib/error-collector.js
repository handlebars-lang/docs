/* eslint-disable no-console */

import path from "path";

export class ErrorCollector {
  constructor(workingDir) {
    this.filesAndErrors = [];
    this.workingDir = workingDir;
  }

  collectErrorIfNotNull(filePath, error) {
    if (error != null) {
      this.filesAndErrors.push({ filePath, error });
    }
  }

  failOnErrors() {
    console.log("Checking for errors in example");
    this.filesAndErrors.forEach(fileAndError => {
      console.error("Example " + fileAndError.filePath + " has error " + fileAndError.error.stack);
    });
    if (this.filesAndErrors.length > 0) {
      let relativeErrorPaths = this.filesAndErrors.map(fileAndError =>
        path.relative(process.cwd(), fileAndError.filePath)
      );
      throw new Error("Errors in example files found (" + relativeErrorPaths + "). See error messages above.");
    }
    console.log("done");
  }
}
