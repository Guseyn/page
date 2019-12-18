'use strict'

const { as } = require('@cuties/cutie')
const { Value } = require('@cuties/json')
const { SavedPage, PrettyPage, Page, Head, Meta, Body, Script, Style, Template, Link } = require('@page-libs/static-generator')
const UrlWithVersion = require('./../async/UrlWithVersion')
const Config = require('./../async/Config')

new Config('./package.json').as('PACKAGE_JSON').after(
  new SavedPage(
    './static/html/page.html',
    new PrettyPage(
      new Page(
        'xmlns="http://www.w3.org/1999/xhtml" lang="en"',
        new Head(
          new Meta('charset="UTF-8"'),
          new Link('rel="shortcut icon" type="image/png" href="/../image/favicon.ico"'),
          new Style(
            new UrlWithVersion(
              '/../css/normalize.css',
              new Value(
                as('PACKAGE_JSON'), 'version'
              )
            ),
            'type="text/css"'
          ),
          new Style(
            new UrlWithVersion(
              '/../css/page.css',
              new Value(
                as('PACKAGE_JSON'), 'version'
              )
            ),
            'type="text/css"'
          ),
          new Script(
            new UrlWithVersion(
              '/../js/ehtml.bundle.min.js',
              new Value(
                as('PACKAGE_JSON'), 'version'
              )
            ),
            'type="text/javascript"'
          )
        ),
        new Body(
          'class="main"',
          new Template('./templates/page.html')
        )
      )
    )
  )
).call()
