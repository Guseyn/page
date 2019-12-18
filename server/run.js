'use strict'

const cluster = require('cluster')
const { as } = require('@cuties/cutie')
const { If, Else } = require('@cuties/if-else')
const { IsMaster, ClusterWithForkedWorkers, ClusterWithExitEvent } = require('@cuties/cluster')
const { Value } = require('@cuties/json')
const Config = require('./../async/Config')
const PrintedStage = require('./../async/PrintedStage')
const ReloadedBackendOnFailedWorkerEvent = require('./events/ReloadedBackendOnFailedWorkerEvent')
const LaunchedBackend = require('./async/LaunchedBackend')
const TunedWatchers = require('./async/TunedWatchers')

const numCPUs = require('os').cpus().length
const env = process.env.NODE_ENV || 'local'
const devEnv = env === 'local' || env === 'dev'

new Config('./config.json').as('CONFIG').after(
  new Config('./package.json').as('PACKAGE_JSON').after(
    new If(
      new IsMaster(cluster),
      new PrintedStage(as('CONFIG'), as('PACKAGE_JSON'), `RUN (${env})`).after(
        new If(
          devEnv,
          new TunedWatchers(as('CONFIG'))
        ).after(
          new If(
            new Value(as('CONFIG'), `${env}.clusterMode`),
            new ClusterWithForkedWorkers(
              new ClusterWithExitEvent(
                cluster,
                new ReloadedBackendOnFailedWorkerEvent(cluster)
              ), numCPUs
            ),
            new Else(
              new LaunchedBackend(as('CONFIG'))
            )
          )
        )
      ),
      new Else(
        new LaunchedBackend(as('CONFIG'))
      )
    )
  )
).call()
