<img src="https://github.com/Guseyn/logos/raw/master/page.svg?sanitize=true">

[![NPM Version](https://img.shields.io/npm/v/@page-libs/page.svg)](https://npmjs.org/package/@page-libs/page)
[![Build Status](https://travis-ci.org/Guseyn/page.svg?branch=master)](https://travis-ci.org/Guseyn/page)
[![codecov](https://codecov.io/gh/Guseyn/page/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/page)

**Page** can be described as a base for any applications on top of it with server and client in Node.js. It provides a lot of features and common scenarios for using web. It's completely based on the [Async Tree Pattern](https://guseyn.com/pdf/Async_Tree_Pattern.pdf) that allows you to customize **Page** in any way you want, you can even throw it away and build other base core for your application.

In another words, **Page** is just an example of how you can build your application using libraries that are based on [cutie](https://github.com/Guseyn/cutie).

# Contents

- [Basic Concepts](#basic-concepts)
- [How to Start (page-cli)](#how-to-start-page-cli)
- [Project Structure](#project-structure)
- [Building Process](#building-process)
- [Running Process](#running-process)
- [Test Project](#test-project)
- [List Of Libraries For Page](#list-of-libraries-for-page)
  - [page-cutie](#page-cutie)
  - [page-ajax-based-on-page-cutie](#page-ajax-based-on-page-cutie)
  - [page-unit](#page-unit)
  - [page-static-generator](#page-static-generator-based-on-cutie)
  - [page-md2html](#page-md2html-based-on-cutie)
- [Build System](#build-system)
- [Future plans](#future-plans)

# Basic Concepts

1. **Page Is Not a Regular Framework.** Almost every framework is made with assumption that we live in ideal world, but it's very far from the truth. It's not possible to build something big and stable using *magic*, which every framework is based on. Meanwhile, **Page** allows you to control the whole behaviour of your application and apply new changes in a explicit way.

2. **It's Not Easy to Start Quickly.** First of all you need to get acquainted with [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) and it's [implementation](https://github.com/Guseyn/cutie). It allows to build everything using pure approach in OOP.  Also, you must know how [Node.js](https://nodejs.org/en/docs/) works and it's important to understand how non-blockinng i/o works there.

3. **But It's Very Easy to Continue.** Ones you've learnt how to use [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf), libraries that are based on [cutie](https://github.com/Guseyn/cutie) and libraries for **Page**, your life will be never like before. You'll able to intoduce new changes into your code extremely fast and painless(unlike in other frameworks). 

4. **No Unnecessary Complexity.** Only *html*, *css* and *js* (*server side* and *browser*).

5. **Small Core.** **Page** is almost based on little pieces from different libraries that can be easily combined with each other for building appication. It makes **Page** lightweight and easily extensible. 

# How To Start (page-cli)

First of all you need to download this repository to your local machine. You can do it via github or **page-cli**. We suggest you to use the last option, because it also makes building and running of your application much easier.

## Installation Instructions

1. Install [page-cli](https://github.com/Guseyn/page-cli): **`npm install @page-libs/cli -g`**
5. Go to the workspace where you want to create your project: **`cd ../<my-projects>`**
6. Create project: **`page create`**
7. Then you'll have to enter some information about your project (`Project name`, `Version`, `Author`, `Description`, `License`), you'll get this repository with changed *package.json* and removed *.git* directory (so you can bind it to your project on github).
8. Go to your project directory: **`cd <projectName>`**
9. Install dependencies: **`npm install`**

## Update Instructions

1. Go to your project directory: **`cd <project_name>`**
2. Update version of framework: **`page update`**, this command just updates versions of components in your *package.json*
3. Install new dependencies: **`npm install`**

## Test Instructions

1. Go to your project directory: **`cd <project_name>`**
2. Run tests: **`page test`** (it runs **`npm test`**)

# Project Structure

```bash
├── ProjectName
│   ├── pages
│   │   ├── **/*.js
│   ├── server
│   │   ├── async
│   │   ├── ├── custom-calls
│   │   ├── endpoints
│   │   ├── events
│   │   │   ├── build.js 
│   │   │   ├── run.js
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
│   ├── .babelrc
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── config.json
│   ├── Gruntfile.js
│   ├── LICENSE
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── test-executor

```

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
).as('config').after(
  /* 
    now you can use following composition 
      for retrieving concrete value from config
  */
  new Value(as('config'), 'somePropertyName')
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

This property contains object with information about **Page**: current version, path to the logo in the text format and image format, also image address of the logo.

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

#### staticJs

This property is for location of the directory of static files with `js` extension (*es6*).

#### outStaticJs

This property is for location of the directory of static files with `js` extension(for using in a browser).

#### bundle

This property is for location of the bundle file that is generated from `outStaticJs` directory.

#### bundleHref

This property is for link of the bundle file.

#### minBundle

This property is for location of the minified version of the bundle file.

#### minBundleHref

This property is for link of the minified bundle file.

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

## `Gruntfile.js`

Default cofiguration for grunt build system. You can find more information [in this section](#build-system).

## `test-executor.js`

This script executes all tests in the `test` directory using [this library](https://github.com/Guseyn/node-test-executor). 

# Building Process

The declaration of this process is in [server/build.js](https://github.com/Guseyn/page/blob/master/server/build.js) script. Here we execute static analysis (for `pages`, `server`, `static/js/es6` and `test` packages), test coverage of [test-executor](https://github.com/Guseyn/page/blob/master/test-executor.js) script and [grunt build](https://github.com/Guseyn/page/blob/master/Gruntfile.js) (you can use other build system). After grunt tasks are executed we generate static pages. And that's it, you can also add some other steps in your building process.

For building use command: **`page build [evironment]`** or **`page b [evironment]`**. `environment` is one of the following values: `local`, `prod`, `dev`, `stage`, `prod` (`local` is default).

```js
// server/build.js

const { as } = require('@cuties/cutie')
const { ParsedJSON, Value } = require('@cuties/json')
const { ExecutedScripts } = require('@cuties/scripts')
const { ReadDataByPath } = require('@cuties/fs')
const { ExecutedLint, ExecutedTestCoverage, ExecutedTestCoverageCheck } = require('@cuties/wall')
const PrintedToConsolePageLogo = require('./async/PrintedToConsolePageLogo')
const ExecutedGruntBuild = require('./async/ExecutedGruntBuild')
const env = process.env.NODE_ENV || 'local'

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new PrintedToConsolePageLogo(
    new ReadDataByPath(
      new Value(as('config'), 'page.logoText')
    ),
    new Value(as('config'), 'page.version'),
    `BUILD (${env})`
  ).after(
    new ExecutedLint(process, './pages', './server', './static/js/es6', './test').after(
      new ExecutedTestCoverageCheck(
        new ExecutedTestCoverage(process, './test-executor.js'),
        { 'lines': 100, 'functions': 100, 'branches': 100 }
      ).after(
        new ExecutedGruntBuild(process).after(
          new ExecutedScripts(
            'node', 'js', new Value(as('config'), 'staticGenerators')
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
const launchedBackend = new Backend(
  new Value(as('config'), `${env}.protocol`),
  new Value(as('config'), `${env}.port`),
  new Value(as('config'), `${env}.host`),
  new RestApi(
    new Created(
      CustomIndexEndpoint,
      new Value(as('config'), 'index'),
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ),
    new Created(
      ServingFilesEndpoint,
      new RegExp(/^\/(css|html|image|js|txt)/),
      new UrlToFSPathMapper(
        new Value(as('config'), 'static')
      ),
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ),
    new CustomNotFoundEndpoint(new RegExp(/^\/not-found/)),
    new CustomInternalServerErrorEndpoint(new RegExp(/^\/internal-server-error/))
  )
)

```

It's just an example of how it could be built and worked. But, of course, you can configure it differently due to your requirements.

For running use command: **`page run [evironment]`** or **`page r [evironment]`**. `environment` is one of the following values: `local`, `prod`, `dev`, `stage`, `prod` (`local` is default).

As you can see here, we get some parameters like `post` and `host` from `config.json`. If you look at the whole script, you can notice that it's possible to run server in [cluster mode](https://nodejs.org/dist/latest/docs/api/cluster.html).

## The Whole Declaration

I believe that the declarative code below is self-explainable, but you can anyway [submit an issue](https://github.com/Guseyn/page/issues), if something is not clear. However, it requires some knowledge in such modules like: [cutie](https://github.com/Guseyn/cutie), [cutie-if-else](https://github.com/Guseyn/cutie-if-else), [cutie-cluster](https://github.com/Guseyn/cutie-cluster), [cutie-json](https://github.com/Guseyn/cutie-json), [cutie-rest](https://github.com/Guseyn/cutie-rest), [cutie-fs](https://github.com/Guseyn/cutie-fs).

```js
// server/run.js

const cluster = require('cluster')
const { as } = require('@cuties/cutie')
const { If, Else } = require('@cuties/if-else')
const { IsMaster, ClusterWithForkedWorkers, ClusterWithExitEvent } = require('@cuties/cluster')
const { ParsedJSON, Value } = require('@cuties/json')
const { Backend, RestApi, CreatedServingFilesEndpoint } = require('@cuties/rest')
const { ReadDataByPath, WatcherWithEventTypeAndFilenameListener } = require('@cuties/fs')
const { Created } = require('@cuties/created')
const CustomNotFoundEndpoint = require('./endpoints/CustomNotFoundEndpoint')
const CustomInternalServerErrorEndpoint = require('./endpoints/CustomInternalServerErrorEndpoint')
const CustomIndexEndpoint = require('./endpoints/CustomIndexEndpoint')
const OnPageStaticJsFilesChangeEvent = require('./events/OnPageStaticJsFilesChangeEvent')
const OnStaticGeneratorsChangeEvent = require('./events/OnStaticGeneratorsChangeEvent')
const OnTemplatesChangeEvent = require('./events/OnTemplatesChangeEvent')
const ReloadedBackendOnFailedWorkerEvent = require('./events/ReloadedBackendOnFailedWorkerEvent')
const PrintedToConsolePageLogo = require('./async/PrintedToConsolePageLogo')
const UrlToFSPathMapper = require('./async/UrlToFSPathMapper')

const numCPUs = require('os').cpus().length
const env = process.env.NODE_ENV || 'local'
const devEnv = env === 'local' || env === 'dev'

const launchedBackend = new Backend(
  new Value(as('config'), `${env}.protocol`),
  new Value(as('config'), `${env}.port`),
  new Value(as('config'), `${env}.host`),
  new RestApi(
    new Created(
      CustomIndexEndpoint,
      new Value(as('config'), 'index'),
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ),
    new Created(
      ServingFilesEndpoint,
      new RegExp(/^\/(css|html|image|js|txt)/),
      new UrlToFSPathMapper(
        new Value(as('config'), 'static')
      ),
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ),
    new CustomNotFoundEndpoint(new RegExp(/^\/not-found/)),
    new CustomInternalServerErrorEndpoint(new RegExp(/^\/internal-server-error/))
  )
)

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new If(
    new IsMaster(cluster),
    new PrintedToConsolePageLogo(
      new ReadDataByPath(
        new Value(as('config'), 'page.logoText')
      ),
      new Value(as('config'), 'page.version'),
      `RUN (${env})`
    ).after(
      new If(
        devEnv,
        new WatcherWithEventTypeAndFilenameListener(
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

```

As you can see it's easily configurable code, so you can add and remove components due to your requirements.

In few words, here running process runs server with REST API (in cluster mode by default) and adds [fs watchers](https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_watch_filename_options_listener) on `pages`, `static`, `templates` directories(in `local` and `dev` environments). Also in cluster mode failed processes restart automatically.

# Test Project

You can do it via **`page test`** or just **`npm test`**.

# List of Libraries For Page

All these libraries are available on **npm** under `@page-libs` scope.

## page-cutie

[This library](https://github.com/Guseyn/page-cutie) is analogue of [cutie](https://github.com/Guseyn/cutie) for using [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) in browser.

You can use async object from **page-cutie** with async objects from **cutie** on the server(Node.js programm) with no problems. But if you want to use mixed async objects in browser, you must transform **cutie** async objects to **page-cutie** async objects. Use following function:

```js
const PageAsyncObject = require('@page-libs/cutie').AsyncObject
const { AsyncObject1, AsyncObject2, AsyncObject3 } = require('some-lib')

// ...asyncObjects extend AsyncObject from cutie
function transformAsyncObjects(...asyncObjects) {
  for (let i = 0; i < asyncObjects.length; i++) {
    if (asyncObjects[i].prototype instanceof PageAsyncObject) {
      Object.setPrototypeOf(asyncObjects[i].prototype, PageAsyncObject.prototype);
      Object.setPrototypeOf(asyncObjects[i], PageAsyncObject);
    }
  }
}

transformAsyncObjects(AsyncObject1, AsyncObject2, AsyncObject3)

```

Also, it's possible to create variation of library from **@cuties** for **@page-libs**. 

## page-ajax (based on *page-cutie*)

[This library](https://github.com/Guseyn/page-cutie) allows you to use ajax in very conviniet way. It works like external request objects in [cutie-http](https://github.com/Guseyn/cutie-http) or [cutie-https](https://github.com/Guseyn/cutie-https).

### Example

```js
new ResponseBody(
  new ResponseFromAjaxRequest({
    url: 'http://localhost:8000/html/res.html',
    method: 'GET'
  })
).call()

```

So, as you can see here, it's possible wrap async request with just one object using [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## page-unit

[This library](https://github.com/Guseyn/page-unit) allows you to represent *html code* as *js code*, so you can encapsulate entire behaviour of DOM elements in objects.

### Example

We can represent following html code:

```html
<div id="user-form">
  <input id ="name">
  <input id ="password">
  <button id="submit">Sign in</button>
</div>

```

like this composition:

```js
new UserForm(
  document.getElementById('user-form'), 
  new NameInput(document.getElementById('name')),
  new PasswordInput(document.getElementById('password')),
  new SubmitButton(document.getElementById('submit'))
)

```
Full example [here](https://github.com/Guseyn/page-unit#example).

## page-static-generator (based on *cutie*)

[This library](https://github.com/Guseyn/page-static-generator) is simple tool for generating *html* pages from different templates combining them.

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

## page-md2html (based on *cutie*)

[This library](https://github.com/Guseyn/page-static-generator) is simple tool for transforming text from *markdown* to the *html*.
Based on [this lib](https://github.com/showdownjs/showdown).

### Example

```js

new HtmlFromMd(markdownText).call();

```
## page-dom (based on *page-cutie*)

[This library](https://github.com/Guseyn/page-dom) is set of async objects for creating DOM elements.

### Example

This simple example just shows the way of declaration in this lib:

```js
new ElementWithAppendedChildren(
  document.createElement('div'),
  div('class="div" id="div1"')(
    h1()(), 
    a('href="guseyn.com"')(),
    div('class="div" id="div2"')(
      img('src="image.png"')(),
      p('', 'text')()
    )
  )
).call()

```

[Here](https://github.com/Guseyn/page-dom#async-objects) you can find more examples.

### Common Sense

I don't think that it makes sense to wrap every static function in browser js with objects. In my opinion, it's overhead. It's better to use [page-unit](https://github.com/Guseyn/page-unit) with procedural code in events(like in `onclick` methods). Actually, procedural code is clear, if amount of it is not big. Probably some *heavy* stuff will be written in OOP style in other libs for *Page*, but for simple things it's better use good old procedural js. 

However, this example is not the case, obviously. I think that creating element in DOM in declarative style is much better than the same code in procedural style.

# Build System

**Page** uses [grunt](https://gruntjs.com/). If you look at [Gruntfile.js](https://github.com/Guseyn/page/blob/master/Gruntfile.js), you'll see 3 tasks: `babel`, `browserify`, `uglify`.

## `babel`

We recommend to write code in `es6` style and keep your code in `static/js/es6`. Babel takes this code, convert it into JavaScript that browsers can understand and put it in `static/js/out`.

## `browserify`

We need this step because browsers don't understand `require()`. Using browserify we make module system work in browser, so use also can use `node_modules` in your project. It generates `static\js\bundle.js`.

## `uglify`

It just minifies `static\js\bundle.js` into `static\js\bundle.min.js`.

## It's Your Choice

Obviously, you can choose any other build system for your browser js code you want. It's just an example of how it could be.

# Future plans

Just to create more little useful libs for **Page**.
