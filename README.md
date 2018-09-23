# page
UI framework with pure OOP approach in design.  Has no unnecessary complexity: only html, css and js. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

4 base things: html components/templates, css files, ui js files (ui-js), js files for generating pages from html components/templates(gen-js).

# Mapping between 'gen-js' and html:

Let's say we have templates: `./files/html/template1.html`, `./files/html/template2.html`,

## template1.html

```html
<div class="template1">
   {text}
  <div class="place-for-template2">
    {innerTemplate}
  </div>
</div>

```


## template2.html

```html
<div class="template2">
   {text}
</div>

```

## gen.js

```js
const template1 = // define how template is created -> need to be considered
const template2 = // define how template is created -> need to be considered

page(
  template1('text1', template2('text2'))
)

```
If you just want to escape characters `{` and `}` you just write `\{`, `\}` and that's it.

