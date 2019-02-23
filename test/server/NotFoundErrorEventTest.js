'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const NotFoundErrorEvent = require('./../../server/NotFoundErrorEvent')
const CustomNotFoundEndpoint = require('./../../server/CustomNotFoundEndpoint')
const { CustomStream } = require('./common')

class InvokedNotFoundErrorEvent extends AsyncObject {
  constructor (event) {
    super(event)
  }

  syncCall () {
    return (event) => {
      event()
      return event
    }
  }
}

new Assertion(
  new Is(
    new InvokedNotFoundErrorEvent(
      new NotFoundErrorEvent(
        new CustomNotFoundEndpoint(new RegExp(/^\/not-found/)),
        new CustomStream(),
        new CustomStream()
      )
    ),
    Function
  )
).call()
