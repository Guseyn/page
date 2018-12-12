# Page

**Page** can be described as a base for any applications on top of it with server and client on Node.js. It provides a lot of features and common scenarios for using web. It's completely based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) that allows you to customize **Page** in any way you want, you can even throw it away and build other base core for your application.

In another words, **Page** is just an example of how you can build your application using libraries that are based on [Cutie](https://github.com/Guseyn/cutie).

# Basic Concepts

1. **Page Is Not a Framework.** Almost every framework is made with assumption that we live in ideal world, but it's very far from the truth. It's not possible to build something big and stable using *magic*, which every framework is based on. That's why **Page** is not a framework, it allows you to control the whole behaviour of your application and apply new changes in a explicit way.

2. **It's Not Easy to Start Quickly.** First of all you need to get acquainted with [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) and it's [implementation](https://github.com/Guseyn/cutie). It allows to build everything using pure approach in OOP.  Also you must know how [Node.js](https://nodejs.org/en/docs/) works and it's important to understand how non-blockinng i/o works there.

3. **But It's Very Easy To Continue.** Ones you've learnt how to use [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf), libraries that are based on [cutie](https://github.com/Guseyn/cutie) and libraries for **Page**, your life is never will be like before. You'll able to intoduce new changes into your code extremely fast and painless(unlike in other frameworks). 

4. **No Unnecessary Complexity.** Only *html*, *css* and *js* (*server side* and *browser*).

5. **Small Core.** **Page** is almost based on little pieces from different libraries that can be easily combined with each other for building appication. It makes **Page** lightweight and easily extensible. 

# How to Start (page-cli)

First of all you need to download this repository to your local machine. You can do it via github or **page-cli**. We suggest you to use the last option, because it also makes building and running of your application much easier.

## Installation Instructions

1. Clone *page-cli*: `git clone https://github.com/Guseyn/page-cli.git`
2. Go to *page-cli* directory: `cd page-cli`
3. Install npm dependencies there: `npm install`
4. Link `page` command: `npm link`
5. Go to the workspace where you want to create your project: `cd ../<my-projects>`
6. Create project: `page create`
7. Then you'll have to enter some information about your project (`Project name`, `Version`, `Author`, `Description`, `License`), you'll get this repository with changed *package.json* and removed *.git* directory (so you can bind it to your project on github).
8. Go to your project directory: `cd <projectName>`
9. Install dependencies: `npm install`

## Update Instructions

1. Go to your project directory: `cd <project_name>`
2. Update version of framework: `page update`, this command just updates versions of components in your *package.json*
3. Install new dependencies: `npm install`

# Project Structure

```bash
├── projectName
│   ├── pages
│   │   ├── **/*.js
│   ├── server
│   │   ├── app
│   │   │   ├── build-app.js 
│   │   │   ├── run-app.js
│   │   ├── custom-calls
│   │   │   ├── executedGruntBuild.js
│   │   ├── CreatedCustomIndex.js
│   │   ├── CustomIndex.js
│   │   ├── CustomIntrnalServerErrorMethod.js
│   │   ├── CustomNotFoundMethod.js
│   │   ├── ExecutedGruntBuild.js
│   │   ├── NotFoundErrorEvent.js
│   │   ├── OnPageStaticJsFilesChangeEvent.js
│   │   ├── OnStaticGeneratorsChangeEvent.js
│   │   ├── OnTemplatesChangeEvent.js
│   │   ├── PrintedToConsolePageLogo.js
│   │   ├── ReloadedBackendOnFailedWorkerEvent.js
│   │   ├── UrlToFSPathMapper.js
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
│   ├── .babelrc
│   ├── .gitignore
│   ├── config.json
│   ├── Gruntfile.js
│   ├── LICENSE
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md

```

## `pages` directory

This directory contains js scripts that generate static html pages(they are based on [page-static-generator library](https://github.com/Guseyn/page-static-generator)). Generation of static pages is contained in [building](//TODO:add_link_here) and [running](//TODO:add_link_here) processes.

## `server` directory

This directory contains server part of the application. It's divided into [building](//TODO:add_link_here) and [running](//TODO:add_link_here) processes.

## `static` directory

This directory contains static files, each type of files is stored in the corresponding subdirectory(`html`, `js` and so on). You can also add subdirectories for different extensions. Just don't forget to configure it in [running process](//TODO:add_link_here).

## `templates` directory

This directory contains html tepmlates(components) for [generating pages](//TODO:add_link_here).

## `config.json`

`config.json` contains all settings of **Page**. Use following async composition for retrieving values from config in the code:

```js
const { ParsedJSON, Value } = require('@cuties/json');
const { ReadDataByPath } = require('@cuties/fs');

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  /* 
    now you can use following composition 
      for retrieving concrete value from config
  */
  new Value(as('config'), 'somePropertyName')
).call();

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

This property is for location of the directory with [static genrators](TODO://add_link_here_about_them).

#### templates

This property is for location of the directory with [templates](TODO://add_link_here_about_them).

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

# Building process

The declaration of this process is in [server/app/build-app.js](https://github.com/Guseyn/page/blob/master/server/app/build-app.js) script. Here we execute [grunt build](https://github.com/Guseyn/page/blob/master/Gruntfile.js) (you can use other build system). After grunt tasks are executed we generate static pages. And that's it, you can also add some other steps in your building process.

For building use command: `page build [evironment]` or `page b [evironment]`. `environment` is one of the following values: `local`, `prod`, `dev`, `stage`, `prod` (`local` is default).

```js
// server/app/build-app.js

const { as } = require('@cuties/cutie');
const { ProcessWithExitEvent, KilledProcess } = require('@cuties/process');
const { ParsedJSON, Value } = require('@cuties/json');
const { ExecutedScripts } = require('@cuties/scripts');
const { ReadDataByPath } = require('@cuties/fs');
const PrintedToConsolePageLogo = require('./../PrintedToConsolePageLogo');
const ExecutedGruntBuild = require('./../ExecutedGruntBuild');
const env = process.env.NODE_ENV || 'local';

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
    new ExecutedGruntBuild(process).after(
      new ExecutedScripts(
        new Value(as('config'), 'staticGenerators')
      )
    )
  )
).call();

```

So, here building process just generates static pages and minified bundle js file as it's shown [here]((https://github.com/Guseyn/page/blob/master/Gruntfile.js)).

# Running process

The declaration of this process is in [server/app/run-app.js](https://github.com/Guseyn/page/blob/master/server/app/run-app.js) script.

## Backend (server)

For building backend server with REST API we use here [cutie-rest](https://github.com/Guseyn/cutie-rest):

```js
const launchedBackend = new Backend(
  new Value(as('config'), `${env}.protocol`),
  new Value(as('config'), `${env}.port`),
  new Value(as('config'), `${env}.host`),
  new RestApi(
    new CreatedCustomIndex(
      new Value(as('config'), 'index'),
      notFoundMethod
    ),
    new CreatedServingFilesMethod(
      new RegExp(/^\/(css|html|image|js|txt)/),
      new UrlToFSPathMapper(
        new Value(as('config'), 'static')
      ),
      notFoundMethod
    ),
    notFoundMethod,
    internalServerErrorMethod
  )
);

```

It's just an example of how it could be built and work. But, of course, you can configure it differently due to your requirements.

For running use command: `page run [evironment]` or `page r [evironment]`. `environment` is one of the following values: `local`, `prod`, `dev`, `stage`, `prod` (`local` is default).

As you can see here, we get some parameters like `post` and `host` from `config.json`. If look at the whole script, you can notice that it's possible to run server in [cluster mode](https://nodejs.org/dist/latest/docs/api/cluster.html).

## The whole declaration

I believe that the declarative code below is self-explainable, but you can anyway [submit an issue](https://github.com/Guseyn/page/issues), if something is not clear. However, it requires some knowledge in such modules like: [cutie](https://github.com/Guseyn/cutie), [cutie-if-else](https://github.com/Guseyn/cutie-if-else), [cutie-cluster](https://github.com/Guseyn/cutie-cluster), [cutie-json](https://github.com/Guseyn/cutie-json), [cutie-rest](https://github.com/Guseyn/cutie-rest), [cutie-fs](https://github.com/Guseyn/cutie-fs).

```js
const cluster = require('cluster');
const { as } = require('@cuties/cutie');
const { If, Else } = require('@cuties/if-else');
const { IsMaster, ClusterWithForkedWorkers, ClusterWithExitEvent } = require('@cuties/cluster');
const { ParsedJSON, Value } = require('@cuties/json');
const { Backend, RestApi, CreatedServingFilesMethod, CreatedCachedServingFilesMethod } = require('@cuties/rest');
const { ReadDataByPath, WatcherWithEventTypeAndFilenameListener } = require('@cuties/fs');
const CustomNotFoundMethod = require('./../CustomNotFoundMethod');
const CustomInternalServerErrorMethod = require('./../CustomInternalServerErrorMethod');
const CreatedCustomIndex = require('./../CreatedCustomIndex');
const OnPageStaticJsFilesChangeEvent = require('./../OnPageStaticJsFilesChangeEvent');
const OnStaticGeneratorsChangeEvent = require('./../OnStaticGeneratorsChangeEvent');
const OnTemplatesChangeEvent = require('./../OnTemplatesChangeEvent');
const ReloadedBackendOnFailedWorkerEvent = require('./../ReloadedBackendOnFailedWorkerEvent');
const UrlToFSPathMapper = require('./../UrlToFSPathMapper');
const PrintedToConsolePageLogo = require('./../PrintedToConsolePageLogo');
const notFoundMethod = new CustomNotFoundMethod(new RegExp(/^\/not-found/));
const internalServerErrorMethod = new CustomInternalServerErrorMethod();
const numCPUs = require('os').cpus().length;
const env = process.env.NODE_ENV || 'local';
const dev_env = env === 'local' || env === 'dev';

const launchedBackend = new Backend(
  new Value(as('config'), `${env}.protocol`),
  new Value(as('config'), `${env}.port`),
  new Value(as('config'), `${env}.host`),
  new RestApi(
    new CreatedCustomIndexMethod(
      new Value(as('config'), 'index'),
      notFoundMethod
    ),
    new CreatedServingFilesMethod(
      new RegExp(/^\/(css|html|image|js|txt)/),
      new UrlToFSPathMapper(
        new Value(as('config'), 'static')
      ),
      notFoundMethod
    ),
    notFoundMethod,
    internalServerErrorMethod
  )
);

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
        dev_env,
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
                new Value(as('config'),'bundleJs')
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
              new ReloadedBackendOnFailedWorkerEvent()
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
).call();

```

As you can see it's easily configurable code, so you can add and remove components due to your requirements.

In few words, running process here runs server with REST API (in cluster mode by default) and adds [fs watchers](https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_watch_filename_options_listener) on `pages`, `static`, `templates` directories(in `local` and `dev` environments). Also in cluster mode failed processes restart automatically.

# List of libraries for Page

All these libraries are available on **npm** under `@page-libs` scope.

## page-cutie

[This library](https://github.com/Guseyn/page-cutie) is analogue of [cutie](https://github.com/Guseyn/cutie) for using [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) in browser.

**Warning:** If you want to use async objects from libraries that are based on [cutie](https://github.com/Guseyn/cutie) in browser, you must change their parents from `AsyncObject` in **cutie** to the `AsyncObject` from **page-cutie**. Use following function:

```js
const AsyncObject = require('@cuties/cutie').AsyncObject;
const PageAsyncObject = require('@page-libs/cutie').AsyncObject;

function transformedAsyncObjects(...asyncObjects) {
  for (let i = 0; i < asyncObjects.length; i++) {
    if (asyncObjects[i].prototype instanceof PageAsyncObject) {
      Object.setPrototypeOf(asyncObjects[i].prototype, AsyncObject.prototype);
      Object.setPrototypeOf(asyncObjects[i], AsyncObject);
    }
  }
  return asyncObject;
}

``` 

## page-ajax

[This library](https://github.com/Guseyn/page-cutie) allows you to use ajax in very conviniet way. It works like external request objects in [cutie-http](https://github.com/Guseyn/cutie-http) or [cutie-https](https://github.com/Guseyn/cutie-https).

### Example

```js
new ResponseBody(
  new ResponseFromAjaxRequest({
    url: 'http://localhost:8000/html/res.html',
    method: 'GET'
  })
).call();

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
);

```
Full example [here](https://github.com/Guseyn/page-unit#example).

## page-static-generator

[This library](https://github.com/Guseyn/page-static-generator) is simple tool for generating *html* pages from different templates combining them.

### Example

We can build *html* page from these two templates:

```html
<!-- outer.html -->
<div class="outer">
   {text}
  <div class="place-for-inner-template">
    {innerTemplate}
  </div>
</div>

``` 

```html
<!-- inner.html -->
<div class="inner">
   {text}
</div>

```

using following composition:

```js
'use strict'

const { SavedPage, PrettyPage, Page, Head, Body, Script, Style, TemplateWithParams, Template } = require('@page-libs/static-generator');

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
).call();

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

## page-md2html


