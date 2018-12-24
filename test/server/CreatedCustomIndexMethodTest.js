'use strict'

const { IndexMethod } = require('@cuties/rest')
const CreatedCustomIndexMethod = require('./../../server/CreatedCustomIndexMethod')
const CustomNotFoundMethod = require('./../../server/CustomNotFoundMethod');
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new CreatedCustomIndexMethod(
      'index.html', 
      new CustomNotFoundMethod(new RegExp(/^\/not-found/))
    ), IndexMethod
  )
).call()
