# Page

**Page** can be described as a base for any applications on top of it with server and client on Node.js. It provides a lot of features and common scenarios for using web. It's completely based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) that allows you to customize **Page** in any way you want, you can even throw it away and build other base core for your application.

In another words, **Page** is just an example of how you can build your application using libraries that are based on [Cutie](https://github.com/Guseyn/cutie).

# Basic Concepts

1. **Page Is Not a Framework.** Almost every framework is made with assumption that we live in ideal world, but it's very far from the truth. It's not possible to build something big and stable using *magic*, which every framework is based on. That's why **Page** is not a framework, it allows you to control the whole behaviour of your application and apply new changes in a explicit way.

2. **It's Not Easy to Start Quickly.** First of all you need to get acquainted with [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) and it's [implementation](https://github.com/Guseyn/cutie). It allows to build everything using pure approach in OOP. 

Also you must know how [Node.js](https://nodejs.org/en/docs/) works and it's important to understand how non-blockinng i/o works there.

3. **No Unnecessary Complexity.** Only *html*, *css* and *js* (*server side* and *browser*).

4. **Small Core.** **Page** is almost based on little pieces from different libraries that can be easily combined with each other for building appication. It makes **Page** lightweight and easily extensible. 

# How to Start (page-cli)

First of all you need to download this repository to your local machine. You can do it via github or **page-cli**. We suggest you to use the last option, because it also makes building and running of your application much easier.

## Step-by-Step Installation Instructions

1. Clone *page-cli*: `git clone https://github.com/Guseyn/page-cli.git`
2. Go to *page-cli* directory: `cd page-cli`
3. Install npm dependencies there: `npm install`
4. Link `page` command: `npm link`
5. Go to the workspace where you want to create your project: `cd ../<my-projects>`
6. Create project: `page create`
7. Then you'll have to enter some information about your project (`Project name`, `Version`, `Author`, `Description`, `License`), you'll get this repository with changed *package.json*  and removed *.git* directory (so you can bind it to your project on github).
8. Go to your project directory: `cd <projectName>`
9. Install dependencies: `npm install`

## Update 

1. Go to your project directory: `cd <project_name>`
2. Update version of framework: `page update`, this command just updates versions of components in your *package.son*
3. Install new dependencies: `npm install`
