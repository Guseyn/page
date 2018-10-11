'use strict'

const cluster = require('cluster');
const { Event } = require('@cuties/cutie');
const { ForkedWorker } = require('@cuties/cluster');

class ReloadedBackendOnFailedWorkerEvent extends Event {

  constructor() {
    super();
  }

  definedBody(worker, code, signal) {
    console.log(`worker ${worker.process.pid} died (${signal || code}). restarting...`);
    new ForkedWorker(cluster).call();
  }

}

module.exports = ReloadedBackendOnFailedWorkerEvent;
