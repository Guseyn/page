'use strict'

const { as } = require('@cuties/cutie');
const { ProcessWithExitEvent, KilledProcess } = require('@cuties/process');
const { ParsedJSON, Value } = require('@cuties/json');
const { ExecutedScripts } = require('@cuties/scripts');
const { ReadDataByPath } = require('@cuties/fs');
const PrintedToConsolePageLogo = require('./../PrintedToConsolePageLogo');
const ExecutedGruntBuild = require('./../ExecutedGruntBuild');
const env = process.env.NODE_ENV || 'local';

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
    new ExecutedGruntBuild(process).after(
      new ExecutedScripts(
        new Value(as('config'), 'staticGenerators')
      )
    )
  )
).call();
