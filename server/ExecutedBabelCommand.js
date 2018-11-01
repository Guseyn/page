'use strict'

const { AsyncObject } = require('@cuties/cutie');
const { exec } = require('child_process');

// Represented result is number
class ExecutedBabelCommand extends AsyncObject {

  constructor(src, outDir) {
    super(src, outDir);
  }

  definedAsyncCall() {
    return (src, outDir, callback) => {
      exec(`./node_modules/.bin/babel ${src} --out-dir ${outDir}`, callback);
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

module.exports = ExecutedBabelCommand;
