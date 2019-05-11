'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

const OnStaticJsFilesChangeEvent = require('./../../../server/events/OnStaticJsFilesChangeEvent')

class InvokedOnPageStaticJsFilesChangeEvent extends AsyncObject {
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
    new OnStaticJsFilesChangeEvent('./test/server/files', 'index.js'),
    Function
  )
).after(
  new Assertion(
    new Is(
      new InvokedOnPageStaticJsFilesChangeEvent(
        new OnStaticJsFilesChangeEvent('./test/server/files', 'index.js'),
        'change', './test/server/files/index.js'
      ),
      Function
    )
  ).after(
    new Assertion(
      new Is(
        new InvokedOnPageStaticJsFilesChangeEvent(
          new OnStaticJsFilesChangeEvent('./test/server/files', 'index.js'),
          'create', 'index.js'
        ),
        Function
      )
    )
  )
).call()
