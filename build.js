'use strict'

const { as } = require('@cuties/cutie')
const { Value } = require('@cuties/json')
const { ExecutedScripts } = require('@cuties/scripts')
const { SpawnedCommand } = require('@cuties/spawn')
const { ExecutedLint, ExecutedTestCoverage, ExecutedTestCoverageCheck } = require('@cuties/wall')
const Config = require('./async/Config')
const PrintedStage = require('./async/PrintedStage')
const env = process.env.NODE_ENV || 'local'

new Config('./config.json').as('config').after(
  new Config('./package.json').as('packageJSON').after(
    new PrintedStage(as('config'), as('packageJSON'), `BUILD (${env})`).after(
      new ExecutedLint(process, './pages', './server', './static/js/src', './test').after(
        new ExecutedTestCoverageCheck(
          new ExecutedTestCoverage(process, './test.js'),
          { 'lines': 100, 'functions': 100, 'branches': 100 }
        ).after(
          new SpawnedCommand('grunt').after(
            new ExecutedScripts(
              'node', 'js', new Value(as('config'), 'staticGenerators')
            )
          )
        )
      )
    )
  )
).call()
