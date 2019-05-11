'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { SpawnedCommand } = require('@cuties/spawn')

class OnStaticJsFilesChangeEvent extends AsyncObject {
  constructor (pageStaticJsFilesDirectory, pageBundleJsFile) {
    super(pageStaticJsFilesDirectory, pageBundleJsFile)
  }

  syncCall () {
    return (pageStaticJsFilesDirectory, pageBundleJsFile) => {
      return (eventType, fileName) => {
        if (eventType === 'change') {
          new SpawnedCommand('grunt').call()
        }
      }
    }
  }
}

module.exports = OnStaticJsFilesChangeEvent
