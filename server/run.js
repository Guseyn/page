'use strict'

const cluster = require('cluster')
const { as } = require('@cuties/cutie')
const { If, Else } = require('@cuties/if-else')
const { IsMaster, ClusterWithForkedWorkers, ClusterWithExitEvent } = require('@cuties/cluster')
const { Value } = require('@cuties/json')
const { Backend } = require('@cuties/rest')
const Config = require('./async/Config')
const PrintedStage = require('./async/PrintedStage')
const ReloadedBackendOnFailedWorkerEvent = require('./events/ReloadedBackendOnFailedWorkerEvent')
const api = require('./api')
const tunedWatchers = require('./tunedWatchers')

const numCPUs = require('os').cpus().length
const env = process.env.NODE_ENV || 'local'
const devEnv = env === 'local' || env === 'dev'

const launchedBackend = new Backend(
  new Value(as('config'), `${env}.protocol`),
  new Value(as('config'), `${env}.port`),
  new Value(as('config'), `${env}.host`),
  api
)

new Config('./config.json').as('config').after(
  new If(
    new IsMaster(cluster),
    new PrintedStage(`RUN (${env})`).after(
      new If(
        devEnv,
        tunedWatchers
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
