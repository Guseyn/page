'use strict'

const { Event } = require('@cuties/cutie');
const { ExecutedScripts } = require('@cuties/scripts');

// TODO: implement #54
class OnStaticGeneratorsChangeEvent extends Event {

  constructor() {
    super();
  }

  definedBody(eventType, fileName) {
    console.log(`${fileName} ${eventType}`);
  }

}

module.exports = OnStaticGeneratorsChangeEvent;
