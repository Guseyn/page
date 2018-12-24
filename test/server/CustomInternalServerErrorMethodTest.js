'use strict'

const { InternalServerErrorMethod } = require('@cuties/rest')
const CustomInternalServerErrorMethod = require('./../../server/CustomInternalServerErrorMethod');
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new CustomInternalServerErrorMethod(),
    InternalServerErrorMethod
  )
).call()
