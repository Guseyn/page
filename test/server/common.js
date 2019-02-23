'use strict'

const { Duplex } = require('stream')
const { AsyncObject } = require('@cuties/cutie')

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

class InvokedEndpoint extends AsyncObject {
  constructor (method, request, response) {
    super(method, request, response)
  }

  syncCall () {
    return (method, request, response) => {
      method.body.call(request, response)
      return method
    }
  }
}

module.exports = { CustomStream, InvokedEndpoint }
