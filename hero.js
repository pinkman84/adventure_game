var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
}

Hero.prototype = {
  intro: function(){
     var intro = ("Hello, my name is " + this.name);
     return intro
  },

  eat: function(food){
    if(food.name === this.favFood){
      this.health += (food.healthUp * 1.5)
    }
    else if(food.poisoned === true){
      this.health -= (food.healthUp / 2)
    }
    else{
      this.health += food.healthUp
    }
  }
}

// hero = new Hero("bob", 50, 'burgers')

// console.log(hero.intro)

module.exports = Hero;

