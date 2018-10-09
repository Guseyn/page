'use strict'

const {
  Event
} = require('@cuties/cutie');

class NotFoundErrorEvent extends Event {

  constructor(notFoundMethod, request, response) {
    super();
    this.notFoundMethod = notFoundMethod;
    this.request = request;
    this.response = response;
  }

  definedBody(error) {
    this.notFoundMethod.invoke(this.request, this.response);
  }

}

module.exports = NotFoundErrorEvent;
