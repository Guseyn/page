# Page

**Page** can be described as a base for any applications on top of it with server and client on Node.js. It provides a lot of features and common scenarios for using web. It's completely based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) that allows you to customize **Page** in any way you want, you can even throw it away and build other base core for your application.

In another words, **Page** is just an example of how you can build your application using libraries that are based on [Cutie](https://github.com/Guseyn/cutie).

# Basic Concepts

1. **Page Is Not a Framework.** Almost every framework is made with assumption that we live in ideal world, but it's very far from the truth. It's not possible to build something big and stable using *magic*, which every framework is based on. That's why **Page** is not a framework, it allows you to control the whole behaviour of your application and apply new changes in a explicit way.

2. **It's Not Easy to Start Quickly.** First of all you need to get acquainted with [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) and it's [implementation](https://github.com/Guseyn/cutie). It allows to build everything using pure approach in OOP.  Also you must know how [Node.js](https://nodejs.org/en/docs/) works and it's important to understand how non-blockinng i/o works there.

3. **No Unnecessary Complexity.** Only *html*, *css* and *js* (*server side* and *browser*).

4. **Small Core.** **Page** is almost based on little pieces from different libraries that can be easily combined with each other for building appication. It makes **Page** lightweight and easily extensible. 

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

The declaration of this process is in `server/app/build-app.js` script. Here we execute [grunt build](https://github.com/Guseyn/page/blob/master/Gruntfile.js) (you can use other build system). After grunt tasks are executed we generate static pages. And that's it, you can also add some other steps in your building process.

For building use command: `page build [evironment]` or `page b [evironment]`. `environment` is one of the following values: `local`, `prod`, `dev`, `stage`, `prod`).

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
