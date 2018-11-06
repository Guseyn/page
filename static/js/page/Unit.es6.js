class Unit {

  constructor(obj) {
    this.obj = obj;
    for (let propertyName of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
      if (this[propertyName] instanceof Function && this[propertyName] !== 'constructor') {
        this.obj[propertyName] = this[propertyName].bind(this);
      }
    }  
  }

  override(methodName, method) {
    this.obj[methodName] = method;
  }

}

module.exports = Unit;
