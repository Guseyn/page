'use strict'

const { as } = require('@cuties/cutie');
const { SavedPage, PrettyPage, Page, Head, Meta, Body, Script, Style, TemplateWithParams, Template } = require('@page-libs/static-generator');
const { ParsedJSON, Value } = require('@cuties/json');
const { ReadDataByPath } = require('@cuties/fs');

new ParsedJSON(
  new ReadDataByPath('./config.json')
).as('config').after(
  new SavedPage(
    './static/html/page.html',
    new PrettyPage(
      new Page(
        'xmlns="http://www.w3.org/1999/xhtml" lang="en"',
        new Head(
          new Meta('charset="UTF-8"'),
          new Style('/../css/normalize.css', 'type="text/css"'),
          new Style('/../css/page.css', 'type="text/css"')
        ),
        new Body(
          'class="main"',
          new TemplateWithParams(
            new Template('./templates/page.html'),
            new Value(
              as('config'), 'pageLogoImageSrc'
            ),
            new Value(
              as('config'), 'pageVersion'
            ),
            'The framework you can trust',
            new ReadDataByPath('./static/txt/features.txt')
          )
        )
      )
    )
  )
).call();
