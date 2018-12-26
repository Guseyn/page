'use strict'

const { IndexMethod } = require('@cuties/rest')
const CustomIndexMethod = require('./../../server/CustomIndexMethod')
const CustomNotFoundMethod = require('./../../server/CustomNotFoundMethod')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { CustomStream, InvokedMethod } = require('./common')

new Assertion(
  new Is(
    new InvokedMethod(
      new CustomIndexMethod(
        './test/server/files/index.html',
        new CustomNotFoundMethod(new RegExp(/^\/not-found/))
      ),
      new CustomStream(),
      new CustomStream()
    ), IndexMethod
  )
).call()
