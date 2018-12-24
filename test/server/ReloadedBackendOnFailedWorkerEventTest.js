'use strict'

const ReloadedBackendOnFailedWorkerEvent = require('./../../server/ReloadedBackendOnFailedWorkerEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new ReloadedBackendOnFailedWorkerEvent(),
    Function
  )
).call()
