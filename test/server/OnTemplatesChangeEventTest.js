'use strict'

const { AsyncObject } = require('@cuties/cutie')
const OnTemplatesChangeEvent = require('./../../server/OnTemplatesChangeEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

class InvokedOnTemplatesChangeEvent extends AsyncObject {
  constructor (event, eventType, fileName) {
    super(event, eventType, fileName)
  }

  syncCall () {
    return (event, eventType, fileName) => {
      event(eventType, fileName)
      return event
    }
  }
}

new Assertion(
  new Is(
    new OnTemplatesChangeEvent('./test/server/files'),
    Function
  )
).after(
  new Assertion(
    new Is(
      new InvokedOnTemplatesChangeEvent(
        new OnTemplatesChangeEvent('./test/server/files'),
        'change', 'index.html'
      ),
      Function
    )
  ).after(
    new Assertion(
      new Is(
        new InvokedOnTemplatesChangeEvent(
          new OnTemplatesChangeEvent('./test/server/files'),
          'create', 'index.html'
        ),
        Function
      )
    )
  )
).call()
