'use strict'

const { AsyncObject } = require('@cuties/cutie')
const OnPageStaticJsFilesChangeEvent = require('./../../server/OnPageStaticJsFilesChangeEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

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
    new OnPageStaticJsFilesChangeEvent('./test/server/files', 'index.js'),
    Function
  )
).after(
  new Assertion(
    new Is(
      new InvokedOnPageStaticJsFilesChangeEvent(
        new OnPageStaticJsFilesChangeEvent('./test/server/files', 'index.js'),
        'change', './test/server/files/index.js'
      ),
      Function
    )
  ).after(
    new Assertion(
      new Is(
        new InvokedOnPageStaticJsFilesChangeEvent(
          new OnPageStaticJsFilesChangeEvent('./test/server/files', 'index.js'),
          'create', 'index.js'
        ),
        Function
      )
    )
  )
).call()
