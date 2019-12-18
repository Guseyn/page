'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

class UrlToFSPathMapper extends AsyncObject {
  constructor (staticDirectory) {
    super(staticDirectory || '')
  }

  syncCall () {
    return (staticDirectory) => {
      return (url) => {
        let fileLocation
        // without version of file
        url = url.replace(/\?v=([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$/, '')
        if (staticDirectory) {
          fileLocation = path.join(staticDirectory, ...url.split('/').filter(path => path !== ''))
        } else {
          fileLocation = path.join(...url.split('/').filter(path => path !== ''))
        }
        return fileLocation
      }
    }
  }
}

module.exports = UrlToFSPathMapper
