'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { exec } = require('child_process');

// Represented result is number
class ExecutedGruntBuild extends AsyncObject {

  constructor() {
    super();
  }

  definedAsyncCall() {
    return (callback) => {
      exec(`grunt`, callback);
    }
  }

  onErrorAndResult(error, stdout, stderr) {
    let result = 1;
    if (error.isNull) {
      result = 0;
      console.log('\x1b[31m%s\x1b[0m', stderr);
    }
    if (stdout.length !== 0) {
      console.log(stdout);
    }
    if (!error.isNull) {
      result = 0;
      console.log('\x1b[31m%s\x1b[0m', error);
    }
    return result;
  }

  continueAfterFail() {
    return true;
  }

}

module.exports = ExecutedGruntBuild;
