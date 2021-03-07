class SkatePark {
  constructor(obj) {
    obj = obj || {}
    this.name = obj.name;
    this.yearFounded = obj.year;
    this.style = obj.type;
  }
}

module.exports = SkatePark;
