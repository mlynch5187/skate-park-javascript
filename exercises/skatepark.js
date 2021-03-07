class SkatePark {
  constructor(obj) {
    obj = obj || {}
    this.name = obj.name;
    this.yearFounded = obj.year;
    this.style = obj.type;
    this.features = obj.features;
  }
}

module.exports = SkatePark;
