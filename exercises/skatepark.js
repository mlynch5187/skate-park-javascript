class SkatePark {
  constructor(obj) {
    obj = obj || {}
    this.name = obj.name;
    this.yearFounded = obj.year;
    this.style = obj.type;
    this.features = obj.features;
    this.occupants = [];
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

  admit(skater) {
    if (this.isPrivate === false)  {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    } else if (skater.money >= this.cost) {
      this.occupants.push(skater);
      skater.money -= this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    } else {
      return  'Sorry, you don\'t have enough money.'
    }
  }
}

module.exports = SkatePark;
