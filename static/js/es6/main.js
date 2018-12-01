const { AsyncObject } = require('@page-libs/cutie');
const { ResponseFromAjaxRequest } = require('@page-libs/ajax');
const Page = require('./Page');
const Button = require('./Button');

window.onload = () => {
  let page = new Page(
    document.getElementById('page'),
    new Button(
      document.getElementById('button')
    )
  );
}
