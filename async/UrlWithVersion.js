'use strict'

const { AsyncObject } = require('@cuties/cutie')

class UrlWithVersion extends AsyncObject {
  constructor (url, version) {
    super(url, version)
  }

  syncCall () {
    return (url, version) => {
      return `${url}?v=${version}`
    }
  }
}

module.exports = UrlWithVersion
