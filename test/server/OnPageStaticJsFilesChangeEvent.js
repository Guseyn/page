'use strict'

const OnPageStaticJsFilesChangeEvent = require('./../../server/OnPageStaticJsFilesChangeEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new OnPageStaticJsFilesChangeEvent({}, {}),
    Function
  )
).call()
