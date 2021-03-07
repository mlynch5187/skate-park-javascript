class Skater  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.skill = obj.skill;
    this.tricks = obj.tricks;
  }
}

module.exports = Skater;
