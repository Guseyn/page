const { AsyncObject } = require('@page-libs/cutie');
const Page = require('./Page');
const ResponseFromAjaxRequest = require('./ResponseFromAjaxRequest');

class LoggedResponse extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      console.log(response);
      return response;
    }
  }

}

window.onload = () => {
  let page = new Page(document.getElementById('page'));
  new LoggedResponse(
    new ResponseFromAjaxRequest({
      url: 'http://localhost:8000/',
      method: 'GET' 
    })
  ).call();
  console.log(page);
}
