'use strict'

const { AsyncObject } = require('@cuties/cutie');
const executedGruntBuild = require('./custom-calls/executedGruntBuild');

// Represented result is process
class ExecutedGruntBuild extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedAsyncCall() {
    return executedGruntBuild;
  }

}

module.exports = ExecutedGruntBuild;
