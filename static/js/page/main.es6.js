const Page = require('./Page');

window.onload = () => {
  let page = new Page(document.getElementById('page'));
  console.log(page.obj);
}
