'use strict'

const { AsyncObject, as } = require('@cuties/cutie')
const { ReadDataByPath } = require('@cuties/fs')
const { Value } = require('@cuties/json')

class PrintedToConsolePageLogo extends AsyncObject {
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
  constructor (stage) {
    return new PrintedToConsolePageLogo(
      new ReadDataByPath(
        new Value(as('config'), 'page.logoText')
      ),
      new Value(as('config'), 'page.version'),
      stage
    )
  }
}

module.exports = PrintedStage
