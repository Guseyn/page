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
        return path.join(staticDirectory, ...url.split('/').filter(path => path !== ''))
      }
    }
  }
}

module.exports = UrlToFSPathMapper
