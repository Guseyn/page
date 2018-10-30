'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is file
class LoggedWrittenPageBundleJsFile extends AsyncObject {

  constructor(file) {
    super(file);
  }

  definedSyncCall() {
    return (file) => {
      console.log(`${file} is generated`);
      return file;
    }
  }

}

module.exports = LoggedWrittenPageBundleJsFile;
