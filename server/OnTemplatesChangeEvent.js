'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { ExecutedScripts } = require('@cuties/scripts');
const { Value } = require('@cuties/json');

class OnTemplatesChangeEvent extends AsyncObject {

  constructor(staticGeneratorsDirectoryPath) {
    super(staticGeneratorsDirectoryPath);
  }

  definedSyncCall() {
    return (staticGeneratorsDirectoryPath) => {
      return (eventType, fileName) => {
        new ExecutedScripts(
          staticGeneratorsDirectoryPath
        ).call();
      }
    }
  }

}

module.exports = OnTemplatesChangeEvent;
