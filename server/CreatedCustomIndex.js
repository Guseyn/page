'use strict'

const { AsyncObject } = require('@cuties/cutie');
const CustomIndex = require('./CustomIndex');

class CreatedCustomIndex extends AsyncObject {

  constructor(page, notFoundMethod) {
    super(page, notFoundMethod);
  }

  definedSyncCall() {
    return (page, notFoundMethod) => {
      return new CustomIndex(page, notFoundMethod);
    }
  }


}

module.exports = CreatedCustomIndex;
