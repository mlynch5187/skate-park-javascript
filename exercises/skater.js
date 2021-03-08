class Skater  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.skill = obj.skill;
    this.tricks = obj.tricks;
    this.money = obj.cash;
    this.frustration = 0;
  }

  practice(trick)  {
    if (!this.tricks[trick]) {
      this.frustration++;
    }
    if (this.frustration > 2) {
      this.tricks[trick] = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`
    }
  }
}

module.exports = Skater;
