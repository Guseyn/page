'use strict'

const { AsyncObject } = require('@cuties/cutie')
const CustomIndexEndpoint = require('./CustomIndexEndpoint')

class CreatedCustomIndexEndpoint extends AsyncObject {
  constructor (page, notFoundEndpoint) {
    super(page, notFoundEndpoint)
  }

  syncCall () {
    return (page, notFoundEndpoint) => {
      return new CustomIndexEndpoint(page, notFoundEndpoint)
    }
  }
}

module.exports = CreatedCustomIndexEndpoint
