'use strict'

const { NotFoundMethod } = require('@cuties/rest')
const CustomNotFoundMethod = require('./../../server/CustomNotFoundMethod')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { CustomStream, InvokedMethod } = require('./common')

new Assertion(
  new Is(
    new InvokedMethod(
      new CustomNotFoundMethod(new RegExp(/^\/not-found/)),
      new CustomStream(),
      new CustomStream()
    ),
    NotFoundMethod
  )
).call()
