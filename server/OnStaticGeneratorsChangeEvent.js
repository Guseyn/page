'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { ExecutedScripts } = require('@cuties/scripts')
const { JoinedPaths } = require('@cuties/path')

class OnStaticGeneratorsChangeEvent extends AsyncObject {
  constructor (staticGeneratorsDirectoryPath) {
    super(staticGeneratorsDirectoryPath)
  }

  syncCall () {
    return (staticGeneratorsDirectoryPath) => {
      return (eventType, fileName) => {
        if (eventType === 'change') {
          new ExecutedScripts(
            new JoinedPaths(
              staticGeneratorsDirectoryPath, fileName
            )
          ).call()
        }
      }
    }
  }
}

module.exports = OnStaticGeneratorsChangeEvent
