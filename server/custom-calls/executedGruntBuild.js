'use strict'

const spawn = require('child_process').spawn;

module.exports = (process, callback) => {
  console.log(`Grunt build:`);
  const grunt = spawn('grunt', {
    stdio: [process.stdin, process.stdout, process.stderr]
  });
  grunt.on('close', (code) => {
    if (code === 0) {
      callback(null, process);
    } else {
      callback(new Error(`build failed with code ${code}`));
    }
  });
}
