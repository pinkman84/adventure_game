var Hero = function(name, health, favFood, specialAttack){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.specialAttack = specialAttack
  // this.stamina = stamina
}

Hero.prototype = {
  intro: function(){
     var intro = ("Hello, my name is " + this.name);
     return intro
  },

  eat: function(food){

   if(food.poisoned === true){
      this.health -= (food.healthUp / 2)
    }
    else if(food.name === this.favFood){
      this.health += (food.healthUp * 1.5)
    }
    else{
      this.health += food.healthUp
    }
  },

  lightAttack: function(target){
    if(target.health <= 0){
      target.died
    }
    else
    {var damage = target.health -= 10
    return damage}
  },

  heavyAttack: function(target){
    if(target.health <= 0){
      target.died
    }
    else
    {var damage = target.health -= 15
    return damage}
  },

  died: function(){
    var deathTags = ["urgh!", "Noooooo!", "I wish I was programmed to block"]
      var dead = deathTags[Math.floor(Math.random() * deathTags.length)];
      return dead
    
    
  }

}

// hero = new Hero("bob", -10, 'burgers', 'super burp')

// console.log(hero.died())

module.exports = Hero;

