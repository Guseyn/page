'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { RestApi } = require('@cuties/rest');

class CreatedRestApi extends AsyncObject {

  constructor(...methods) {
    super(...methods);
  }

  definedSyncCall() {
    return (...methods) => {
      return new RestApi(...methods);
    }
  }


}

module.exports = CreatedRestApi;
