
class Base {

  add(item) {
    throw new Error("Not Implemented");
  }

  addAll(items) {
    for(const item in items) {
      this.add(item);
    }
  }

  getResult() {
    throw new Error("Not Implemented");
  }
}

module.exports = exports = Base;
