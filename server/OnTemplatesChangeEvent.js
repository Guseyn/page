'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { ExecutedScripts } = require('@cuties/scripts');
const { Value } = require('@cuties/json');

class OnTemplatesChangeEvent extends AsyncObject {

  constructor(config) {
    super(config);
  }

  definedSyncCall() {
    return (config) => {
      return (eventType, fileName) => {
        new ExecutedScripts(
          new Value(config, 'staticGeneratorsDirectory')
        ).call();
      }
    }
  }

}

module.exports = OnTemplatesChangeEvent;
