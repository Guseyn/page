'use strict'

const path = require('path');
const cluster = require('cluster');
const { as } = require('@cuties/cutie');
const { If, Else } = require('@cuties/if-else');
const { IsMaster, ClusterWithForkedWorkers } = require('@cuties/cluster');
const { ParsedJSON, Value } = require('@cuties/json');
const { ExecutedScripts } = require('@cuties/scripts');
const { Backend, RestApi, ServingFiles, CachedServingFiles } = require('@cuties/rest');
const { ReadDataByPath, WatcherWithEventTypeAndFilenameListener } = require('@cuties/fs');
const CustomNotFoundMethod = require('./CustomNotFoundMethod');
const OnStaticGeneratorsChangeEvent = require('./OnStaticGeneratorsChangeEvent');
const OnTemplatesChangeEvent = require('./OnTemplatesChangeEvent');
const PrintedToConsolePageLogo = require('./PrintedToConsolePageLogo');

const numCPUs = require('os').cpus().length;
const notFoundMethod = new CustomNotFoundMethod(new RegExp(/\/not-found/));
const mapper = (url) => {
  return path.join(...url.split('/').filter(path => path !== ''));
}

const launchedBackend = new Backend(
  new Value(as('config'), 'port'),
  new Value(as('config'), 'host'),
  new RestApi(
    new ServingFiles(new RegExp(/\/static/), mapper, notFoundMethod),
    notFoundMethod
  )
);

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new If(
    new IsMaster(cluster),
    new PrintedToConsolePageLogo(
      new ReadDataByPath(
        new Value(as('config'), 'pageLogoText')
      ),
      new Value(as('config'), 'pageVersion')
    ).after(
      new ExecutedScripts(
        new Value(as('config'), 'staticGeneratorsDirectory')
      ).after(
        new WatcherWithEventTypeAndFilenameListener(
          new Value(as('config'), 'staticGeneratorsDirectory'),
          { persistent: true, recursive: true, encoding: 'utf8' },
          new OnStaticGeneratorsChangeEvent(as('config'))
        ).after(
          new WatcherWithEventTypeAndFilenameListener(
            new Value(as('config'), 'templatesDirectory'),
            { persistent: true, recursive: true, encoding: 'utf8' },
            new OnTemplatesChangeEvent(as('config'))
          )
        )
      )
    )
  ).after(
    new If(
      new Value(as('config'), 'clusterMode'),
      new If(
        new IsMaster(cluster),
        new ClusterWithForkedWorkers(
          cluster, numCPUs
        ),
        new Else(
          launchedBackend
        )
      ),
      new Else(
        launchedBackend
      )
    )
  )
).call();
