class Skater  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.skill = obj.skill;
    this.tricks = obj.tricks;
    this.money = obj.cash;
    this.frustration = 0;
  }
}

module.exports = Skater;
