'use strict'

const OnStaticGeneratorsChangeEvent = require('./../../server/OnStaticGeneratorsChangeEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new OnStaticGeneratorsChangeEvent({}),
    Function
  )
).call()
