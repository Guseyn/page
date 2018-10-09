'use strict'

const { CreatedReadStream } = require('@cuties/fs');
const { ResponseWithStatusCode, ResponseWithHeader } = require('@cuties/http');
const { ResolvedPath, Extname } = require('@cuties/path');
const { PipedReadable, ReadableWithErrorEvent } = require('@cuties/stream');
const { Index } = require('@cuties/rest');
const NotFoundErrorEvent = require('./NotFoundErrorEvent');

class CustomIndex extends Index {

  constructor(page, notFoundMethod) {
    super();
    this.page = page;
    this.notFoundMethod = notFoundMethod;
  }
  
  invoke(request, response) {
    new PipedReadable(
      new ReadableWithErrorEvent(
        new CreatedReadStream(
          this.page
        ),
        new NotFoundErrorEvent(
          this.notFoundMethod, request, response
        )
      ),
      new ResponseWithStatusCode(
        new ResponseWithHeader(
          response, 'Content-Type',
          'text/html'
        ), 200
      )
    ).call();
  }

}

module.exports = CustomIndex;
