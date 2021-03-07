class SkatePark {
  constructor(obj) {
    obj = obj || {}
    this.name = obj.name;
    this.yearFounded = obj.year;
    this.style = obj.type;
    this.features = obj.features;
    if (obj.isPrivate === undefined) {
      this.isPrivate = false;
    } else {
      this.isPrivate = true;
    }
    if (obj.price === undefined)  {
      this.cost = 0
    } else {
      this.cost = obj.price;
    }
  }
}

module.exports = SkatePark;
