# Page

**Page** can be described as a base for any applications on top of it with server and client on Node.js. It provides a lot of features and common scenarios for using web. It's completely based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) that allows you to customize **Page** in any way you want, you can even throw it away and build other base core for your application.

In another words, **Page** is just an example of how you can build your application using libraries that are based on [Cutie](https://github.com/Guseyn/cutie).

# Basic concepts

## Page is not a framework

Almost every framework is made with assumption that we live in ideal world, but it's very far from the truth. It's not possible to build something big and stable using *magic*, which every framework is based on. That's why **Page** is not a framework, it allows you to control the whole behaviour of your application and apply new changes in a explicit way.

## It's not easy to start quickly

First of all you need to get acquainted with [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf) and it's [implementation](https://github.com/Guseyn/cutie). It allows to build everything using pure approach in OOP. 

Also you must know how [Node.js](https://nodejs.org/en/docs/) works and it's important to understand how non-blockinng i/o works there.

## No unnecessary complexity

Only *html*, *css* and *js* (*server side* and *browser*).

## Small core

**Page** is almost based on little pieces from different libraries that can be easily combined with each other for building appication. It makes **Page** lightweight and easily extensible. 
