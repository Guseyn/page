'use strict'

const { AsyncObject } = require('@cuties/cutie')
const ExecutedGruntBuild = require('./../async/ExecutedGruntBuild')

class OnPageStaticJsFilesChangeEvent extends AsyncObject {
  constructor (pageStaticJsFilesDirectory, pageBundleJsFile) {
    super(pageStaticJsFilesDirectory, pageBundleJsFile)
  }

  syncCall () {
    return (pageStaticJsFilesDirectory, pageBundleJsFile) => {
      return (eventType, fileName) => {
        if (eventType === 'change') {
          new ExecutedGruntBuild(process).call()
        }
      }
    }
  }
}

module.exports = OnPageStaticJsFilesChangeEvent
