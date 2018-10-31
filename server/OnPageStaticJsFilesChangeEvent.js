'use strict'

const { AsyncObject } = require('@cuties/cutie');

class OnPageStaticJsFilesChangeEvent extends AsyncObject {

  constructor(pageStaticJsFilesDirectory, pageBundleJsFile) {
    super(pageStaticJsFilesDirectory, pageBundleJsFile);
  }

  definedSyncCall() {
    return (pageStaticJsFilesDirectory, pageBundleJsFile) => {
      return (eventType, fileName) => {
        if (eventType === 'change') {
          // TODO: use here babel
        }
      }
    }
  }

}

module.exports = OnPageStaticJsFilesChangeEvent;
