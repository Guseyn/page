'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { ExecutedScripts } = require('@cuties/scripts')

class OnTemplatesChangeEvent extends AsyncObject {
  constructor (staticGeneratorsDirectoryPath) {
    super(staticGeneratorsDirectoryPath)
  }

  syncCall () {
    return (staticGeneratorsDirectoryPath) => {
      return (eventType, fileName) => {
        new ExecutedScripts(
          'node', 'js', staticGeneratorsDirectoryPath
        ).call()
      }
    }
  }
}

module.exports = OnTemplatesChangeEvent
