'use strict'

const { as } = require('@cuties/cutie')
const { ParsedJSON, Value } = require('@cuties/json')
const { ExecutedScripts } = require('@cuties/scripts')
const { ReadDataByPath } = require('@cuties/fs')
const PrintedToConsolePageLogo = require('./../PrintedToConsolePageLogo')
const { ExecutedLint, ExecutedTestCoverage, ExecutedTestCoverageCheck } = require('@cuties/wall')
const ExecutedGruntBuild = require('./../ExecutedGruntBuild')
const env = process.env.NODE_ENV || 'local'

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new PrintedToConsolePageLogo(
    new ReadDataByPath(
      new Value(as('config'), 'page.logoText')
    ),
    new Value(as('config'), 'page.version'),
    `BUILD (${env})`
  ).after(
    new ExecutedLint(process, './server', './static/js/es6', './test').after(
      new ExecutedTestCoverageCheck(
        new ExecutedTestCoverage(process, './test-executor.js'),
        { 'lines': 100, 'functions': 100, 'branches': 100 }
      ).after(
        new ExecutedGruntBuild(process).after(
          new ExecutedScripts(
            new Value(as('config'), 'staticGenerators')
          )
        )
      )
    )
  )
).call()
