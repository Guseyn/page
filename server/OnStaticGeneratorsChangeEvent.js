'use strict'

const { AsyncObject, as } = require('@cuties/cutie');
const { ExecutedScripts } = require('@cuties/scripts');
const { Value } = require('@cuties/json');
const { DoesFileExistSync, StatsByPath, IsFile } = require('@cuties/fs');
const { JoinedPaths } = require('@cuties/path');
const { If, Else } = require('@cuties/if-else');

class OnStaticGeneratorsChangeEvent extends AsyncObject {

  constructor(staticGeneratorsDirectoryPath) {
    super(staticGeneratorsDirectoryPath);
  }

  definedSyncCall() {
    return (staticGeneratorsDirectoryPath) => {
      return (eventType, fileName) => {
        if (eventType === 'change') {
          new ExecutedScripts(
            new JoinedPaths(
              staticGeneratorsDirectoryPath, fileName
            )
          ).call();
        }
      }
    }
  }

}

module.exports = OnStaticGeneratorsChangeEvent;
