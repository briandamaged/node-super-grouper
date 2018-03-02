
const Base = require('./base');

class Collector extends Base {
  constructor() {
    super();
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  getResult() {
    return this.items.slice();
  }
}

module.exports = exports = Collector;
