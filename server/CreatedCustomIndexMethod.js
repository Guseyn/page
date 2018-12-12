'use strict'

const { AsyncObject } = require('@cuties/cutie');
const CustomIndexMethod = require('./CustomIndexMethod');

class CreatedCustomIndexMethod extends AsyncObject {

  constructor(page, notFoundMethod) {
    super(page, notFoundMethod);
  }

  definedSyncCall() {
    return (page, notFoundMethod) => {
      return new CustomIndexMethod(page, notFoundMethod);
    }
  }


}

module.exports = CreatedCustomIndexMethod;
