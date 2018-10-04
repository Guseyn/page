'use strictuse str '

const path = require('path');
const {
  as
} = require('@cuties/cutie');
const {
  ReadDataByPath
} = require('@cuties/fs');
const {
  ParsedJSON,
  Value
} = require('@cuties/json');
const {
  Backend,
  RestApi,
  ServingFiles,
  CachedServingFiles
} = require('@cuties/rest');
const CustomNotFoundMethod = require('./CustomNotFoundMethod');
const notFoundMethod = new CustomNotFoundMethod(new RegExp(/\/not-found/));
const mapper = (url) => {
  return url.split('/').filter(path => path !== '').join(...paths);
}

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new Backend(
    new Value(as('config'), 'port'),
    new Value(as('config'), 'host'),
    new RestApi(
      new CachedServingFiles(new RegExp(/\/static/), mapper, notFoundMethod),
      notFoundMethod
    )
  )
).call();
