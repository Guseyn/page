'use strict'

const cluster = require('cluster')
const { as } = require('@cuties/cutie')
const { If, Else } = require('@cuties/if-else')
const { IsMaster, ClusterWithForkedWorkers, ClusterWithExitEvent } = require('@cuties/cluster')
const { ParsedJSON, Value } = require('@cuties/json')
const { Backend, RestApi, CreatedServingFilesEndpoint } = require('@cuties/rest')
const { ReadDataByPath, WatcherWithEventTypeAndFilenameListener } = require('@cuties/fs')
const CustomNotFoundEndpoint = require('./../CustomNotFoundEndpoint')
const CustomInternalServerErrorEndpoint = require('./../CustomInternalServerErrorEndpoint')
const CreatedCustomIndexEndpoint = require('./../CreatedCustomIndexEndpoint')
const OnPageStaticJsFilesChangeEvent = require('./../OnPageStaticJsFilesChangeEvent')
const OnStaticGeneratorsChangeEvent = require('./../OnStaticGeneratorsChangeEvent')
const OnTemplatesChangeEvent = require('./../OnTemplatesChangeEvent')
const ReloadedBackendOnFailedWorkerEvent = require('./../ReloadedBackendOnFailedWorkerEvent')
const UrlToFSPathMapper = require('./../UrlToFSPathMapper')
const PrintedToConsolePageLogo = require('./../PrintedToConsolePageLogo')

const numCPUs = require('os').cpus().length
const env = process.env.NODE_ENV || 'local'
const devEnv = env === 'local' || env === 'dev'

const launchedBackend = new Backend(
  new Value(as('config'), `${env}.protocol`),
  new Value(as('config'), `${env}.port`),
  new Value(as('config'), `${env}.host`),
  new RestApi(
    new CreatedCustomIndexEndpoint(
      new Value(as('config'), 'index'),
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ),
    new CreatedServingFilesEndpoint(
      new RegExp(/^\/(css|html|image|js|txt)/),
      new UrlToFSPathMapper(
        new Value(as('config'), 'static')
      ),
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ),
    new CustomNotFoundEndpoint(new RegExp(/^\/not-found/)),
    new CustomInternalServerErrorEndpoint()
  )
)

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new If(
    new IsMaster(cluster),
    new PrintedToConsolePageLogo(
      new ReadDataByPath(
        new Value(as('config'), 'page.logoText')
      ),
      new Value(as('config'), 'page.version'),
      `RUN (${env})`
    ).after(
      new If(
        devEnv,
        new WatcherWithEventTypeAndFilenameListener(
          new Value(as('config'), 'staticGenerators'),
          { persistent: true, recursive: true, encoding: 'utf8' },
          new OnStaticGeneratorsChangeEvent(
            new Value(as('config'), 'staticGenerators')
          )
        ).after(
          new WatcherWithEventTypeAndFilenameListener(
            new Value(as('config'), 'templates'),
            { persistent: true, recursive: true, encoding: 'utf8' },
            new OnTemplatesChangeEvent(
              new Value(as('config'), 'staticGenerators')
            )
          ).after(
            new WatcherWithEventTypeAndFilenameListener(
              new Value(as('config'), 'staticJs'),
              { persistent: true, recursive: true, encoding: 'utf8' },
              new OnPageStaticJsFilesChangeEvent(
                new Value(as('config'), 'staticJs'),
                new Value(as('config'), 'bundleJs')
              )
            )
          )
        )
      ).after(
        new If(
          new Value(as('config'), `${env}.clusterMode`),
          new ClusterWithForkedWorkers(
            new ClusterWithExitEvent(
              cluster,
              new ReloadedBackendOnFailedWorkerEvent(cluster)
            ), numCPUs
          ),
          new Else(
            launchedBackend
          )
        )
      )
    ),
    new Else(
      launchedBackend
    )
  )
).call()
