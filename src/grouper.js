
const Base = require('./base');

class Grouper extends Base {
  constructor({key, rule}) {
    super();
    this.key = key;
    this.rule = rule;
    this.lookup = {};
  }

  add(item) {
    const k = item[this.key];
    const next = this.lookup[k] = this.lookup[k] || this.newSub();

    next.add(k);
  }

  getResult() {
    const result = {};
    for(const k in this.lookup) {
      result[k] = this.lookup[k].getResult();
    }
    return result;
  }
}

module.exports = exports = Grouper;
