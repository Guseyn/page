'use strict'

const { AsyncObject } = require('@cuties/cutie');

class ConcatenatedData extends AsyncObject {

  constructor(dataObj) {
    super(dataObj);
  }

  definedSyncCall() {
    return (dataObj) => {
      return Buffer.concat(Object.values(dataObj));
    }
  }

}

module.exports = ConcatenatedData;
