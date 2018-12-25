'use strict'

const { Duplex } = require('stream')
const { AsyncObject } = require('@cuties/cutie')
const { IndexMethod } = require('@cuties/rest')
const CustomIndexMethod = require('./../../server/CustomIndexMethod')
const CustomNotFoundMethod = require('./../../server/CustomNotFoundMethod')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

class CustomStream extends Duplex {
  constructor (options, store) {
    super(options)
    this.store = store || []
    this.headers = []
    this.statusCode = 200
  }

  _write (chunk, encoding, callback) {
    this.store.push(chunk)
    if (!chunk) {
      callback(new Error('chunk is invalid'))
    } else {
      callback()
    }
  }

  _read (size, encoding) {
    if (size < 0) {
      process.nextTick(() => this.emit('error', new Error('read error')))
      return
    }
    this.push(Buffer.from(this.store.splice(0, size), encoding))
  }

  setHeader (name, value) {
    this.headers.push({ name: value })
  }
}

class InvokedMethod extends AsyncObject {
  constructor (method, request, response) {
    super(method, request, response)
  }

  definedSyncCall () {
    return (method, request, response) => {
      method.invoke(request, response)
      return method
    }
  }
}

new Assertion(
  new Is(
    new CustomIndexMethod(
      './files/index.html',
      new CustomNotFoundMethod(new RegExp(/^\/not-found/))
    ), IndexMethod
  )
).after(
  new Assertion(
    new Is(
      new InvokedMethod(
        new CustomIndexMethod(
          './files/index.html',
          new CustomNotFoundMethod(new RegExp(/^\/not-found/))
        ),
        new CustomStream(),
        new CustomStream()
      ), CustomIndexMethod
    )
  )
).call()
