'use strict'

const { ParsedJSON } = require('@cuties/json')
const { ReadDataByPath } = require('@cuties/fs')

class Config {
  constructor (jsonFile) {
    return new ParsedJSON(
      new ReadDataByPath(jsonFile)
    )
  }
}

module.exports = Config
