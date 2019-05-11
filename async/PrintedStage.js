'use strict'

const { AsyncObject, as } = require('@cuties/cutie')
const { ReadDataByPath } = require('@cuties/fs')
const { Value } = require('@cuties/json')

class PrintedLogo extends AsyncObject {
  constructor (logo, version, step) {
    super(logo, version, step)
  }

  syncCall () {
    return (logo, version, step) => {
      console.log(`${logo}${version}\n\n${step}\n`)
      return logo
    }
  }
}

class PrintedStage {
  constructor (config, packageJSON, message) {
    return new PrintedLogo(
      new ReadDataByPath(
        new Value(config, 'page.logoText')
      ),
      new Value(packageJSON, 'version'),
      message
    )
  }
}

module.exports = PrintedStage
