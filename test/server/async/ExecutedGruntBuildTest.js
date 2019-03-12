'use strict'

const ExecutedGruntBuild = require('./../../../server/async/ExecutedGruntBuild')
const { DeepStrictEqualAssertion } = require('@cuties/assert')

class FailedGrundBuild extends ExecutedGruntBuild {
  constructor (process, fileName) {
    super(process, fileName)
  }

  onError (error) {
    console.log('ooops')
    console.log(error)
  }
}

new DeepStrictEqualAssertion(
  new ExecutedGruntBuild(process),
  process
).after(
  new FailedGrundBuild(process, 'notExistingGrundfile')
).call()
