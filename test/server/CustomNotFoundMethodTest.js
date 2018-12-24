'use strict'

const { NotFoundMethod } = require('@cuties/rest')
const CustomNotFoundMethod = require('./../../server/CustomNotFoundMethod');
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new CustomNotFoundMethod(new RegExp(/^\/not-found/)),
    NotFoundMethod
  )
).call()
