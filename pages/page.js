'use strict'

const { SavedPage, PrettyPage, Page, Head, Body, Script, Style, TemplateWithParams, Template } = require('@page-libs/static-generator');
const { ParsedJSON, Value } = require('@cuties/json');
const { ReadDataByPath } = require('@cuties/fs');

new SavedPage(
  './static/html/page.html', 
  new PrettyPage(
    new Page(
      'xmlns="http://www.w3.org/1999/xhtml" lang="en"',
      new Head(
        new Style('/../static/css/normalize.css', 'type="text/css"'),
        new Style('/../static/css/page.css', 'type="text/css"')
      ),
      new Body(
        'class="main"',
        new TemplateWithParams(
          new Template('./templates/page.html'),
          'Page',
          new Value(
            new ParsedJSON(
              new ReadDataByPath('./config.json')
            ), 'pageVersion'
          ),
          'The framework you can trust',
          new ReadDataByPath('./static/txt/features.txt')
        )
      )
    )
  )
).call();
