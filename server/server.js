'use strictuse str '

const path = require('path');
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

new Backend(
  8000, '127.0.0.1', new RestApi(
    new CachedServingFiles(new RegExp(/\/static/), mapper, notFoundMethod),
    notFoundMethod
  )
).call();
