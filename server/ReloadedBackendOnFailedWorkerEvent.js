'use strict'

const { Event } = require('@cuties/cutie')
const { ForkedWorker } = require('@cuties/cluster')

class ReloadedBackendOnFailedWorkerEvent extends Event {
  constructor (cluster) {
    super()
    this.cluster = cluster
  }

  body (worker, code, signal) {
    console.log(`worker ${worker.process.pid} died (${signal || code}). restarting...`)
    new ForkedWorker(this.cluster).call()
  }
}

module.exports = ReloadedBackendOnFailedWorkerEvent
