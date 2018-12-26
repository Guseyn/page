'use strict'

const { InternalServerErrorMethod } = require('@cuties/rest')
const CustomInternalServerErrorMethod = require('./../../server/CustomInternalServerErrorMethod')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { CustomStream, InvokedMethod } = require('./common')

new Assertion(
  new Is(
    new InvokedMethod(
      new CustomInternalServerErrorMethod(),
      new CustomStream(),
      new CustomStream()
    ), InternalServerErrorMethod
  )
).call()
