'use strict'

const { AsyncObject } = require('@cuties/cutie')
const OnStaticGeneratorsChangeEvent = require('./../../server/OnStaticGeneratorsChangeEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

class InvokedOnStaticGeneratorsChangeEvent extends AsyncObject {
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
    new OnStaticGeneratorsChangeEvent('./test/server/files'),
    Function
  )
).after(
  new Assertion(
    new Is(
      new InvokedOnStaticGeneratorsChangeEvent(
        new OnStaticGeneratorsChangeEvent('./test/server/files'),
        'change', 'index.html'
      ),
      Function
    )
  ).after(
    new Assertion(
      new Is(
        new InvokedOnStaticGeneratorsChangeEvent(
          new OnStaticGeneratorsChangeEvent('./test/server/files'),
          'create', 'index.html'
        ),
        Function
      )
    )
  )
).call()
