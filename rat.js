var Rat = function(name, health){
  this.name = name;
  this.health = health;
}

Rat.prototype = {
  touchFood: function(food){
    food.poisoned = true
  }
}

module.exports = Rat;