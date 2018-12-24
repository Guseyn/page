'use strict'

const OnTemplatesChangeEvent = require('./../../server/OnTemplatesChangeEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new OnTemplatesChangeEvent({}),
    Function
  )
).call()
