
const zelda = require('zelda-lists');

function super_grouper(keys) {
  return _super_grouper(zelda(keys));
}


function _super_grouper(node) {
  if(node) {
    return new Grouper({
      key: node.value,
      next: node.next,
    });

  } else {
    return new Collector();

  }
}



class Base {

  add(item) {
    throw new Error("Not Implemented");
  }

  addAll(items) {
    for(const item of items) {
      this.add(item);
    }
  }

  getResult() {
    throw new Error("Not Implemented");
  }
}


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




class Grouper extends Base {
  constructor({key, next}) {
    super();
    this.key = key;
    this.next = next;
    this.lookup = {};
  }

  add(item) {
    const k = item && item[this.key];
    const next = this.lookup[k] = this.lookup[k] || _super_grouper(this.next);

    next.add(item);
  }

  getResult() {
    const result = {};
    for(const k in this.lookup) {
      result[k] = this.lookup[k].getResult();
    }
    return result;
  }
}




module.exports = exports = super_grouper;
