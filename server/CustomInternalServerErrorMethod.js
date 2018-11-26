'use strict'

const {
  InternalServerErrorMethod
} = require('@cuties/rest');

class CustomInternalServerErrorMethod extends InternalServerErrorMethod {

  constructor() {
    super();
  }
  
  invoke(request, response, error) {
    super.invoke(request, response, error);
  }

}

module.exports = CustomInternalServerErrorMethod;
