'use strict'

const spawn = require('child_process').spawn

module.exports = (process, gruntFile, callback) => {
  gruntFile = gruntFile || './Gruntfile.js'
  console.log(`Grunt build (${gruntFile}):`)
  const grunt = spawn('grunt', ['--gruntfile', gruntFile], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  grunt.on('close', (code) => {
    if (code === 0) {
      callback(null, process)
    } else {
      callback(new Error(`build failed with code ${code}`))
    }
  })
}
