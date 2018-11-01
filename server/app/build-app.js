'use strict'

const cluster = require('cluster');
const { as } = require('@cuties/cutie');
const { If, Else } = require('@cuties/if-else');
const { ProcessWithExitEvent, KilledProcess } = require('@cuties/process');
const { IsMaster, ClusterWithForkedWorkers, ClusterWithExitEvent } = require('@cuties/cluster');
const { ParsedJSON, Value } = require('@cuties/json');
const { ExecutedScripts } = require('@cuties/scripts');
const { ReadDataByPath } = require('@cuties/fs');
const PrintedToConsolePageLogo = require('./../PrintedToConsolePageLogo');
const ExecutedBabelCommand = require('./../ExecutedBabelCommand');
const env = process.env.NODE_ENV || 'local';

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new If(
    new IsMaster(cluster),
    new PrintedToConsolePageLogo(
      new ReadDataByPath(
        new Value(
          as('config'),
          'pageLogoText'
        )
      ),
      new Value(
        as('config'),
        'pageVersion'
      ),
      'BUILD'
    ).after(
      new ExecutedScripts(
        new Value(
          as('config'),
          'staticGeneratorsDirectory'
        )
      ).after(
        new ExecutedBabelCommand(
          new Value(
            as('config'),
            'pageStaticJsFilesDirectory'
          ),
          new Value(
            as('config'),
            'pageOutStaticJsFilesDirectory'
          )
        )
      )
    )
  )
).call();
