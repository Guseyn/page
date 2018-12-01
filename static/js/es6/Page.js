const { Unit } = require('@page-libs/unit');

const { ElementWithAppendedChildren, ElementWithInnerHTML, div } = require('@page-libs/dom'); 
const { ResponseFromAjaxRequest, ResponseBody } = require('@page-libs/ajax');

class Page extends Unit {

  constructor(elm, button) {
    super(elm);
    button.override('onclick', this.onButtonClick);
  }

  onButtonClick() {
    new ElementWithAppendedChildren(this.elm,
      new ElementWithInnerHTML(
        div('class="res"')(),
        new ResponseBody(
          new ResponseFromAjaxRequest({
            url: 'http://localhost:8000/html/res.html',
            method: 'GET'
          })
        )
      )
    ).call();
  }

}

module.exports = Page;
