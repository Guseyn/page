'use strict'

const { AsyncObject } = require('@cuties/cutie')
const UrlToFSPathMapper = require('./../../server/UrlToFSPathMapper')
const { StrictEqualAssertion } = require('@cuties/assert')

class FSPathByUrl extends AsyncObject {
  constructor (url, mapper) {
    super(url, mapper)
  }

  syncCall () {
    return (url, mapper) => {
      return mapper(url)
    }
  }
}

new StrictEqualAssertion(
  new FSPathByUrl(
    '/html/file.html',
    new UrlToFSPathMapper('static')
  ), 'static/html/file.html'
).after(
  new StrictEqualAssertion(
    new FSPathByUrl(
      '/html/file.html',
      new UrlToFSPathMapper()
    ), 'html/file.html'
  )
).call()
