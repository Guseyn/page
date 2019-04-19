'use strict'

const { as } = require('@cuties/cutie')
const { Value } = require('@cuties/json')
const { WatcherWithEventTypeAndFilenameListener } = require('@cuties/fs')
const OnPageStaticJsFilesChangeEvent = require('./events/OnPageStaticJsFilesChangeEvent')
const OnStaticGeneratorsChangeEvent = require('./events/OnStaticGeneratorsChangeEvent')
const OnTemplatesChangeEvent = require('./events/OnTemplatesChangeEvent')

module.exports = new WatcherWithEventTypeAndFilenameListener(
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
