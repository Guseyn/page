'use strict'

const { as } = require('@cuties/cutie')
const { Value } = require('@cuties/json')
const { ExecutedScripts } = require('@cuties/scripts')
const { ExecutedLint, ExecutedTestCoverage, ExecutedTestCoverageCheck } = require('@cuties/wall')
const Config = require('./async/Config')
const PrintedStage = require('./async/PrintedStage')
const env = process.env.NODE_ENV || 'local'

new Config('./config.json').as('CONFIG').after(
  new Config('./package.json').as('PACKAGE_JSON').after(
    new PrintedStage(as('CONFIG'), as('PACKAGE_JSON'), `BUILD (${env})`).after(
      new ExecutedLint(process, './pages', './server', './test').after(
        new ExecutedTestCoverageCheck(
          new ExecutedTestCoverage(process, './test.js'),
          { 'lines': 100, 'functions': 100, 'branches': 100 }
        ).after(
          new ExecutedScripts(
            'node', 'js', new Value(as('CONFIG'), 'staticGenerators')
          )
        )
      )
    )
  )
).call()
