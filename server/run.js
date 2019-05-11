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

new Config('./config.json').as('config').after(
  new Config('./package.json').as('packageJSON').after(
    new If(
      new IsMaster(cluster),
      new PrintedStage(as('config'), as('packageJSON'), `RUN (${env})`).after(
        new If(
          devEnv,
          new TunedWatchers(as('config'))
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
              new LaunchedBackend(as('config'))
            )
          )
        )
      ),
      new Else(
        new LaunchedBackend(as('config'))
      )
    )
  )
).call()
