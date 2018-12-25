'use strict'

const { AsyncObject } = require('@cuties/cutie')
const OnPageStaticJsFilesChangeEvent = require('./../../server/OnPageStaticJsFilesChangeEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

class InvokedOnPageStaticJsFilesChangeEvent extends AsyncObject {
  constructor (event, eventType, fileName) {
    super(event, eventType, fileName)
  }

  definedSyncCall () {
    return (event, eventType, fileName) => {
      event(eventType, fileName)
      return event
    }
  }
}

new Assertion(
  new Is(
    new OnPageStaticJsFilesChangeEvent('dir', 'file'),
    Function
  )
).after(
  new Assertion(
    new Is(
      new InvokedOnPageStaticJsFilesChangeEvent(
        new OnPageStaticJsFilesChangeEvent('dir', 'file'),
        'change', 'file'
      ),
      Function
    )
  ).after(
    new Assertion(
      new Is(
        new InvokedOnPageStaticJsFilesChangeEvent(
          new OnPageStaticJsFilesChangeEvent('dir', 'file'),
          'create', 'file'
        ),
        Function
      )
    )
  )
).call()
