**The project has been archived. It would be better to check out my blog for a good example of using the Async Tree Pattern.**

<img src="https://github.com/Guseyn/logos/raw/master/page.svg?sanitize=true">

[![NPM Version](https://img.shields.io/npm/v/@page-libs/page.svg)](https://npmjs.org/package/@page-libs/page)
[![Build Status](https://travis-ci.com/Guseyn/page.svg?branch=master)](https://travis-ci.com/Guseyn/page)
[![codecov](https://codecov.io/gh/Guseyn/page/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/page)

**Page** can be described as a base for any applications on top of it with server and client in Node.js. It provides a lot of features and common scenarios for using web. It's completely based on the [Async Tree Pattern](https://guseyn.com/pdf/Async_Tree_Pattern.pdf) that allows you to customize **Page** in any way you want, you can even throw it away and build other base core for your application.

In another words, **Page** is just an example of how you can build your application using libraries which are based on [cutie](https://github.com/Guseyn/cutie).

# Contents

- [Basic Concepts](#basic-concepts)
- [How to Start (page-cli)](#how-to-start-page-cli)
- [Project Structure](#project-structure)
- [Building Process](#building-process)
- [Running Process](#running-process)
- [EHTML](#ehtml)
- [Static Generator](#static-generator)

# Basic Concepts

1. **Page Is Not a Regular Framework.** Almost every framework is made with an assumption that we live in ideal world, but it's very far from the truth. It's not possible to build something big and stable using *magic*, which every framework is based on. Meanwhile, **Page** allows you to control the whole behaviour of your application and apply new changes in a explicit way.

2. **It's Not Easy to Start Quickly.** First of all you need to get acquainted with [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) and it's [implementation](https://github.com/Guseyn/cutie). It allows to build everything using declarative approach.  Also, you must know how [Node.js](https://nodejs.org/en/docs/) works and it's important to understand how non-blockinng i/o works there.

3. **But It's Very Easy to Continue.** Ones you've learnt how to use [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf), libraries that are based on [cutie](https://github.com/Guseyn/cutie) and libraries for **Page**, your life will be never like before. You'll able to intoduce new changes into your code extremely fast and painless(unlike in other frameworks). 

4. **No Unnecessary Complexity.** Only *html*, *css* and *js* (*server side* and *browser*).

5. **Small Core.** **Page** is almost based on little pieces from different libraries that can be easily combined with each other for building appication. It makes **Page** lightweight and easily extensible. 

# How To Start (page-cli)

First of all you need to download this repository to your local machine. You can do it via github or **page-cli**. We suggest you to use the last option because it also makes building and running of your application much easier.

## Installation Instructions

1. Install [page-cli](https://github.com/Guseyn/page-cli): **`npm install @page-libs/cli -g`**
5. Go to the workspace where you want to create your project: **`cd ../<my-projects>`**
6. Create a project: **`page create`**
7. Then you'll have to enter some information about your project (`Project name`, `Version`, `Author`, `Description`, `License`), you'll get this repository with changed *package.json* and removed *.git* directory (so you can bind it to your project on github).
8. Go to your project directory: **`cd <projectName>`**
9. Install dependencies: **`npm install`**

## Update Instructions

1. Go to your project directory: **`cd <project_name>`**
2. Update version of framework: **`page update`**, this command just updates versions of components in your *package.json*
3. Install new dependencies: **`npm install`**

## Build Project

For building use command: **`page build [environment]`** or **`page b [environment]`**. `environment` is one of the following values: `local`, `prod`, `dev`, `stage`, `prod` (`local` is the default environment).

## Run Project

For running use command: **`page run [environment]`** or **`page r [environment]`**. `environment` is one of the following values: `local`, `prod`, `dev`, `stage`, `prod` (`local` is the default environment).

## Build&Run Project

You can build and run the project just by one command: **`page br [environment]`** (`environment` is `local` by default).

## Test Project

1. Go to your project directory: **`cd <project_name>`**
2. Run tests: **`page test`** (it runs **`npm test`**)

# Project Structure

```bash
├── ProjectName
│   ├── async
│   ├── pages
│   │   ├── **/*.js
│   ├── server
│   │   ├── async
│   │   ├── endpoints
│   │   ├── events
│   │   ├── api.js
│   │   ├── run.js
│   │   ├── tunedWatchers.js
│   ├── static
│   │   ├── css
│   │   │   ├── **/*.css
│   │   ├── html
│   │   │   ├── **/*.html
│   │   ├── image
│   │   │   ├── **/*.{jpg,png,..}
│   │   ├── js
│   │   │   ├── **/*.js
│   │   ├── txt
│   │   │   ├── **/*.txt
│   │   ├── ...
│   ├── templates
│   │   ├── **/*.html
│   ├── test
│   ├── ├── server
│   ├── ├── ├── files
│   ├── ├── ├── ├── **/*.{html, js}
├── ├── ├── ├── **/*.js
│   ├── .eslintrc.json
│   ├── build.js
│   ├── .gitignore
│   ├── config.json
│   ├── LICENSE
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── test.js

```

## `async` directory

This directory contains async objects for the whole application.

## `pages` directory

This directory contains js scripts that generate static html pages(they are based on [page-static-generator library](https://github.com/Guseyn/page-static-generator)).

## `server` directory

This directory contains server part of the application. It contains [build script](https://github.com/Guseyn/page/blob/master/server/app/build.js) and [run script](https://github.com/Guseyn/page/blob/master/server/app/run.js).

## `server/async` directory

This directory contains async objects that we use in `server/build.js` and `server/run.js`.

## `server/endpoints`

This directory contains endpoints for REST API.

## `server/events`

This directory contains events for different purposes.

## `static` directory

This directory contains static files, each type of files is stored in the corresponding subdirectory(`html`, `js` and so on). You can also add subdirectories for different extensions. Just don't forget to configure it in the [running process](https://github.com/Guseyn/page/blob/master/server/app/run.js).

## `templates` directory

This directory contains html tepmlates(components) for generating pages.

## `test` directory

This directory contains tests on async objects in `server` directory.

## `config.json`

`config.json` contains all settings of **Page**. Use following async composition for retrieving values from config in the code:

```js
const { ParsedJSON, Value } = require('@cuties/json')
const { ReadDataByPath } = require('@cuties/fs')

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('CONFIG').after(
  /* 
    now you can use following composition 
      for retrieving concrete value from config
  */
  new Value(as('CONFIG'), 'somePropertyName')
).call()

```

### Properties in `config.json`

#### page

```json
"page": {
  "version": "1.0.0",
  "logoText": "./static/txt/logo.txt",
  "logoImage": "./static/image/logo.png",
  "logoImageSrc": "/../image/logo.png"
}
```

This property contains an object with information about **Page**: current version, path to the logo in the text format and image format, also image address of the logo.

#### index, indexHref

These properties point to the index page. `index` is for location of the index page in the file system and `indexHref` is for link address of the index page.

#### static

This property is for location of the directory of static files.

#### staticGenerators

This property is for location of the directory with static genrators.

#### templates

This property is for location of the directory with templates.

#### staticHtml

This property is for location of the directory of static files with `html` extension.

#### enviroments(local, prod, dev, stage, prod)

Every environment property includes `protocol, port, host, clusterMode`. You can also add your own environments and environment properties (for example, if you use `https` for `protocol`, you might need `cert` and `key` properties).

```json
"local": {
  "protocol": "http",
  "port": 8000,
  "host": "127.0.0.1",
  "clusterMode": true
},
"dev": {
  "protocol": "http",
  "port": 8000,
  "host": "127.0.0.1",
  "clusterMode": true
},
"test": {
  "protocol": "http",
  "port": 8000,
  "host": "127.0.0.1",
  "clusterMode": true
},
"stage": {
  "protocol": "http",
  "port": 8000,
  "host": "127.0.0.1",
  "clusterMode": true
},
"prod": {
  "protocol": "http",
  "port": 8000,
  "host": "127.0.0.1",
  "clusterMode": true
}

```

## `.eslintrc.json`

It's a default config for eslint. You can customize it via command: `./node_modules/.bin/eslint --init`

## `test.js`

This script executes all tests in the `test` directory using [this library](https://github.com/Guseyn/node-test-executor). 

# Building Process

The declaration of this process is in [server/build.js](https://github.com/Guseyn/page/blob/master/build.js) script. Here we execute static analysis (for `pages`, `server`, `static/js/es6` and `test` packages), test coverage of [test](https://github.com/Guseyn/page/blob/master/test.js) script and [grunt build](https://github.com/Guseyn/page/blob/master/Gruntfile.js) (you can use other build system). After grunt tasks are executed we generate static pages. And that's it, you can also add some other steps in your building process.

```js
// build.js

const { as } = require('@cuties/cutie')
const { Value } = require('@cuties/json')
const { ExecutedScripts } = require('@cuties/scripts')
const { ExecutedLint, ExecutedTestCoverage, ExecutedTestCoverageCheck } = require('@cuties/wall')
const Config = require('./async/Config')
const PrintedStage = require('./async/PrintedStage')
const env = process.env.NODE_ENV || 'local'

new Config('./config.json').as('CONFIG').after(
  new Config('./package.json').as('PACKAGE_JSON').after(
    new PrintedStage(as('CONFIG'), as('PACKAGE_JSON'), `BUILD (${env})`).after(
      new ExecutedLint(process, './pages', './server', './test').after(
        new ExecutedTestCoverageCheck(
          new ExecutedTestCoverage(process, './test.js'),
          { 'lines': 100, 'functions': 100, 'branches': 100 }
        ).after(
          new ExecutedScripts(
            'node', 'js', new Value(as('CONFIG'), 'staticGenerators')
          )
        )
      )
    )
  )
).call()

```

## Static analysis and test coverage (wall)

You can find information about configuring async composition of static analysis and test coverage [here](https://github.com/Guseyn/wall).

Also you can customize eslint config via command **`./node_modules/.bin/eslint --init`**. Default configuration you can find [here](https://github.com/Guseyn/wall/blob/master/.eslintrc.json).

# Running Process

The declaration of this process is in [server/run.js](https://github.com/Guseyn/page/blob/master/server/run.js) script.

## Backend (server)

For building backend server with REST API we use here [cutie-rest](https://github.com/Guseyn/cutie-rest):

```js
// server/async/LaunchedBackend.js

const { Backend } = require('@cuties/rest')
const { Value } = require('@cuties/json')
const Api = require('./Api')
const env = process.env.NODE_ENV || 'local'

module.exports = class {
  constructor (config) {
    return new Backend(
      new Value(config, `${env}.protocol`),
      new Value(config, `${env}.port`),
      new Value(config, `${env}.host`),
      new Api(config)
    )
  }
}

```

Where `Api` object is for our REST API, which is defined in the `./server/async/Api.js` script:

```js
// server/async/Api.js

const { RestApi, ServingFilesEndpoint } = require('@cuties/rest')
const { Value } = require('@cuties/json')
const { Created } = require('@cuties/created')
const CustomIndexEndpoint = require('./../endpoints/CustomIndexEndpoint')
const CustomNotFoundEndpoint = require('./../endpoints/CustomNotFoundEndpoint')
const CustomInternalServerErrorEndpoint = require('./../endpoints/CustomInternalServerErrorEndpoint')
const UrlToFSPathMapper = require('./UrlToFSPathMapper')
const env = process.env.NODE_ENV || 'local'
const headers = env === 'prod' ? { 'Cache-Control': 'cache, public, max-age=86400' } : {}

class CreatedCustomNotFoundEndpoint {
  constructor (config) {
    return new Created(
      CustomNotFoundEndpoint,
      new RegExp(/^\/not-found/),
      new Value(config, 'notFoundPage')
    )
  }
}

module.exports = class {
  constructor (config) {
    return new RestApi(
      new Created(
        CustomIndexEndpoint,
        new Value(config, 'index'),
        new CreatedCustomNotFoundEndpoint(config)
      ),
      new Created(
        ServingFilesEndpoint,
        new RegExp(/^\/(css|html|image|js|txt)/),
        new UrlToFSPathMapper(
          new Value(config, 'static')
        ),
        headers,
        new CreatedCustomNotFoundEndpoint(config)
      ),
      new CreatedCustomNotFoundEndpoint(config),
      new CustomInternalServerErrorEndpoint(new RegExp(/^\/internal-server-error/))
    )
  }
}

```

More information about declaration REST API you can find in the docs [cutie-rest](https://github.com/Guseyn/cutie-rest).

## The Whole Declaration

I believe that the declarative code below is self-explainable, but you can anyway [submit an issue](https://github.com/Guseyn/page/issues), if something is not clear. However, it requires some knowledge in such modules like: [cutie](https://github.com/Guseyn/cutie), [cutie-if-else](https://github.com/Guseyn/cutie-if-else), [cutie-cluster](https://github.com/Guseyn/cutie-cluster), [cutie-json](https://github.com/Guseyn/cutie-json), [cutie-rest](https://github.com/Guseyn/cutie-rest), [cutie-fs](https://github.com/Guseyn/cutie-fs).

```js
// server/run.js

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

```

In few words, here running process runs a server with REST API (in the cluster mode by default) and attaches [fs watchers](https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_watch_filename_options_listener) on `pages`, `static`, `templates` directories(in `local` and `dev` environments). FS watchers are declared by `TunedWatchers` object which is defined in [this script](https://github.com/Guseyn/page/blob/master/server/async/TunedWatchers.js). Also in the cluster mode failed processes restart automatically.

As you can see here, we get some parameters like `post` and `host` from `config.json`. Also, you can notice that it's possible to run server in [cluster mode](https://nodejs.org/dist/latest/docs/api/cluster.html).

It's just an example of how it could be built and worked. But, of course, you can configure it differently due to your requirements (it's quite configurable code).

# EHTML

**Page** supports the idea of [EHTML](https://github.com/Guseyn/EHTML) for building the front-end.

# Static Generator

[This library](https://github.com/Guseyn/page-static-generator) is very simple tool for generating *html* pages from different templates combining them.

### Example

We can build *html* page from these two templates:

```html
<!-- outer.html -->
<div class="outer">
   {{ text }}
  <div class="place-for-inner-template">
    {{ innerTemplate }}
  </div>
</div>

``` 

```html
<!-- inner.html -->
<div class="inner">
   {{ text }}
</div>

```

using following composition:

```js

const { SavedPage, PrettyPage, Page, Head, Body, Script, Style, TemplateWithParams, Template } = require('@page-libs/static-generator')

new SavedPage(
  'page.html', 
  new PrettyPage(
    new Page(
      'xmlns="http://www.w3.org/1999/xhtml" lang="en"',
      new Head(
        new Script('script1.js', 'type="text/javascript"'),
        new Script('script2.js', 'type="text/javascript"'),
        new Style('main.css', 'type="text/css"'),
        new Style('mobile.css', 'type="text/css"')
      ),
      new Body(
        'class="main"',
        new TemplateWithParams(
          new Template('outer.html'),
          'text in outer template',
          new TemplateWithParams(
            new Template('inner.html'),
            'text in inner template'
          )
        )
      )
    )
  )
).call()

```

The result is

```html
<!-- page.html -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

  <head>
    <script src="script1.js" type="text/javascript"></script>
    <script src="script2.js" type="text/javascript"></script>
    <link rel="stylesheet" href="main.css" type="text/css">
    <link rel="stylesheet" href="mobile.css" type="text/css">
  </head>

  <body class="main">
    <div class="outer">
      text in outer template
      <div class="place-for-inner-template">
        <div class="inner">
          text in inner template
        </div>

      </div>
    </div>
  </body>

</html>

```

You can find more information about usage [here](https://github.com/Guseyn/page-static-generator#usage).
