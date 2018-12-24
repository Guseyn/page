'use strict'

const { IndexMethod } = require('@cuties/rest')
const CustomIndexMethod = require('./../../server/CustomIndexMethod');
const CustomNotFoundMethod = require('./../../server/CustomNotFoundMethod');
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new CustomIndexMethod(
      'index.html', 
      new CustomNotFoundMethod(new RegExp(/^\/not-found/))
    ), IndexMethod
  )
).call()
