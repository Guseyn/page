'use strict'

const ExecutedGruntBuild = require('./../../server/ExecutedGruntBuild')
const { DeepStrictEqualAssertion } = require('@cuties/assert')

new DeepStrictEqualAssertion(
  new ExecutedGruntBuild(process),
  process
).call()
