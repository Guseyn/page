'use strict'

const {
  NotFoundMethod
} = require('@cuties/rest');

class CustomNotFoundMethod extends NotFoundMethod {

  constructor(regexpUrl) {
    super(regexpUrl);
  }
  
  invoke(request, response) {
    super.invoke(request, response);
  }

}

module.exports = CustomNotFoundMethod;
